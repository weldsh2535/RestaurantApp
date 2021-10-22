(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~cart-modal-cart-modal-module~details-details-module"],{

/***/ "+cje":
/*!***********************************************!*\
  !*** ./src/app/Service/restaurant.service.ts ***!
  \***********************************************/
/*! exports provided: RestaurantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantService", function() { return RestaurantService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators/map */ "q3Kh");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/firestore */ "CqG3");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_bad_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/bad-input */ "XEKg");
/* harmony import */ var _common_not_found_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/not-found-error */ "5Jak");
/* harmony import */ var _common_app_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/app-error */ "/GcI");








let RestaurantService = class RestaurantService {
    constructor(db) {
        this.db = db;
        this.restaurantCollectionList = db.collection('Restaurant');
    }
    create(restaurantObj) {
        return this.restaurantCollectionList.add(restaurantObj);
    }
    getAllRestaurant() {
        this.restaurantList = this.restaurantCollectionList.snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
        return this.restaurantList;
    }
    getRestaurant(id) {
        return this.restaurantCollectionList.doc(id).valueChanges();
    }
    updateRestaurant(restaurantObj, id) {
        return this.restaurantCollectionList.doc(id).update(restaurantObj)
            .catch(this.handleError);
    }
    removeRestaurant(id) {
        return this.restaurantCollectionList.doc(id).delete()
            .catch(this.handleError);
    }
    handleError(error) {
        if (error.status === 400)
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(new _common_bad_input__WEBPACK_IMPORTED_MODULE_5__["BadInput"](error.json()));
        if (error.status === 404)
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(new _common_not_found_error__WEBPACK_IMPORTED_MODULE_6__["NotFoundError"]());
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(new _common_app_error__WEBPACK_IMPORTED_MODULE_7__["AppError"](error));
    }
};
RestaurantService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }
];
RestaurantService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RestaurantService);



/***/ }),

/***/ "+q2o":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart-modal/cart-modal.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"light\">\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"solid\" shape=\"round\" color=\"light\" (click)=\"onclick()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\" color=\"primary\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title style=\"text-align: center;\">Order Details</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button  >\n        <ion-badge *ngIf=\"cart.length > 0\">{{ cartItemCount | async }}</ion-badge>\n        <ion-icon slot=\"icon-only\" class=\"cart-icon\" name=\"cart\"></ion-icon>\n      </ion-button> \n    </ion-buttons>\n   </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <!-- <div class=\"ion-text-end\">\n    <ion-button (click)=\"close()\" fill=\"clear\" color=\"dark\">\n      <ion-icon name=\"close\" slot=\"start\"></ion-icon>\n    </ion-button>\n  </div> -->\n  <div class=\"ion-padding\">\n    <ion-list>\n      <ion-item *ngFor=\"let p of cart\" class=\"ion-text-wrap\">\n        <ion-grid>\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"2\" class=\"ion-align-self-center\">\n              <ion-button color=\"medium\" fill=\"clear\" (click)=\"decreaseCartItem(p)\">\n                <ion-icon name=\"remove-circle\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n            </ion-col>\n            <ion-col size=\"1\" class=\"ion-align-self-center\">\n              {{ p.amount }}\n            </ion-col>\n            <ion-col size=\"2\" class=\"ion-align-self-center\">\n              <ion-button color=\"medium\" fill=\"clear\" (click)=\"increaseCartItem(p)\">\n                <ion-icon name=\"add-circle\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n            </ion-col>\n            <ion-col size=\"2\" offset=\"5\">\n              <ion-button color=\"medium\" fill=\"clear\" (click)=\"removeCartItem(p)\">\n                <ion-icon name=\"close-circle\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"5\">\n              <b>{{ p.Name }}</b>\n            </ion-col>\n            <ion-col size=\"4\">\n              <b>{{ p.Price | currency:'ETB'}}</b>\n            </ion-col>\n            <ion-col size=\"3\" class=\"ion-text-end\">\n              {{ p.amount * p.Price | currency:'ETB' }}\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"9\">\n             Sub Total:\n            </ion-col>\n            <ion-col size=\"3\" class=\"ion-text-end\">\n              {{ getTotal() | currency:'ETB' }}\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"9\">\n             Grand Total:\n            </ion-col>\n            <ion-col size=\"3\" class=\"ion-text-end\">\n              {{ getGrandTotal() | currency:'ETB' }}\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n    <form [formGroup]=\"regform\">\n    <ion-item>\n      <ion-label>Transation Type</ion-label>\n      <ion-select interface=\"popover\" formControlName=\"transactionType\">\n        <ion-select-option value=\"Delivery\">Delivery</ion-select-option>\n        <ion-select-option value=\"Pickup\">Pickup</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Delivery Date</ion-label>\n      <ion-datetime formControlName=\"DeliveryDate\" display-format=\"MMM DD, YYYY HH:mm:ss\" [min]=\"minDate\" [max]=\"maxDate\" [(ngModel)]=\"currentDate\"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label>Delivery fee</ion-label>\n      <ion-input formControlName=\"DeliveryFee\" type=\"number\" (keyup)=\"getGrandTotal()\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Delivery Time</ion-label>\n      <ion-datetime formControlName=\"DeliveryTime\" display-format=\"h:mm A\" picker-format=\"h:mm A\" value=\"1990-02-19T07:43Z\"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"1\">\n            <ion-label>\n              <ion-icon style=\"height: 27px;\n              width: 19px;\" name=\"location-outline\"></ion-icon>\n            </ion-label>\n           </ion-col>\n          <ion-col size=\"8\">\n           <ion-label>\n             <p>Delivery to current Address</p>\n             <p></p>\n           </ion-label>\n          </ion-col>\n          <ion-col size=\"3\">\n            <ion-button (click)=\"location()\">\n              change\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <ion-button expand=\"full\" (click)=\"order(cart)\" slot=\"fixed\">\n      Order\n    </ion-button>\n   \n  </form>\n  </div>\n</ion-content>");

/***/ }),

/***/ "HVLQ":
/*!*************************************************!*\
  !*** ./src/app/cart-modal/cart-modal.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-badge {\n  color: #fff;\n  position: absolute;\n  top: -9px;\n  right: 2px;\n  border-radius: 100%;\n}\n\n.cart-icon {\n  font-size: 50px;\n}\n\n.cart-length {\n  color: var(--ion-color-primary);\n  position: absolute;\n  top: 18px;\n  left: 25px;\n  font-weight: 600;\n  font-size: 1em;\n  min-width: 25px;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNhcnQtbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFDRiIsImZpbGUiOiJjYXJ0LW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1iYWRnZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTlweDtcclxuICAgIHJpZ2h0OiAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59XHJcbiBcclxuLmNhcnQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG59XHJcbiBcclxuLmNhcnQtbGVuZ3RoIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE4cHg7XHJcbiAgbGVmdDogMjVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIG1pbi13aWR0aDogMjVweDtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "Vefk":
/*!***********************************************!*\
  !*** ./src/app/cart-modal/cart-modal.page.ts ***!
  \***********************************************/
/*! exports provided: CartModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartModalPage", function() { return CartModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cart_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cart-modal.page.html */ "+q2o");
/* harmony import */ var _cart_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart-modal.page.scss */ "HVLQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _Service_food_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Service/food.service */ "Dkj+");
/* harmony import */ var _Service_order_detail_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Service/order-detail.service */ "8D9V");
/* harmony import */ var _Service_order_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Service/order.service */ "VNSQ");
/* harmony import */ var _Service_restaurant_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Service/restaurant.service */ "+cje");
/* harmony import */ var _Service_shared_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Service/shared.service */ "ldse");












let CartModalPage = class CartModalPage {
    constructor(modalCtrl, alertCtrl, orderService, fb, router, restaurantService, orderDetailService, foodService, sharedService) {
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.orderService = orderService;
        this.fb = fb;
        this.router = router;
        this.restaurantService = restaurantService;
        this.orderDetailService = orderDetailService;
        this.foodService = foodService;
        this.sharedService = sharedService;
        this.cart = [];
        this.regform = this.fb.group({});
        this.currentDate = new Date().toUTCString();
        this.minDate = new Date().toISOString();
        this.maxDate = new Date().toISOString();
        this.statusDriver = [
            { id: 0, val: 'picked', checked: false },
            { id: 1, val: 'start moving', checked: false },
            { id: 2, val: 'delivered', checked: false }
        ];
        this.statusRestaurant = [
            { id: 0, val: 'order received', isChecked: true },
            { id: 1, val: 'start cooking', isChecked: false },
            { id: 2, val: 'cooked', isChecked: false },
            { id: 3, val: 'ready to service', isChecked: false }
        ];
    }
    ngOnInit() {
        this.regform = this.fb.group({
            transactionType: [""],
            DeliveryDate: [""],
            DeliveryTime: [""],
            DeliveryAddress: [""],
            DeliveryFee: [""]
        });
        //setting min date
        let date = new Date();
        date.setDate(date.getDate() - 5);
        this.minDate = date.toISOString();
        //setting max date
        date = new Date();
        date.setDate(date.getDate() + 5);
        this.maxDate = date.toISOString();
        ///to get data form service
        this.cart = this.orderService.getCart();
        this.cartItemCount = this.orderService.getCartItemCount();
        this.id = this.orderService.getRestaurantId().value;
        //console.log(this.id)
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
            if (result.length == 0)
                No = 1;
            else
                No = result.length + 1;
            this.orderNo = +No;
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
    getGrandTotal() {
        return this.getTotal() + this.regform.get("DeliveryFee").value;
    }
    close() {
        this.modalCtrl.dismiss();
    }
    location() {
        this.sharedService.status.next("cart-modal");
        this.router.navigate(["/menu/location"]);
    }
    order(cart) {
        this.Total = 0;
        cart.forEach(element => {
            this.restaurantId = element.restaurantId;
            this.Total = this.Total + (element.Price * element.amount);
            let orderDetails = {
                OrderId: this.orderNo,
                Food: element.id,
                Qty: element.amount,
                Price: element.Price
            };
            this.orderDetailService.create(orderDetails);
        });
        let res = this.listOfRestaurant.find(c => c.accountId == this.restaurantId);
        let order = {
            RestaurantId: this.restaurantId,
            DateTime: this.regform.get('DeliveryDate').value,
            Customer: localStorage.getItem("userId"),
            Location: res.Location,
            OrderStatus: this.statusDriver,
            Total: this.getGrandTotal(),
            orderNo: this.orderNo,
            Driver: "",
            Vehicle: "",
            orderLocation: "",
            restaurantStatus: this.statusRestaurant
        };
        this.orderService.create(order);
        this.presentAlert("Add order succesfuly");
        this.router.navigate(["/menu/order"]);
    }
    presentAlert(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                cssClass: 'my-custom-class',
                header: 'Order',
                // subHeader: 'Subtitle',
                message: message,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    presentAlertConfirm(product) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
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
            yield alert.present();
        });
    }
    onclick() {
        this.id = this.orderService.getRestaurantId().value;
        this.router.navigate(["/menu/details/" + this.id]);
    }
};
CartModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _Service_order_service__WEBPACK_IMPORTED_MODULE_9__["OrderService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _Service_restaurant_service__WEBPACK_IMPORTED_MODULE_10__["RestaurantService"] },
    { type: _Service_order_detail_service__WEBPACK_IMPORTED_MODULE_8__["OrderDetailService"] },
    { type: _Service_food_service__WEBPACK_IMPORTED_MODULE_7__["FoodService"] },
    { type: _Service_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"] }
];
CartModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cart-modal',
        template: _raw_loader_cart_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cart_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CartModalPage);



/***/ })

}]);
//# sourceMappingURL=default~cart-modal-cart-modal-module~details-details-module-es2015.js.map