(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["restaurant-home-restaurant-home-module"],{

/***/ "64T5":
/*!*******************************************************************!*\
  !*** ./src/app/restaurant-home/restaurant-home-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: RestaurantHomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantHomePageRoutingModule", function() { return RestaurantHomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _restaurant_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./restaurant-home.page */ "73m4");




const routes = [
    {
        path: '',
        component: _restaurant_home_page__WEBPACK_IMPORTED_MODULE_3__["RestaurantHomePage"]
    }
];
let RestaurantHomePageRoutingModule = class RestaurantHomePageRoutingModule {
};
RestaurantHomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RestaurantHomePageRoutingModule);



/***/ }),

/***/ "6tdJ":
/*!***********************************************************!*\
  !*** ./src/app/restaurant-home/restaurant-home.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-row .message {\n  padding-top: 19px;\n  padding-left: 107px;\n}\n\nion-button {\n  padding-left: 0px;\n}\n\nion-grid .message {\n  border-radius: 9px;\n  background-color: whitesmoke;\n  height: 79px;\n}\n\nion-label .message {\n  padding-left: 60px;\n  padding-top: 24px;\n  text-align: center;\n  font-size: 28px;\n  font-style: initial;\n  font-family: cursive;\n}\n\n.active-category {\n  --background: var(--ion-color-primary);\n  --color: #fff;\n  --border-radius: 3px;\n  font-weight: 600;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJlc3RhdXJhbnQtaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3ZCOztBQUNBO0VBQ0ksaUJBQWlCO0FBRXJCOztBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixZQUFZO0FBR2hCOztBQURBO0VBQ0ksa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFJeEI7O0FBRkE7RUFDSSxzQ0FBYTtFQUNiLGFBQVE7RUFDUixvQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBS3BCIiwiZmlsZSI6InJlc3RhdXJhbnQtaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tcm93IC5tZXNzYWdle1xyXG4gICAgcGFkZGluZy10b3A6IDE5cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwN3B4O1xyXG59XHJcbmlvbi1idXR0b24ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbn1cclxuaW9uLWdyaWQgLm1lc3NhZ2Uge1xyXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIGhlaWdodDogNzlweDtcclxufVxyXG5pb24tbGFiZWwgLm1lc3NhZ2V7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGZvbnQtc3R5bGU6IGluaXRpYWw7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxufVxyXG4uYWN0aXZlLWNhdGVnb3J5IHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgLS1jb2xvcjogI2ZmZjtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "73m4":
/*!*********************************************************!*\
  !*** ./src/app/restaurant-home/restaurant-home.page.ts ***!
  \*********************************************************/
/*! exports provided: RestaurantHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantHomePage", function() { return RestaurantHomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_restaurant_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./restaurant-home.page.html */ "VPey");
/* harmony import */ var _restaurant_home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./restaurant-home.page.scss */ "6tdJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _Service_account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Service/account.service */ "6wYF");
/* harmony import */ var _Service_food_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Service/food.service */ "Dkj+");
/* harmony import */ var _Service_order_detail_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Service/order-detail.service */ "8D9V");
/* harmony import */ var _Service_order_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Service/order.service */ "VNSQ");
/* harmony import */ var _Service_shared_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Service/shared.service */ "ldse");












let RestaurantHomePage = class RestaurantHomePage {
    constructor(foodService, fb, orderService, accountService, orderDetailsService, router, sharedService, alertController, toastController) {
        this.foodService = foodService;
        this.fb = fb;
        this.orderService = orderService;
        this.accountService = accountService;
        this.orderDetailsService = orderDetailsService;
        this.router = router;
        this.sharedService = sharedService;
        this.alertController = alertController;
        this.toastController = toastController;
        this.listOfOrder = [];
        this.cart = [];
        this.regform = this.fb.group({});
        this.dayFinished = [];
        this.restaurantstatus = [];
        this.activeCategory = 0;
        this.shownGroup = null;
        this.hideme = {};
        this.status = [];
        this.selectedIndex = -1;
        this.indexes = [];
        this.increment = 0;
        this.currentDate = new Date().toDateString();
        //console.log(this.currentDate);
        this.accountService.getAllAccount().subscribe(res => {
            this.listOfAccount = res;
            // console.log(res)
        });
    }
    ngOnInit() {
        this.regform = this.fb.group({
            status: [""],
        });
        this.getFood();
        this.getOrder();
        this.getOrderDetails();
        this.getAllOrder();
        //this.lp = new LocationPicker('map');
    }
    getFood() {
        this.foodService.getAllFood().subscribe(res => {
            this.listOfFood = res;
        });
    }
    getAccount() {
        this.accountService.getAllAccount().subscribe(res => {
            this.listOfAccount = res;
        });
    }
    getOrderDetails() {
        this.orderDetailsService.getAllOrderDetail().subscribe(res => {
            this.listOfOrderDetails = res;
        });
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
            this.orderStatus = result.filter(c => c.restaurantStatuses.find(entry => entry.isChecked == true && entry.val == "start cooking")
                || c.restaurantStatuses.find(entry => entry.isChecked == true && entry.val == "cooked")
                || c.restaurantStatuses.find(entry => entry.isChecked == true && entry.val == "ready to service"));
            this.orderStatus1 = result.filter(c => c.statuses.find(entry => entry.isChecked == true && entry.val == "Accept"));
            if (result.length > 0) {
                this.listOfOrder = [];
                result.forEach(element => {
                    this.accountService.getAllAccount().subscribe(result => {
                        let checkStatus = this.orderStatus.find(c => c.id == element.id);
                        let checkStatus1 = this.orderStatus1.find(c => c.id == element.id);
                        if (checkStatus) {
                            this.checkStatus = true;
                        }
                        else {
                            this.checkStatus = false;
                        }
                        if (checkStatus1) {
                            this.statusofValue = true;
                            this.checkStatus = false;
                        }
                        else {
                            this.statusofValue = false;
                            this.checkStatus = true;
                        }
                        let data = {
                            id: element.id,
                            DateTime: element.dateTime,
                            Customer: this.listOfAccount.find(c => c.id == element.customer).fullName,
                            PhoneNumber: this.listOfAccount.find(c => c.id == element.customer).phonenumber,
                            CLocation: this.listOfAccount.find(c => c.id == element.customer).locationId,
                            RLocation: element.location,
                            Location: element.location,
                            restaurantStatus: element.restaurantStatuses,
                            Total: element.total,
                            Driver: element.driver,
                            Vehicle: element.vehicle,
                            orderLocation: element.orderLocation,
                            status: element.statuses,
                            checkStatus: this.checkStatus,
                            checkStatusofValue: this.statusofValue
                        };
                        //this.listOfOrder.push(data);
                        const dateOfOrders = new Date(element.dateTime).toDateString();
                        // console.log(dateOfOrders);
                        if (this.currentDate == dateOfOrders) {
                            this.listOfOrder.push(data);
                            this.increment = this.increment + 1;
                        }
                        if (this.increment == 0) {
                            this.massge = true;
                            this.message = "no orders";
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
                    });
                });
            }
        });
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
            };
            this.cart.push(data);
        });
        this.orderService.addOrder(this.cart);
        this.sharedService.status.next("restaurant-home");
        this.router.navigate(["/menu/order-history"]);
    }
    setDisabled(meal) {
        return this.dayFinished.includes(meal);
    }
    isChecked(meal, event) {
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
                this.checked = true;
            }
            else {
                this.checked = false;
            }
            let driverS = {
                id: element.id,
                val: element.val,
                isChecked: this.checked
            };
            this.restaurantstatus.push(driverS);
        });
        let res = this.listOfAllOrder.find(c => c.id == meal.id);
        let data = {
            id: res.id,
            DateTime: res.dateTime,
            Customer: res.customer,
            Location: res.location,
            OrderStatus: res.orderStatuses,
            Total: res.total,
            Driver: res.driver,
            Vehicle: res.vehicle,
            orderLocation: res.orderLocation,
            restaurantStatus: this.restaurantstatus,
            RestaurantId: res.restaurantId,
            customerStatus: res.customerStatus,
            status: res.status
        };
        this.restaurantstatus.forEach(element => {
            this.orderService.updateRestaurantStatus(element).subscribe(res => {
                // alert(res.toString());
            });
        });
        this.orderService.updateOrder(data).subscribe(res => {
            // alert(res.toString());
        });
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
    toggleGroup(meal, event, val, index) {
        this.selectedIndex = -1;
        this.status = [];
        let status = meal.status;
        if (index == 0) {
            var item = meal.status[0];
        }
        else {
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
            };
            this.status.push(status);
        });
        let res = this.listOfAllOrder.find(c => c.id == meal.id);
        let data = {
            id: res.id,
            DateTime: res.dateTime,
            Customer: res.customer,
            Location: res.location,
            OrderStatus: res.orderStatuses,
            Total: res.total,
            Driver: res.driver,
            Vehicle: res.vehicle,
            orderLocation: res.orderLocation,
            restaurantStatus: res.restaurantStatuses,
            RestaurantId: res.restaurantId,
            customerStatus: res.customerStatus,
            status: this.status
        };
        res.restaurantStatuses.forEach(ele => {
            this.orderService.updateRestaurantStatus(ele).subscribe(res => {
                //  alert(res.toString());
            });
        });
        this.status.forEach(ele => {
            this.orderService.updateStatus(ele).subscribe(res => {
                //alert(res.toString());
            });
        });
        this.orderService.updateOrder(data).subscribe(res => {
            // alert(res.toString());
        });
        this.getOrder();
        if (val !== "Reject") {
            let data1 = {
                id: event
            };
            this.indexes.push(data1);
            if (this.indexes.length > 0) {
                this.indexes.forEach(ele => {
                    this.selectedIndex = ele.id;
                });
            }
            else {
                this.selectedIndex = event;
            }
        }
        else {
            this.presentAlert("reject order");
        }
    }
    onClick(item) {
        Object.keys(this.hideme).forEach(h => {
            this.hideme[h] = false;
        });
        this.hideme[item.id] = true;
    }
    presentAlert(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                // cssClass:"my-custom-class",
                color: 'success',
                duration: 2000,
                message: message,
            });
            yield toast.present();
        });
    }
};
RestaurantHomePage.ctorParameters = () => [
    { type: _Service_food_service__WEBPACK_IMPORTED_MODULE_8__["FoodService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _Service_order_service__WEBPACK_IMPORTED_MODULE_10__["OrderService"] },
    { type: _Service_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"] },
    { type: _Service_order_detail_service__WEBPACK_IMPORTED_MODULE_9__["OrderDetailService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _Service_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] }
];
RestaurantHomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-restaurant-home',
        template: _raw_loader_restaurant_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_restaurant_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RestaurantHomePage);



/***/ }),

/***/ "VPey":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurant-home/restaurant-home.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"text-align: center\">Orders</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div class=\"message\" *ngIf=\"massge\" >\n    <ion-grid class=\"message\">\n      <ion-row class=\"message\">\n        <ion-label class=\"message\">{{message}}</ion-label>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div class=\"orders\">\n    <ion-row *ngFor=\"let meal of listOfOrder ;let i = index; odd as o; even as e;\"\n    [ngClass]=\"{\n      'odd-active': o,\n      'even-active': e\n    }\"\n     class=\"ion-padding meal-row\">\n      <ion-col size=\"8\" class=\"border-bottom\">\n        <ion-label>\n          <p color=\"primary\">Total : {{ meal.Total | currency:'ETB' }}</p>\n          <span>{{meal.DateTime|date:'short'}}</span>\n        </ion-label>\n        <ion-button fill=\"clear\" (click)=\"viewOrder(meal.id)\">\n          view order\n        </ion-button>\n       <ion-row *ngIf=\"meal.checkStatusofValue == false\">\n          <div *ngFor=\"let status of meal.status; let k = index\" [hidden]=\"setDisabled(status)\">\n            <ion-button  (click)=\"toggleGroup(meal,i,status.val,k)\"> {{status.val}}</ion-button>\n           </div>\n        </ion-row>\n        <!-- *ngIf=\"selectedIndex == i\" -->\n        <ion-row class=\"status\" *ngIf=\"meal.checkStatus== false\">\n          <ion-label style=\"padding-top: 9px; padding-left: 5px\">Status</ion-label>\n          <ion-select interface=\"popover\" (ionChange)=\"isChecked(meal,$event)\">\n            <ion-select-option *ngFor=\"let value of meal.restaurantStatus ; let j=index\" [disabled]=\"setDisabled(value)\"\n              value=\"{{value.val}}\">\n              {{value.val}}\n            </ion-select-option>\n          </ion-select>\n        </ion-row>\n      </ion-col>\n      <ion-col size=\"4\" class=\"border-bottom\">\n        <ion-label>\n          {{ meal.Customer }}\n          <p>{{ meal.PhoneNumber }}</p>\n          <span>\n            <ion-button (click)=\"location(meal.CLocation)\">\n              <ion-icon name=\"location-outline\"></ion-icon>\n            </ion-button>\n          </span>\n        </ion-label>\n      </ion-col>\n    </ion-row>\n  </div>\n  <!-- <div *ngFor=\"let number of [0,1,2,3,4] ; let i = index\">\n    <div>\n      <button (click)=\"showContent(this, i);\"> Click Me {{i}} </button>\n      <div class=\"content\" *ngIf=\"selectedIndex == i\"> Hello world {{i}}</div>\n    </div>      \n  </div> -->\n</ion-content>");

/***/ }),

/***/ "YGi6":
/*!***********************************************************!*\
  !*** ./src/app/restaurant-home/restaurant-home.module.ts ***!
  \***********************************************************/
/*! exports provided: RestaurantHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantHomePageModule", function() { return RestaurantHomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _restaurant_home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./restaurant-home-routing.module */ "64T5");
/* harmony import */ var _restaurant_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./restaurant-home.page */ "73m4");







let RestaurantHomePageModule = class RestaurantHomePageModule {
};
RestaurantHomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _restaurant_home_routing_module__WEBPACK_IMPORTED_MODULE_5__["RestaurantHomePageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_restaurant_home_page__WEBPACK_IMPORTED_MODULE_6__["RestaurantHomePage"]]
    })
], RestaurantHomePageModule);



/***/ })

}]);
//# sourceMappingURL=restaurant-home-restaurant-home-module-es2015.js.map