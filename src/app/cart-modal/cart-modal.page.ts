import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { Food, Restaurant } from 'src/Table/table';
import { FoodService } from '../Service/food.service';
import { OrderDetailService } from '../Service/order-detail.service';
import { OrderService } from '../Service/order.service';
import { RestaurantService } from '../Service/restaurant.service';
import { SharedService } from '../Service/shared.service';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit {
  cart: any[] = [];
  cartItemCount: BehaviorSubject<number>;
  id: any;
  regform = this.fb.group({});
  currentDate = new Date().toUTCString();
  minDate = new Date().toISOString();
  maxDate = new Date().toISOString();
  listOfRestaurant: Restaurant[];
  orderId: any;
  x: number;
  listOfFood: Food[];
  orderNo: number;
  restaurantId: any;
  Total: number;
  status: {  val: string; isChecked: boolean; }[];
  statusRestaurant: { val: string; isChecked: boolean; }[];
  statusDriver: { val: string; isChecked: boolean; }[];
  constructor(private modalCtrl: ModalController,
              private alertCtrl: AlertController,
              private orderService: OrderService,
              private fb: FormBuilder,
              private router: Router,
              private restaurantService: RestaurantService,
              private orderDetailService: OrderDetailService,
              private foodService: FoodService,
              private sharedService: SharedService) {
      this.statusDriver = [
        {  val: 'picked', isChecked: false },
        { val: 'start moving', isChecked: false },
        {  val: 'delivered', isChecked: false }
      ];
      this.statusRestaurant = [
         {  val: 'order received', isChecked: true },
         {  val: 'start cooking', isChecked: false },
         {  val: 'cooked', isChecked: false },
         { val: 'ready to service', isChecked: false }
       ];
      this.status = [
         { val: 'Accept', isChecked: false},
         { val: 'Reject', isChecked: false}
       ];
    }

  ngOnInit() {
    this.regform = this.fb.group({
      transactionType: [''],
      DeliveryDate: [''],
      DeliveryTime: [''],
      DeliveryAddress: [''],
      DeliveryFee: ['']
    });
    // setting min date
    let date: Date = new Date();
    date.setDate(date.getDate() - 5);
    this.minDate = date.toISOString();
    // setting max date
    date = new Date();
    date.setDate(date.getDate() + 5);
    this.maxDate = date.toISOString();
    /// to get data form service
    this.cart = this.orderService.getCart();
    this.cartItemCount = this.orderService.getCartItemCount();
    this.id = this.orderService.getRestaurantId().value;
    // console.log(this.id)
    this.getRestaurant();
    this.getFood();
    this.readNOId();
  }
  getRestaurant() {
    this.restaurantService.getAllRestaurant().subscribe(res => {
      this.listOfRestaurant = res;
    });
  }
  getFood() {
    this.foodService.getAllFood().subscribe(res => {
      this.listOfFood = res;
    });
  }
  readNOId() {
    let No = 0;
    this.orderService.getAllOrder().subscribe((result) => {
      if (result.length === 0) { No = 1; }
      else { No = result.length + 1; }
      this.orderNo = + No;
    });
  }
  decreaseCartItem(product) {
    this.orderService.decreaseProduct(product);
  }

  increaseCartItem(product) {
    this.orderService.addProduct(product);
  }

  removeCartItem(product) {
    // this.orderService.removeProduct(product);
    this.presentAlertConfirm(product);
  }

  getTotal() {
    return this.cart.reduce((i, j) => i + j.amount * j.price, 0);
  }

  getGrandTotal(){
    return this.getTotal() + this.regform.get('DeliveryFee').value;
  }
  close() {
    this.modalCtrl.dismiss();
  }
  location(){
    this.sharedService.status.next('cart-modal');
    this.router.navigate(['/menu/location']);
  }
  order(cart) {
    this.Total = 0;
    cart.forEach(element => {
      this.restaurantId = element.restaurantId;
    });
    const res = this.listOfRestaurant.find(c => c.id === +this.restaurantId);
    const order = {
      restaurantId: this.restaurantId,
      dateTime: this.regform.get('DeliveryDate').value,
      customer: localStorage.getItem('userId'),
      location: res.location, // to insert loging user (customer) of location
      orderStatuses: this.statusDriver,
      total: this.getGrandTotal(),
      driver: 'null',
      vehicle: 'null',
      orderLocation: 'null', // or droupLocation
      restaurantStatuses: this.statusRestaurant,
      customerStatus: 'false',
      statuses: this.status
    };
    // tslint:disable-next-line:no-shadowed-variable
    this.orderService.create(order).subscribe( res => {
       alert(res);
      // tslint:disable-next-line:align
      cart.forEach(element => {
        this.restaurantId = element.restaurantId;
        this.Total = this.Total + (element.Price * element.amount);
        const orderDetails = {
          orderId: this.orderNo,
          foodId: element.id,
          qty: element.amount,
          price: element.price
        };
        // tslint:disable-next-line:no-shadowed-variable
        this.orderDetailService.create(orderDetails).subscribe( res => {
        alert(res.toString());
        });
      });
    });
    this.presentAlert('Add order succesfuly');
    this.router.navigate(['/menu/order']);
  }
  async presentAlert(message) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
       header: 'Order',
      // subHeader: 'Subtitle',
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
  async presentAlertConfirm(product) {
    const alert = await this.alertCtrl.create({
      header: 'Clear cart !',
      message: '<strong>Are you sure you want to remove all items in your cart ?</strong>',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'OK',
          handler: () => {
            this.orderService.removeProduct(product);
          }
        }
      ]
    });
    await alert.present();
  }
  onclick() {
    this.id = this.orderService.getRestaurantId().value;
    this.router.navigate(['/menu/details/' + this.id]);
  }
}
