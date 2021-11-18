import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../Service/account.service';
import { FoodService } from '../Service/food.service';
import { OrderDetailService } from '../Service/order-detail.service';
import { OrderService } from '../Service/order.service';
import { SharedService } from '../Service/shared.service';
import { DatePipe } from '@angular/common';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-restaurant-history',
  templateUrl: './restaurant-history.page.html',
  styleUrls: ['./restaurant-history.page.scss'],
})
export class RestaurantHistoryPage implements OnInit {
  UserId: string;
  listOfOrder: any;
  cart = [];
  listOfOrderDetails: any[];
  listOfFood: any[];
 // currentDate: string;
 currentMonth: number;
 currentYear: number;
 currentDate: number;
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
  increament: number=0;
  massge: boolean;
  message: string;
  loader: HTMLIonLoadingElement;
  constructor(  private orderService: OrderService,
    private accountService: AccountService,
    private orderDetailsService: OrderDetailService,
    private foodService:FoodService,
    private sharedService:SharedService,
    private router:Router,
    private loadingController:LoadingController,
    public datepipe: DatePipe) { 
      //this.currentDate = new Date().toDateString();
 this.currentMonth = new Date().getMonth() + 1;
 this.currentYear = new Date().getFullYear();
 this.currentDate = new Date().getDate();
 }

  async ngOnInit() {
    this.loader = await this.loadingController.create({
      message:'Getting Products ...',
      spinner:"bubbles",
      animated:true
    });
    await this.loader.present().then();
    this.model.startdate = new Date();
    this.searchdate();
    this.getOrder();
    this.getFood();
    this.getOrderDetails();
  }
  getOrderDetails() {
    this.orderDetailsService.getAllOrderDetail().subscribe(async res => {
      await this.loader.dismiss().then();
      this.listOfOrderDetails = res;
    },async(err)=>{
      await this.loader.dismiss().then();
      console.log(err);
    })
  }
  getFood() {
    this.foodService.getAllFood().subscribe(async res => {
      await this.loader.dismiss().then();
      this.listOfFood = res;
    },async(err)=>{
      await this.loader.dismiss().then();
      console.log(err);
    })
  }
  getOrder() {
    this.orderService.getAllOrder().subscribe(async res => {
      await this.loader.dismiss().then();
      this.UserId = localStorage.getItem("userId");
     let result = res.filter(c => c.restaurantId == this.UserId && c.restaurantStatuses.find(c=>c.isChecked==true && c.val=="ready to service") );
      if (result.length > 0 ) {
        this.listOfOrder = [];
        result.forEach(element => {
          this.accountService.getAllAccount().subscribe(result => {
            let data = {
              id: element.id,
              DateTime: element.dateTime,
              Customer: result.find(c => c.id == element.customer).fullName,
              PhoneNumber: result.find(c => c.id == element.customer).phonenumber,
              CLocation: result.find(c => c.id == element.customer).locationId,
              RLocation: element.location,
              Location: element.location,
              restaurantStatus: element.restaurantStatuses,
              Total: element.total,
              Driver: element.driver,
              Vehicle: element.vehicle,
              orderLocation: element.orderLocation
            }
            this.listOfOrder.push(data);
          })
        });
      }
    },async(err)=>{
      await this.loader.dismiss().then();
      console.log(err);
    })
  }
  viewOrder(id) {
    this.cart = [];
    let orderNo = this.listOfOrder.find(c => c.id == id).orderNo;
    let orderDetails = this.listOfOrderDetails.filter(c => c.OrderId == orderNo);
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
    this.sharedService.status.next("restaurant-history");
    this.router.navigate(["/menu/order-history"]);
  }
  location(location) {
    this.sharedService.status.next("restaurant-history");
    this.sharedService.RestaurantLocation.next(location);
    this.router.navigate(["/menu/location"]);
  }
  // Dummy refresher function
  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
  // to calculate week of current date
searchdate() {
  //debugger;
  console.log(this.model.startdate);
  let getdate = this.datepipe.transform(this.model.startdate, 'yyyy,M,d');
  function startOfWeek(date) {
    var diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
  }
  function endofweek(date) {
    var lastday = date.getDate() - (date.getDay() - 1) + 6;
    return new Date(date.setDate(lastday));
  }
  var dt = new Date(getdate);
  this.startdateofweek = this.datepipe.transform(startOfWeek(dt));
  //convertion of currentStartDate
  this.startMonth = new Date(this.startdateofweek).getMonth() + 1;
  this.startYear = new Date(this.startdateofweek).getFullYear();
  this.startDate = new Date(this.startdateofweek).getDate();
  console.log(this.startdateofweek)
  this.Enddateofweek = this.datepipe.transform(endofweek(dt));
  //convertion of currentEndDate
  this.endMonth = new Date(this.Enddateofweek).getMonth() + 1;
  this.endYear = new Date(this.Enddateofweek).getFullYear();
  this.endDate = new Date(this.Enddateofweek).getDate();
  console.log(this.Enddateofweek)
  function addDays(date, days) {
    const find = new Date(Number(date))
    find.setDate(date.getDate() + days)
    return find
  }
  const date = new Date(startOfWeek(dt));
  this.mon = this.datepipe.transform(startOfWeek(dt), 'EEEE, MMMM d');
  this.Tuesday = this.datepipe.transform(addDays(date, 1), 'EEEE, MMMM d');
  this.Wednedday = this.datepipe.transform(addDays(date, 2), 'EEEE, MMMM d');
  this.Thruds = this.datepipe.transform(addDays(date, 3), 'EEEE, MMMM d');
  this.Friday = this.datepipe.transform(addDays(date, 4), 'EEEE, MMMM d');
  this.Sat = this.datepipe.transform(addDays(date, 5), 'EEEE, MMMM d');
  this.Sun = this.datepipe.transform(endofweek(dt), 'EEEE, MMMM d');
}
 segmentChanged(ev: any) {
    // console.log('Segment changed', ev.detail.value);
    if (ev.detail.value == "daily") {
      this.scheduleOrder(this.currentDate, "daily");
    }
    else if (ev.detail.value == "week") {
      this.scheduleOrder(this.currentWeek, "week");
    }
    else if (ev.detail.value == "month") {
      this.scheduleOrder(this.currentMonth, "month");
    }
    else if (ev.detail.value == "year") {
      this.scheduleOrder(this.currentYear, "year");
    }
  }
  scheduleOrder(date, event) {
    this.orderService.getAllOrder().subscribe(async res => {
      await this.loader.dismiss().then();
      this.UserId = localStorage.getItem("userId");
     let result = res.filter(c => c.restaurantId == this.UserId && c.restaurantStatuses.find(c=>c.isChecked==true && c.val=="ready to service") );
      if (result.length > 0 ) {
        this.listOfOrder = [];
        result.forEach(element => {
          this.accountService.getAllAccount().subscribe(result => {
            let data = {
              id: element.id,
              DateTime: element.dateTime,
              Customer: result.find(c => c.id == element.customer).fullName,
              PhoneNumber: result.find(c => c.id == element.customer).phonenumber,
              CLocation: result.find(c => c.id == element.customer).locationId,
              RLocation: element.location,
              Location: element.location,
              restaurantStatus: element.restaurantStatuses,
              Total: element.total,
              Driver: element.driver,
              Vehicle: element.vehicle,
              orderLocation: element.orderLocation
            }
            const dateOfOrders = new Date(element.dateTime).getDate();
              // to calculate week convertion
              this.orderMonth = new Date(element.dateTime).getMonth() + 1;
              this.orderYear = new Date(element.dateTime).getFullYear();
              this.orderDate = new Date(element.dateTime).getDate();
              const monthlyOrders = new Date(element.dateTime).getMonth() + 1;
              const yearlyOrdes = new Date(element.dateTime).getFullYear();
              //  console.log("date  =="+dateOfOrders + "month==" +monthlyOrders +"year=="+yearlyOrdes);
              if (event == "daily") {
                this.increament = 0;
                if (date == dateOfOrders) {
                  this.increament = this.increament+1;
                  this.listOfOrder.push(data);
                  this.listOfOrder.sort((a, b) => new Date(b.DateTime).getTime() - new Date(a.DateTime).getTime());
                }
                if(this.increament == 0){
                  this.massge = true
                  this.message = "no orders in this date"
                }
                else{
                  this.massge = false
                }
              }
              else if (event == "week") {
                this.increament = 0;
                if (this.startDate <= this.orderDate && this.startMonth == this.orderMonth && this.startYear == this.orderYear
                  && this.endDate>=this.orderDate && this.endMonth == this.orderMonth && this.endYear == this.orderYear){
                    this.increament = this.increament+1;
                    this.listOfOrder.push(data);
                    this.listOfOrder.sort((a, b) => new Date(b.DateTime).getTime() - new Date(a.DateTime).getTime());
                }
                if(this.increament == 0){
                  this.massge = true
                  this.message = "no orders in this weeks";
                }
                else{
                  this.massge = false
                }
              }
              else if (event == "month") {
                this.increament = 0;
                if (date == monthlyOrders) {
                  this.increament = this.increament+1;
                  this.listOfOrder.push(data);
                  this.listOfOrder.sort((a, b) => new Date(b.DateTime).getTime() - new Date(a.DateTime).getTime());
                }
                if(this.increament == 0){
                  this.massge = true
                  this.message = "no orders in this months"
                }
                else{
                  this.massge = false
                }
              }
              else if (event == "year") {
                this.increament = 0;
                if (date == yearlyOrdes) {
                  this.increament = this.increament+1;
                  this.listOfOrder.push(data);
                  this.listOfOrder.sort((a, b) => new Date(b.DateTime).getTime() - new Date(a.DateTime).getTime());
                }
                if(this.increament == 0){
                  this.massge = true
                  this.message = "no orders years"
                }
                else{
                  this.massge = false
                }
              }
          })
        });
      }
    },async(err)=>{
      await this.loader.dismiss().then();
      console.log(err);
    })
  }
}
