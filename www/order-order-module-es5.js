(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-order-module"], {
    /***/
    "+p+5":
    /*!***************************************!*\
      !*** ./src/app/order/order.module.ts ***!
      \***************************************/

    /*! exports provided: OrderPageModule */

    /***/
    function p5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderPageModule", function () {
        return OrderPageModule;
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


      var _order_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./order-routing.module */
      "DM6G");
      /* harmony import */


      var _order_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./order.page */
      "uX05");

      var OrderPageModule = function OrderPageModule() {
        _classCallCheck(this, OrderPageModule);
      };

      OrderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _order_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderPageRoutingModule"]],
        declarations: [_order_page__WEBPACK_IMPORTED_MODULE_6__["OrderPage"]]
      })], OrderPageModule);
      /***/
    },

    /***/
    "DM6G":
    /*!***********************************************!*\
      !*** ./src/app/order/order-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: OrderPageRoutingModule */

    /***/
    function DM6G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderPageRoutingModule", function () {
        return OrderPageRoutingModule;
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


      var _order_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./order.page */
      "uX05");

      var routes = [{
        path: '',
        component: _order_page__WEBPACK_IMPORTED_MODULE_3__["OrderPage"]
      }];

      var OrderPageRoutingModule = function OrderPageRoutingModule() {
        _classCallCheck(this, OrderPageRoutingModule);
      };

      OrderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OrderPageRoutingModule);
      /***/
    },

    /***/
    "u6Jy":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order/order.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function u6Jy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\" >\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Recent orders</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content  [fullscreen]=\"true\">\n  <div class=\"message\" *ngIf=\"massge\" >\n    <ion-grid >\n      <ion-row>\n        <ion-label>{{messageOrder}}</ion-label>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div class=\"orders\">\n    <ion-row *ngFor=\"let meal of listOfOrder\" class=\"ion-padding meal-row\">\n     <ion-col size=\"8\" class=\"border-bottom\">\n        <ion-label>\n          {{ meal.Customer }}\n          <p>{{ meal.DateTime }}</p>\n          <span>\n            <ion-button (click)=\"location(meal.Location)\"><ion-icon name=\"location-outline\" ></ion-icon></ion-button>\n            </span>\n          <p>{{meal.OrderStatus}}</p>\n        </ion-label>\n        <ion-text color=\"dark\"><b>Total : {{ meal.Total | currency:'ETB' }}</b></ion-text>\n      </ion-col>\n      <ion-col size=\"4\" class=\"border-bottom\">\n        <ion-button fill=\"clear\" (click)=\"viewOrder(meal.id)\">\n          view order\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </div> \n</ion-content>\n";
      /***/
    },

    /***/
    "uX05":
    /*!*************************************!*\
      !*** ./src/app/order/order.page.ts ***!
      \*************************************/

    /*! exports provided: OrderPage */

    /***/
    function uX05(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderPage", function () {
        return OrderPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_order_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./order.page.html */
      "u6Jy");
      /* harmony import */


      var _order_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./order.page.scss */
      "wIiX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _Service_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../Service/account.service */
      "6wYF");
      /* harmony import */


      var _Service_food_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../Service/food.service */
      "Dkj+");
      /* harmony import */


      var _Service_order_detail_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../Service/order-detail.service */
      "8D9V");
      /* harmony import */


      var _Service_order_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../Service/order.service */
      "VNSQ");
      /* harmony import */


      var _Service_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../Service/shared.service */
      "ldse");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var OrderPage = /*#__PURE__*/function () {
        function OrderPage(foodService, orderService, accountService, orderDetailsService, router, sharedService, alertCtrl // private _Activatedroute:ActivatedRoute,
        ) {
          _classCallCheck(this, OrderPage);

          this.foodService = foodService;
          this.orderService = orderService;
          this.accountService = accountService;
          this.orderDetailsService = orderDetailsService;
          this.router = router;
          this.sharedService = sharedService;
          this.alertCtrl = alertCtrl;
          this.listOfOrder = [];
          this.cart = [];
        }

        _createClass(OrderPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // this.id = this._Activatedroute.snapshot.paramMap.get("id");
            this.getFood();
            this.getOrder();
            this.getAccount();
            this.getOrderDetails(); //this.lp = new LocationPicker('map');
          }
        }, {
          key: "getFood",
          value: function getFood() {
            var _this = this;

            this.foodService.getAllFood().subscribe(function (res) {
              _this.listOfFood = res;
            });
          }
        }, {
          key: "getAccount",
          value: function getAccount() {
            var _this2 = this;

            this.accountService.getAllAccount().subscribe(function (res) {
              _this2.listOfAccount = res;
            });
          }
        }, {
          key: "getOrderDetails",
          value: function getOrderDetails() {
            var _this3 = this;

            this.orderDetailsService.getAllOrderDetail().subscribe(function (res) {
              _this3.listOfOrderDetails = res;
            });
          }
        }, {
          key: "getOrder",
          value: function getOrder() {
            var _this4 = this;

            this.orderService.getAllOrder().subscribe(function (res) {
              _this4.UserId = localStorage.getItem("userId");
              var result = res.filter(function (c) {
                return c.Customer == _this4.UserId;
              });

              if (result.length > 0) {
                result.forEach(function (element) {
                  _this4.accountService.getAllAccount().subscribe(function (result) {
                    var data = {
                      id: element.id,
                      DateTime: element.DateTime,
                      Customer: result.find(function (c) {
                        return c.id == element.Customer;
                      }).FullName,
                      Location: element.Location,
                      OrderStatus: element.restaurantStatus.find(function (c) {
                        return c.isChecked == true;
                      }).val,
                      Total: element.Total,
                      Driver: element.Driver,
                      Vehicle: element.Vehicle,
                      orderNo: element.orderNo,
                      orderLocation: element.orderLocation
                    };

                    _this4.listOfOrder.push(data); //this.viewOrder(element.id)

                  });
                });
              } else {
                _this4.massge = true;
                _this4.messageOrder = "Preparing your order ...";
              }
            });
          }
        }, {
          key: "viewOrder",
          value: function viewOrder(id) {
            var _this5 = this;

            this.countItems = 0;
            this.cart = [];
            var orderNo = this.listOfOrder.find(function (c) {
              return c.id == id;
            }).orderNo;
            var orderDetails = this.listOfOrderDetails.filter(function (c) {
              return c.OrderId == orderNo;
            });
            orderDetails.forEach(function (el) {
              var data = {
                CookingTime: _this5.listOfFood.find(function (c) {
                  return c.id == el.Food;
                }).CookingTime,
                DeliveryTime: _this5.listOfFood.find(function (c) {
                  return c.id == el.Food;
                }).DeliveryTime,
                Description: _this5.listOfFood.find(function (c) {
                  return c.id == el.Food;
                }).Description,
                Name: _this5.listOfFood.find(function (c) {
                  return c.id == el.Food;
                }).Name,
                Price: _this5.listOfFood.find(function (c) {
                  return c.id == el.Food;
                }).Price,
                amount: el.Qty,
                categoryId: _this5.listOfFood.find(function (c) {
                  return c.id == el.Food;
                }).categoryId,
                id: el.Food,
                picture: _this5.listOfFood.find(function (c) {
                  return c.id == el.Food;
                }).picture,
                restaurantId: _this5.listOfFood.find(function (c) {
                  return c.id == el.Food;
                }).restaurantId,
                type: _this5.listOfFood.find(function (c) {
                  return c.id == el.Food;
                }).type,
                orderDetailsId: el.id,
                orderStatus: true
              };

              _this5.cart.push(data);

              _this5.countItems = _this5.cart.length;
              console.log(_this5.countItems);
            });
            this.orderService.addOrder(this.cart);
            this.router.navigate(["/menu/order-history"]);
          }
        }, {
          key: "location",
          value: function location(_location) {
            this.sharedService.status.next("order");
            this.sharedService.RestaurantLocation.next(_location);
            this.router.navigate(["/menu/location"]);
          }
        }]);

        return OrderPage;
      }();

      OrderPage.ctorParameters = function () {
        return [{
          type: _Service_food_service__WEBPACK_IMPORTED_MODULE_6__["FoodService"]
        }, {
          type: _Service_order_service__WEBPACK_IMPORTED_MODULE_8__["OrderService"]
        }, {
          type: _Service_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"]
        }, {
          type: _Service_order_detail_service__WEBPACK_IMPORTED_MODULE_7__["OrderDetailService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _Service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["AlertController"]
        }];
      };

      OrderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-order',
        template: _raw_loader_order_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_order_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], OrderPage);
      /***/
    },

    /***/
    "wIiX":
    /*!***************************************!*\
      !*** ./src/app/order/order.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function wIiX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar ion-icon {\n  font-size: 25px;\n}\n\nion-content {\n  position: absolute;\n  --background:#f8f9fa;\n  --padding-bottom: 50px;\n}\n\nion-content .orders {\n  margin-top: 58px;\n}\n\n.light-bg {\n  background: #ffffff;\n  z-index: 10;\n}\n\n.meal-row {\n  padding-bottom: 0px;\n}\n\n.border-bottom {\n  border-bottom: 1px solid var(--ion-color-step-150, rgba(0, 0, 0, 0.07));\n}\n\n#map {\n  width: 60%;\n  height: 280px;\n}\n\n.message {\n  padding-top: 83px;\n  padding-left: 12px;\n  color: #337ab7;\n  font-size: 27px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG9yZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLGVBQUE7QUFESjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtBQURGOztBQUVJO0VBQ0UsZ0JBQUE7QUFBTjs7QUFHQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFDQTtFQUNFLHVFQUFBO0FBRUY7O0FBQUE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtBQUdGOztBQURBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBSUYiLCJmaWxlIjoib3JkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi10b29sYmFyIHtcclxuICBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgfVxyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLS1iYWNrZ3JvdW5kOiNmOGY5ZmE7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgIC5vcmRlcnN7XHJcbiAgICAgIG1hcmdpbi10b3A6IDU4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4ubGlnaHQtYmcge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIHotaW5kZXg6IDEwO1xyXG59XHJcbi5tZWFsLXJvdyB7XHJcbiAgcGFkZGluZy1ib3R0b206IDBweDtcclxufVxyXG4uYm9yZGVyLWJvdHRvbSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgcmdiYSgwLCAwLCAwLCAwLjA3KSk7XHJcbn1cclxuI21hcCB7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBoZWlnaHQ6IDI4MHB4O1xyXG59XHJcbi5tZXNzYWdle1xyXG4gIHBhZGRpbmctdG9wOiA4M3B4O1xyXG4gIHBhZGRpbmctbGVmdDogMTJweDtcclxuICBjb2xvcjogIzMzN2FiNztcclxuICBmb250LXNpemU6IDI3cHg7XHJcbn0iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=order-order-module-es5.js.map