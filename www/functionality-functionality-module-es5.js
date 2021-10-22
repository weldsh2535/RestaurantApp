(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["functionality-functionality-module"], {
    /***/
    "52Q6":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/functionality/functionality.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function Q6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\" >\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Functionality</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"regform\">\n   <ion-item>\n      <ion-label >SN </ion-label>\n      <ion-input formControlName=\"SN\" type=\"number\"></ion-input>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('SN').valid && regform.get('SN').touched\" > This field is required! </small> \n    </ion-item>\n    <ion-item>\n      <ion-label >component Name</ion-label>\n      <ion-input formControlName=\"compName\" type=\"text\"></ion-input>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('compName').valid && regform.get('compName').touched\" > This field is required! </small> \n    </ion-item>\n    <ion-item>\n      <ion-label>Description </ion-label>\n      <ion-input formControlName=\"description\" type=\"text\"></ion-input>\n   </ion-item>\n    <ion-item>\n      <ion-label>Remark</ion-label>\n      <ion-input formControlName=\"remark\" type=\"text\"></ion-input>\n       </ion-item>\n     <div style=\"text-align: center; margin: auto;\">\n      <ion-button id=\"add items\" (click)=\"saveFunactionality()\"> \n        <ion-icon slot=\"start\" name=\"add-circle-outline\"></ion-icon>\n        {{editMode?'Update Functionality':'Add Functionality'}}</ion-button>\n    </div> \n</form>\n\n<ion-item-sliding  *ngFor=\"let item of listOfFunctionality \" #slidingItem >\n  <ion-item detail>\n    <ion-label> {{item.SN}}</ion-label>\n    <ion-label> {{item.compName}}</ion-label>\n    <ion-label> {{item.description}}</ion-label>\n  </ion-item>\n  <ion-item-options side=\"start\">\n    <ion-item-option color=\"danger\" (click)=\"Edit(item,slidingItem)\">\n   <ion-icon  name=\"create\" slot=\"icon-only\"></ion-icon></ion-item-option>\n   <ion-item-option color=\"danger\" (click)=\"delete(item,slidingItem)\">\n    <ion-icon  name=\"trash\" slot=\"icon-only\"></ion-icon></ion-item-option>\n  </ion-item-options>\n</ion-item-sliding>\n</ion-content>\n";
      /***/
    },

    /***/
    "ED6E":
    /*!*****************************************************!*\
      !*** ./src/app/functionality/functionality.page.ts ***!
      \*****************************************************/

    /*! exports provided: FunctionalityPage */

    /***/
    function ED6E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FunctionalityPage", function () {
        return FunctionalityPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_functionality_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./functionality.page.html */
      "52Q6");
      /* harmony import */


      var _functionality_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./functionality.page.scss */
      "bOSJ");
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


      var _Service_Functionality_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../Service/Functionality.service */
      "OWjg");

      var FunctionalityPage = /*#__PURE__*/function () {
        function FunctionalityPage(fb, functionalityService, alertController, platform) {
          _classCallCheck(this, FunctionalityPage);

          this.fb = fb;
          this.functionalityService = functionalityService;
          this.alertController = alertController;
          this.platform = platform;
          this.regform = this.fb.group({});
        }

        _createClass(FunctionalityPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.regform = this.fb.group({
              SN: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              compName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              description: [""],
              remark: [""]
            });

            if (this.platform.is('mobile') && !this.platform.is('hybrid') || this.platform.is('desktop')) {
              this.usePicker = true;
            }

            this.getFunctionality();
          }
        }, {
          key: "getFunctionality",
          value: function getFunctionality() {
            var _this = this;

            this.functionalityService.getAllFunctionality().subscribe(function (res) {
              _this.listOfFunctionality = res;
            });
          }
        }, {
          key: "saveFunactionality",
          value: function saveFunactionality() {
            if (this.regform.valid) {
              if (!this.functionalityId) {
                this.functionalityService.create(this.regform.value);
                this.presentAlert();
              } else {
                this.functionalityService.updateFunctionality(this.regform.value, this.functionalityId);
              }

              this.functionalityId = null;
              this.regform.reset();
            } else {
              this.ErrorAlert();
            }
          }
        }, {
          key: "Edit",
          value: function Edit(functionlityObj, slide) {
            this.editMode = true;
            this.functionalityId = functionlityObj.id;
            this.regform.get('SN').setValue(functionlityObj.SN);
            this.regform.get('compName').setValue(functionlityObj.compName);
            this.regform.get('description').setValue(functionlityObj.description);
            this.regform.get('remark').setValue(functionlityObj.remark);
            slide.close();
          }
        }, {
          key: "delete",
          value: function _delete(func, slide) {
            this.presentAlertConfirm(func);
            slide.close();
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm(functionality) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

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
                            _this2.functionalityService.removeFunctionality(functionality.id);

                            _this2.regform.reset();

                            _this2.functionalityId = null;
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

        return FunctionalityPage;
      }();

      FunctionalityPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _Service_Functionality_service__WEBPACK_IMPORTED_MODULE_6__["FunctionalityService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }];
      };

      FunctionalityPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-functionality',
        template: _raw_loader_functionality_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_functionality_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FunctionalityPage);
      /***/
    },

    /***/
    "bOSJ":
    /*!*******************************************************!*\
      !*** ./src/app/functionality/functionality.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function bOSJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".label-class {\n  --inner-padding-start:12px;\n  --inner-padding-end:10px;\n  margin-left: 67px;\n}\n\n.label-class-al {\n  margin-left: 67px;\n}\n\n.ion-input {\n  margin-left: 67px;\n}\n\n.dx-lookup-field {\n  padding: 5px 23px 12px 54px;\n  font-size: 1em;\n}\n\nion-content ion-item {\n  padding: 0;\n  --border-radius: 14px;\n}\n\nion-content ion-searchbar {\n  --border-radius: 14px;\n  --background: rgb(243, 243, 243);\n  margin-top: -13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZ1bmN0aW9uYWxpdHkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksMEJBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBRUU7RUFDRSxpQkFBQTtBQUNKOztBQUNFO0VBQ0UsaUJBQUE7QUFFSjs7QUFBRTtFQUNFLDJCQUFBO0VBQ0EsY0FBQTtBQUdKOztBQUVNO0VBRUUsVUFBQTtFQUVBLHFCQUFBO0FBRFI7O0FBS0c7RUFDQyxxQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7QUFISiIsImZpbGUiOiJmdW5jdGlvbmFsaXR5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubGFiZWwtY2xhc3N7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6MTJweDtcclxuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6MTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA2N3B4O1xyXG4gIH1cclxuICAubGFiZWwtY2xhc3MtYWx7XHJcbiAgICBtYXJnaW4tbGVmdDogNjdweDtcclxuICB9XHJcbiAgLmlvbi1pbnB1dHtcclxuICAgIG1hcmdpbi1sZWZ0OiA2N3B4O1xyXG4gIH1cclxuICAuZHgtbG9va3VwLWZpZWxkIHtcclxuICAgIHBhZGRpbmc6IDVweCAyM3B4IDEycHggNTRweDtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gIH1cclxuICBpb24tY29udGVudCB7XHJcbiAgICAvLy0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDQzLDkwLDE0OCwxKSAwJSwgcmdiYSg0NSwxMTIsMjI5LDEpIDM1JSwgcmdiYSg0NSwxMTIsMjI5LDEpIDEwMCUpO1xyXG4gICBcclxuICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAvLyAtLWJhY2tncm91bmQ6IHJnYigxMjAsIDEyNiwgMTM0KTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgLy8gbWFyZ2luOiAxNHB4IDA7XHJcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gICAgICAgLy8gY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgLy9mb250LXdlaWdodDogNjAwO1xyXG4gICB9XHJcbiAgIGlvbi1zZWFyY2hiYXJ7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyNDMsIDI0MywgMjQzKTtcclxuICAgIG1hcmdpbi10b3A6IC0xM3B4O1xyXG4gICB9XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "jEtB":
    /*!*******************************************************!*\
      !*** ./src/app/functionality/functionality.module.ts ***!
      \*******************************************************/

    /*! exports provided: FunctionalityPageModule */

    /***/
    function jEtB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FunctionalityPageModule", function () {
        return FunctionalityPageModule;
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


      var _functionality_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./functionality-routing.module */
      "q6PB");
      /* harmony import */


      var _functionality_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./functionality.page */
      "ED6E");

      var FunctionalityPageModule = function FunctionalityPageModule() {
        _classCallCheck(this, FunctionalityPageModule);
      };

      FunctionalityPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _functionality_routing_module__WEBPACK_IMPORTED_MODULE_5__["FunctionalityPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_functionality_page__WEBPACK_IMPORTED_MODULE_6__["FunctionalityPage"]]
      })], FunctionalityPageModule);
      /***/
    },

    /***/
    "q6PB":
    /*!***************************************************************!*\
      !*** ./src/app/functionality/functionality-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: FunctionalityPageRoutingModule */

    /***/
    function q6PB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FunctionalityPageRoutingModule", function () {
        return FunctionalityPageRoutingModule;
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


      var _functionality_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./functionality.page */
      "ED6E");

      var routes = [{
        path: '',
        component: _functionality_page__WEBPACK_IMPORTED_MODULE_3__["FunctionalityPage"]
      }];

      var FunctionalityPageRoutingModule = function FunctionalityPageRoutingModule() {
        _classCallCheck(this, FunctionalityPageRoutingModule);
      };

      FunctionalityPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FunctionalityPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=functionality-functionality-module-es5.js.map