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
/* harmony default export */ __webpack_exports__["default"] = ("ion-row {\n  border-radius: 12px;\n  border-style: none;\n  background-color: #e9ecef;\n  margin-top: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJlc3RhdXJhbnQtaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoicmVzdGF1cmFudC1ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1yb3d7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxufSJdfQ== */");

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
/* harmony import */ var _Service_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Service/account.service */ "6wYF");
/* harmony import */ var _Service_food_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Service/food.service */ "Dkj+");
/* harmony import */ var _Service_order_detail_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Service/order-detail.service */ "8D9V");
/* harmony import */ var _Service_order_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Service/order.service */ "VNSQ");
/* harmony import */ var _Service_shared_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Service/shared.service */ "ldse");











let RestaurantHomePage = class RestaurantHomePage {
    constructor(foodService, fb, orderService, accountService, orderDetailsService, router, sharedService) {
        this.foodService = foodService;
        this.fb = fb;
        this.orderService = orderService;
        this.accountService = accountService;
        this.orderDetailsService = orderDetailsService;
        this.router = router;
        this.sharedService = sharedService;
        this.listOfOrder = [];
        this.cart = [];
        this.regform = this.fb.group({});
        this.dayFinished = [];
        this.restaurantstatus = [];
    }
    ngOnInit() {
        this.regform = this.fb.group({
            status: [""],
        });
        this.getFood();
        this.getOrder();
        this.getAccount();
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
        this.orderService.getAllOrder().subscribe(res => {
            this.UserId = localStorage.getItem("userId");
            let result = res.filter(c => c.RestaurantId == this.UserId && c.restaurantStatus.find(c => c.isChecked == false && c.val == "ready to service"));
            if (result.length > 0 && this.listOfOrder.length == 0) {
                this.listOfOrder = [];
                result.forEach(element => {
                    this.accountService.getAllAccount().subscribe(result => {
                        let data = {
                            id: element.id,
                            DateTime: element.DateTime,
                            Customer: result.find(c => c.id == element.Customer).FullName,
                            PhoneNumber: result.find(c => c.id == element.Customer).phonenumber,
                            CLocation: result.find(c => c.id == element.Customer).FirstTimeLocation,
                            RLocation: element.Location,
                            Location: element.Location,
                            restaurantStatus: element.restaurantStatus,
                            Total: element.Total,
                            Driver: element.Driver,
                            Vehicle: element.Vehicle,
                            orderNo: element.orderNo,
                            orderLocation: element.orderLocation
                        };
                        this.listOfOrder.push(data);
                        let status = element.restaurantStatus.find(c => c.isChecked == true);
                        if (status !== undefined) {
                            if (this.dayFinished.includes(status)) {
                                this.dayFinished.splice(this.dayFinished.indexOf(status), 1);
                            }
                            else {
                                this.dayFinished.push(status);
                            }
                            this.setDisabled(status);
                        }
                    });
                });
            }
        });
    }
    viewOrder(id) {
        this.cart = [];
        let orderNo = this.listOfOrder.find(c => c.id == id).orderNo;
        let orderDetails = this.listOfOrderDetails.filter(c => c.OrderId == orderNo);
        orderDetails.forEach(el => {
            let data = {
                CookingTime: this.listOfFood.find(c => c.id == el.Food).CookingTime,
                DeliveryTime: this.listOfFood.find(c => c.id == el.Food).DeliveryTime,
                Description: this.listOfFood.find(c => c.id == el.Food).Description,
                Name: this.listOfFood.find(c => c.id == el.Food).Name,
                Price: this.listOfFood.find(c => c.id == el.Food).Price,
                amount: el.Qty,
                categoryId: this.listOfFood.find(c => c.id == el.Food).categoryId,
                id: el.Food,
                picture: this.listOfFood.find(c => c.id == el.Food).picture,
                restaurantId: this.listOfFood.find(c => c.id == el.Food).restaurantId,
                type: this.listOfFood.find(c => c.id == el.Food).type,
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
        let userId = localStorage.getItem("userId");
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
        let location = {
            lat: res.Location.lat,
            lon: res.Location.lon
        };
        let data = {
            id: res.id,
            orderNo: res.orderNo,
            DateTime: res.DateTime,
            Customer: res.Customer,
            Location: location,
            OrderStatus: res.OrderStatus,
            Total: res.Total,
            Driver: res.Driver,
            Vehicle: res.Vehicle,
            orderLocation: res.orderLocation,
            restaurantStatus: this.restaurantstatus,
            RestaurantId: res.RestaurantId
        };
        this.orderService.updateOrder(data, res.id);
    }
    location(location) {
        this.sharedService.status.next("restaurant-home");
        this.sharedService.RestaurantLocation.next(location);
        this.router.navigate(["/menu/location"]);
    }
};
RestaurantHomePage.ctorParameters = () => [
    { type: _Service_food_service__WEBPACK_IMPORTED_MODULE_7__["FoodService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _Service_order_service__WEBPACK_IMPORTED_MODULE_9__["OrderService"] },
    { type: _Service_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"] },
    { type: _Service_order_detail_service__WEBPACK_IMPORTED_MODULE_8__["OrderDetailService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _Service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"] }
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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"text-align: center\">Orders</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  <div class=\"orders\">\n    <ion-row\n      *ngFor=\"let meal of listOfOrder ;let i = index\"\n      class=\"ion-padding meal-row\"\n    >\n      <ion-col size=\"8\" class=\"border-bottom\">\n        <ion-label>\n          <p color=\"primary\">Total : {{ meal.Total | currency:'ETB' }}</p>\n        </ion-label>\n        <ion-button fill=\"clear\" (click)=\"viewOrder(meal.id)\">\n          view order\n        </ion-button>\n        <ion-row class=\"status\">\n          <ion-label style=\"padding-top: 9px; padding-left: 5px\"\n            >Status</ion-label\n          >\n          <ion-select interface=\"popover\" (ionChange)=\"isChecked(meal,$event)\">\n            <ion-select-option\n              *ngFor=\"let value of meal.restaurantStatus ; let j=index\"\n              [disabled]=\"setDisabled(value)\"\n              value=\"{{value.val}}\"\n            >\n              {{value.val}}\n            </ion-select-option>\n          </ion-select>\n        </ion-row>\n      </ion-col>\n      <ion-col size=\"4\" class=\"border-bottom\">\n        <ion-label>\n          {{ meal.Customer }}\n          <p>{{ meal.PhoneNumber }}</p>\n          <span>\n            <ion-button (click)=\"location(meal.CLocation)\"\n              ><ion-icon name=\"location-outline\"></ion-icon\n            ></ion-button>\n          </span>\n        </ion-label>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n");

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