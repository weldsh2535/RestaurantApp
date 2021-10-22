import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController, AlertController } from '@ionic/angular';
import { Restaurant, Food } from 'src/Table/table';
import { FoodService } from '../Service/food.service';
import { OrderDetailService } from '../Service/order-detail.service';
import { OrderService } from '../Service/order.service';
import { RestaurantService } from '../Service/restaurant.service';
import { BehaviorSubject } from 'rxjs';
import { SharedService } from '../Service/shared.service';
import { DatePipe} from '@angular/common';
@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.page.html',
  styleUrls: ['./order-history.page.scss'],
})
export class OrderHistoryPage implements OnInit {
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
  status: any;
  // currentDate: string;
  currentMonth: number;
  currentYear: number;
  currentDates: number;
  currentWeek: number;
  //to decare week calculate
  startdateofweek: any;
  Enddateofweek: any;
  model: any = {};
  date = new Date()
  name: string;
  Friday: any;
  Thruds: any;
  mon: any;
  Tuesday: any;
  Wednedday: any;
  Sat: any;
  Sun: any;
  //declare  order date and converting date,month and years
  orderMonth: number;
  orderYear: number;
  orderDate: number;
  //declare  starting current date with converting into date,month and years
  startMonth: number;
  startYear: number;
  startDate: number;
  //declare ending current date converting into date,month and years
  endMonth: number;
  endYear: number;
  endDate: number;
  constructor(private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private orderService: OrderService,
    private fb: FormBuilder,
    private router:Router,
    private restaurantService:RestaurantService,
    private orderDetailService:OrderDetailService,
    private foodService:FoodService,
    private sharedService:SharedService,
    public datepipe: DatePipe) { 
         //this.currentDate = new Date().toDateString();
    this.currentMonth = new Date().getMonth() + 1;
    this.currentYear = new Date().getFullYear();
    this.currentDates = new Date().getDate();
    }

  ngOnInit() {
    this.regform = this.fb.group({
      transactionType: [""],
      DeliveryDate: [""],
      DeliveryTime: [""],
      DeliveryAddress: [""]
    })
    //setting min date
    let date: Date = new Date();
    date.setDate(date.getDate() - 5);
    this.minDate = date.toISOString();
    //setting max date
    date = new Date();
    date.setDate(date.getDate() + 5);
    this.maxDate = date.toISOString();
    ///to get data form service
    this.cart = this.orderService.getOrders();
    this.status = this.sharedService.getStatus().value;
    console.log(this.status);
    this.cartItemCount = this.orderService.getOrderItemCount();
    this.id = this.orderService.getRestaurantId().value;
    //console.log(this.id)
    this.getRestaurant();
    this.getFood();
    this.readNOId();
  }
  getRestaurant(){
    this.restaurantService.getAllRestaurant().subscribe(res=>{
      this.listOfRestaurant = res;
    })
  }
  getFood(){
    this.foodService.getAllFood().subscribe(res=>{
      this.listOfFood = res;
    })
  }
  readNOId() {
    let No = 0;
    this.orderService.getAllOrder().subscribe((result) => {
      if (result.length == 0) No = 1;
      else No = result.length + 1;
      this.orderNo =  + No;
    });
  }
  decreaseCartItem(product) {
    this.orderService.decreaseProduct(product);
  }

  increaseCartItem(product) {
    this.orderService.addProduct(product);
  }

  removeCartItem(product) {
    //this.orderService.removeProduct(product);
    this.presentAlertConfirm(product);
  }

  getTotal() {
    return this.cart.reduce((i, j) => i + j.amount * j.Price, 0);
  }

  close() {
    this.modalCtrl.dismiss();
  }

  order(cart) {
    this.Total = 0;
    cart.forEach(element => {
      this.restaurantId =element.restaurantId
      this.Total = this.Total+(element.Price*element.amount)
      let orderDetails = {
          OrderId:this.orderNo,
          Restaurant: element.restaurantId,
          Food:element.id,
          Qty: element.amount,
          Price:element.Price
         }
         this.orderDetailService.create(orderDetails);
       });
     let order = {
      DateTime: this.regform.get('DeliveryDate').value,
      Customer: localStorage.getItem("userId"),
      Location:this.listOfRestaurant.find(c=>c.id==this.restaurantId).location,
      OrderStatus: this.regform.get('transactionType').value,
      Total: this.Total,
      orderNo:this.orderNo,
      Driver: null,
      Vehicle: null, 
      orderLocation:null //or droupLocation
     }
     this.orderService.create(order);
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
backPage(){
  if(this.status=="driver"){
    this.router.navigate(["/menu/driver-home"]); 
  }
  else if(this.status =="restaurant-home"){
    this.router.navigate(["/menu/restaurant-home"]); 
  }
  else if(this.status =="restaurant-history"){
    this.router.navigate(["/menu/restaurant-history"]);
  }
  else{
    this.router.navigate(["/menu/order"]);
  }
  
}
}
