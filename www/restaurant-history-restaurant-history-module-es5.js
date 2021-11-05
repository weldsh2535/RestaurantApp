(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["restaurant-history-restaurant-history-module"], {
    /***/
    "7G/e":
    /*!*****************************************************************!*\
      !*** ./src/app/restaurant-history/restaurant-history.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function GE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-segment .message {\n  padding-left: 165px;\n}\n\nion-row .message {\n  padding-top: 19px;\n  padding-left: 107px;\n}\n\nion-grid {\n  border-radius: 9px;\n  background-color: whitesmoke;\n  height: 79px;\n}\n\nion-label .message {\n  padding-left: 60px;\n  padding-top: 24px;\n  text-align: center;\n  font-size: 28px;\n  font-style: initial;\n  font-family: cursive;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJlc3RhdXJhbnQtaGlzdG9yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBbUI7QUFDdkI7O0FBQ0U7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0FBRXZCOztBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixZQUFZO0FBR2hCOztBQURBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFJdEIiLCJmaWxlIjoicmVzdGF1cmFudC1oaXN0b3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWdtZW50IC5tZXNzYWdle1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNjVweDtcclxuICB9XHJcbiAgaW9uLXJvdyAubWVzc2FnZXtcclxuICAgIHBhZGRpbmctdG9wOiAxOXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMDdweDtcclxufVxyXG5pb24tZ3JpZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgaGVpZ2h0OiA3OXB4O1xyXG59XHJcbmlvbi1sYWJlbCAubWVzc2FnZXtcclxuICBwYWRkaW5nLWxlZnQ6IDYwcHg7XHJcbiAgcGFkZGluZy10b3A6IDI0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBmb250LXN0eWxlOiBpbml0aWFsO1xyXG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG59Il19 */";
      /***/
    },

    /***/
    "X/8m":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurant-history/restaurant-history.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function X8m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"text-align: center\">My orders</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-segment  (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button value=\"daily\">\n      <ion-label>Daily</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"week\">\n      <ion-label>Weekly</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"month\">\n      <ion-label>Monthly</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"year\">\n      <ion-label>Yearly</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  <div class=\"message\" *ngIf=\"massge\" >\n    <ion-grid class=\"message\" >\n      <ion-row class=\"message\">\n        <ion-label class=\"message\">{{message}}</ion-label>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div class=\"orders\">\n    <ion-row\n      *ngFor=\"let meal of listOfOrder ;let i = index\"\n      class=\"ion-padding meal-row\"\n    >\n      <ion-col size=\"8\" class=\"border-bottom\">\n        <ion-label>\n          <p color=\"primary\">Total : {{ meal.Total | currency:'ETB' }}</p>\n        </ion-label>\n        <ion-label>\n          <p>{{meal.DateTime|date:'short'}}</p>\n        </ion-label>\n        <ion-button style=\"margin-top: -14px;\" fill=\"clear\" (click)=\"viewOrder(meal.id)\">\n          view order\n        </ion-button>\n        <ion-row class=\"status\">\n          <ion-label style=\"padding-top: 9px; padding-left: 5px\"\n            >Status</ion-label\n          >\n          <ion-button style=\"margin-top: -1px;\" fill=\"clear\" >\n            Ready to service\n          </ion-button>\n      </ion-row>\n      </ion-col>\n      <ion-col size=\"4\" class=\"border-bottom\">\n        <ion-label>\n          {{ meal.Customer }}\n          <p>{{ meal.PhoneNumber }}</p>\n          <span>\n            <ion-button (click)=\"location(meal.CLocation)\"\n              ><ion-icon name=\"location-outline\"></ion-icon\n            ></ion-button>\n          </span>\n        </ion-label>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "f/5+":
    /*!*************************************************************************!*\
      !*** ./src/app/restaurant-history/restaurant-history-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: RestaurantHistoryPageRoutingModule */

    /***/
    function f5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RestaurantHistoryPageRoutingModule", function () {
        return RestaurantHistoryPageRoutingModule;
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


      var _restaurant_history_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./restaurant-history.page */
      "jFx+");

      var routes = [{
        path: '',
        component: _restaurant_history_page__WEBPACK_IMPORTED_MODULE_3__["RestaurantHistoryPage"]
      }];

      var RestaurantHistoryPageRoutingModule = function RestaurantHistoryPageRoutingModule() {
        _classCallCheck(this, RestaurantHistoryPageRoutingModule);
      };

      RestaurantHistoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RestaurantHistoryPageRoutingModule);
      /***/
    },

    /***/
    "jFx+":
    /*!***************************************************************!*\
      !*** ./src/app/restaurant-history/restaurant-history.page.ts ***!
      \***************************************************************/

    /*! exports provided: RestaurantHistoryPage */

    /***/
    function jFx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RestaurantHistoryPage", function () {
        return RestaurantHistoryPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_restaurant_history_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./restaurant-history.page.html */
      "X/8m");
      /* harmony import */


      var _restaurant_history_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./restaurant-history.page.scss */
      "7G/e");
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var RestaurantHistoryPage = /*#__PURE__*/function () {
        function RestaurantHistoryPage(orderService, accountService, orderDetailsService, foodService, sharedService, router, datepipe) {
          _classCallCheck(this, RestaurantHistoryPage);

          this.orderService = orderService;
          this.accountService = accountService;
          this.orderDetailsService = orderDetailsService;
          this.foodService = foodService;
          this.sharedService = sharedService;
          this.router = router;
          this.datepipe = datepipe;
          this.cart = [];
          this.model = {};
          this.date = new Date();
          this.increament = 0; //this.currentDate = new Date().toDateString();

          this.currentMonth = new Date().getMonth() + 1;
          this.currentYear = new Date().getFullYear();
          this.currentDate = new Date().getDate();
        }

        _createClass(RestaurantHistoryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.model.startdate = new Date();
            this.searchdate();
            this.getOrder();
            this.getFood();
            this.getOrderDetails();
          }
        }, {
          key: "getOrderDetails",
          value: function getOrderDetails() {
            var _this = this;

            this.orderDetailsService.getAllOrderDetail().subscribe(function (res) {
              _this.listOfOrderDetails = res;
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
          key: "getOrder",
          value: function getOrder() {
            var _this3 = this;

            this.orderService.getAllOrder().subscribe(function (res) {
              _this3.UserId = localStorage.getItem("userId");
              var result = res.filter(function (c) {
                return c.restaurantId == _this3.UserId && c.restaurantStatuses.find(function (c) {
                  return c.isChecked == true && c.val == "ready to service";
                });
              });

              if (result.length > 0) {
                _this3.listOfOrder = [];
                result.forEach(function (element) {
                  _this3.accountService.getAllAccount().subscribe(function (result) {
                    var data = {
                      id: element.id,
                      DateTime: element.dateTime,
                      Customer: result.find(function (c) {
                        return c.id == element.customer;
                      }).fullName,
                      PhoneNumber: result.find(function (c) {
                        return c.id == element.customer;
                      }).phonenumber,
                      CLocation: result.find(function (c) {
                        return c.id == element.customer;
                      }).locationId,
                      RLocation: element.location,
                      Location: element.location,
                      restaurantStatus: element.restaurantStatuses,
                      Total: element.total,
                      Driver: element.driver,
                      Vehicle: element.vehicle,
                      orderLocation: element.orderLocation
                    };

                    _this3.listOfOrder.push(data);
                  });
                });
              }
            });
          }
        }, {
          key: "viewOrder",
          value: function viewOrder(id) {
            var _this4 = this;

            this.cart = [];
            var orderNo = this.listOfOrder.find(function (c) {
              return c.id == id;
            }).orderNo;
            var orderDetails = this.listOfOrderDetails.filter(function (c) {
              return c.OrderId == orderNo;
            });
            orderDetails.forEach(function (el) {
              var data = {
                CookingTime: _this4.listOfFood.find(function (c) {
                  return c.id == el.foodId;
                }).cookingTime,
                DeliveryTime: _this4.listOfFood.find(function (c) {
                  return c.id == el.foodId;
                }).deliveryTime,
                Description: _this4.listOfFood.find(function (c) {
                  return c.id == el.foodId;
                }).description,
                Name: _this4.listOfFood.find(function (c) {
                  return c.id == el.foodId;
                }).name,
                Price: _this4.listOfFood.find(function (c) {
                  return c.id == el.foodId;
                }).price,
                amount: el.qty,
                categoryId: _this4.listOfFood.find(function (c) {
                  return c.id == el.foodId;
                }).categoryId,
                id: el.foodId,
                picture: _this4.listOfFood.find(function (c) {
                  return c.id == el.foodId;
                }).picture,
                restaurantId: _this4.listOfFood.find(function (c) {
                  return c.id == el.foodId;
                }).restaurantId,
                type: _this4.listOfFood.find(function (c) {
                  return c.id == el.foodId;
                }).type,
                orderDetailsId: el.id,
                orderStatus: true
              };

              _this4.cart.push(data);
            });
            this.orderService.addOrder(this.cart);
            this.sharedService.status.next("restaurant-history");
            this.router.navigate(["/menu/order-history"]);
          }
        }, {
          key: "location",
          value: function location(_location) {
            this.sharedService.status.next("restaurant-history");
            this.sharedService.RestaurantLocation.next(_location);
            this.router.navigate(["/menu/location"]);
          } // Dummy refresher function

        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            setTimeout(function () {
              event.target.complete();
            }, 2000);
          } // to calculate week of current date

        }, {
          key: "searchdate",
          value: function searchdate() {
            //debugger;
            console.log(this.model.startdate);
            var getdate = this.datepipe.transform(this.model.startdate, 'yyyy,M,d');

            function startOfWeek(date) {
              var diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);
              return new Date(date.setDate(diff));
            }

            function endofweek(date) {
              var lastday = date.getDate() - (date.getDay() - 1) + 6;
              return new Date(date.setDate(lastday));
            }

            var dt = new Date(getdate);
            this.startdateofweek = this.datepipe.transform(startOfWeek(dt)); //convertion of currentStartDate

            this.startMonth = new Date(this.startdateofweek).getMonth() + 1;
            this.startYear = new Date(this.startdateofweek).getFullYear();
            this.startDate = new Date(this.startdateofweek).getDate();
            console.log(this.startdateofweek);
            this.Enddateofweek = this.datepipe.transform(endofweek(dt)); //convertion of currentEndDate

            this.endMonth = new Date(this.Enddateofweek).getMonth() + 1;
            this.endYear = new Date(this.Enddateofweek).getFullYear();
            this.endDate = new Date(this.Enddateofweek).getDate();
            console.log(this.Enddateofweek);

            function addDays(date, days) {
              var find = new Date(Number(date));
              find.setDate(date.getDate() + days);
              return find;
            }

            var date = new Date(startOfWeek(dt));
            this.mon = this.datepipe.transform(startOfWeek(dt), 'EEEE, MMMM d');
            this.Tuesday = this.datepipe.transform(addDays(date, 1), 'EEEE, MMMM d');
            this.Wednedday = this.datepipe.transform(addDays(date, 2), 'EEEE, MMMM d');
            this.Thruds = this.datepipe.transform(addDays(date, 3), 'EEEE, MMMM d');
            this.Friday = this.datepipe.transform(addDays(date, 4), 'EEEE, MMMM d');
            this.Sat = this.datepipe.transform(addDays(date, 5), 'EEEE, MMMM d');
            this.Sun = this.datepipe.transform(endofweek(dt), 'EEEE, MMMM d');
          }
        }, {
          key: "segmentChanged",
          value: function segmentChanged(ev) {
            // console.log('Segment changed', ev.detail.value);
            if (ev.detail.value == "daily") {
              this.scheduleOrder(this.currentDate, "daily");
            } else if (ev.detail.value == "week") {
              this.scheduleOrder(this.currentWeek, "week");
            } else if (ev.detail.value == "month") {
              this.scheduleOrder(this.currentMonth, "month");
            } else if (ev.detail.value == "year") {
              this.scheduleOrder(this.currentYear, "year");
            }
          }
        }, {
          key: "scheduleOrder",
          value: function scheduleOrder(date, event) {
            var _this5 = this;

            this.orderService.getAllOrder().subscribe(function (res) {
              _this5.UserId = localStorage.getItem("userId");
              var result = res.filter(function (c) {
                return c.restaurantId == _this5.UserId && c.restaurantStatuses.find(function (c) {
                  return c.isChecked == true && c.val == "ready to service";
                });
              });

              if (result.length > 0) {
                _this5.listOfOrder = [];
                result.forEach(function (element) {
                  _this5.accountService.getAllAccount().subscribe(function (result) {
                    var data = {
                      id: element.id,
                      DateTime: element.dateTime,
                      Customer: result.find(function (c) {
                        return c.id == element.customer;
                      }).fullName,
                      PhoneNumber: result.find(function (c) {
                        return c.id == element.customer;
                      }).phonenumber,
                      CLocation: result.find(function (c) {
                        return c.id == element.customer;
                      }).locationId,
                      RLocation: element.location,
                      Location: element.location,
                      restaurantStatus: element.restaurantStatuses,
                      Total: element.total,
                      Driver: element.driver,
                      Vehicle: element.vehicle,
                      orderLocation: element.orderLocation
                    };
                    var dateOfOrders = new Date(element.dateTime).getDate(); // to calculate week convertion

                    _this5.orderMonth = new Date(element.dateTime).getMonth() + 1;
                    _this5.orderYear = new Date(element.dateTime).getFullYear();
                    _this5.orderDate = new Date(element.dateTime).getDate();
                    var monthlyOrders = new Date(element.dateTime).getMonth() + 1;
                    var yearlyOrdes = new Date(element.dateTime).getFullYear(); //  console.log("date  =="+dateOfOrders + "month==" +monthlyOrders +"year=="+yearlyOrdes);

                    if (event == "daily") {
                      _this5.increament = 0;

                      if (date == dateOfOrders) {
                        _this5.increament = _this5.increament + 1;

                        _this5.listOfOrder.push(data);

                        _this5.listOfOrder.sort(function (a, b) {
                          return new Date(b.DateTime).getTime() - new Date(a.DateTime).getTime();
                        });
                      }

                      if (_this5.increament == 0) {
                        _this5.massge = true;
                        _this5.message = "no orders in this date";
                      } else {
                        _this5.massge = false;
                      }
                    } else if (event == "week") {
                      _this5.increament = 0;

                      if (_this5.startDate <= _this5.orderDate && _this5.startMonth == _this5.orderMonth && _this5.startYear == _this5.orderYear && _this5.endDate >= _this5.orderDate && _this5.endMonth == _this5.orderMonth && _this5.endYear == _this5.orderYear) {
                        _this5.increament = _this5.increament + 1;

                        _this5.listOfOrder.push(data);

                        _this5.listOfOrder.sort(function (a, b) {
                          return new Date(b.DateTime).getTime() - new Date(a.DateTime).getTime();
                        });
                      }

                      if (_this5.increament == 0) {
                        _this5.massge = true;
                        _this5.message = "no orders in this weeks";
                      } else {
                        _this5.massge = false;
                      }
                    } else if (event == "month") {
                      _this5.increament = 0;

                      if (date == monthlyOrders) {
                        _this5.increament = _this5.increament + 1;

                        _this5.listOfOrder.push(data);

                        _this5.listOfOrder.sort(function (a, b) {
                          return new Date(b.DateTime).getTime() - new Date(a.DateTime).getTime();
                        });
                      }

                      if (_this5.increament == 0) {
                        _this5.massge = true;
                        _this5.message = "no orders in this months";
                      } else {
                        _this5.massge = false;
                      }
                    } else if (event == "year") {
                      _this5.increament = 0;

                      if (date == yearlyOrdes) {
                        _this5.increament = _this5.increament + 1;

                        _this5.listOfOrder.push(data);

                        _this5.listOfOrder.sort(function (a, b) {
                          return new Date(b.DateTime).getTime() - new Date(a.DateTime).getTime();
                        });
                      }

                      if (_this5.increament == 0) {
                        _this5.massge = true;
                        _this5.message = "no orders years";
                      } else {
                        _this5.massge = false;
                      }
                    }
                  });
                });
              }
            });
          }
        }]);

        return RestaurantHistoryPage;
      }();

      RestaurantHistoryPage.ctorParameters = function () {
        return [{
          type: _Service_order_service__WEBPACK_IMPORTED_MODULE_8__["OrderService"]
        }, {
          type: _Service_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"]
        }, {
          type: _Service_order_detail_service__WEBPACK_IMPORTED_MODULE_7__["OrderDetailService"]
        }, {
          type: _Service_food_service__WEBPACK_IMPORTED_MODULE_6__["FoodService"]
        }, {
          type: _Service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]
        }];
      };

      RestaurantHistoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-restaurant-history',
        template: _raw_loader_restaurant_history_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_restaurant_history_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RestaurantHistoryPage);
      /***/
    },

    /***/
    "qmIW":
    /*!*****************************************************************!*\
      !*** ./src/app/restaurant-history/restaurant-history.module.ts ***!
      \*****************************************************************/

    /*! exports provided: RestaurantHistoryPageModule */

    /***/
    function qmIW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RestaurantHistoryPageModule", function () {
        return RestaurantHistoryPageModule;
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


      var _restaurant_history_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./restaurant-history-routing.module */
      "f/5+");
      /* harmony import */


      var _restaurant_history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./restaurant-history.page */
      "jFx+");

      var RestaurantHistoryPageModule = function RestaurantHistoryPageModule() {
        _classCallCheck(this, RestaurantHistoryPageModule);
      };

      RestaurantHistoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _restaurant_history_routing_module__WEBPACK_IMPORTED_MODULE_5__["RestaurantHistoryPageRoutingModule"]],
        declarations: [_restaurant_history_page__WEBPACK_IMPORTED_MODULE_6__["RestaurantHistoryPage"]]
      })], RestaurantHistoryPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=restaurant-history-restaurant-history-module-es5.js.map