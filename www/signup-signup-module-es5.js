(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"], {
    /***/
    "6h0i":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function h0i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title style=\"text-align: center\">signup</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"regform\">\n    <ion-item>\n      <ion-label>Full Name</ion-label>\n      <ion-input formControlName=\"FullName\" type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Email </ion-label>\n      <ion-input formControlName=\"email\" type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Phone number</ion-label>\n      <ion-input formControlName=\"phonenumber\" type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Location</ion-label>\n      <ion-input formControlName=\"FirstTimeLocation\" type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Type</ion-label>\n      <ion-select interface=\"popover\" formControlName=\"type\">\n        <ion-select-option value=\"driver\">Driver</ion-select-option>\n        <ion-select-option value=\"restaurant\">Restaurant</ion-select-option>\n        <ion-select-option value=\"customer\"> Customer</ion-select-option>\n        <ion-select-option value=\"admin\">Admin</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Password</ion-label>\n      <ion-input [type]=\"fieldTextType ? 'text' : 'password'\" formControlName=\"password\" [required]></ion-input>\n      <i class=\"fa\" [ngClass]=\"{'fa-eye-slash': !fieldTextType,'fa-eye': fieldTextType }\"\n        (click)=\"toggleFieldTextType()\"></i>\n    </ion-item>\n    <ion-item>\n      <ion-label>Confirm Password</ion-label>\n      <ion-input [type]=\"conformPassword ? 'text' : 'password'\" formControlName=\"confirmPassword\" [required]>\n      </ion-input>\n      <i class=\"fa\" [ngClass]=\"{'fa-eye-slash': !conformPassword,'fa-eye': conformPassword }\" \n        (click)=\"conPassword()\"></i>\n    </ion-item>\n    <div style=\"text-align: center; margin: auto\">\n      <ion-button expand=\"full\" (click)=\"registerAccount()\">\n        <ion-icon slot=\"start\" name=\"add-circle-outline\"></ion-icon>\n        Sign Up\n      </ion-button>\n    </div>\n    <ion-item>\n      <ion-label style=\"text-align: center\">Already have an account ?</ion-label>\n      <button style=\"margin-left: -37px; color: #234ada; background-color: #f8f9fa\" (click)=\"login()\">\n        Login\n      </button>\n    </ion-item>\n  </form>\n</ion-content>";
      /***/
    },

    /***/
    "RPFs":
    /*!*************************************************!*\
      !*** ./src/app/signup/signup-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: SignupPageRoutingModule */

    /***/
    function RPFs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function () {
        return SignupPageRoutingModule;
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


      var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./signup.page */
      "yL7A");

      var routes = [{
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
      }];

      var SignupPageRoutingModule = function SignupPageRoutingModule() {
        _classCallCheck(this, SignupPageRoutingModule);
      };

      SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SignupPageRoutingModule);
      /***/
    },

    /***/
    "T9iC":
    /*!*****************************************!*\
      !*** ./src/app/signup/signup.module.ts ***!
      \*****************************************/

    /*! exports provided: SignupPageModule */

    /***/
    function T9iC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPageModule", function () {
        return SignupPageModule;
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


      var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./signup-routing.module */
      "RPFs");
      /* harmony import */


      var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./signup.page */
      "yL7A");

      var SignupPageModule = function SignupPageModule() {
        _classCallCheck(this, SignupPageModule);
      };

      SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
      })], SignupPageModule);
      /***/
    },

    /***/
    "fJgH":
    /*!*****************************************!*\
      !*** ./src/app/signup/signup.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function fJgH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content ion-item {\n  padding: 0;\n  --border-radius: 14px;\n}\n\nion-content ion-searchbar {\n  --border-radius: 14px;\n  --background: rgb(243, 243, 243);\n  margin-top: -13px;\n}\n\nion-content ion-segment {\n  margin: 5px 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFLUSxVQUFVO0VBRVYscUJBQWdCO0FBSnhCOztBQUhBO0VBWUkscUJBQWdCO0VBQ2hCLGdDQUFhO0VBQ2IsaUJBQWlCO0FBTHJCOztBQVFFO0VBQ0UsYUFBYTtBQUxqQiIsImZpbGUiOiJzaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLy8tLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSg0Myw5MCwxNDgsMSkgMCUsIHJnYmEoNDUsMTEyLDIyOSwxKSAzNSUsIHJnYmEoNDUsMTEyLDIyOSwxKSAxMDAlKTtcclxuICAgXHJcbiAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgLy8gLS1iYWNrZ3JvdW5kOiByZ2IoMTIwLCAxMjYsIDEzNCk7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgIC8vIG1hcmdpbjogMTRweCAwO1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgICAgIC8vIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIC8vZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgfVxyXG4gICBpb24tc2VhcmNoYmFye1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQzLCAyNDMsIDI0Myk7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTNweDtcclxuICAgfVxyXG4gIH1cclxuICBpb24tY29udGVudCBpb24tc2VnbWVudCB7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG4gIH0iXX0= */";
      /***/
    },

    /***/
    "yL7A":
    /*!***************************************!*\
      !*** ./src/app/signup/signup.page.ts ***!
      \***************************************/

    /*! exports provided: SignupPage */

    /***/
    function yL7A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPage", function () {
        return SignupPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./signup.page.html */
      "6h0i");
      /* harmony import */


      var _signup_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./signup.page.scss */
      "fJgH");
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


      var _Service_account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../Service/account.service */
      "6wYF");

      var SignupPage = /*#__PURE__*/function () {
        function SignupPage(fb, accountService, alertController, router) {
          _classCallCheck(this, SignupPage);

          this.fb = fb;
          this.accountService = accountService;
          this.alertController = alertController;
          this.router = router;
          this.regform = this.fb.group({});
        }

        _createClass(SignupPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.regform = this.fb.group({
              FullName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              phonenumber: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              FirstTimeLocation: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              confirmPassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              type: [""],
              active: [""]
            });
          }
        }, {
          key: "registerAccount",
          value: function registerAccount() {
            if (this.regform.get("password").value === this.regform.get("confirmPassword").value) {
              if (this.regform.valid) {
                if (this.regform.get("type").value === "customer") {
                  this.regform.get("active").setValue("true");
                  this.router.navigate(["/user"]);
                } else {
                  this.regform.get("active").setValue("false");
                  this.accountService.create(this.regform.value);
                  this.router.navigate(["/menu/login"]);
                }
              } else {
                this.ErrorAlert("Please Enter All field.");
              }
            } else {
              this.ErrorAlert("Password donot match");
            }
          }
        }, {
          key: "login",
          value: function login() {
            this.router.navigate(["/menu/login"]);
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm(account) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

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
                            _this.accountService.removeAccount(account.id);

                            _this.regform.reset();

                            _this.accountId = null;
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
          value: function ErrorAlert(message) {
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
                        message: message,
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
          key: "toggleFieldTextType",
          value: function toggleFieldTextType() {
            this.fieldTextType = !this.fieldTextType;
          }
        }, {
          key: "conPassword",
          value: function conPassword() {
            this.conformPassword = !this.conformPassword;
          }
        }]);

        return SignupPage;
      }();

      SignupPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _Service_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-signup',
        template: _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_signup_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SignupPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=signup-signup-module-es5.js.map