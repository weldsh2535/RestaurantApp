(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
    /***/
    "cRhG":
    /*!*******************************************!*\
      !*** ./src/app/profile/profile.module.ts ***!
      \*******************************************/

    /*! exports provided: ProfilePageModule */

    /***/
    function cRhG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
        return ProfilePageModule;
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


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profile-routing.module */
      "v+7O");
      /* harmony import */


      var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profile.page */
      "ncJE");

      var ProfilePageModule = function ProfilePageModule() {
        _classCallCheck(this, ProfilePageModule);
      };

      ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
      })], ProfilePageModule);
      /***/
    },

    /***/
    "ncJE":
    /*!*****************************************!*\
      !*** ./src/app/profile/profile.page.ts ***!
      \*****************************************/

    /*! exports provided: ProfilePage */

    /***/
    function ncJE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
        return ProfilePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./profile.page.html */
      "tXh8");
      /* harmony import */


      var _profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./profile.page.scss */
      "zxxS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
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
      /* harmony import */


      var _Service_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../Service/auth.service */
      "enR7");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var ProfilePage = /*#__PURE__*/function () {
        function ProfilePage(router, authServices, alertCtrl, accountService, fb) {
          _classCallCheck(this, ProfilePage);

          this.router = router;
          this.authServices = authServices;
          this.alertCtrl = alertCtrl;
          this.accountService = accountService;
          this.fb = fb;
          this.usePicker = false;
          this.regform = this.fb.group({});
        }

        _createClass(ProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAccount();
          }
        }, {
          key: "getAccount",
          value: function getAccount() {
            var _this = this;

            this.accountService.getAllAccount().subscribe(function (res) {
              _this.listOfAccount = res;
              _this.base64textString = res.find(function (c) {
                return c.id == localStorage.getItem("userId");
              }).photo;
              _this.fullName = res.find(function (c) {
                return c.id == localStorage.getItem("userId");
              }).FullName;
            });
          }
        }, {
          key: "account",
          value: function account() {
            this.router.navigate(["/account-details"]);
          }
        }, {
          key: "setting",
          value: function setting() {
            this.router.navigate(["/setting"]);
          }
        }, {
          key: "contact",
          value: function contact() {
            this.router.navigate(["/contact"]);
          }
        }, {
          key: "logout",
          value: function logout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      localStorage.setItem("userId", null);
                      localStorage.setItem("fullName", null);
                      localStorage.setItem("active", null);
                      localStorage.setItem("roleType", null);
                      this.router.navigateByUrl('login');

                      (function (error) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          var alert;
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  _context.next = 2;
                                  return this.alertCtrl.create({
                                    message: error.message,
                                    buttons: [{
                                      text: 'ok',
                                      role: 'cancel'
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
                      });

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "onPickImage",
          value: function onPickImage() {
            var _this3 = this;

            if (this.usePicker == true) {
              // if (!Capacitor.isPluginAvailable('Camera')) {
              this.filePickerRef.nativeElement.click();
              return;
            }

            _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"].Camera.getPhoto({
              quality: 50,
              source: _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["CameraSource"].Prompt,
              correctOrientation: true,
              height: 100,
              width: 100,
              resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["CameraResultType"].Base64
            }).then(function (image) {
              _this3.base64textString = 'data:image/png;base64,' + image.base64String;

              var accounts = _this3.listOfAccount.find(function (c) {
                return c.id == +localStorage.getItem("userId");
              });

              var data = {
                email: accounts.email,
                phonenumber: accounts.phonenumber,
                password: accounts.password,
                FullName: accounts.fullName,
                FirstTimeLocation: accounts.locationId,
                active: accounts.active,
                type: accounts.type,
                photo: _this3.base64textString
              };

              _this3.accountService.updateAccount(data);
            })["catch"](function (error) {
              console.log(error);

              if (_this3.usePicker) {
                _this3.filePickerRef.nativeElement.click();
              }

              return false;
            });
          }
        }, {
          key: "onFileChosen",
          value: function onFileChosen(event) {
            var _this4 = this;

            var pickedFile = event.target.files[0];

            if (!pickedFile) {
              return;
            }

            var fr = new FileReader();

            fr.onload = function () {
              var dataUrl = fr.result.toString();
              _this4.base64textString = dataUrl;
            };

            fr.readAsDataURL(pickedFile);
          }
        }]);

        return ProfilePage;
      }();

      ProfilePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _Service_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _Service_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]
        }];
      };

      ProfilePage.propDecorators = {
        filePickerRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['filePicker', {
            "static": false
          }]
        }]
      };
      ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProfilePage);
      /***/
    },

    /***/
    "tXh8":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function tXh8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-grid style=\"margin-left: 90px;\">\n     <ion-avatar style=\"height: 62px;\n      width: 68px;\" class=\"ion-margin-start\" >\n        <ion-img role=\"button\" class=\"image\" (click)=\"onPickImage()\" [src]=\"base64textString\"\n        *ngIf=\"base64textString\"></ion-img>\n      </ion-avatar>\n       <ion-icon name=\"camera\" slot=\"start\"></ion-icon>\n      <ion-label>{{this.fullName}}</ion-label>\n      <ion-button color=\"primary\" (click)=\"onPickImage()\" *ngIf=\"!base64textString\">\n        <ion-icon name=\"camera\" slot=\"start\"></ion-icon>\n      </ion-button>\n    <input hidden type=\"file\" accept=\"image/jpeg\" *ngIf=\"usePicker\" #filePicker (change)=\"onFileChosen($event)\" />\n</ion-grid>\n<ion-item lines=\"none\" (click)=\"account()\">\n  <ion-icon color=\"primary\" name=\"person-outline\"></ion-icon><ion-label>&nbsp;&nbsp;&nbsp;Account details</ion-label>\n</ion-item>\n<ion-item lines=\"none\" (click)=\"setting()\">\n  <ion-icon color=\"primary\" name=\"settings-outline\"></ion-icon><ion-label>&nbsp;&nbsp;&nbsp;Settings</ion-label>\n</ion-item>\n<ion-item lines=\"none\" (click)=\"contact()\">\n  <ion-icon color=\"primary\" name=\"call-sharp\"></ion-icon><ion-label>&nbsp;&nbsp;&nbsp;Contact Us</ion-label>\n</ion-item>\n<ion-button (click)=\"logout()\">loginout</ion-button>\n</ion-content>\n";
      /***/
    },

    /***/
    "v+7O":
    /*!***************************************************!*\
      !*** ./src/app/profile/profile-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: ProfilePageRoutingModule */

    /***/
    function v7O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
        return ProfilePageRoutingModule;
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


      var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile.page */
      "ncJE");

      var routes = [{
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
      }];

      var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
        _classCallCheck(this, ProfilePageRoutingModule);
      };

      ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProfilePageRoutingModule);
      /***/
    },

    /***/
    "zxxS":
    /*!*******************************************!*\
      !*** ./src/app/profile/profile.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function zxxS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-button {\n  margin-left: 100px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbntcclxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxufSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=profile-profile-module-es5.js.map