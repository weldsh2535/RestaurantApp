(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
    /***/
    "34Y5":
    /*!*************************************!*\
      !*** ./src/app/login/login.page.ts ***!
      \*************************************/

    /*! exports provided: LoginPage */

    /***/
    function Y5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.page.html */
      "V6Ie");
      /* harmony import */


      var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.page.scss */
      "r67e");
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


      var _Service_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../Service/auth.service */
      "enR7");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(authServices, router, alertCtrl, fb, modalController, platform) {
          _classCallCheck(this, LoginPage);

          this.authServices = authServices;
          this.router = router;
          this.alertCtrl = alertCtrl;
          this.fb = fb;
          this.modalController = modalController;
          this.platform = platform;
          this.regform = this.fb.group({});
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.regform = this.fb.group({
              email: [""],
              password: [""]
            });
          }
        }, {
          key: "signIn",
          value: function signIn() {
            var _this = this;

            var email = this.regform.get("email").value;
            var password = this.regform.get("password").value;

            if (this.regform.valid) {
              this.authServices.getAllAccount().subscribe(function (res) {
                var result = res.filter(function (c) {
                  return c.email == email && c.password == password;
                });

                if (result.length > 0) {
                  localStorage.setItem("userId", result[0].id);
                  localStorage.setItem("fullName", result[0].fullName);
                  localStorage.setItem("roleType", result[0].type);
                  localStorage.setItem('active', result[0].active);

                  if (result[0].type == "restaurant") {
                    if (result[0].active == "true") {
                      _this.router.navigate(['/menu/restaurant-home']);

                      _this.presentAlert("Login successfully.");

                      _this.regform.reset();
                    } else {
                      _this.presentAlert("Please contact your system administrator");
                    }
                  }
                } else {
                  _this.presentAlert("Please enter correct username and password!!");
                }
              });
            }
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.subscription = this.platform.backButton.subscribe(function () {
              navigator['app'].exitApp();
            });
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.subscription.unsubscribe();
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrl.create({
                        cssClass: 'my-custom-class',
                        header: 'Login',
                        // subHeader: 'Subtitle',
                        message: message,
                        buttons: ['OK']
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
          key: "toggleFieldTextType",
          value: function toggleFieldTextType() {
            this.fieldTextType = !this.fieldTextType;
          }
        }, {
          key: "register",
          value: function register() {
            this.router.navigate(["/signup"]);
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _Service_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LoginPage);
      /***/
    },

    /***/
    "V6Ie":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function V6Ie(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n\t<ion-toolbar color=\"primary\">\n\t\t<ion-title style=\"text-align: center;\">Login </ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\t<div class=\"container pt-3\">\n\t\t<div class=\"row justify-content-sm-center\">\n\t\t\t<div class=\"col-sm-10 col-md-6\">\n\t\t\t\t<div class=\"card border-info\">\n\t\t\t\t\t<div class=\"card-header\">Login</div>\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<!-- <div class=\"col-md-4 text-center\">\n\t\t\t\t\t <ion-icon name=\"lock-closed\"></ion-icon> \n\t\t\t\t  </div> -->\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<form [formGroup]=\"regform\">\n\t\t\t\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"mail\"></ion-icon>&nbsp;&nbsp;\n\t\t\t\t\t\t\t\t\t\t<ion-input type=\"text\" formControlName=\"email\" [required] placeholder=\"Enter your email\">\n\t\t\t\t\t\t\t\t\t\t</ion-input>\n\t\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"lock-closed\"></ion-icon>&nbsp;&nbsp;\n\t\t\t\t\t\t\t\t\t\t<ion-input placeholder=\"Enter your password\" [type]=\"fieldTextType ? 'text' : 'password'\"\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"password\" [required]></ion-input>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa\" [ngClass]=\"{\n\t\t\t\t\t\t  'fa-eye-slash': !fieldTextType,\n\t\t\t\t\t\t  'fa-eye': fieldTextType\n\t\t\t\t\t\t}\" (click)=\"toggleFieldTextType()\"></i>\n\t\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t    <button style=\"margin-top: 12px\" (click)=\"signIn()\"\n\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-lg btn-primary btn-block mb-1\" type=\"submit\">\n\t\t\t\t\t\t\t\t\t\tLogin\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t\t\t\t<ion-label>Don't have an account ?</ion-label>\n\t\t\t\t\t\t\t\t\t\t<button style=\"margin-left: -37px; color: #234ada; background-color: #f8f9fa;\" \n\t\t\t\t\t\t\t\t\t\t\t(click)=\"register()\">\n\t\t\t\t\t\t\t\t\t\t\tRegister\n\t\t\t\t\t\t\t\t\t\t  </button>\n\t\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</ion-content>\n<router-outlet></router-outlet>";
      /***/
    },

    /***/
    "X3zk":
    /*!***************************************!*\
      !*** ./src/app/login/login.module.ts ***!
      \***************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function X3zk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
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


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "euwS");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "34Y5");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "euwS":
    /*!***********************************************!*\
      !*** ./src/app/login/login-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function euwS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
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


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "34Y5");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "r67e":
    /*!***************************************!*\
      !*** ./src/app/login/login.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function r67e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MifQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=login-login-module-es5.js.map