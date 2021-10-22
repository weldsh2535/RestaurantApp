(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["restaurant-history-restaurant-history-module"],{

/***/ "7G/e":
/*!*****************************************************************!*\
  !*** ./src/app/restaurant-history/restaurant-history.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXN0YXVyYW50LWhpc3RvcnkucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "X/8m":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurant-history/restaurant-history.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"text-align: center\">My orders</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  <div class=\"orders\">\n    <ion-row\n      *ngFor=\"let meal of listOfOrder ;let i = index\"\n      class=\"ion-padding meal-row\"\n    >\n      <ion-col size=\"8\" class=\"border-bottom\">\n        <ion-label>\n          <p color=\"primary\">Total : {{ meal.Total | currency:'ETB' }}</p>\n        </ion-label>\n        <ion-button style=\"margin-top: -14px;\" fill=\"clear\" (click)=\"viewOrder(meal.id)\">\n          view order\n        </ion-button>\n        <ion-row class=\"status\">\n          <ion-label style=\"padding-top: 9px; padding-left: 5px\"\n            >Status</ion-label\n          >\n          <ion-button style=\"margin-top: -1px;\" fill=\"clear\" >\n            Ready to service\n          </ion-button>\n      </ion-row>\n      </ion-col>\n      <ion-col size=\"4\" class=\"border-bottom\">\n        <ion-label>\n          {{ meal.Customer }}\n          <p>{{ meal.PhoneNumber }}</p>\n          <span>\n            <ion-button (click)=\"location(meal.CLocation)\"\n              ><ion-icon name=\"location-outline\"></ion-icon\n            ></ion-button>\n          </span>\n        </ion-label>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "f/5+":
/*!*************************************************************************!*\
  !*** ./src/app/restaurant-history/restaurant-history-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: RestaurantHistoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantHistoryPageRoutingModule", function() { return RestaurantHistoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _restaurant_history_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./restaurant-history.page */ "jFx+");




const routes = [
    {
        path: '',
        component: _restaurant_history_page__WEBPACK_IMPORTED_MODULE_3__["RestaurantHistoryPage"]
    }
];
let RestaurantHistoryPageRoutingModule = class RestaurantHistoryPageRoutingModule {
};
RestaurantHistoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RestaurantHistoryPageRoutingModule);



/***/ }),

/***/ "jFx+":
/*!***************************************************************!*\
  !*** ./src/app/restaurant-history/restaurant-history.page.ts ***!
  \***************************************************************/
/*! exports provided: RestaurantHistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantHistoryPage", function() { return RestaurantHistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_restaurant_history_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./restaurant-history.page.html */ "X/8m");
/* harmony import */ var _restaurant_history_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./restaurant-history.page.scss */ "7G/e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Service_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Service/account.service */ "6wYF");
/* harmony import */ var _Service_food_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Service/food.service */ "Dkj+");
/* harmony import */ var _Service_order_detail_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Service/order-detail.service */ "8D9V");
/* harmony import */ var _Service_order_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Service/order.service */ "VNSQ");
/* harmony import */ var _Service_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Service/shared.service */ "ldse");










let RestaurantHistoryPage = class RestaurantHistoryPage {
    constructor(orderService, accountService, orderDetailsService, foodService, sharedService, router) {
        this.orderService = orderService;
        this.accountService = accountService;
        this.orderDetailsService = orderDetailsService;
        this.foodService = foodService;
        this.sharedService = sharedService;
        this.router = router;
        this.cart = [];
    }
    ngOnInit() {
        this.getOrder();
        this.getFood();
        this.getOrderDetails();
    }
    getOrderDetails() {
        this.orderDetailsService.getAllOrderDetail().subscribe(res => {
            this.listOfOrderDetails = res;
        });
    }
    getFood() {
        this.foodService.getAllFood().subscribe(res => {
            this.listOfFood = res;
        });
    }
    getOrder() {
        this.orderService.getAllOrder().subscribe(res => {
            this.UserId = localStorage.getItem("userId");
            let result = res.filter(c => c.RestaurantId == this.UserId && c.restaurantStatus.find(c => c.isChecked == true && c.val == "ready to service"));
            if (result.length > 0) {
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
        this.sharedService.status.next("restaurant-history");
        this.router.navigate(["/menu/order-history"]);
    }
    location(location) {
        this.sharedService.status.next("restaurant-history");
        this.sharedService.RestaurantLocation.next(location);
        this.router.navigate(["/menu/location"]);
    }
};
RestaurantHistoryPage.ctorParameters = () => [
    { type: _Service_order_service__WEBPACK_IMPORTED_MODULE_8__["OrderService"] },
    { type: _Service_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"] },
    { type: _Service_order_detail_service__WEBPACK_IMPORTED_MODULE_7__["OrderDetailService"] },
    { type: _Service_food_service__WEBPACK_IMPORTED_MODULE_6__["FoodService"] },
    { type: _Service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
RestaurantHistoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-restaurant-history',
        template: _raw_loader_restaurant_history_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_restaurant_history_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RestaurantHistoryPage);



/***/ }),

/***/ "qmIW":
/*!*****************************************************************!*\
  !*** ./src/app/restaurant-history/restaurant-history.module.ts ***!
  \*****************************************************************/
/*! exports provided: RestaurantHistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantHistoryPageModule", function() { return RestaurantHistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _restaurant_history_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./restaurant-history-routing.module */ "f/5+");
/* harmony import */ var _restaurant_history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./restaurant-history.page */ "jFx+");







let RestaurantHistoryPageModule = class RestaurantHistoryPageModule {
};
RestaurantHistoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _restaurant_history_routing_module__WEBPACK_IMPORTED_MODULE_5__["RestaurantHistoryPageRoutingModule"]
        ],
        declarations: [_restaurant_history_page__WEBPACK_IMPORTED_MODULE_6__["RestaurantHistoryPage"]]
    })
], RestaurantHistoryPageModule);



/***/ })

}]);
//# sourceMappingURL=restaurant-history-restaurant-history-module-es2015.js.map