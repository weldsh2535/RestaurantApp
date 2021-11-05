(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"], {
    /***/
    "+aji":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function aji(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\" >\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Account</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form [formGroup]=\"regform\">\n    <ion-item>\n      <!-- <ion-input formControlName=\"id\" hidden></ion-input> -->\n      <ion-label>Full Name</ion-label>\n      <ion-input formControlName=\"fullName\" type=\"text\"></ion-input>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('fullName').valid && regform.get('fullName').touched\" > This field is required! </small> \n      </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Email  </ion-label>\n      <ion-input formControlName=\"email\" type=\"text\"></ion-input>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('email').valid && regform.get('email').touched\" > This field is required! </small> \n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Phone number</ion-label>\n      <ion-input formControlName=\"phonenumber\" type=\"text\"></ion-input>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('phonenumber').valid && regform.get('phonenumber').touched\" > This field is required! </small> \n    </ion-item>\n    <ion-item>\n      <ion-label>Type</ion-label>\n      <ion-select interface=\"popover\" formControlName=\"type\" (ngModelChange)=\"selectType($event)\">\n        <ion-select-option value=\"driver\">Driver</ion-select-option>\n        <ion-select-option value=\"restaurant\">Restaurant</ion-select-option>\n        <ion-select-option value=\"customer\"> Customer</ion-select-option>\n        <ion-select-option value=\"admin\">Admin</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Active</ion-label>\n      <ion-select interface=\"popover\" formControlName=\"active\" (ngModelChange)=\"selectActive($event)\">\n        <ion-select-option value=\"true\">true</ion-select-option>\n        <ion-select-option value=\"false\">false</ion-select-option>\n      </ion-select>\n     </ion-item>\n    <!-- <ion-item>\n      <ion-label>Location On Order</ion-label>\n      <ion-input formControlName=\"LocationOnOrder\" type=\"text\"></ion-input>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('LocationOnOrder').valid && regform.get('LocationOnOrder').touched\" > This field is required! </small> \n    </ion-item> -->\n    <ion-item>\n      <ion-label>First Time Location</ion-label>\n      <ion-input formControlName=\"locationId\" type=\"text\"></ion-input>\n      <ion-icon name=\"location-outline\" (click)=\"openLocation()\"></ion-icon>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('locationId').valid && regform.get('locationId').touched\" > This field is required! </small> \n    </ion-item>\n    <ion-item>\n      <ion-label>Password</ion-label>\n      <ion-input formControlName=\"password\" type=\"text\"></ion-input>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('password').valid && regform.get('password').touched\" > This field is required! </small> \n    </ion-item>\n    <div style=\"text-align: center; margin: auto;\">\n      <ion-button id=\"add items\" (click)=\"SaveAccount()\"> \n        <ion-icon slot=\"start\" name=\"add-circle-outline\"></ion-icon>\n        {{editMode?'Update Account':'Add Account'}}</ion-button>\n    </div>\n</form>\n<ion-item-sliding  *ngFor=\"let item of listOfAccount\" #slidingItem >\n  <ion-item detail>\n    <ion-label> {{item.fullName}}</ion-label>\n    <ion-label> {{item.phonenumber}}</ion-label>\n  </ion-item>\n  <ion-item-options side=\"start\">\n    <ion-item-option color=\"danger\" (click)=\"edit(item,slidingItem)\">\n   <ion-icon  name=\"create\" slot=\"icon-only\"></ion-icon></ion-item-option>\n   <ion-item-option color=\"danger\" (click)=\"delete(item,slidingItem)\">\n    <ion-icon  name=\"trash\" slot=\"icon-only\"></ion-icon></ion-item-option>\n  </ion-item-options>\n</ion-item-sliding>\n</ion-content>\n";
      /***/
    },

    /***/
    "jcJX":
    /*!*******************************************!*\
      !*** ./src/app/account/account.module.ts ***!
      \*******************************************/

    /*! exports provided: AccountPageModule */

    /***/
    function jcJX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountPageModule", function () {
        return AccountPageModule;
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


      var _account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./account-routing.module */
      "sGj0");
      /* harmony import */


      var _account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./account.page */
      "mdzQ");

      var AccountPageModule = function AccountPageModule() {
        _classCallCheck(this, AccountPageModule);
      };

      AccountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _account_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]]
      })], AccountPageModule);
      /***/
    },

    /***/
    "mdzQ":
    /*!*****************************************!*\
      !*** ./src/app/account/account.page.ts ***!
      \*****************************************/

    /*! exports provided: AccountPage */

    /***/
    function mdzQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountPage", function () {
        return AccountPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_account_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./account.page.html */
      "+aji");
      /* harmony import */


      var _account_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./account.page.scss */
      "n3U/");
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


      var _Service_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../Service/account.service */
      "6wYF");
      /* harmony import */


      var _Service_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../Service/shared.service */
      "ldse");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AccountPage = /*#__PURE__*/function () {
        function AccountPage(fb, accountService, alertController, platform, sharedService, router) {
          _classCallCheck(this, AccountPage);

          this.fb = fb;
          this.accountService = accountService;
          this.alertController = alertController;
          this.platform = platform;
          this.sharedService = sharedService;
          this.router = router;
          this.regform = this.fb.group({});
        }

        _createClass(AccountPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.regform = this.fb.group({
              email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email],
              phonenumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              locationId: [''],
              type: [''],
              active: ['']
            });

            if (this.platform.is('mobile') && !this.platform.is('hybrid') || this.platform.is('desktop')) {
              this.usePicker = true;
            }

            this.getAccount();
            this.sharedService.location.subscribe(function (res) {
              _this.latitude = res.lat;
              _this.longtiude = res.lon;
              console.log(res);
            });
          }
        }, {
          key: "getAccount",
          value: function getAccount() {
            var _this2 = this;

            this.accountService.getAllAccount().subscribe(function (res) {
              _this2.listOfAccount = res;
              console.log(res);
            });
          }
        }, {
          key: "selectType",
          value: function selectType(event) {
            var _this3 = this;

            var active = this.regform.get('active').value;
            this.accountService.getAllAccount().subscribe(function (res) {
              if (active !== '') {
                _this3.listOfAccount = res.filter(function (c) {
                  return c.type === event && c.active === active;
                });
              } else {
                _this3.listOfAccount = res.filter(function (c) {
                  return c.type === event;
                });
              }
            });
          }
        }, {
          key: "selectActive",
          value: function selectActive(event) {
            var _this4 = this;

            var type = this.regform.get('type').value;
            this.accountService.getAllAccount().subscribe(function (res) {
              if (type !== '') {
                _this4.listOfAccount = res.filter(function (c) {
                  return c.active === event && c.type === type;
                });
              } else {
                _this4.listOfAccount = res.filter(function (c) {
                  return c.active === event;
                });
              }
            });
          }
        }, {
          key: "openLocation",
          value: function openLocation() {
            this.sharedService.status.next('account');
            this.router.navigate(['/menu/location']);
          }
        }, {
          key: "SaveAccount",
          value: function SaveAccount() {
            if (this.regform.valid) {
              var locationData = {
                latitude: this.latitude,
                longtude: this.longtiude
              };
              this.regform.get('locationId').setValue(locationData);

              if (!this.accountId) {
                this.accountService.create(this.regform.value).subscribe(function (res) {
                  alert(res.toString());
                });
              } else {
                var data = {
                  id: this.accountId,
                  email: this.regform.get('email').value,
                  phonenumber: this.regform.get('phonenumber').value,
                  password: this.regform.get('password').value,
                  fullName: this.regform.get('fullName').value,
                  locationId: this.regform.get('locationId').value,
                  type: this.regform.get('type').value,
                  active: this.regform.get('active').value
                };
                this.accountService.updateAccount(data).subscribe(function (res) {
                  alert(res.toString());
                });
              }

              this.regform.reset();
              this.presentAlert();
              this.accountId = null;
            } else {
              this.ErrorAlert();
            }
          }
        }, {
          key: "edit",
          value: function edit(account, sliding) {
            this.editMode = true;
            this.accountId = account.id;
            this.regform.get('fullName').setValue(account.fullName);
            this.regform.get('locationId').setValue(account.locationId);
            this.regform.get('email').setValue(account.email);
            this.regform.get('password').setValue(account.password);
            this.regform.get('phonenumber').setValue(account.phonenumber);
            this.regform.get('active').setValue(account.active);
            this.regform.get('type').setValue(account.type);
            sliding.close();
          }
        }, {
          key: "delete",
          value: function _delete(account, sliding) {
            this.presentAlertConfirm(account);
            sliding.close();
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm(account) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this5 = this;

              var alert1;
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
                            _this5.accountService.removeAccount(account.id).then(function (res) {
                              alert(res.toString());
                            });

                            _this5.regform.reset();

                            _this5.accountId = null;
                          }
                        }]
                      });

                    case 2:
                      alert1 = _context.sent;
                      _context.next = 5;
                      return alert1.present();

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

        return AccountPage;
      }();

      AccountPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _Service_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }, {
          type: _Service_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }];
      };

      AccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-account',
        template: _raw_loader_account_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_account_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AccountPage);
      /***/
    },

    /***/
    "n3U/":
    /*!*******************************************!*\
      !*** ./src/app/account/account.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function n3U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".label-class {\n  --inner-padding-start:12px;\n  --inner-padding-end:10px;\n  margin-left: 67px;\n}\n\n.label-class-al {\n  margin-left: 67px;\n}\n\n.ion-input {\n  margin-left: 67px;\n}\n\n.dx-lookup-field {\n  padding: 5px 23px 12px 54px;\n  font-size: 1em;\n}\n\nion-content ion-item {\n  padding: 0;\n  --border-radius: 14px;\n}\n\nion-content ion-searchbar {\n  --border-radius: 14px;\n  --background: rgb(243, 243, 243);\n  margin-top: -13px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksMEJBQXNCO0VBQ3RCLHdCQUFvQjtFQUNwQixpQkFBaUI7QUFBckI7O0FBRUU7RUFDRSxpQkFBaUI7QUFDckI7O0FBQ0U7RUFDRSxpQkFBaUI7QUFFckI7O0FBQUU7RUFDRSwyQkFBMkI7RUFDM0IsY0FBYztBQUdsQjs7QUFERTtFQUtNLFVBQVU7RUFFVixxQkFBZ0I7QUFEeEI7O0FBTkU7RUFZRSxxQkFBZ0I7RUFDaEIsZ0NBQWE7RUFDYixpQkFBaUI7QUFGckIiLCJmaWxlIjoiYWNjb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmxhYmVsLWNsYXNze1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OjEycHg7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOjEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNjdweDtcclxuICB9XHJcbiAgLmxhYmVsLWNsYXNzLWFse1xyXG4gICAgbWFyZ2luLWxlZnQ6IDY3cHg7XHJcbiAgfVxyXG4gIC5pb24taW5wdXR7XHJcbiAgICBtYXJnaW4tbGVmdDogNjdweDtcclxuICB9XHJcbiAgLmR4LWxvb2t1cC1maWVsZCB7XHJcbiAgICBwYWRkaW5nOiA1cHggMjNweCAxMnB4IDU0cHg7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICB9XHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgLy8tLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSg0Myw5MCwxNDgsMSkgMCUsIHJnYmEoNDUsMTEyLDIyOSwxKSAzNSUsIHJnYmEoNDUsMTEyLDIyOSwxKSAxMDAlKTtcclxuICAgXHJcbiAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgLy8gLS1iYWNrZ3JvdW5kOiByZ2IoMTIwLCAxMjYsIDEzNCk7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgIC8vIG1hcmdpbjogMTRweCAwO1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgICAgIC8vIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIC8vZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgfVxyXG4gICBpb24tc2VhcmNoYmFye1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQzLCAyNDMsIDI0Myk7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTNweDtcclxuICAgfVxyXG4gIH0iXX0= */";
      /***/
    },

    /***/
    "sGj0":
    /*!***************************************************!*\
      !*** ./src/app/account/account-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: AccountPageRoutingModule */

    /***/
    function sGj0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountPageRoutingModule", function () {
        return AccountPageRoutingModule;
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


      var _account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./account.page */
      "mdzQ");

      var routes = [{
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_3__["AccountPage"]
      }];

      var AccountPageRoutingModule = function AccountPageRoutingModule() {
        _classCallCheck(this, AccountPageRoutingModule);
      };

      AccountPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AccountPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=account-account-module-es5.js.map