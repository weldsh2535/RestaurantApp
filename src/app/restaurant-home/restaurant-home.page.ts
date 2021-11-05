import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import LocationPicker from 'location-picker';
import { Account, Order, OrderDetail } from 'src/Table/table';
import { AccountService } from '../Service/account.service';
import { FoodService } from '../Service/food.service';
import { OrderDetailService } from '../Service/order-detail.service';
import { OrderService } from '../Service/order.service';
import { SharedService } from '../Service/shared.service';

@Component({
  selector: 'app-restaurant-home',
  templateUrl: './restaurant-home.page.html',
  styleUrls: ['./restaurant-home.page.scss'],
})
export class RestaurantHomePage implements OnInit {
  id: string;
  listOfFood: any;
  picture: any;
  name: any;
  listOfOrder: any[] = [];
  listOfAccount: Account[];
  listOfOrderDetails: OrderDetail[];
  cart: any[] = [];
  lp: LocationPicker;
  UserId: string;
  OrderStatus: any;
  regform = this.fb.group({});
  listOfAllOrder: Order[];
  dayFinished = [];
  checked: boolean;
  restaurantstatus: any[] = [];
  activeCategory = 0;
  shownGroup = null;
  hideme: any={};
  status: any[]=[];
  selectedIndex = -1;
  indexes: any[]=[];
  orderStatus: Order[];
  checkStatus: boolean;
  statusofValue: boolean;
  orderStatus1: Order[];
  currentDate: string;
  increment: number=0;
  massge: boolean;
  message: string;
  constructor(private foodService: FoodService,
    private fb: FormBuilder,
    private orderService: OrderService,
    private accountService: AccountService,
    private orderDetailsService: OrderDetailService,
    private router: Router,
    private sharedService: SharedService,
    private alertController: AlertController,
    private toastController:ToastController
  ) {
    this.currentDate = new Date().toDateString();
    //console.log(this.currentDate);
    this.accountService.getAllAccount().subscribe(res => {
      this.listOfAccount = res;
     // console.log(res)
    })
  }

  ngOnInit() {
    this.regform = this.fb.group({
      status: [""],
    })
    this.getFood();
    this.getOrder();
 
    this.getOrderDetails();
    this.getAllOrder();
    //this.lp = new LocationPicker('map');
  }
  getFood() {
    this.foodService.getAllFood().subscribe(res => {
      this.listOfFood = res;
    })
  }
  getAccount() {
    this.accountService.getAllAccount().subscribe(res => {
      this.listOfAccount = res;
    })
  }
  getOrderDetails() {
    this.orderDetailsService.getAllOrderDetail().subscribe(res => {
      this.listOfOrderDetails = res;
    })
  }
  getAllOrder() {
    this.orderService.getAllOrder().subscribe(result => {
      this.listOfAllOrder = result;
    });
  }
  getOrder() {
    this.listOfOrder = [];
    this.orderService.getAllOrder().subscribe(res => {
      this.UserId = localStorage.getItem("userId");
      let result = res.filter(c => c.restaurantId == this.UserId && c.restaurantStatuses.find(c => c.isChecked == false && c.val == "ready to service"));
      this.orderStatus = result.filter(c=>c.restaurantStatuses.find(entry=>entry.isChecked == true && entry.val =="start cooking")
                           || c.restaurantStatuses.find(entry=>entry.isChecked == true && entry.val =="cooked")
                            || c.restaurantStatuses.find(entry=>entry.isChecked == true && entry.val =="ready to service")) 
      this.orderStatus1 = result.filter(c=>c.statuses.find(entry=>entry.isChecked==true && entry.val =="Accept"))
      if (result.length > 0 ) {
        this.listOfOrder = [];
        result.forEach(element => {
          this.accountService.getAllAccount().subscribe(result => {
            let checkStatus = this.orderStatus.find(c=>c.id==element.id);
            let checkStatus1 = this.orderStatus1.find(c=>c.id==element.id);
             if(checkStatus){
              this.checkStatus = true
            }
            else{
              this.checkStatus = false
            }
            if(checkStatus1){
              this.statusofValue = true;
              this.checkStatus = false;
            }
            else{
              this.statusofValue = false;
              this.checkStatus = true;
            }
            let data = {
              id: element.id,
              DateTime: element.dateTime,
              Customer: this.listOfAccount.find(c => c.id == element.customer).fullName,
              PhoneNumber:this.listOfAccount.find(c => c.id == element.customer).phonenumber,
              CLocation: this.listOfAccount.find(c => c.id == element.customer).locationId,
              RLocation: element.location,
              Location: element.location,
              restaurantStatus: element.restaurantStatuses,
              Total: element.total,
              Driver: element.driver,
              Vehicle: element.vehicle,
              orderLocation: element.orderLocation,
              status:element.statuses,
              checkStatus:this.checkStatus,
              checkStatusofValue:this.statusofValue
            }
            //this.listOfOrder.push(data);
            const dateOfOrders = new Date(element.dateTime).toDateString();
            // console.log(dateOfOrders);
             if (this.currentDate == dateOfOrders) {
               this.listOfOrder.push(data);
               this.increment = this.increment+1;
             }
             if(this.increment == 0){
              this.massge = true
              this.message = "no orders"
            }
            //console.log(this.listOfOrder)
            let status = element.restaurantStatuses.find(c => c.isChecked == true);
            let index = element.restaurantStatuses.findIndex(c => c.isChecked == true);
            if (index == 0) {
              if (status !== undefined) {
                if (this.dayFinished.includes(status)) {
                  this.dayFinished.splice(this.dayFinished.indexOf(status), 1);
                }
                else {
                  this.dayFinished.push(status);
                }
                this.setDisabled(status);
              }
            }
            else if (index) {
              let statusArray = element.restaurantStatuses;
              for (let i = 0; i <= statusArray.length; i++) {
                if (i <= index) {
                  let statusA = element.restaurantStatuses[i];
                  if (statusA !== undefined) {
                    if (this.dayFinished.includes(statusA)) {
                      this.dayFinished.splice(this.dayFinished.indexOf(statusA), 1);
                    }
                    else {
                      this.dayFinished.push(statusA);
                    }
                    this.setDisabled(statusA);
                  }
                }
              }
            }
           })
        });
      }
    })
  }
  viewOrder(id) {
    this.cart = [];
    let orderDetails = this.listOfOrderDetails.filter(c => c.orderId == id);
    orderDetails.forEach(el => {
      let data = {
        CookingTime: this.listOfFood.find(c => c.id == el.foodId).cookingTime,
        DeliveryTime: this.listOfFood.find(c => c.id == el.foodId).deliveryTime,
        Description: this.listOfFood.find(c => c.id == el.foodId).description,
        Name: this.listOfFood.find(c => c.id == el.foodId).name,
        Price: this.listOfFood.find(c => c.id == el.foodId).price,
        amount: el.qty,
        categoryId: this.listOfFood.find(c => c.id == el.foodId).categoryId,
        id: el.foodId,
        picture: this.listOfFood.find(c => c.id == el.foodId).picture,
        restaurantId: this.listOfFood.find(c => c.id == el.foodId).restaurantId,
        type: this.listOfFood.find(c => c.id == el.foodId).type,
        orderDetailsId: el.id,
        orderStatus: true
      }
      this.cart.push(data);
    });
    this.orderService.addOrder(this.cart);
    this.sharedService.status.next("restaurant-home");
    this.router.navigate(["/menu/order-history"]);
  }
  setDisabled(meal) {
    return this.dayFinished.includes(meal);
  }
  isChecked(meal: any, event) {
    this.restaurantstatus = [];
    let status = meal.restaurantStatus;
    let item = status.find(c => c.val == event.detail.value);
    if (this.dayFinished.includes(item)) {
      this.dayFinished.splice(this.dayFinished.indexOf(item), 1);
    }
    else {
      this.dayFinished.push(item);
    }
    status.forEach(element => {
      if (element.val == item.val) {
        this.checked = true
      }
      else {
        this.checked = false
      }
      let driverS = {
        id: element.id,
        val: element.val,
        isChecked: this.checked
      }
      this.restaurantstatus.push(driverS);
    });
    let res = this.listOfAllOrder.find(c => c.id == meal.id);
    let data = {
      id: res.id,
      DateTime: res.dateTime,
      Customer: res.customer, //
      Location: res.location, //Restaurant
      OrderStatus: res.orderStatuses, //picked,start moving, delivered(finished)
      Total: res.total,
      Driver: res.driver, //Restaurant
      Vehicle: res.vehicle, //Restaurant
      orderLocation: res.orderLocation,//or droupLocation
      restaurantStatus: this.restaurantstatus,
      RestaurantId: res.restaurantId,
      customerStatus: res.customerStatus,
      status:res.status
    }
    this.restaurantstatus.forEach(element => {
      this.orderService.updateRestaurantStatus(element).subscribe(res=>{
       // alert(res.toString());
      })
    });
    this.orderService.updateOrder(data).subscribe(res=>{
     // alert(res.toString());
    })
  }

  location(location) {
    this.sharedService.status.next("restaurant-home");
    this.sharedService.RestaurantLocation.next(location);
    this.router.navigate(["/menu/location"]);
  }
  rejectOrder(item) {
    for (let i = 0; i < this.listOfOrder.length; i++) {
      // if (index == i) {
      // this.listOfOrder[i].acceptReject = true;
      // this.listOfOrder[i].statusSelect = true;
      // }
     }
  }
  // Dummy refresher function
  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
  showContent(evt, index) {
    this.selectedIndex = index;   
  }
  toggleGroup(meal,event,val,index) {
    
    this.selectedIndex = -1;
    this.status = [];
    let status = meal.status;
    if(index==0){
    var item =meal.status[0];
    }
    else{
      item = meal.status[1];
    }
    status.forEach(element => {
      if (element.val == item.val) {
        this.checked = true;
      }
      else {
        this.checked = false;
      }
      let status = {
        id: element.id,
        val: element.val,
        isChecked: this.checked
      }
      this.status.push(status);
    });
    let res = this.listOfAllOrder.find(c => c.id == meal.id);
    let data = {
      id: res.id,
      DateTime: res.dateTime,
      Customer: res.customer, //
      Location: res.location, //Restaurant
      OrderStatus: res.orderStatuses, //picked,start moving, delivered(finished)
      Total: res.total,
      Driver: res.driver, //Restaurant
      Vehicle: res.vehicle, //Restaurant
      orderLocation: res.orderLocation,//or droupLocation
      restaurantStatus: res.restaurantStatuses,
      RestaurantId: res.restaurantId,
      customerStatus: res.customerStatus,
      status:this.status
    }
    res.restaurantStatuses.forEach(ele=>{
      this.orderService.updateRestaurantStatus(ele).subscribe(res=>{
     //  alert(res.toString());
      })
    })
    this.status.forEach(ele=>{
      this.orderService.updateStatus(ele).subscribe(res=>{
        //alert(res.toString());
      })
    })
    this.orderService.updateOrder(data).subscribe(res=>{
     // alert(res.toString());
    })
    this.getOrder();
    if(val !=="Reject"){
      let data1={
        id:event
      }
      this.indexes.push(data1);
      if(this.indexes.length>0){
       this.indexes.forEach(ele=>{
        this.selectedIndex = ele.id;
       })
      }
      else{
        this.selectedIndex = event
      }
    }
    else{
      this.presentAlert("reject order");
    }
  }
  onClick(item) {
    Object.keys(this.hideme).forEach(h => {
      this.hideme[h] = false;
    });
    this.hideme[item.id] = true;
  }
  async presentAlert(message) {
    const toast = await this.toastController.create({
      // cssClass:"my-custom-class",
      color: 'success',
      duration: 2000,
      message: message,
    });
    await toast.present();
  }
}
