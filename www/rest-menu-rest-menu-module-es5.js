(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rest-menu-rest-menu-module"], {
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
    "GGEr":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rest-menu/rest-menu.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function GGEr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\" >\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>RestMenu</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"regform\">\n    <ion-item>\n       <ion-label>Restaurant Id </ion-label>\n       <ion-select interface=\"popover\" formControlName=\"RestaurantId\" [(ngModel)]=\"defalutRestaurantId\">\n        <ion-select-option   *ngFor=\"let code of listOfRestaurant\" value=\"{{code?.id}}\">\n          {{code?.Name}}\n        </ion-select-option>\n      </ion-select>\n       <small class=\"form-text text-muted\" *ngIf=\"!regform.get('RestaurantId').valid && regform.get('RestaurantId').touched\" > This field is required! </small> \n     </ion-item>\n     <ion-item>\n       <ion-label>Name</ion-label>\n       <ion-input formControlName=\"Name\" type=\"text\"></ion-input>\n       <small class=\"form-text text-muted\" *ngIf=\"!regform.get('Name').valid && regform.get('Name').touched\" > This field is required! </small> \n     </ion-item>\n      <ion-item>\n       <ion-label>Price</ion-label>\n       <ion-input formControlName=\"Price\" type=\"number\"></ion-input>\n       <small class=\"form-text text-muted\" *ngIf=\"!regform.get('Price').valid && regform.get('Price').touched\" > This field is required! </small> \n     </ion-item>\n     <ion-item>\n       <ion-label>Cooking Time</ion-label>\n       <ion-datetime formControlName=\"CookingTime\" display-format=\"h:mm A\" picker-format=\"h:mm A\" value=\"1990-02-19T07:43Z\"></ion-datetime>\n       <small class=\"form-text text-muted\" *ngIf=\"!regform.get('CookingTime').valid && regform.get('CookingTime').touched\" > This field is required! </small> \n     </ion-item>\n     <ion-item>\n      <ion-label>Delivery Time</ion-label>\n      <ion-datetime formControlName=\"DeliveryTime\" display-format=\"h:mm A\" picker-format=\"h:mm A\" value=\"1990-02-19T07:43Z\"></ion-datetime>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('DeliveryTime').valid && regform.get('DeliveryTime').touched\" > This field is required! </small> \n    </ion-item>\n    <ion-item>\n      <ion-label>Avaliable</ion-label>\n      <ion-toggle slot=\"end\" formControlName=\"Avaliable\" checked></ion-toggle>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('Avaliable').valid && regform.get('Avaliable').touched\" > This field is required! </small> \n    </ion-item>\n    <ion-item>\n      <ion-label>Favourite</ion-label>\n      <ion-toggle slot=\"end\" formControlName=\"Favourite\"  checked></ion-toggle>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('Favourite').valid && regform.get('Favourite').touched\" > This field is required! </small> \n    </ion-item>\n    <div style=\"text-align: center; margin: auto;\">\n      <ion-button id=\"add items\" (click)=\"saveRestaurant()\"> \n        <ion-icon slot=\"start\" name=\"add-circle-outline\"></ion-icon>\n        {{editMode?'Update Rest Menu':'Add Rest Menu'}}</ion-button>\n    </div> \n </form>\n <ion-item-sliding *ngFor=\"let item of listOfRestMenu \" #slidingItem >\n  <ion-item detail>\n    <ion-label>{{item.Name}}</ion-label>\n    <ion-label>{{item.Price}}</ion-label>\n    <ion-label>{{item.CookingTime}}</ion-label>\n    <ion-label>{{item.DeliveryTime}} </ion-label>\n  </ion-item>\n  <ion-item-options side=\"start\">\n    <ion-item-option color=\"danger\" (click)=\"edit(item,slidingItem)\">\n   <ion-icon  name=\"create\" slot=\"icon-only\"></ion-icon></ion-item-option>\n   <ion-item-option color=\"danger\" (click)=\"delete(item,slidingItem)\">\n    <ion-icon  name=\"trash\" slot=\"icon-only\"></ion-icon></ion-item-option>\n  </ion-item-options>\n</ion-item-sliding>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "PDtb":
    /*!***********************************************!*\
      !*** ./src/app/rest-menu/rest-menu.module.ts ***!
      \***********************************************/

    /*! exports provided: RestMenuPageModule */

    /***/
    function PDtb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RestMenuPageModule", function () {
        return RestMenuPageModule;
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


      var _rest_menu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./rest-menu-routing.module */
      "nZsS");
      /* harmony import */


      var _rest_menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./rest-menu.page */
      "V3ly");

      var RestMenuPageModule = function RestMenuPageModule() {
        _classCallCheck(this, RestMenuPageModule);
      };

      RestMenuPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _rest_menu_routing_module__WEBPACK_IMPORTED_MODULE_5__["RestMenuPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_rest_menu_page__WEBPACK_IMPORTED_MODULE_6__["RestMenuPage"]]
      })], RestMenuPageModule);
      /***/
    },

    /***/
    "V3ly":
    /*!*********************************************!*\
      !*** ./src/app/rest-menu/rest-menu.page.ts ***!
      \*********************************************/

    /*! exports provided: RestMenuPage */

    /***/
    function V3ly(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RestMenuPage", function () {
        return RestMenuPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_rest_menu_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./rest-menu.page.html */
      "GGEr");
      /* harmony import */


      var _rest_menu_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./rest-menu.page.scss */
      "pjwn");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _Service_rest_menu_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../Service/rest-menu.service */
      "cfF2");
      /* harmony import */


      var _Service_restaurant_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../Service/restaurant.service */
      "+cje");

      var RestMenuPage = /*#__PURE__*/function () {
        function RestMenuPage(fb, restMenuService, restaurantService, alertController, platform) {
          _classCallCheck(this, RestMenuPage);

          this.fb = fb;
          this.restMenuService = restMenuService;
          this.restaurantService = restaurantService;
          this.alertController = alertController;
          this.platform = platform;
          this.regform = this.fb.group({});
        }

        _createClass(RestMenuPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.regform = this.fb.group({
              RestaurantId: [""],
              Name: [""],
              Price: [""],
              CookingTime: [""],
              DeliveryTime: [""],
              Avaliable: [""],
              Favourite: [""]
            });

            if (this.platform.is('mobile') && !this.platform.is('hybrid') || this.platform.is('desktop')) {
              this.usePicker = true;
            }

            this.getRestaurant();
            this.getRestMenu();
          }
        }, {
          key: "getRestMenu",
          value: function getRestMenu() {
            var _this = this;

            this.restMenuService.getAllRestMenu().subscribe(function (res) {
              _this.listOfRestMenu = res;
            });
          }
        }, {
          key: "getRestaurant",
          value: function getRestaurant() {
            var _this2 = this;

            this.restaurantService.getAllRestaurant().subscribe(function (res) {
              _this2.listOfRestaurant = res;
              _this2.defalutRestaurantId = res[0].Name;
            });
          }
        }, {
          key: "saveRestaurant",
          value: function saveRestaurant() {
            if (this.regform.valid) {
              if (!this.restMenuId) {
                this.restMenuService.create(this.regform.value);
              } else {
                this.restMenuService.updateRestMenu(this.regform.value, this.restMenuId);
              }

              this.regform.reset();
              this.presentAlert();
            } else {
              this.ErrorAlert();
            }
          }
        }, {
          key: "edit",
          value: function edit(restMenu, slide) {
            this.editMode = true;
            this.restMenuId = restMenu.id;
            this.regform.get('Name').setValue(restMenu.Name);
            this.regform.get('Price').setValue(restMenu.Price);
            this.regform.get('CookingTime').setValue(restMenu.CookingTime);
            this.regform.get('DeliveryTime').setValue(restMenu.DeliveryTime);
            this.regform.get('Favourite').setValue(restMenu.Favourite);
            this.regform.get('RestaurantId').setValue(restMenu.RestaurantId);
            this.regform.get('Avaliable').setValue(restMenu.Avaliable);
            slide.close();
          }
        }, {
          key: "delete",
          value: function _delete(restMenu, slide) {
            this.presentAlertConfirm(restMenu);
            slide.close();
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm(restMenu) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        header: 'Confirm!',
                        message: '<strong>Are you sure you want delete?</strong>',
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
                            _this3.restMenuService.removeRestMenu(restMenu.id);

                            _this3.regform.reset();

                            _this3.restMenuId = null;
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
          key: "ErrorAlert",
          value: function ErrorAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Error',
                        // subHeader: 'Subtitle',
                        message: 'Please Enter All field.',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "presentAlert",
          value: function presentAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Account',
                        // subHeader: 'Subtitle',
                        message: 'Account Saved successfully.',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return RestMenuPage;
      }();

      RestMenuPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _Service_rest_menu_service__WEBPACK_IMPORTED_MODULE_6__["RestMenuService"]
        }, {
          type: _Service_restaurant_service__WEBPACK_IMPORTED_MODULE_7__["RestaurantService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }];
      };

      RestMenuPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-rest-menu',
        template: _raw_loader_rest_menu_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_rest_menu_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RestMenuPage);
      /***/
    },

    /***/
    "cfF2":
    /*!**********************************************!*\
      !*** ./src/app/Service/rest-menu.service.ts ***!
      \**********************************************/

    /*! exports provided: RestMenuService */

    /***/
    function cfF2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RestMenuService", function () {
        return RestMenuService;
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


      var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angularfire2/firestore */
      "CqG3");
      /* harmony import */


      var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/internal/operators/map */
      "q3Kh");
      /* harmony import */


      var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _common_app_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../common/app-error */
      "/GcI");
      /* harmony import */


      var _common_bad_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../common/bad-input */
      "XEKg");
      /* harmony import */


      var _common_not_found_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../common/not-found-error */
      "5Jak");

      var RestMenuService = /*#__PURE__*/function () {
        function RestMenuService(db) {
          _classCallCheck(this, RestMenuService);

          this.db = db;
          this.restMenuCollectionList = db.collection('RestMenu');
        }

        _createClass(RestMenuService, [{
          key: "create",
          value: function create(restMenuObj) {
            return this.restMenuCollectionList.add(restMenuObj);
          }
        }, {
          key: "getAllRestMenu",
          value: function getAllRestMenu() {
            this.restMenuList = this.restMenuCollectionList.snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])(function (actions) {
              return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return Object.assign({
                  id: id
                }, data);
              });
            }));
            return this.restMenuList;
          }
        }, {
          key: "getRestMenu",
          value: function getRestMenu(id) {
            return this.restMenuCollectionList.doc(id).valueChanges();
          }
        }, {
          key: "updateRestMenu",
          value: function updateRestMenu(restMenuObj, id) {
            return this.restMenuCollectionList.doc(id).update(restMenuObj)["catch"](this.handleError);
          }
        }, {
          key: "removeRestMenu",
          value: function removeRestMenu(id) {
            return this.restMenuCollectionList.doc(id)["delete"]()["catch"](this.handleError);
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            if (error.status === 400) return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]["throw"](new _common_bad_input__WEBPACK_IMPORTED_MODULE_6__["BadInput"](error.json()));
            if (error.status === 404) return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]["throw"](new _common_not_found_error__WEBPACK_IMPORTED_MODULE_7__["NotFoundError"]());
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]["throw"](new _common_app_error__WEBPACK_IMPORTED_MODULE_5__["AppError"](error));
          }
        }]);

        return RestMenuService;
      }();

      RestMenuService.ctorParameters = function () {
        return [{
          type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      };

      RestMenuService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], RestMenuService);
      /***/
    },

    /***/
    "nZsS":
    /*!*******************************************************!*\
      !*** ./src/app/rest-menu/rest-menu-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: RestMenuPageRoutingModule */

    /***/
    function nZsS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RestMenuPageRoutingModule", function () {
        return RestMenuPageRoutingModule;
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


      var _rest_menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./rest-menu.page */
      "V3ly");

      var routes = [{
        path: '',
        component: _rest_menu_page__WEBPACK_IMPORTED_MODULE_3__["RestMenuPage"]
      }];

      var RestMenuPageRoutingModule = function RestMenuPageRoutingModule() {
        _classCallCheck(this, RestMenuPageRoutingModule);
      };

      RestMenuPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RestMenuPageRoutingModule);
      /***/
    },

    /***/
    "pjwn":
    /*!***********************************************!*\
      !*** ./src/app/rest-menu/rest-menu.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function pjwn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".label-class {\n  --inner-padding-start:12px;\n  --inner-padding-end:10px;\n  margin-left: 67px;\n}\n\n.label-class-al {\n  margin-left: 67px;\n}\n\n.ion-input {\n  margin-left: 67px;\n}\n\n.dx-lookup-field {\n  padding: 5px 23px 12px 54px;\n  font-size: 1em;\n}\n\nion-content ion-item {\n  padding: 0;\n  --border-radius: 14px;\n}\n\nion-content ion-searchbar {\n  --border-radius: 14px;\n  --background: rgb(243, 243, 243);\n  margin-top: -13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJlc3QtbWVudS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFFRTtFQUNFLGlCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxpQkFBQTtBQUVKOztBQUFFO0VBQ0UsMkJBQUE7RUFDQSxjQUFBO0FBR0o7O0FBRU07RUFFRSxVQUFBO0VBRUEscUJBQUE7QUFEUjs7QUFLRztFQUNDLHFCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtBQUhKIiwiZmlsZSI6InJlc3QtbWVudS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmxhYmVsLWNsYXNze1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OjEycHg7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOjEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNjdweDtcclxuICB9XHJcbiAgLmxhYmVsLWNsYXNzLWFse1xyXG4gICAgbWFyZ2luLWxlZnQ6IDY3cHg7XHJcbiAgfVxyXG4gIC5pb24taW5wdXR7XHJcbiAgICBtYXJnaW4tbGVmdDogNjdweDtcclxuICB9XHJcbiAgLmR4LWxvb2t1cC1maWVsZCB7XHJcbiAgICBwYWRkaW5nOiA1cHggMjNweCAxMnB4IDU0cHg7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICB9XHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgLy8tLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSg0Myw5MCwxNDgsMSkgMCUsIHJnYmEoNDUsMTEyLDIyOSwxKSAzNSUsIHJnYmEoNDUsMTEyLDIyOSwxKSAxMDAlKTtcclxuICAgXHJcbiAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgLy8gLS1iYWNrZ3JvdW5kOiByZ2IoMTIwLCAxMjYsIDEzNCk7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgIC8vIG1hcmdpbjogMTRweCAwO1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgICAgIC8vIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIC8vZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgfVxyXG4gICBpb24tc2VhcmNoYmFye1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQzLCAyNDMsIDI0Myk7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTNweDtcclxuICAgfVxyXG4gIH1cclxuIl19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=rest-menu-rest-menu-module-es5.js.map