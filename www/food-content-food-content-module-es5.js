(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["food-content-food-content-module"], {
    /***/
    "52jl":
    /*!***************************************************!*\
      !*** ./src/app/food-content/food-content.page.ts ***!
      \***************************************************/

    /*! exports provided: FoodContentPage */

    /***/
    function jl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FoodContentPage", function () {
        return FoodContentPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_food_content_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./food-content.page.html */
      "E2oG");
      /* harmony import */


      var _food_content_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./food-content.page.scss */
      "5uXB");
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


      var _Service_food_content_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../Service/food-content.service */
      "pfyr");
      /* harmony import */


      var _Service_food_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../Service/food.service */
      "Dkj+");

      var FoodContentPage = /*#__PURE__*/function () {
        function FoodContentPage(fb, foodContentService, foodService, alertController, platform) {
          _classCallCheck(this, FoodContentPage);

          this.fb = fb;
          this.foodContentService = foodContentService;
          this.foodService = foodService;
          this.alertController = alertController;
          this.platform = platform;
          this.regform = this.fb.group({});
        }

        _createClass(FoodContentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.regform = this.fb.group({
              FoodId: [""],
              ContentName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              ContentDescription: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              qty: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            });

            if (this.platform.is('mobile') && !this.platform.is('hybrid') || this.platform.is('desktop')) {
              this.usePicker = true;
            }

            this.getFoodContent();
            this.getFood();
          }
        }, {
          key: "getFood",
          value: function getFood() {
            var _this = this;

            this.foodService.getAllFood().subscribe(function (res) {
              _this.listOfFood = res;
              _this.defualtFoodContent = res[0].Name;
            });
          }
        }, {
          key: "getFoodContent",
          value: function getFoodContent() {
            var _this2 = this;

            this.foodContentService.getAllFoodContent().subscribe(function (res) {
              _this2.listOfFoodContent = res;
            });
          }
        }, {
          key: "saveFoodContent",
          value: function saveFoodContent() {
            if (this.regform.valid) {
              if (!this.foodId) {
                this.foodContentService.create(this.regform.value);
              } else {
                this.foodContentService.updateFoodContent(this.regform.value, this.foodId);
              }

              this.regform.reset();
              this.foodId = null;
              this.presentAlert();
            } else {
              this.ErrorAlert();
            }
          }
        }, {
          key: "edit",
          value: function edit(food, slidingItem) {
            this.editMode = true;
            this.foodId = food.id;
            this.regform.get('FoodId').setValue(food.FoodId);
            this.regform.get('ContentName').setValue(food.ContentName);
            this.regform.get('ContentDescription').setValue(food.ContentDescription);
            this.regform.get('qty').setValue(food.qty);
            slidingItem.close();
          }
        }, {
          key: "delete",
          value: function _delete(food, slidingItem) {
            this.presentAlertConfirm(food);
            slidingItem.close();
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm(food) {
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
                            _this3.foodContentService.removeFoodContent(food.id);

                            _this3.regform.reset();

                            _this3.foodId = null;
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
                        header: 'Food ',
                        // subHeader: 'Subtitle',
                        message: 'Food Saved successfully.',
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

        return FoodContentPage;
      }();

      FoodContentPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _Service_food_content_service__WEBPACK_IMPORTED_MODULE_6__["FoodContentService"]
        }, {
          type: _Service_food_service__WEBPACK_IMPORTED_MODULE_7__["FoodService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }];
      };

      FoodContentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-food-content',
        template: _raw_loader_food_content_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_food_content_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FoodContentPage);
      /***/
    },

    /***/
    "5uXB":
    /*!*****************************************************!*\
      !*** ./src/app/food-content/food-content.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function uXB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".label-class {\n  --inner-padding-start:12px;\n  --inner-padding-end:10px;\n  margin-left: 67px;\n}\n\n.label-class-al {\n  margin-left: 67px;\n}\n\n.ion-input {\n  margin-left: 67px;\n}\n\n.dx-lookup-field {\n  padding: 5px 23px 12px 54px;\n  font-size: 1em;\n}\n\nion-content ion-item {\n  padding: 0;\n  --border-radius: 14px;\n}\n\nion-content ion-searchbar {\n  --border-radius: 14px;\n  --background: rgb(243, 243, 243);\n  margin-top: -13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZvb2QtY29udGVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFFRTtFQUNFLGlCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxpQkFBQTtBQUVKOztBQUFFO0VBQ0UsMkJBQUE7RUFDQSxjQUFBO0FBR0o7O0FBRU07RUFFRSxVQUFBO0VBRUEscUJBQUE7QUFEUjs7QUFLRztFQUNDLHFCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtBQUhKIiwiZmlsZSI6ImZvb2QtY29udGVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmxhYmVsLWNsYXNze1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OjEycHg7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOjEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNjdweDtcclxuICB9XHJcbiAgLmxhYmVsLWNsYXNzLWFse1xyXG4gICAgbWFyZ2luLWxlZnQ6IDY3cHg7XHJcbiAgfVxyXG4gIC5pb24taW5wdXR7XHJcbiAgICBtYXJnaW4tbGVmdDogNjdweDtcclxuICB9XHJcbiAgLmR4LWxvb2t1cC1maWVsZCB7XHJcbiAgICBwYWRkaW5nOiA1cHggMjNweCAxMnB4IDU0cHg7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICB9XHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgLy8tLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSg0Myw5MCwxNDgsMSkgMCUsIHJnYmEoNDUsMTEyLDIyOSwxKSAzNSUsIHJnYmEoNDUsMTEyLDIyOSwxKSAxMDAlKTtcclxuICAgXHJcbiAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgLy8gLS1iYWNrZ3JvdW5kOiByZ2IoMTIwLCAxMjYsIDEzNCk7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgIC8vIG1hcmdpbjogMTRweCAwO1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgICAgIC8vIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIC8vZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgfVxyXG4gICBpb24tc2VhcmNoYmFye1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQzLCAyNDMsIDI0Myk7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTNweDtcclxuICAgfVxyXG4gIH0iXX0= */";
      /***/
    },

    /***/
    "Dkj+":
    /*!*****************************************!*\
      !*** ./src/app/Service/food.service.ts ***!
      \*****************************************/

    /*! exports provided: FoodService */

    /***/
    function Dkj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FoodService", function () {
        return FoodService;
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

      var FoodService = /*#__PURE__*/function () {
        function FoodService(db) {
          _classCallCheck(this, FoodService);

          this.db = db;
          this.foodCollectionList = db.collection('Food');
        }

        _createClass(FoodService, [{
          key: "create",
          value: function create(foodObj) {
            return this.foodCollectionList.add(foodObj);
          }
        }, {
          key: "getAllFood",
          value: function getAllFood() {
            this.foodList = this.foodCollectionList.snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])(function (actions) {
              return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return Object.assign({
                  id: id
                }, data);
              });
            }));
            return this.foodList;
          }
        }, {
          key: "getFood",
          value: function getFood(id) {
            return this.foodCollectionList.doc(id).valueChanges();
          }
        }, {
          key: "updateFood",
          value: function updateFood(foodObj, id) {
            return this.foodCollectionList.doc(id).update(foodObj)["catch"](this.handleError);
          }
        }, {
          key: "removeFood",
          value: function removeFood(id) {
            return this.foodCollectionList.doc(id)["delete"]()["catch"](this.handleError);
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            if (error.status === 400) return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]["throw"](new _common_bad_input__WEBPACK_IMPORTED_MODULE_6__["BadInput"](error.json()));
            if (error.status === 404) return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]["throw"](new _common_not_found_error__WEBPACK_IMPORTED_MODULE_7__["NotFoundError"]());
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]["throw"](new _common_app_error__WEBPACK_IMPORTED_MODULE_5__["AppError"](error));
          }
        }]);

        return FoodService;
      }();

      FoodService.ctorParameters = function () {
        return [{
          type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      };

      FoodService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], FoodService);
      /***/
    },

    /***/
    "E2oG":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/food-content/food-content.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function E2oG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\" >\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Food</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"regform\">\n    <ion-item>\n       <ion-label>Food Id </ion-label>\n       <ion-select interface=\"popover\" formControlName=\"FoodId\" [(ngModel)]=\"defualtFoodContent\">\n        <ion-select-option   *ngFor=\"let code of listOfFood\" value=\"{{code?.id}}\">\n          {{code?.Name}}\n        </ion-select-option>\n      </ion-select>\n       <small class=\"form-text text-muted\" *ngIf=\"!regform.get('FoodId').valid && regform.get('FoodId').touched\" > This field is required! </small> \n     </ion-item>\n     <ion-item>\n       <ion-label>Content Name</ion-label>\n       <ion-input formControlName=\"ContentName\" type=\"text\"></ion-input>\n       <small class=\"form-text text-muted\" *ngIf=\"!regform.get('ContentName').valid && regform.get('ContentName').touched\" > This field is required! </small> \n     </ion-item>\n      <ion-item>\n       <ion-label>Content Description</ion-label>\n       <ion-input formControlName=\"ContentDescription\" type=\"text\"></ion-input>\n       <small class=\"form-text text-muted\" *ngIf=\"!regform.get('ContentDescription').valid && regform.get('ContentDescription').touched\" > This field is required! </small> \n     </ion-item>\n     <ion-item>\n      <ion-label>Quantity</ion-label>\n      <ion-input formControlName=\"qty\" type=\"number\"></ion-input>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('qty').valid && regform.get('qty').touched\" > This field is required! </small> \n    </ion-item>\n    \n    <div style=\"text-align: center; margin: auto;\">\n       <ion-button id=\"add items\" (click)=\"saveFoodContent()\"> \n         <ion-icon slot=\"start\" name=\"add-circle-outline\"></ion-icon>\n         {{editMode?'Update Food Content':'Add Food Content'}}</ion-button>\n     </div> \n </form>\n\n <ion-item-sliding  *ngFor=\"let item of listOfFoodContent \" #slidingItem >\n  <ion-item detail>\n    <ion-label>{{item.ContentName}}</ion-label>\n    <ion-label> {{item.Name}}</ion-label>\n    <ion-label> {{item.qty}}</ion-label>\n    <ion-label> {{item.ContentDescription}}</ion-label>\n  </ion-item>\n  <ion-item-options side=\"start\">\n    <ion-item-option color=\"danger\" (click)=\"edit(item,slidingItem)\">\n   <ion-icon  name=\"create\" slot=\"icon-only\"></ion-icon></ion-item-option>\n   <ion-item-option color=\"danger\" (click)=\"delete(item,slidingItem)\">\n    <ion-icon  name=\"trash\" slot=\"icon-only\"></ion-icon></ion-item-option>\n  </ion-item-options>\n</ion-item-sliding>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "igtm":
    /*!*****************************************************!*\
      !*** ./src/app/food-content/food-content.module.ts ***!
      \*****************************************************/

    /*! exports provided: FoodContentPageModule */

    /***/
    function igtm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FoodContentPageModule", function () {
        return FoodContentPageModule;
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


      var _food_content_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./food-content-routing.module */
      "zxYR");
      /* harmony import */


      var _food_content_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./food-content.page */
      "52jl");

      var FoodContentPageModule = function FoodContentPageModule() {
        _classCallCheck(this, FoodContentPageModule);
      };

      FoodContentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _food_content_routing_module__WEBPACK_IMPORTED_MODULE_5__["FoodContentPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_food_content_page__WEBPACK_IMPORTED_MODULE_6__["FoodContentPage"]]
      })], FoodContentPageModule);
      /***/
    },

    /***/
    "pfyr":
    /*!*************************************************!*\
      !*** ./src/app/Service/food-content.service.ts ***!
      \*************************************************/

    /*! exports provided: FoodContentService */

    /***/
    function pfyr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FoodContentService", function () {
        return FoodContentService;
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

      var FoodContentService = /*#__PURE__*/function () {
        function FoodContentService(db) {
          _classCallCheck(this, FoodContentService);

          this.db = db;
          this.foodContentCollectionList = db.collection('FoodContent');
        }

        _createClass(FoodContentService, [{
          key: "create",
          value: function create(foodContentObj) {
            return this.foodContentCollectionList.add(foodContentObj);
          }
        }, {
          key: "getAllFoodContent",
          value: function getAllFoodContent() {
            this.foodContentList = this.foodContentCollectionList.snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])(function (actions) {
              return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return Object.assign({
                  id: id
                }, data);
              });
            }));
            return this.foodContentList;
          }
        }, {
          key: "getFoodContent",
          value: function getFoodContent(id) {
            return this.foodContentCollectionList.doc(id).valueChanges();
          }
        }, {
          key: "updateFoodContent",
          value: function updateFoodContent(foodContentObj, id) {
            return this.foodContentCollectionList.doc(id).update(foodContentObj)["catch"](this.handleError);
          }
        }, {
          key: "removeFoodContent",
          value: function removeFoodContent(id) {
            return this.foodContentCollectionList.doc(id)["delete"]()["catch"](this.handleError);
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            if (error.status === 400) return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]["throw"](new _common_bad_input__WEBPACK_IMPORTED_MODULE_6__["BadInput"](error.json()));
            if (error.status === 404) return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]["throw"](new _common_not_found_error__WEBPACK_IMPORTED_MODULE_7__["NotFoundError"]());
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]["throw"](new _common_app_error__WEBPACK_IMPORTED_MODULE_5__["AppError"](error));
          }
        }]);

        return FoodContentService;
      }();

      FoodContentService.ctorParameters = function () {
        return [{
          type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      };

      FoodContentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], FoodContentService);
      /***/
    },

    /***/
    "zxYR":
    /*!*************************************************************!*\
      !*** ./src/app/food-content/food-content-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: FoodContentPageRoutingModule */

    /***/
    function zxYR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FoodContentPageRoutingModule", function () {
        return FoodContentPageRoutingModule;
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


      var _food_content_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./food-content.page */
      "52jl");

      var routes = [{
        path: '',
        component: _food_content_page__WEBPACK_IMPORTED_MODULE_3__["FoodContentPage"]
      }];

      var FoodContentPageRoutingModule = function FoodContentPageRoutingModule() {
        _classCallCheck(this, FoodContentPageRoutingModule);
      };

      FoodContentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FoodContentPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=food-content-food-content-module-es5.js.map