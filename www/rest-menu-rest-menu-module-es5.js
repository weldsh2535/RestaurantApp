(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rest-menu-rest-menu-module"], {
    /***/
    "FWf1":
    /*!**************************************************!*\
      !*** ./node_modules/rxjs/internal/Subscriber.js ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function FWf1(module, exports, __webpack_require__) {
      "use strict";

      var __extends = this && this.__extends || function () {
        var _extendStatics = function extendStatics(d, b) {
          _extendStatics = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (d, b) {
            d.__proto__ = b;
          } || function (d, b) {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          };

          return _extendStatics(d, b);
        };

        return function (d, b) {
          _extendStatics(d, b);

          function __() {
            this.constructor = d;
          }

          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var isFunction_1 = __webpack_require__(
      /*! ./util/isFunction */
      "pshJ");

      var Observer_1 = __webpack_require__(
      /*! ./Observer */
      "GiSu");

      var Subscription_1 = __webpack_require__(
      /*! ./Subscription */
      "zB/H");

      var rxSubscriber_1 = __webpack_require__(
      /*! ../internal/symbol/rxSubscriber */
      "p//D");

      var config_1 = __webpack_require__(
      /*! ./config */
      "n3uD");

      var hostReportError_1 = __webpack_require__(
      /*! ./util/hostReportError */
      "MkmW");

      var Subscriber = function (_super) {
        __extends(Subscriber, _super);

        function Subscriber(destinationOrNext, error, complete) {
          var _this = _super.call(this) || this;

          _this.syncErrorValue = null;
          _this.syncErrorThrown = false;
          _this.syncErrorThrowable = false;
          _this.isStopped = false;

          switch (arguments.length) {
            case 0:
              _this.destination = Observer_1.empty;
              break;

            case 1:
              if (!destinationOrNext) {
                _this.destination = Observer_1.empty;
                break;
              }

              if (typeof destinationOrNext === 'object') {
                if (destinationOrNext instanceof Subscriber) {
                  _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                  _this.destination = destinationOrNext;
                  destinationOrNext.add(_this);
                } else {
                  _this.syncErrorThrowable = true;
                  _this.destination = new SafeSubscriber(_this, destinationOrNext);
                }

                break;
              }

            default:
              _this.syncErrorThrowable = true;
              _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
              break;
          }

          return _this;
        }

        Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () {
          return this;
        };

        Subscriber.create = function (next, error, complete) {
          var subscriber = new Subscriber(next, error, complete);
          subscriber.syncErrorThrowable = false;
          return subscriber;
        };

        Subscriber.prototype.next = function (value) {
          if (!this.isStopped) {
            this._next(value);
          }
        };

        Subscriber.prototype.error = function (err) {
          if (!this.isStopped) {
            this.isStopped = true;

            this._error(err);
          }
        };

        Subscriber.prototype.complete = function () {
          if (!this.isStopped) {
            this.isStopped = true;

            this._complete();
          }
        };

        Subscriber.prototype.unsubscribe = function () {
          if (this.closed) {
            return;
          }

          this.isStopped = true;

          _super.prototype.unsubscribe.call(this);
        };

        Subscriber.prototype._next = function (value) {
          this.destination.next(value);
        };

        Subscriber.prototype._error = function (err) {
          this.destination.error(err);
          this.unsubscribe();
        };

        Subscriber.prototype._complete = function () {
          this.destination.complete();
          this.unsubscribe();
        };

        Subscriber.prototype._unsubscribeAndRecycle = function () {
          var _parentOrParents = this._parentOrParents;
          this._parentOrParents = null;
          this.unsubscribe();
          this.closed = false;
          this.isStopped = false;
          this._parentOrParents = _parentOrParents;
          return this;
        };

        return Subscriber;
      }(Subscription_1.Subscription);

      exports.Subscriber = Subscriber;

      var SafeSubscriber = function (_super) {
        __extends(SafeSubscriber, _super);

        function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
          var _this = _super.call(this) || this;

          _this._parentSubscriber = _parentSubscriber;
          var next;
          var context = _this;

          if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
          } else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;

            if (observerOrNext !== Observer_1.empty) {
              context = Object.create(observerOrNext);

              if (isFunction_1.isFunction(context.unsubscribe)) {
                _this.add(context.unsubscribe.bind(context));
              }

              context.unsubscribe = _this.unsubscribe.bind(_this);
            }
          }

          _this._context = context;
          _this._next = next;
          _this._error = error;
          _this._complete = complete;
          return _this;
        }

        SafeSubscriber.prototype.next = function (value) {
          if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;

            if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
              this.__tryOrUnsub(this._next, value);
            } else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
              this.unsubscribe();
            }
          }
        };

        SafeSubscriber.prototype.error = function (err) {
          if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = config_1.config.useDeprecatedSynchronousErrorHandling;

            if (this._error) {
              if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._error, err);

                this.unsubscribe();
              } else {
                this.__tryOrSetError(_parentSubscriber, this._error, err);

                this.unsubscribe();
              }
            } else if (!_parentSubscriber.syncErrorThrowable) {
              this.unsubscribe();

              if (useDeprecatedSynchronousErrorHandling) {
                throw err;
              }

              hostReportError_1.hostReportError(err);
            } else {
              if (useDeprecatedSynchronousErrorHandling) {
                _parentSubscriber.syncErrorValue = err;
                _parentSubscriber.syncErrorThrown = true;
              } else {
                hostReportError_1.hostReportError(err);
              }

              this.unsubscribe();
            }
          }
        };

        SafeSubscriber.prototype.complete = function () {
          var _this = this;

          if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;

            if (this._complete) {
              var wrappedComplete = function wrappedComplete() {
                return _this._complete.call(_this._context);
              };

              if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(wrappedComplete);

                this.unsubscribe();
              } else {
                this.__tryOrSetError(_parentSubscriber, wrappedComplete);

                this.unsubscribe();
              }
            } else {
              this.unsubscribe();
            }
          }
        };

        SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
          try {
            fn.call(this._context, value);
          } catch (err) {
            this.unsubscribe();

            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
              throw err;
            } else {
              hostReportError_1.hostReportError(err);
            }
          }
        };

        SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
          if (!config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
          }

          try {
            fn.call(this._context, value);
          } catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
              parent.syncErrorValue = err;
              parent.syncErrorThrown = true;
              return true;
            } else {
              hostReportError_1.hostReportError(err);
              return true;
            }
          }

          return false;
        };

        SafeSubscriber.prototype._unsubscribe = function () {
          var _parentSubscriber = this._parentSubscriber;
          this._context = null;
          this._parentSubscriber = null;

          _parentSubscriber.unsubscribe();
        };

        return SafeSubscriber;
      }(Subscriber);

      exports.SafeSubscriber = SafeSubscriber; //# sourceMappingURL=Subscriber.js.map

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
    "GMZp":
    /*!*****************************************************!*\
      !*** ./node_modules/rxjs/internal/util/isObject.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function GMZp(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      function isObject(x) {
        return x !== null && typeof x === 'object';
      }

      exports.isObject = isObject; //# sourceMappingURL=isObject.js.map

      /***/
    },

    /***/
    "GiSu":
    /*!************************************************!*\
      !*** ./node_modules/rxjs/internal/Observer.js ***!
      \************************************************/

    /*! no static exports found */

    /***/
    function GiSu(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var config_1 = __webpack_require__(
      /*! ./config */
      "n3uD");

      var hostReportError_1 = __webpack_require__(
      /*! ./util/hostReportError */
      "MkmW");

      exports.empty = {
        closed: true,
        next: function next(value) {},
        error: function error(err) {
          if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw err;
          } else {
            hostReportError_1.hostReportError(err);
          }
        },
        complete: function complete() {}
      }; //# sourceMappingURL=Observer.js.map

      /***/
    },

    /***/
    "LBXl":
    /*!****************************************************************!*\
      !*** ./node_modules/rxjs/internal/util/UnsubscriptionError.js ***!
      \****************************************************************/

    /*! no static exports found */

    /***/
    function LBXl(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var UnsubscriptionErrorImpl = function () {
        function UnsubscriptionErrorImpl(errors) {
          Error.call(this);
          this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) {
            return i + 1 + ") " + err.toString();
          }).join('\n  ') : '';
          this.name = 'UnsubscriptionError';
          this.errors = errors;
          return this;
        }

        UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
        return UnsubscriptionErrorImpl;
      }();

      exports.UnsubscriptionError = UnsubscriptionErrorImpl; //# sourceMappingURL=UnsubscriptionError.js.map

      /***/
    },

    /***/
    "MkmW":
    /*!************************************************************!*\
      !*** ./node_modules/rxjs/internal/util/hostReportError.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function MkmW(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      function hostReportError(err) {
        setTimeout(function () {
          throw err;
        }, 0);
      }

      exports.hostReportError = hostReportError; //# sourceMappingURL=hostReportError.js.map

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
            var _this2 = this;

            this.restMenuService.getAllRestMenu().subscribe(function (res) {
              _this2.listOfRestMenu = res;
            });
          }
        }, {
          key: "getRestaurant",
          value: function getRestaurant() {
            var _this3 = this;

            this.restaurantService.getAllRestaurant().subscribe(function (res) {
              _this3.listOfRestaurant = res;
              _this3.defalutRestaurantId = res[0].Name;
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
            this.regform.get('Name').setValue(restMenu.name);
            this.regform.get('Price').setValue(restMenu.price);
            this.regform.get('CookingTime').setValue(restMenu.cookingTime);
            this.regform.get('DeliveryTime').setValue(restMenu.deliveryTime);
            this.regform.get('Favourite').setValue(restMenu.favourite);
            this.regform.get('RestaurantId').setValue(restMenu.restaurantId);
            this.regform.get('Avaliable').setValue(restMenu.avaliable);
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
              var _this4 = this;

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
                            _this4.restMenuService.removeRestMenu(restMenu.id);

                            _this4.regform.reset();

                            _this4.restMenuId = null;
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
    "mbIT":
    /*!****************************************************!*\
      !*** ./node_modules/rxjs/internal/util/isArray.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function mbIT(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      exports.isArray = function () {
        return Array.isArray || function (x) {
          return x && typeof x.length === 'number';
        };
      }(); //# sourceMappingURL=isArray.js.map

      /***/

    },

    /***/
    "n3uD":
    /*!**********************************************!*\
      !*** ./node_modules/rxjs/internal/config.js ***!
      \**********************************************/

    /*! no static exports found */

    /***/
    function n3uD(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _enable_super_gross_mode_that_will_cause_bad_things = false;
      exports.config = {
        Promise: undefined,

        set useDeprecatedSynchronousErrorHandling(value) {
          if (value) {
            var error = new Error();
            console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
          } else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            console.log('RxJS: Back to a better error behavior. Thank you. <3');
          }

          _enable_super_gross_mode_that_will_cause_bad_things = value;
        },

        get useDeprecatedSynchronousErrorHandling() {
          return _enable_super_gross_mode_that_will_cause_bad_things;
        }

      }; //# sourceMappingURL=config.js.map

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
    "p//D":
    /*!***********************************************************!*\
      !*** ./node_modules/rxjs/internal/symbol/rxSubscriber.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function pD(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      exports.rxSubscriber = function () {
        return typeof Symbol === 'function' ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random();
      }();

      exports.$$rxSubscriber = exports.rxSubscriber; //# sourceMappingURL=rxSubscriber.js.map

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


      __webpack_exports__["default"] = ".label-class {\n  --inner-padding-start:12px;\n  --inner-padding-end:10px;\n  margin-left: 67px;\n}\n\n.label-class-al {\n  margin-left: 67px;\n}\n\n.ion-input {\n  margin-left: 67px;\n}\n\n.dx-lookup-field {\n  padding: 5px 23px 12px 54px;\n  font-size: 1em;\n}\n\nion-content ion-item {\n  padding: 0;\n  --border-radius: 14px;\n}\n\nion-content ion-searchbar {\n  --border-radius: 14px;\n  --background: rgb(243, 243, 243);\n  margin-top: -13px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJlc3QtbWVudS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSwwQkFBc0I7RUFDdEIsd0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUFyQjs7QUFFRTtFQUNFLGlCQUFpQjtBQUNyQjs7QUFDRTtFQUNFLGlCQUFpQjtBQUVyQjs7QUFBRTtFQUNFLDJCQUEyQjtFQUMzQixjQUFjO0FBR2xCOztBQURFO0VBS00sVUFBVTtFQUVWLHFCQUFnQjtBQUR4Qjs7QUFORTtFQVlFLHFCQUFnQjtFQUNoQixnQ0FBYTtFQUNiLGlCQUFpQjtBQUZyQiIsImZpbGUiOiJyZXN0LW1lbnUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5sYWJlbC1jbGFzc3tcclxuICAgIC0taW5uZXItcGFkZGluZy1zdGFydDoxMnB4O1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDoxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDY3cHg7XHJcbiAgfVxyXG4gIC5sYWJlbC1jbGFzcy1hbHtcclxuICAgIG1hcmdpbi1sZWZ0OiA2N3B4O1xyXG4gIH1cclxuICAuaW9uLWlucHV0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDY3cHg7XHJcbiAgfVxyXG4gIC5keC1sb29rdXAtZmllbGQge1xyXG4gICAgcGFkZGluZzogNXB4IDIzcHggMTJweCA1NHB4O1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgfVxyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIC8vLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoNDMsOTAsMTQ4LDEpIDAlLCByZ2JhKDQ1LDExMiwyMjksMSkgMzUlLCByZ2JhKDQ1LDExMiwyMjksMSkgMTAwJSk7XHJcbiAgIFxyXG4gICAgICBpb24taXRlbSB7XHJcbiAgICAgIC8vIC0tYmFja2dyb3VuZDogcmdiKDEyMCwgMTI2LCAxMzQpO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAvLyBtYXJnaW46IDE0cHggMDtcclxuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICAgICAvLyBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAvL2ZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgIH1cclxuICAgaW9uLXNlYXJjaGJhcntcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDI0MywgMjQzLCAyNDMpO1xyXG4gICAgbWFyZ2luLXRvcDogLTEzcHg7XHJcbiAgIH1cclxuICB9XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "pshJ":
    /*!*******************************************************!*\
      !*** ./node_modules/rxjs/internal/util/isFunction.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function pshJ(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      function isFunction(x) {
        return typeof x === 'function';
      }

      exports.isFunction = isFunction; //# sourceMappingURL=isFunction.js.map

      /***/
    },

    /***/
    "q3Kh":
    /*!*****************************************************!*\
      !*** ./node_modules/rxjs/internal/operators/map.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function q3Kh(module, exports, __webpack_require__) {
      "use strict";

      var __extends = this && this.__extends || function () {
        var _extendStatics2 = function extendStatics(d, b) {
          _extendStatics2 = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (d, b) {
            d.__proto__ = b;
          } || function (d, b) {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          };

          return _extendStatics2(d, b);
        };

        return function (d, b) {
          _extendStatics2(d, b);

          function __() {
            this.constructor = d;
          }

          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var Subscriber_1 = __webpack_require__(
      /*! ../Subscriber */
      "FWf1");

      function map(project, thisArg) {
        return function mapOperation(source) {
          if (typeof project !== 'function') {
            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
          }

          return source.lift(new MapOperator(project, thisArg));
        };
      }

      exports.map = map;

      var MapOperator = function () {
        function MapOperator(project, thisArg) {
          this.project = project;
          this.thisArg = thisArg;
        }

        MapOperator.prototype.call = function (subscriber, source) {
          return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
        };

        return MapOperator;
      }();

      exports.MapOperator = MapOperator;

      var MapSubscriber = function (_super) {
        __extends(MapSubscriber, _super);

        function MapSubscriber(destination, project, thisArg) {
          var _this = _super.call(this, destination) || this;

          _this.project = project;
          _this.count = 0;
          _this.thisArg = thisArg || _this;
          return _this;
        }

        MapSubscriber.prototype._next = function (value) {
          var result;

          try {
            result = this.project.call(this.thisArg, value, this.count++);
          } catch (err) {
            this.destination.error(err);
            return;
          }

          this.destination.next(result);
        };

        return MapSubscriber;
      }(Subscriber_1.Subscriber); //# sourceMappingURL=map.js.map

      /***/

    },

    /***/
    "zB/H":
    /*!****************************************************!*\
      !*** ./node_modules/rxjs/internal/Subscription.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function zBH(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var isArray_1 = __webpack_require__(
      /*! ./util/isArray */
      "mbIT");

      var isObject_1 = __webpack_require__(
      /*! ./util/isObject */
      "GMZp");

      var isFunction_1 = __webpack_require__(
      /*! ./util/isFunction */
      "pshJ");

      var UnsubscriptionError_1 = __webpack_require__(
      /*! ./util/UnsubscriptionError */
      "LBXl");

      var Subscription = function () {
        function Subscription(unsubscribe) {
          this.closed = false;
          this._parentOrParents = null;
          this._subscriptions = null;

          if (unsubscribe) {
            this._ctorUnsubscribe = true;
            this._unsubscribe = unsubscribe;
          }
        }

        Subscription.prototype.unsubscribe = function () {
          var errors;

          if (this.closed) {
            return;
          }

          var _a = this,
              _parentOrParents = _a._parentOrParents,
              _ctorUnsubscribe = _a._ctorUnsubscribe,
              _unsubscribe = _a._unsubscribe,
              _subscriptions = _a._subscriptions;

          this.closed = true;
          this._parentOrParents = null;
          this._subscriptions = null;

          if (_parentOrParents instanceof Subscription) {
            _parentOrParents.remove(this);
          } else if (_parentOrParents !== null) {
            for (var index = 0; index < _parentOrParents.length; ++index) {
              var parent_1 = _parentOrParents[index];
              parent_1.remove(this);
            }
          }

          if (isFunction_1.isFunction(_unsubscribe)) {
            if (_ctorUnsubscribe) {
              this._unsubscribe = undefined;
            }

            try {
              _unsubscribe.call(this);
            } catch (e) {
              errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
          }

          if (isArray_1.isArray(_subscriptions)) {
            var index = -1;
            var len = _subscriptions.length;

            while (++index < len) {
              var sub = _subscriptions[index];

              if (isObject_1.isObject(sub)) {
                try {
                  sub.unsubscribe();
                } catch (e) {
                  errors = errors || [];

                  if (e instanceof UnsubscriptionError_1.UnsubscriptionError) {
                    errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                  } else {
                    errors.push(e);
                  }
                }
              }
            }
          }

          if (errors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
          }
        };

        Subscription.prototype.add = function (teardown) {
          var subscription = teardown;

          if (!teardown) {
            return Subscription.EMPTY;
          }

          switch (typeof teardown) {
            case 'function':
              subscription = new Subscription(teardown);

            case 'object':
              if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                return subscription;
              } else if (this.closed) {
                subscription.unsubscribe();
                return subscription;
              } else if (!(subscription instanceof Subscription)) {
                var tmp = subscription;
                subscription = new Subscription();
                subscription._subscriptions = [tmp];
              }

              break;

            default:
              {
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
              }
          }

          var _parentOrParents = subscription._parentOrParents;

          if (_parentOrParents === null) {
            subscription._parentOrParents = this;
          } else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) {
              return subscription;
            }

            subscription._parentOrParents = [_parentOrParents, this];
          } else if (_parentOrParents.indexOf(this) === -1) {
            _parentOrParents.push(this);
          } else {
            return subscription;
          }

          var subscriptions = this._subscriptions;

          if (subscriptions === null) {
            this._subscriptions = [subscription];
          } else {
            subscriptions.push(subscription);
          }

          return subscription;
        };

        Subscription.prototype.remove = function (subscription) {
          var subscriptions = this._subscriptions;

          if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);

            if (subscriptionIndex !== -1) {
              subscriptions.splice(subscriptionIndex, 1);
            }
          }
        };

        Subscription.EMPTY = function (empty) {
          empty.closed = true;
          return empty;
        }(new Subscription());

        return Subscription;
      }();

      exports.Subscription = Subscription;

      function flattenUnsubscriptionErrors(errors) {
        return errors.reduce(function (errs, err) {
          return errs.concat(err instanceof UnsubscriptionError_1.UnsubscriptionError ? err.errors : err);
        }, []);
      } //# sourceMappingURL=Subscription.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=rest-menu-rest-menu-module-es5.js.map