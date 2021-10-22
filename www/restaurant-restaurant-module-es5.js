(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["restaurant-restaurant-module"], {
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
    "53D8":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurant/restaurant.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function D8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\" >\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Restaurant</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form [formGroup]=\"regform\">\n    <ion-item>\n       <ion-label>Full Name </ion-label>\n       <ion-input formControlName=\"Name\" type=\"text\"></ion-input>\n       <small class=\"form-text text-muted\" *ngIf=\"!regform.get('Name').valid && regform.get('Name').touched\" > This field is required! </small> \n     </ion-item>\n     <ion-item>\n       <ion-label>Location</ion-label>\n       <ion-input formControlName=\"Location\" type=\"text\"></ion-input>\n       <!-- <h3>\n        <p>\n            Latitude: {{this.latitude}}\n        </p>\n        <p>\n            Longitude: {{this.longtiude}}\n        </p>\n    </h3> -->\n       <ion-icon name=\"location-outline\" (click)=\"openLocation()\"></ion-icon>\n       <small class=\"form-text text-muted\" *ngIf=\"!regform.get('Location').valid && regform.get('Location').touched\" > This field is required! </small> \n     </ion-item>\n     <!-- <div class=\"text-center\">\n\n      <p>\n          <button class=\"btn btn-primary\" (click)=\"openGoogelMapsModal()\">Open Google Map</button>\n      </p>\n      <h1>\n          <p *ngIf=\"coordinates.address\">\n              Address: {{coordinates.address}}\n          </p>\n      </h1>\n      <h3>\n          <p *ngIf=\"coordinates.latitude\">\n              Latitude: {{coordinates.latitude}}\n          </p>\n          <p *ngIf=\"coordinates.longitude\">\n              Longitude: {{coordinates.longitude}}\n          </p>\n      </h3>\n  </div> -->\n      <ion-item>\n       <ion-label>Type</ion-label>\n       <ion-input formControlName=\"Type\" type=\"text\"></ion-input>\n       <small class=\"form-text text-muted\" *ngIf=\"!regform.get('Type').valid && regform.get('Type').touched\" > This field is required! </small> \n     </ion-item>\n     <ion-list>\n        <ion-label style=\"margin-left: 12px;\">Working Hour</ion-label>\n        <ion-item >\n         <ion-label>Start Time</ion-label>\n         <ion-datetime formControlName=\"StartWorkingHour\" display-format=\"h:mm A\" picker-format=\"h:mm A\" value=\"1990-02-19T07:43Z\"></ion-datetime>\n         &nbsp;&nbsp;&nbsp;\n         <ion-label>End Time</ion-label>\n         <ion-datetime formControlName=\"EndWorkingHour\" display-format=\"h:mm A\" picker-format=\"h:mm A\" value=\"1990-02-19T07:43Z\"></ion-datetime>\n       </ion-item>\n    </ion-list>\n   <ion-item>\n      <ion-label>Area Space</ion-label>\n      <ion-input formControlName=\"AreaSpace\" type=\"text\"></ion-input>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('AreaSpace').valid && regform.get('AreaSpace').touched\" > This field is required! </small> \n    </ion-item>\n    <ion-item>\n      <ion-label>Phone Number</ion-label>\n      <ion-input formControlName=\"PhoneNumber\" type=\"text\"></ion-input>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('PhoneNumber').valid && regform.get('PhoneNumber').touched\" > This field is required! </small> \n    </ion-item>\n    <ion-item>\n      <ion-label>Genral Manager</ion-label>\n      <ion-input formControlName=\"GM\" type=\"text\"></ion-input>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('GM').valid && regform.get('GM').touched\" > This field is required! </small> \n    </ion-item>\n    <ion-item>\n     <ion-label>Contact Person</ion-label>\n     <ion-input formControlName=\"ContactPerson\" type=\"text\"></ion-input>\n     <small class=\"form-text text-muted\" *ngIf=\"!regform.get('ContactPerson').valid && regform.get('ContactPerson').touched\" > This field is required! </small> \n   </ion-item>   \n   <ion-item> \n     <ion-label>Account Id</ion-label>\n    <ion-select interface=\"popover\" formControlName=\"accountId\">\n    <ion-select-option *ngFor=\"let code of listOfAccount\" value=\"{{code?.id}}\">\n      {{code?.FullName}}\n    </ion-select-option>\n  </ion-select>\n  </ion-item>\n   <ion-item>\n     <ion-label>Email</ion-label>\n     <ion-input formControlName=\"Email\" type=\"text\"></ion-input>\n     <small class=\"form-text text-muted\" *ngIf=\"!regform.get('Email').valid && regform.get('Email').touched\" > This field is required! </small> \n   </ion-item>\n   <div class=\"picker\">\n    <ion-img role=\"button\" class=\"image\" (click)=\"onPickImage()\" [src]=\"base64textString\"\n      *ngIf=\"base64textString\"></ion-img>\n    <ion-button color=\"primary\" (click)=\"onPickImage()\" *ngIf=\"!base64textString\">\n      <ion-icon name=\"camera\" slot=\"start\"></ion-icon>\n      <ion-label>Take Picture</ion-label>\n    </ion-button>\n  </div>\n  <input hidden type=\"file\" accept=\"image/jpeg\" *ngIf=\"usePicker\" #filePicker (change)=\"onFileChosen($event)\" />\n    <div style=\"text-align: center; margin: auto;\">\n       <ion-button id=\"add items\" (click)=\"saveRestaurant()\"> \n         <ion-icon slot=\"start\" name=\"add-circle-outline\"></ion-icon>\n         {{editMode?'Update Restaurant':'Add Restaurant'}}</ion-button>\n     </div> \n </form>\n <ion-item-sliding  *ngFor=\"let item of listOfRestaurant \" #slidingItem >\n  <ion-item detail>\n    <ion-thumbnail slot=\"start\">\n      <img [src]=\"item.Photo\">\n    </ion-thumbnail>\n    <ion-label>{{item.Name}}</ion-label>\n    <ion-label>{{item.PhoneNumber}}</ion-label>\n    <ion-label>{{item.ContactPerson}} </ion-label>\n  </ion-item>\n  <ion-item-options side=\"start\">\n    <ion-item-option color=\"danger\" (click)=\"edit(item,slidingItem)\">\n   <ion-icon  name=\"create\" slot=\"icon-only\"></ion-icon></ion-item-option>\n   <ion-item-option color=\"danger\" (click)=\"delete(item,slidingItem)\">\n    <ion-icon  name=\"trash\" slot=\"icon-only\"></ion-icon></ion-item-option>\n  </ion-item-options>\n</ion-item-sliding>\n</ion-content>\n";
      /***/
    },

    /***/
    "AaRp":
    /*!***********************************************!*\
      !*** ./src/app/restaurant/restaurant.page.ts ***!
      \***********************************************/

    /*! exports provided: RestaurantPage */

    /***/
    function AaRp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RestaurantPage", function () {
        return RestaurantPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_restaurant_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./restaurant.page.html */
      "53D8");
      /* harmony import */


      var _restaurant_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./restaurant.page.scss */
      "bpPO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _Service_restaurant_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../Service/restaurant.service */
      "+cje");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _Service_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../Service/shared.service */
      "ldse");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _Service_account_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../Service/account.service */
      "6wYF");

      var RestaurantPage = /*#__PURE__*/function () {
        function RestaurantPage(fb, restaurantService, alertController, platform, sharedService, modalCtrl, modalService, accountService, router) {
          _classCallCheck(this, RestaurantPage);

          this.fb = fb;
          this.restaurantService = restaurantService;
          this.alertController = alertController;
          this.platform = platform;
          this.sharedService = sharedService;
          this.modalCtrl = modalCtrl;
          this.modalService = modalService;
          this.accountService = accountService;
          this.router = router;
          this.regform = this.fb.group({});
          this.usePicker = false;
          this.coordinates = {};
        }

        _createClass(RestaurantPage, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            this.sharedService.restaurant.subscribe(function (restaurant) {
              _this.restaurantId = restaurant.id;

              _this.regform.get('Name').setValue(restaurant.Name);

              _this.regform.get('PhoneNumber').setValue(restaurant.PhoneNumber);

              _this.regform.get('Email').setValue(restaurant.Email);

              _this.regform.get('ContactPerson').setValue(restaurant.ContactPerson);

              _this.regform.get('AreaSpace').setValue(restaurant.AreaSpace);

              _this.regform.get('GM').setValue(restaurant.GM);

              _this.regform.get('Type').setValue(restaurant.Type);

              _this.regform.get('StartWorkingHour').setValue(restaurant.StartWorkingHour);

              _this.regform.get('EndWorkingHour').setValue(restaurant.EndWorkingHour);

              _this.regform.get('accountId').setValue(restaurant.accountId);
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.regform = this.fb.group({
              Name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              Location: [""],
              Type: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              StartWorkingHour: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              EndWorkingHour: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              AreaSpace: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              PhoneNumber: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              GM: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              ContactPerson: [""],
              Email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email],
              Photo: [""],
              accountId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            });

            if (this.platform.is('mobile') && !this.platform.is('hybrid') || this.platform.is('desktop')) {
              this.usePicker = true;
            }

            this.getAccount();
            this.getRestaurant();
            this.sharedService.location.subscribe(function (res) {
              _this2.latitude = res.lat;
              _this2.longtiude = res.lon;
              console.log(res);
            });
          }
        }, {
          key: "getRestaurant",
          value: function getRestaurant() {
            var _this3 = this;

            this.restaurantService.getAllRestaurant().subscribe(function (res) {
              _this3.listOfRestaurant = res;
            });
          }
        }, {
          key: "getAccount",
          value: function getAccount() {
            var _this4 = this;

            this.accountService.getAllAccount().subscribe(function (res) {
              _this4.listOfAccount = res.filter(function (c) {
                return c.type == "restaurant";
              });
            });
          }
        }, {
          key: "saveRestaurant",
          value: function saveRestaurant() {
            if (this.base64textString !== undefined) {
              this.regform.get('Photo').setValue(this.base64textString);
            }

            var data = {
              lat: this.latitude,
              lon: this.longtiude
            };
            this.regform.get('Location').setValue(data);

            if (this.regform.valid) {
              if (!this.restaurantId) {
                this.restaurantService.create(this.regform.value);
              } else {
                this.restaurantService.updateRestaurant(this.regform.value, this.restaurantId);
              }

              this.base64textString = '';
              this.restaurantId = null;
              this.presentAlert();
              this.regform.reset();
            } else {
              this.ErrorAlert();
            }
          }
        }, {
          key: "edit",
          value: function edit(restaurant, slide) {
            this.editMode = true;
            this.restaurantId = restaurant.id;
            this.regform.get('Name').setValue(restaurant.Name);
            this.regform.get('PhoneNumber').setValue(restaurant.PhoneNumber);
            this.regform.get('Email').setValue(restaurant.Email);
            this.regform.get('ContactPerson').setValue(restaurant.ContactPerson);
            this.regform.get('AreaSpace').setValue(restaurant.AreaSpace);
            this.regform.get('GM').setValue(restaurant.GM);
            this.regform.get('Type').setValue(restaurant.Type);
            this.regform.get('StartWorkingHour').setValue(restaurant.StartWorkingHour);
            this.regform.get('EndWorkingHour').setValue(restaurant.EndWorkingHour);
            this.base64textString = restaurant.Photo;
            this.sharedService.restaurant.next(restaurant);
            this.sharedService.location.next(restaurant.Location);
            slide.close();
          }
        }, {
          key: "delete",
          value: function _delete(restaurant, slide) {
            this.presentAlertConfirm(restaurant);
            slide.close();
          }
        }, {
          key: "onPickImage",
          value: function onPickImage() {
            var _this5 = this;

            if (this.usePicker == true) {
              // if (!Capacitor.isPluginAvailable('Camera')) {
              this.filePickerRef.nativeElement.click();
              return;
            }

            _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"].Camera.getPhoto({
              quality: 50,
              source: _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["CameraSource"].Prompt,
              correctOrientation: true,
              height: 100,
              width: 100,
              resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["CameraResultType"].Base64
            }).then(function (image) {
              _this5.base64textString = 'data:image/png;base64,' + image.base64String;
            })["catch"](function (error) {
              console.log(error);

              if (_this5.usePicker) {
                _this5.filePickerRef.nativeElement.click();
              }

              return false;
            });
          }
        }, {
          key: "onFileChosen",
          value: function onFileChosen(event) {
            var _this6 = this;

            var pickedFile = event.target.files[0];

            if (!pickedFile) {
              return;
            }

            var fr = new FileReader();

            fr.onload = function () {
              var dataUrl = fr.result.toString();
              _this6.base64textString = dataUrl;
            };

            fr.readAsDataURL(pickedFile);
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm(restaurant) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this7 = this;

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
                            _this7.restaurantService.removeRestaurant(restaurant.id);

                            _this7.regform.reset();

                            _this7.restaurantId = null;
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
                        header: 'Restaurant',
                        // subHeader: 'Subtitle',
                        message: 'Restaurant Saved successfully.',
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
        }, {
          key: "openLocation",
          value: function openLocation() {
            this.sharedService.status.next("restaurant");
            this.router.navigate(["/menu/location"]);
          }
        }]);

        return RestaurantPage;
      }();

      RestaurantPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _Service_restaurant_service__WEBPACK_IMPORTED_MODULE_5__["RestaurantService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"]
        }, {
          type: _Service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"]
        }, {
          type: _Service_account_service__WEBPACK_IMPORTED_MODULE_11__["AccountService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }];
      };

      RestaurantPage.propDecorators = {
        filePickerRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['filePicker', {
            "static": false
          }]
        }]
      };
      RestaurantPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-restaurant',
        template: _raw_loader_restaurant_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_restaurant_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RestaurantPage);
      /***/
    },

    /***/
    "XO/b":
    /*!*********************************************************!*\
      !*** ./src/app/restaurant/restaurant-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: RestaurantPageRoutingModule */

    /***/
    function XOB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RestaurantPageRoutingModule", function () {
        return RestaurantPageRoutingModule;
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


      var _restaurant_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./restaurant.page */
      "AaRp");

      var routes = [{
        path: '',
        component: _restaurant_page__WEBPACK_IMPORTED_MODULE_3__["RestaurantPage"]
      }];

      var RestaurantPageRoutingModule = function RestaurantPageRoutingModule() {
        _classCallCheck(this, RestaurantPageRoutingModule);
      };

      RestaurantPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RestaurantPageRoutingModule);
      /***/
    },

    /***/
    "bpPO":
    /*!*************************************************!*\
      !*** ./src/app/restaurant/restaurant.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function bpPO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".picker {\n  width: 30rem;\n  max-width: 80%;\n  height: 20rem;\n  max-height: 30vh;\n  border: 1px solid var(--ion-color-primary);\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.image {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\nion-item-sliding .item {\n  --background: linear-gradient(90deg, rgb(223, 226, 230) 0%, rgb(222, 225, 231) 35%, rgb(224, 228, 233) 100%);\n}\n\n.label-class {\n  --inner-padding-start:12px;\n  --inner-padding-end:10px;\n  margin-left: 67px;\n}\n\n.label-class-al {\n  margin-left: 67px;\n}\n\n.ion-input {\n  margin-left: 67px;\n}\n\n.dx-lookup-field {\n  padding: 5px 23px 12px 54px;\n  font-size: 1em;\n}\n\nion-content ion-item {\n  padding: 0;\n  --border-radius: 14px;\n}\n\nion-content ion-searchbar {\n  --border-radius: 14px;\n  --background: rgb(243, 243, 243);\n  margin-top: -13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJlc3RhdXJhbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FBQ0o7O0FBQ0E7RUFDRSw0R0FBQTtBQUVGOztBQU9BO0VBQ0UsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0FBSkY7O0FBTUE7RUFDRSxpQkFBQTtBQUhGOztBQUtBO0VBQ0UsaUJBQUE7QUFGRjs7QUFJQTtFQUNFLDJCQUFBO0VBQ0EsY0FBQTtBQURGOztBQU1JO0VBRUUsVUFBQTtFQUVBLHFCQUFBO0FBTE47O0FBU0M7RUFDQyxxQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7QUFQRiIsImZpbGUiOiJyZXN0YXVyYW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5waWNrZXIge1xyXG4gICAgd2lkdGg6IDMwcmVtO1xyXG4gICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDIwcmVtO1xyXG4gICAgbWF4LWhlaWdodDogMzB2aDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbWFnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxuaW9uLWl0ZW0tc2xpZGluZyAuaXRlbSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYigyMjMsIDIyNiwgMjMwKSAwJSwgcmdiKDIyMiwgMjI1LCAyMzEpIDM1JSwgcmdiKDIyNCwgMjI4LCAyMzMpIDEwMCUpO1xyXG59XHJcbi8vIC5uZy12YWxpZFtyZXF1aXJlZF0sIC5uZy12YWxpZC5yZXF1aXJlZCAge1xyXG4vLyAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2Y4ZDdkYTsgLyogZ3JlZW4gKi9cclxuLy8gfVxyXG5cclxuLy8gLm5nLWludmFsaWQ6bm90KGZvcm0pICB7XHJcbi8vICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZjhkN2RhOyAvKiByZWQgKi9cclxuLy8gfVxyXG4ubGFiZWwtY2xhc3N7XHJcbiAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OjEycHg7XHJcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDoxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA2N3B4O1xyXG59XHJcbi5sYWJlbC1jbGFzcy1hbHtcclxuICBtYXJnaW4tbGVmdDogNjdweDtcclxufVxyXG4uaW9uLWlucHV0e1xyXG4gIG1hcmdpbi1sZWZ0OiA2N3B4O1xyXG59XHJcbi5keC1sb29rdXAtZmllbGQge1xyXG4gIHBhZGRpbmc6IDVweCAyM3B4IDEycHggNTRweDtcclxuICBmb250LXNpemU6IDFlbTtcclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgLy8tLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSg0Myw5MCwxNDgsMSkgMCUsIHJnYmEoNDUsMTEyLDIyOSwxKSAzNSUsIHJnYmEoNDUsMTEyLDIyOSwxKSAxMDAlKTtcclxuIFxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiByZ2IoMTIwLCAxMjYsIDEzNCk7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgLy8gbWFyZ2luOiAxNHB4IDA7XHJcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgICAvLyBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgLy9mb250LXdlaWdodDogNjAwO1xyXG4gfVxyXG4gaW9uLXNlYXJjaGJhcntcclxuICAtLWJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQzLCAyNDMsIDI0Myk7XHJcbiAgbWFyZ2luLXRvcDogLTEzcHg7XHJcbiB9XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "ldse":
    /*!*******************************************!*\
      !*** ./src/app/Service/shared.service.ts ***!
      \*******************************************/

    /*! exports provided: SharedService */

    /***/
    function ldse(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedService", function () {
        return SharedService;
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

      var SharedService = /*#__PURE__*/function () {
        function SharedService() {
          _classCallCheck(this, SharedService);

          this.restaurant = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
          this.status = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
          this.location = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
          this.orderId = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
          this.RestaurantLocation = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
          this.resId = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        }

        _createClass(SharedService, [{
          key: "getLocation",
          value: function getLocation() {
            return this.location;
          }
        }, {
          key: "getStatus",
          value: function getStatus() {
            return this.status;
          }
        }, {
          key: "getRestaurantLocation",
          value: function getRestaurantLocation() {
            return this.RestaurantLocation;
          }
        }, {
          key: "getRestaurantId",
          value: function getRestaurantId() {
            return this.resId;
          }
        }]);

        return SharedService;
      }();

      SharedService.ctorParameters = function () {
        return [];
      };

      SharedService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], SharedService);
      /***/
    },

    /***/
    "xt6y":
    /*!*************************************************!*\
      !*** ./src/app/restaurant/restaurant.module.ts ***!
      \*************************************************/

    /*! exports provided: RestaurantPageModule */

    /***/
    function xt6y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RestaurantPageModule", function () {
        return RestaurantPageModule;
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


      var _restaurant_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./restaurant-routing.module */
      "XO/b");
      /* harmony import */


      var _restaurant_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./restaurant.page */
      "AaRp");

      var RestaurantPageModule = function RestaurantPageModule() {
        _classCallCheck(this, RestaurantPageModule);
      };

      RestaurantPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _restaurant_routing_module__WEBPACK_IMPORTED_MODULE_5__["RestaurantPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_restaurant_page__WEBPACK_IMPORTED_MODULE_6__["RestaurantPage"]]
      })], RestaurantPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=restaurant-restaurant-module-es5.js.map