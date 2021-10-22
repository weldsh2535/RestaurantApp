(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["driver-home-driver-home-module"], {
    /***/
    "+cje":
    /*!***********************************************!*\
      !*** ./src/app/Service/restaurant.service.ts ***!
      \***********************************************/

    /*! exports provided: RestaurantService */

    /***/
    function cje(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RestaurantService", function () {
        return RestaurantService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/internal/operators/map */
      "q3Kh");
      /* harmony import */


      var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angularfire2/firestore */
      "CqG3");
      /* harmony import */


      var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _common_bad_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../common/bad-input */
      "XEKg");
      /* harmony import */


      var _common_not_found_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../common/not-found-error */
      "5Jak");
      /* harmony import */


      var _common_app_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../common/app-error */
      "/GcI");

      var RestaurantService = /*#__PURE__*/function () {
        function RestaurantService(db) {
          _classCallCheck(this, RestaurantService);

          this.db = db;
          this.restaurantCollectionList = db.collection('Restaurant');
        }

        _createClass(RestaurantService, [{
          key: "create",
          value: function create(restaurantObj) {
            return this.restaurantCollectionList.add(restaurantObj);
          }
        }, {
          key: "getAllRestaurant",
          value: function getAllRestaurant() {
            this.restaurantList = this.restaurantCollectionList.snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
              return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return Object.assign({
                  id: id
                }, data);
              });
            }));
            return this.restaurantList;
          }
        }, {
          key: "getRestaurant",
          value: function getRestaurant(id) {
            return this.restaurantCollectionList.doc(id).valueChanges();
          }
        }, {
          key: "updateRestaurant",
          value: function updateRestaurant(restaurantObj, id) {
            return this.restaurantCollectionList.doc(id).update(restaurantObj)["catch"](this.handleError);
          }
        }, {
          key: "removeRestaurant",
          value: function removeRestaurant(id) {
            return this.restaurantCollectionList.doc(id)["delete"]()["catch"](this.handleError);
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            if (error.status === 400) return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]["throw"](new _common_bad_input__WEBPACK_IMPORTED_MODULE_5__["BadInput"](error.json()));
            if (error.status === 404) return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]["throw"](new _common_not_found_error__WEBPACK_IMPORTED_MODULE_6__["NotFoundError"]());
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]["throw"](new _common_app_error__WEBPACK_IMPORTED_MODULE_7__["AppError"](error));
          }
        }]);

        return RestaurantService;
      }();

      RestaurantService.ctorParameters = function () {
        return [{
          type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
        }];
      };

      RestaurantService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], RestaurantService);
      /***/
    },

    /***/
    "8pzK":
    /*!***********************************************************!*\
      !*** ./src/app/driver-home/driver-home-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: DriverHomePageRoutingModule */

    /***/
    function pzK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DriverHomePageRoutingModule", function () {
        return DriverHomePageRoutingModule;
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


      var _driver_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./driver-home.page */
      "V5RG");

      var routes = [{
        path: '',
        component: _driver_home_page__WEBPACK_IMPORTED_MODULE_3__["DriverHomePage"]
      }];

      var DriverHomePageRoutingModule = function DriverHomePageRoutingModule() {
        _classCallCheck(this, DriverHomePageRoutingModule);
      };

      DriverHomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DriverHomePageRoutingModule);
      /***/
    },

    /***/
    "R1vZ":
    /*!***************************************************!*\
      !*** ./src/app/driver-home/driver-home.module.ts ***!
      \***************************************************/

    /*! exports provided: DriverHomePageModule */

    /***/
    function R1vZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DriverHomePageModule", function () {
        return DriverHomePageModule;
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


      var _driver_home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./driver-home-routing.module */
      "8pzK");
      /* harmony import */


      var _driver_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./driver-home.page */
      "V5RG");

      var DriverHomePageModule = function DriverHomePageModule() {
        _classCallCheck(this, DriverHomePageModule);
      };

      DriverHomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _driver_home_routing_module__WEBPACK_IMPORTED_MODULE_5__["DriverHomePageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_driver_home_page__WEBPACK_IMPORTED_MODULE_6__["DriverHomePage"]]
      })], DriverHomePageModule);
      /***/
    },

    /***/
    "V5RG":
    /*!*************************************************!*\
      !*** ./src/app/driver-home/driver-home.page.ts ***!
      \*************************************************/

    /*! exports provided: DriverHomePage */

    /***/
    function V5RG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DriverHomePage", function () {
        return DriverHomePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_driver_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./driver-home.page.html */
      "eptt");
      /* harmony import */


      var _driver_home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./driver-home.page.scss */
      "wzRR");
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


      var _Service_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../Service/account.service */
      "6wYF");
      /* harmony import */


      var _Service_driver_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../Service/driver.service */
      "1D3i");
      /* harmony import */


      var _Service_food_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../Service/food.service */
      "Dkj+");
      /* harmony import */


      var _Service_order_detail_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../Service/order-detail.service */
      "8D9V");
      /* harmony import */


      var _Service_order_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../Service/order.service */
      "VNSQ");
      /* harmony import */


      var _Service_restaurant_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../Service/restaurant.service */
      "+cje");
      /* harmony import */


      var _Service_shared_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../Service/shared.service */
      "ldse");

      var DriverHomePage = /*#__PURE__*/function () {
        function DriverHomePage(fb, foodService, orderService, accountService, orderDetailsService, router, sharedService, restaurantService, driverservice // private _Activatedroute:ActivatedRoute,
        ) {
          _classCallCheck(this, DriverHomePage);

          this.fb = fb;
          this.foodService = foodService;
          this.orderService = orderService;
          this.accountService = accountService;
          this.orderDetailsService = orderDetailsService;
          this.router = router;
          this.sharedService = sharedService;
          this.restaurantService = restaurantService;
          this.driverservice = driverservice;
          this.listOfOrder = [];
          this.cart = [];
          this.regform = this.fb.group({});
          this.selectedIng = [];
          this.numberOfChecks = 1;
          this.checkBoxLimit = 1;
          this.dayFinished = [];
          this.driverstatus = [];
        }

        _createClass(DriverHomePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.regform = this.fb.group({
              status: [""]
            });
            this.getFood();
            this.getOrder();
            this.getAllOrder();
            this.getAccount();
            this.getOrderDetails();
            this.getRestaurant();
            this.getDriver(); // this.id = this._Activatedroute.snapshot.paramMap.get("id");
            //this.lp = new LocationPicker('map');
          }
        }, {
          key: "getDriver",
          value: function getDriver() {
            var _this = this;

            this.driverservice.getAllDriver().subscribe(function (res) {
              _this.listOfDriver = res;
            });
          }
        }, {
          key: "getRestaurant",
          value: function getRestaurant() {
            var _this2 = this;

            this.restaurantService.getAllRestaurant().subscribe(function (res) {
              _this2.listOfRestaurant = res;
            });
          }
        }, {
          key: "getFood",
          value: function getFood() {
            var _this3 = this;

            this.foodService.getAllFood().subscribe(function (res) {
              _this3.listOfFood = res;
            });
          }
        }, {
          key: "getAccount",
          value: function getAccount() {
            var _this4 = this;

            this.accountService.getAllAccount().subscribe(function (res) {
              _this4.listOfAccount = res;
            });
          }
        }, {
          key: "getOrderDetails",
          value: function getOrderDetails() {
            var _this5 = this;

            this.orderDetailsService.getAllOrderDetail().subscribe(function (res) {
              _this5.listOfOrderDetails = res;
            });
          }
        }, {
          key: "getAllOrder",
          value: function getAllOrder() {
            var _this6 = this;

            this.orderService.getAllOrder().subscribe(function (result) {
              _this6.listOfAllOrder = result;
            });
          }
        }, {
          key: "setDisabled",
          value: function setDisabled(meal) {
            return this.dayFinished.includes(meal);
          }
        }, {
          key: "companyFormSelected",
          value: function companyFormSelected(event, meal) {
            var _this7 = this;

            this.driverstatus = [];
            this.status = event.detail.value;
            var status = meal.OrderStatus;
            var item = status.find(function (c) {
              return c.val == event.detail.value;
            });

            if (this.dayFinished.includes(item)) {
              this.dayFinished.splice(this.dayFinished.indexOf(item), 1);
            } else {
              this.dayFinished.push(item);
            }

            var res = this.listOfAllOrder.find(function (c) {
              return c.id == meal.id;
            });
            var userId = localStorage.getItem("userId");
            status.forEach(function (element) {
              if (element.val == item.val) {
                _this7.checked = true;
              } else {
                _this7.checked = false;
              }

              var driverS = {
                id: element.id,
                val: element.val,
                checked: _this7.checked
              };

              _this7.driverstatus.push(driverS);
            });
            var location = {
              lat: res.Location.lat,
              lon: res.Location.lon
            };

            if (this.driverstatus.length > 0) {
              var data = {
                id: res.id,
                orderNo: res.orderNo,
                DateTime: res.DateTime,
                Customer: res.Customer,
                Location: location,
                OrderStatus: this.driverstatus,
                Total: res.Total,
                Driver: userId,
                Vehicle: res.Vehicle,
                orderLocation: res.orderLocation,
                restaurantStatus: res.restaurantStatus,
                RestaurantId: res.RestaurantId
              };
              this.orderService.updateOrder(data, res.id);
            }
          }
        }, {
          key: "getOrder",
          value: function getOrder() {
            var _this8 = this;

            this.orderService.getAllOrder().subscribe(function (res) {
              if (res.length > 0 && _this8.listOfOrder.length == 0) {
                var order = res.filter(function (c) {
                  return c.OrderStatus.find(function (c) {
                    return c.checked == false && c.val == "delivered";
                  });
                });
                order.forEach(function (element) {
                  _this8.accountService.getAllAccount().subscribe(function (result) {
                    var restaurant = _this8.listOfRestaurant.find(function (c) {
                      return c.accountId == element.RestaurantId;
                    });

                    var data = {
                      id: element.id,
                      restaurantName: restaurant.Name,
                      DateTime: element.DateTime,
                      Customer: result.find(function (c) {
                        return c.id == element.Customer;
                      }).FullName,
                      PhoneNumber: result.find(function (c) {
                        return c.id == element.Customer;
                      }).phonenumber,
                      CLocation: result.find(function (c) {
                        return c.id == element.Customer;
                      }).FirstTimeLocation,
                      RLocation: element.Location,
                      status: element.OrderStatus,
                      OrderStatus: element.OrderStatus,
                      Total: element.Total,
                      Driver: element.Driver,
                      Vehicle: element.Vehicle,
                      orderNo: element.orderNo,
                      orderLocation: element.orderLocation,
                      restaurantStatus: element.restaurantStatus.find(function (c) {
                        return c.isChecked == true;
                      }).val
                    };

                    _this8.listOfOrder.push(data);

                    var status = element.OrderStatus.find(function (c) {
                      return c.checked == true;
                    });

                    if (status !== undefined) {
                      if (_this8.dayFinished.includes(status)) {
                        _this8.dayFinished.splice(_this8.dayFinished.indexOf(status), 1);
                      } else {
                        _this8.dayFinished.push(status);
                      }

                      _this8.setDisabled(status);
                    } // console.log(this.listOfOrder)

                  });
                });
              }
            });
          }
        }, {
          key: "viewOrder",
          value: function viewOrder(id) {
            var _this9 = this;

            this.cart = [];
            var orderNo = this.listOfOrder.find(function (c) {
              return c.id == id;
            }).orderNo;
            var orderDetails = this.listOfOrderDetails.filter(function (c) {
              return c.OrderId == orderNo;
            });
            orderDetails.forEach(function (el) {
              var data = {
                CookingTime: _this9.listOfFood.find(function (c) {
                  return c.id == el.Food;
                }).CookingTime,
                DeliveryTime: _this9.listOfFood.find(function (c) {
                  return c.id == el.Food;
                }).DeliveryTime,
                Description: _this9.listOfFood.find(function (c) {
                  return c.id == el.Food;
                }).Description,
                Name: _this9.listOfFood.find(function (c) {
                  return c.id == el.Food;
                }).Name,
                Price: _this9.listOfFood.find(function (c) {
                  return c.id == el.Food;
                }).Price,
                amount: el.Qty,
                categoryId: _this9.listOfFood.find(function (c) {
                  return c.id == el.Food;
                }).categoryId,
                id: el.Food,
                picture: _this9.listOfFood.find(function (c) {
                  return c.id == el.Food;
                }).picture,
                restaurantId: _this9.listOfFood.find(function (c) {
                  return c.id == el.Food;
                }).restaurantId,
                type: _this9.listOfFood.find(function (c) {
                  return c.id == el.Food;
                }).type,
                orderDetailsId: el.id,
                orderStatus: true
              };

              _this9.cart.push(data);
            });
            this.orderService.addOrder(this.cart);
            this.sharedService.status.next("driver");
            this.router.navigate(["/menu/order-history"]);
          }
        }, {
          key: "location",
          value: function location(_location) {
            this.sharedService.status.next("driver-home");
            this.sharedService.RestaurantLocation.next(_location);
            this.router.navigate(["/menu/location"]);
          }
        }]);

        return DriverHomePage;
      }();

      DriverHomePage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _Service_food_service__WEBPACK_IMPORTED_MODULE_8__["FoodService"]
        }, {
          type: _Service_order_service__WEBPACK_IMPORTED_MODULE_10__["OrderService"]
        }, {
          type: _Service_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"]
        }, {
          type: _Service_order_detail_service__WEBPACK_IMPORTED_MODULE_9__["OrderDetailService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _Service_shared_service__WEBPACK_IMPORTED_MODULE_12__["SharedService"]
        }, {
          type: _Service_restaurant_service__WEBPACK_IMPORTED_MODULE_11__["RestaurantService"]
        }, {
          type: _Service_driver_service__WEBPACK_IMPORTED_MODULE_7__["DriverService"]
        }];
      };

      DriverHomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-driver-home',
        template: _raw_loader_driver_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_driver_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DriverHomePage);
      /***/
    },

    /***/
    "eptt":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/driver-home/driver-home.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function eptt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Driver Home</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  <div class=\"orders\">\n    <ion-row *ngFor=\"let meal of listOfOrder ; let i = index\" class=\"ion-padding meal-row\">\n      <ion-col size=\"6\" class=\"border-bottom\">\n        <ion-label>\n          {{ meal.restaurantName }}\n          <p>{{ meal.DateTime }}</p>\n          <span>\n            <ion-button (click)=\"location(meal.RLocation)\">\n              <ion-icon name=\"location-outline\"></ion-icon>\n            </ion-button>\n          </span>\n          <p style=\"background-color: #f8f9fa; border-radius: 5px; padding-top: 3px; padding-left: 7px; margin-top: 5px;\">{{meal.restaurantStatus}}</p>\n        </ion-label>\n        <ion-label color=\"dark\"\n          ><b>Total : {{ meal.Total | currency:'ETB' }}</b></ion-label\n        >\n        <ion-button fill=\"clear\" (click)=\"viewOrder(meal.id)\">\n          view order\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\" class=\"border-bottom\">\n        <ion-label>\n          {{ meal.Customer }}\n          <p>{{ meal.PhoneNumber }}</p>\n          <span>\n            <ion-button (click)=\"location(meal.CLocation)\">\n              <ion-icon name=\"location-outline\"></ion-icon>\n            </ion-button>\n          </span>\n        </ion-label>\n          <ion-row class=\"status\" >\n            <ion-label style=\"padding-top: 9px; padding-left: 5px;\">Status</ion-label>\n            <ion-select interface=\"popover\"  (ionChange)=\"companyFormSelected($event,meal)\" >\n              <ion-select-option *ngFor=\"let value of meal.OrderStatus ;let j=index \" [disabled]=\"setDisabled(value)\"  [value]=\"value.val\" >\n                {{value.val}}\n              </ion-select-option>\n            </ion-select>\n          </ion-row>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "wzRR":
    /*!***************************************************!*\
      !*** ./src/app/driver-home/driver-home.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function wzRR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar ion-icon {\n  font-size: 25px;\n}\n\nion-content {\n  position: absolute;\n  --padding-bottom: 50px;\n}\n\nion-content .orders {\n  margin-top: 58px;\n}\n\n.light-bg {\n  background: #ffffff;\n  z-index: 10;\n}\n\n.meal-row {\n  padding-bottom: 0px;\n}\n\n.border-bottom {\n  border-bottom: 1px solid var(--ion-color-step-150, rgba(0, 0, 0, 0.07));\n}\n\n#map {\n  width: 60%;\n  height: 280px;\n}\n\nion-row .status {\n  background-color: #dee2e6;\n  border-radius: 3px;\n  margin-top: 4px;\n}\n\nion-button {\n  margin-top: 2px;\n}\n\nion-row {\n  border-radius: 12px;\n  background-color: #e9ecef;\n  margin-top: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRyaXZlci1ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGVBQUE7QUFETjs7QUFLRTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7QUFGSjs7QUFHTTtFQUNFLGdCQUFBO0FBRFI7O0FBS0U7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUFGTjs7QUFNRTtFQUNFLG1CQUFBO0FBSEo7O0FBS0U7RUFDRSx1RUFBQTtBQUZKOztBQUlFO0VBQ0UsVUFBQTtFQUNBLGFBQUE7QUFESjs7QUFHRTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQUo7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBQ0E7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQUVGIiwiZmlsZSI6ImRyaXZlci1ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24tdG9vbGJhciB7XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgICAgLm9yZGVyc3tcclxuICAgICAgICBtYXJnaW4tdG9wOiA1OHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgIFxyXG4gIC5saWdodC1iZyB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgIHotaW5kZXg6IDEwO1xyXG4gIH1cclxuICAgXHJcbiAgXHJcbiAgLm1lYWwtcm93IHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgfVxyXG4gIC5ib3JkZXItYm90dG9tIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsIHJnYmEoMCwgMCwgMCwgMC4wNykpO1xyXG4gIH1cclxuICAjbWFwIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IDI4MHB4O1xyXG4gIH1cclxuICBpb24tcm93IC5zdGF0dXN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVlMmU2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG59XHJcbmlvbi1idXR0b257XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbn1cclxuaW9uLXJvd3tcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG59Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=driver-home-driver-home-module-es5.js.map