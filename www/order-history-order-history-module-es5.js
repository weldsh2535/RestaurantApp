(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-history-order-history-module"], {
    /***/
    "LuXT":
    /*!*****************************************************!*\
      !*** ./src/app/order-history/order-history.page.ts ***!
      \*****************************************************/

    /*! exports provided: OrderHistoryPage */

    /***/
    function LuXT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderHistoryPage", function () {
        return OrderHistoryPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_order_history_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./order-history.page.html */
      "mqkC");
      /* harmony import */


      var _order_history_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./order-history.page.scss */
      "PEmK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _Service_food_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../Service/food.service */
      "Dkj+");
      /* harmony import */


      var _Service_order_detail_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../Service/order-detail.service */
      "8D9V");
      /* harmony import */


      var _Service_order_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../Service/order.service */
      "VNSQ");
      /* harmony import */


      var _Service_restaurant_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../Service/restaurant.service */
      "+cje");
      /* harmony import */


      var _Service_shared_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../Service/shared.service */
      "ldse");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var OrderHistoryPage = /*#__PURE__*/function () {
        function OrderHistoryPage(modalCtrl, alertCtrl, orderService, fb, router, restaurantService, orderDetailService, foodService, sharedService, datepipe) {
          _classCallCheck(this, OrderHistoryPage);

          this.modalCtrl = modalCtrl;
          this.alertCtrl = alertCtrl;
          this.orderService = orderService;
          this.fb = fb;
          this.router = router;
          this.restaurantService = restaurantService;
          this.orderDetailService = orderDetailService;
          this.foodService = foodService;
          this.sharedService = sharedService;
          this.datepipe = datepipe;
          this.cart = [];
          this.regform = this.fb.group({});
          this.currentDate = new Date().toUTCString();
          this.minDate = new Date().toISOString();
          this.maxDate = new Date().toISOString();
          this.model = {};
          this.date = new Date(); //this.currentDate = new Date().toDateString();

          this.currentMonth = new Date().getMonth() + 1;
          this.currentYear = new Date().getFullYear();
          this.currentDates = new Date().getDate();
        }

        _createClass(OrderHistoryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.regform = this.fb.group({
              transactionType: [""],
              DeliveryDate: [""],
              DeliveryTime: [""],
              DeliveryAddress: [""]
            }); //setting min date

            var date = new Date();
            date.setDate(date.getDate() - 5);
            this.minDate = date.toISOString(); //setting max date

            date = new Date();
            date.setDate(date.getDate() + 5);
            this.maxDate = date.toISOString(); ///to get data form service

            this.cart = this.orderService.getOrders();
            this.status = this.sharedService.getStatus().value;
            console.log(this.status);
            this.cartItemCount = this.orderService.getOrderItemCount();
            this.id = this.orderService.getRestaurantId().value; //console.log(this.id)

            this.getRestaurant();
            this.getFood();
            this.readNOId();
          }
        }, {
          key: "getRestaurant",
          value: function getRestaurant() {
            var _this = this;

            this.restaurantService.getAllRestaurant().subscribe(function (res) {
              _this.listOfRestaurant = res;
            });
          }
        }, {
          key: "getFood",
          value: function getFood() {
            var _this2 = this;

            this.foodService.getAllFood().subscribe(function (res) {
              _this2.listOfFood = res;
            });
          }
        }, {
          key: "readNOId",
          value: function readNOId() {
            var _this3 = this;

            var No = 0;
            this.orderService.getAllOrder().subscribe(function (result) {
              if (result.length == 0) No = 1;else No = result.length + 1;
              _this3.orderNo = +No;
            });
          }
        }, {
          key: "decreaseCartItem",
          value: function decreaseCartItem(product) {
            this.orderService.decreaseProduct(product);
          }
        }, {
          key: "increaseCartItem",
          value: function increaseCartItem(product) {
            this.orderService.addProduct(product);
          }
        }, {
          key: "removeCartItem",
          value: function removeCartItem(product) {
            //this.orderService.removeProduct(product);
            this.presentAlertConfirm(product);
          }
        }, {
          key: "getTotal",
          value: function getTotal() {
            return this.cart.reduce(function (i, j) {
              return i + j.amount * j.Price;
            }, 0);
          }
        }, {
          key: "close",
          value: function close() {
            this.modalCtrl.dismiss();
          }
        }, {
          key: "order",
          value: function order(cart) {
            var _this4 = this;

            this.Total = 0;
            cart.forEach(function (element) {
              _this4.restaurantId = element.restaurantId;
              _this4.Total = _this4.Total + element.Price * element.amount;
              var orderDetails = {
                OrderId: _this4.orderNo,
                Restaurant: element.restaurantId,
                Food: element.id,
                Qty: element.amount,
                Price: element.Price
              };

              _this4.orderDetailService.create(orderDetails);
            });
            var order = {
              DateTime: this.regform.get('DeliveryDate').value,
              Customer: localStorage.getItem("userId"),
              Location: this.listOfRestaurant.find(function (c) {
                return c.id == _this4.restaurantId;
              }).location,
              OrderStatus: this.regform.get('transactionType').value,
              Total: this.Total,
              orderNo: this.orderNo,
              Driver: null,
              Vehicle: null,
              orderLocation: null //or droupLocation

            };
            this.orderService.create(order);
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm(product) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this5 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrl.create({
                        header: 'Clear cart !',
                        message: '<strong>Are you sure you want to remove all items in your cart ?</strong>',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'OK',
                          handler: function handler() {
                            _this5.orderService.removeProduct(product);
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "backPage",
          value: function backPage() {
            if (this.status == "driver") {
              this.router.navigate(["/menu/driver-home"]);
            } else if (this.status == "restaurant-home") {
              this.router.navigate(["/menu/restaurant-home"]);
            } else if (this.status == "restaurant-history") {
              this.router.navigate(["/menu/restaurant-history"]);
            } else {
              this.router.navigate(["/menu/order"]);
            }
          }
        }]);

        return OrderHistoryPage;
      }();

      OrderHistoryPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _Service_order_service__WEBPACK_IMPORTED_MODULE_9__["OrderService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _Service_restaurant_service__WEBPACK_IMPORTED_MODULE_10__["RestaurantService"]
        }, {
          type: _Service_order_detail_service__WEBPACK_IMPORTED_MODULE_8__["OrderDetailService"]
        }, {
          type: _Service_food_service__WEBPACK_IMPORTED_MODULE_7__["FoodService"]
        }, {
          type: _Service_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]
        }];
      };

      OrderHistoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-order-history',
        template: _raw_loader_order_history_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_order_history_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], OrderHistoryPage);
      /***/
    },

    /***/
    "PEmK":
    /*!*******************************************************!*\
      !*** ./src/app/order-history/order-history.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function PEmK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-badge {\n  color: #fff;\n  position: absolute;\n  top: -9px;\n  right: 2px;\n  border-radius: 100%;\n}\n\n.cart-icon {\n  font-size: 50px;\n}\n\n.cart-length {\n  color: var(--ion-color-primary);\n  position: absolute;\n  top: 18px;\n  left: 25px;\n  font-weight: 600;\n  font-size: 1em;\n  min-width: 25px;\n  z-index: 10;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG9yZGVyLWhpc3RvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLG1CQUFtQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsV0FBVztBQUNiIiwiZmlsZSI6Im9yZGVyLWhpc3RvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJhZGdlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtOXB4O1xyXG4gICAgcmlnaHQ6IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbn1cclxuIFxyXG4uY2FydC1pY29uIHtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuIFxyXG4uY2FydC1sZW5ndGgge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMThweDtcclxuICBsZWZ0OiAyNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgbWluLXdpZHRoOiAyNXB4O1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "Pywy":
    /*!***************************************************************!*\
      !*** ./src/app/order-history/order-history-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: OrderHistoryPageRoutingModule */

    /***/
    function Pywy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderHistoryPageRoutingModule", function () {
        return OrderHistoryPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _order_history_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./order-history.page */
      "LuXT");

      var routes = [{
        path: '',
        component: _order_history_page__WEBPACK_IMPORTED_MODULE_3__["OrderHistoryPage"]
      }];

      var OrderHistoryPageRoutingModule = function OrderHistoryPageRoutingModule() {
        _classCallCheck(this, OrderHistoryPageRoutingModule);
      };

      OrderHistoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OrderHistoryPageRoutingModule);
      /***/
    },

    /***/
    "mqkC":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-history/order-history.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function mqkC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"light\">\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"solid\" shape=\"round\" color=\"light\" (click)=\"backPage()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\" color=\"primary\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title style=\"text-align: center;\">Detail orders</ion-title>\n    <ion-buttons slot=\"end\">\n      <!-- <ion-button fill=\"solid\" shape=\"round\" color=\"light\">\n        <ion-icon slot=\"icon-only\" name=\"share-outline\" color=\"primary\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"solid\" shape=\"round\" color=\"light\">\n        <ion-icon slot=\"icon-only\" name=\"search-outline\" color=\"primary\"></ion-icon>\n      </ion-button> -->\n      <ion-button  >\n        <ion-badge *ngIf=\"cart.length > 0\">{{ cartItemCount | async }}</ion-badge>\n        <ion-icon slot=\"icon-only\" class=\"cart-icon\" name=\"cart\"></ion-icon>\n      </ion-button> \n    </ion-buttons>\n   </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <!-- <div class=\"ion-text-end\">\n    <ion-button (click)=\"close()\" fill=\"clear\" color=\"dark\">\n      <ion-icon name=\"close\" slot=\"start\"></ion-icon>\n    </ion-button>\n  </div> -->\n  <div class=\"ion-padding\">\n    <ion-list>\n      <ion-item *ngFor=\"let p of cart\" class=\"ion-text-wrap\">\n        <ion-grid>\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"2\" class=\"ion-align-self-center\">\n              <ion-button color=\"medium\" fill=\"clear\" >\n                <ion-icon name=\"remove-circle\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n            </ion-col>\n            <ion-col size=\"1\" class=\"ion-align-self-center\">\n              {{ p.amount }}\n            </ion-col>\n            <ion-col size=\"2\" class=\"ion-align-self-center\">\n              <ion-button color=\"medium\" fill=\"clear\" >\n                <ion-icon name=\"add-circle\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n            </ion-col>\n            <ion-col size=\"2\" offset=\"5\">\n              <ion-button color=\"medium\" fill=\"clear\" >\n                <ion-icon name=\"close-circle\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"5\">\n              <b>{{ p.Name }}</b>\n            </ion-col>\n            <ion-col size=\"4\">\n              <b>{{ p.Price | currency:'ETB'}}</b>\n            </ion-col>\n            <ion-col size=\"3\" class=\"ion-text-end\">\n              {{ p.amount * p.Price | currency:'ETB' }}\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"9\">\n              Total:\n            </ion-col>\n            <ion-col size=\"3\" class=\"ion-text-end\">\n              {{ getTotal() | currency:'ETB' }}\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n   \n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "piv+":
    /*!*******************************************************!*\
      !*** ./src/app/order-history/order-history.module.ts ***!
      \*******************************************************/

    /*! exports provided: OrderHistoryPageModule */

    /***/
    function piv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderHistoryPageModule", function () {
        return OrderHistoryPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _order_history_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./order-history-routing.module */
      "Pywy");
      /* harmony import */


      var _order_history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./order-history.page */
      "LuXT");

      var OrderHistoryPageModule = function OrderHistoryPageModule() {
        _classCallCheck(this, OrderHistoryPageModule);
      };

      OrderHistoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _order_history_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderHistoryPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_order_history_page__WEBPACK_IMPORTED_MODULE_6__["OrderHistoryPage"]]
      })], OrderHistoryPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=order-history-order-history-module-es5.js.map