(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["food-food-module"],{

/***/ "+cje":
/*!***********************************************!*\
  !*** ./src/app/Service/restaurant.service.ts ***!
  \***********************************************/
/*! exports provided: RestaurantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantService", function() { return RestaurantService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators/map */ "q3Kh");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/firestore */ "CqG3");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_bad_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/bad-input */ "XEKg");
/* harmony import */ var _common_not_found_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/not-found-error */ "5Jak");
/* harmony import */ var _common_app_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/app-error */ "/GcI");








let RestaurantService = class RestaurantService {
    constructor(db) {
        this.db = db;
        this.restaurantCollectionList = db.collection('Restaurant');
    }
    create(restaurantObj) {
        return this.restaurantCollectionList.add(restaurantObj);
    }
    getAllRestaurant() {
        this.restaurantList = this.restaurantCollectionList.snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
        return this.restaurantList;
    }
    getRestaurant(id) {
        return this.restaurantCollectionList.doc(id).valueChanges();
    }
    updateRestaurant(restaurantObj, id) {
        return this.restaurantCollectionList.doc(id).update(restaurantObj)
            .catch(this.handleError);
    }
    removeRestaurant(id) {
        return this.restaurantCollectionList.doc(id).delete()
            .catch(this.handleError);
    }
    handleError(error) {
        if (error.status === 400)
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(new _common_bad_input__WEBPACK_IMPORTED_MODULE_5__["BadInput"](error.json()));
        if (error.status === 404)
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(new _common_not_found_error__WEBPACK_IMPORTED_MODULE_6__["NotFoundError"]());
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(new _common_app_error__WEBPACK_IMPORTED_MODULE_7__["AppError"](error));
    }
};
RestaurantService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }
];
RestaurantService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RestaurantService);



/***/ }),

/***/ "9TIY":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/food/food.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\" >\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n   <ion-title style=\"text-align: center;\">Food</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"regform\">\n    <ion-item>\n       <ion-label>Name </ion-label>\n       <ion-input formControlName=\"Name\" type=\"text\"></ion-input>\n       <small class=\"form-text text-muted\" *ngIf=\"!regform.get('Name').valid && regform.get('Name').touched\" > This field is required! </small> \n     </ion-item>\n     <ion-item>\n       <ion-label>Price</ion-label>\n       <ion-input formControlName=\"Price\" type=\"text\"></ion-input>\n       <small class=\"form-text text-muted\" *ngIf=\"!regform.get('Price').valid && regform.get('Price').touched\" > This field is required! </small> \n     </ion-item>\n      <ion-item>\n       <ion-label>Type</ion-label>\n       <ion-select interface=\"popover\" formControlName=\"type\" [(ngModel)]=\"itemType\">\n        <ion-select-option value=\"Food\">Food</ion-select-option>\n        <ion-select-option value=\"Drink\">Drink</ion-select-option>\n        <ion-select-option value=\"other\">other</ion-select-option>\n      </ion-select>\n       <small class=\"form-text text-muted\" *ngIf=\"!regform.get('type').valid && regform.get('type').touched\" > This field is required! </small> \n     </ion-item>\n     <ion-item>\n      <ion-label>Restaurant Id</ion-label>\n      <ion-select interface=\"popover\" formControlName=\"restaurantId\" (ngModelChange)=\"selectRestaurant($event)\" [(ngModel)]=\"SelectedRestaurantId\">\n        <ion-select-option   *ngFor=\"let code of listOfRestaurant\" value=\"{{code?.id}}\">\n          {{code?.Name}}\n        </ion-select-option>\n      </ion-select>\n      </ion-item>\n     <ion-item>\n      <ion-label>Category Id</ion-label>\n      <ion-select interface=\"popover\" formControlName=\"categoryId\" [(ngModel)]=\"SelectedCategoryId\">\n        <ion-select-option   *ngFor=\"let code of this.listOfCategoryFilter\" value=\"{{code?.categoryName}}\">\n          {{code?.categoryName}}\n        </ion-select-option>\n      </ion-select>\n      </ion-item>\n  \n     <ion-item>\n       <ion-label>Description</ion-label>\n       <ion-input formControlName=\"Description\" type=\"text\"></ion-input>\n       <small class=\"form-text text-muted\" *ngIf=\"!regform.get('Description').valid && regform.get('Description').touched\" > This field is required! </small> \n     </ion-item>\n     <ion-item>\n      <ion-label>Cooking Time</ion-label>\n      <ion-datetime formControlName=\"CookingTime\" display-format=\"h:mm A\" picker-format=\"h:mm A\" value=\"1990-02-19T07:43Z\"></ion-datetime>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('CookingTime').valid && regform.get('CookingTime').touched\" > This field is required! </small> \n    </ion-item>\n    <ion-item>\n      <ion-label>DeliveryTime</ion-label>\n      <ion-datetime formControlName=\"DeliveryTime\" display-format=\"h:mm A\" picker-format=\"h:mm A\" value=\"1990-02-19T07:43Z\"></ion-datetime>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('DeliveryTime').valid && regform.get('DeliveryTime').touched\" > This field is required! </small> \n    </ion-item>\n   \n   <div class=\"picker\">\n    <ion-img role=\"button\" class=\"image\" (click)=\"onPickImage()\" [src]=\"base64textString\"\n      *ngIf=\"base64textString\"></ion-img>\n    <ion-button color=\"primary\" (click)=\"onPickImage()\" *ngIf=\"!base64textString\">\n      <ion-icon name=\"camera\" slot=\"start\"></ion-icon>\n      <ion-label>Take Picture</ion-label>\n    </ion-button>\n  </div>\n  <input hidden type=\"file\" accept=\"image/jpeg\" *ngIf=\"usePicker\" #filePicker (change)=\"onFileChosen($event)\" />\n    <div style=\"text-align: center; margin: auto;\">\n       <ion-button id=\"add items\" (click)=\"saveFood()\"> \n         <ion-icon slot=\"start\" name=\"add-circle-outline\"></ion-icon>\n         {{editMode?'Update Food':'Add Food'}}</ion-button>\n     </div> \n </form>\n\n <ion-item-sliding  *ngFor=\"let item of listOfFood \" #slidingItem >\n  <ion-item detail>\n    <ion-thumbnail slot=\"start\">\n      <img [src]=\"item.picture\">\n    </ion-thumbnail>\n    <ion-label> {{item.Name}}</ion-label>\n    <ion-label> {{item.Price}}</ion-label>\n    <ion-label> {{item.Description}}</ion-label>\n    <ion-label> {{item.type}} </ion-label>\n  </ion-item>\n  <ion-item-options side=\"start\">\n    <ion-item-option color=\"danger\" (click)=\"edit(item,slidingItem)\">\n   <ion-icon  name=\"create\" slot=\"icon-only\"></ion-icon></ion-item-option>\n   <ion-item-option color=\"danger\" (click)=\"delete(item,slidingItem)\">\n    <ion-icon  name=\"trash\" slot=\"icon-only\"></ion-icon></ion-item-option>\n  </ion-item-options>\n</ion-item-sliding>\n</ion-content>\n");

/***/ }),

/***/ "Dkj+":
/*!*****************************************!*\
  !*** ./src/app/Service/food.service.ts ***!
  \*****************************************/
/*! exports provided: FoodService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodService", function() { return FoodService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "CqG3");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators/map */ "q3Kh");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_app_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/app-error */ "/GcI");
/* harmony import */ var _common_bad_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/bad-input */ "XEKg");
/* harmony import */ var _common_not_found_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/not-found-error */ "5Jak");








let FoodService = class FoodService {
    constructor(db) {
        this.db = db;
        this.foodCollectionList = db.collection('Food');
    }
    create(foodObj) {
        return this.foodCollectionList.add(foodObj);
    }
    getAllFood() {
        this.foodList = this.foodCollectionList.snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
        return this.foodList;
    }
    getFood(id) {
        return this.foodCollectionList.doc(id).valueChanges();
    }
    updateFood(foodObj, id) {
        return this.foodCollectionList.doc(id).update(foodObj)
            .catch(this.handleError);
    }
    removeFood(id) {
        return this.foodCollectionList.doc(id).delete()
            .catch(this.handleError);
    }
    handleError(error) {
        if (error.status === 400)
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _common_bad_input__WEBPACK_IMPORTED_MODULE_6__["BadInput"](error.json()));
        if (error.status === 404)
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _common_not_found_error__WEBPACK_IMPORTED_MODULE_7__["NotFoundError"]());
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _common_app_error__WEBPACK_IMPORTED_MODULE_5__["AppError"](error));
    }
};
FoodService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
FoodService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FoodService);



/***/ }),

/***/ "d3P2":
/*!*************************************!*\
  !*** ./src/app/food/food.module.ts ***!
  \*************************************/
/*! exports provided: FoodPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodPageModule", function() { return FoodPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _food_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./food-routing.module */ "r15m");
/* harmony import */ var _food_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./food.page */ "hP/2");
/* harmony import */ var _directive_shard_directives_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../directive/shard-directives.module */ "bLo3");








let FoodPageModule = class FoodPageModule {
};
FoodPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _directive_shard_directives_module__WEBPACK_IMPORTED_MODULE_7__["ShardDirectivesModule"],
            _food_routing_module__WEBPACK_IMPORTED_MODULE_5__["FoodPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_food_page__WEBPACK_IMPORTED_MODULE_6__["FoodPage"]],
    })
], FoodPageModule);



/***/ }),

/***/ "hP/2":
/*!***********************************!*\
  !*** ./src/app/food/food.page.ts ***!
  \***********************************/
/*! exports provided: FoodPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodPage", function() { return FoodPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_food_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./food.page.html */ "9TIY");
/* harmony import */ var _food_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./food.page.scss */ "vx67");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _Service_category_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Service/category.service */ "neG8");
/* harmony import */ var _Service_food_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Service/food.service */ "Dkj+");
/* harmony import */ var _Service_restaurant_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Service/restaurant.service */ "+cje");










let FoodPage = class FoodPage {
    constructor(fb, foodService, alertController, platform, modalController, categoryService, restaurantservice) {
        this.fb = fb;
        this.foodService = foodService;
        this.alertController = alertController;
        this.platform = platform;
        this.modalController = modalController;
        this.categoryService = categoryService;
        this.restaurantservice = restaurantservice;
        this.usePicker = false;
        this.regform = this.fb.group({});
        this.itemType = "Food";
    }
    ngOnInit() {
        this.regform = this.fb.group({
            Name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Price: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Description: [""],
            CookingTime: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            DeliveryTime: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            picture: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            type: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            categoryId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            restaurantId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        if ((this.platform.is('mobile') && !this.platform.is('hybrid')) ||
            this.platform.is('desktop')) {
            this.usePicker = true;
        }
        this.getFood();
        this.getCategory();
        this.getRestaurant();
    }
    getFood() {
        this.foodService.getAllFood().subscribe(res => {
            this.listOfFood = res;
        });
    }
    getCategory() {
        this.categoryService.getAllCategory().subscribe(res => {
            this.listOfCategory = res;
        });
    }
    selectRestaurant($event) {
        if ($event !== undefined) {
            this.foodService.getAllFood().subscribe(res => {
                let restaurant = this.listOfRestaurant.find(c => c.id == $event);
                this.listOfFood = res.filter(c => c.restaurantId == restaurant.accountId);
                this.listOfCategoryFilter = this.listOfCategory.filter(c => c.restaurantId == $event);
                if (this.listOfCategoryFilter.length > 0) {
                    this.SelectedCategoryId = this.listOfCategoryFilter[0].id;
                }
            });
        }
    }
    getRestaurant() {
        this.restaurantservice.getAllRestaurant().subscribe(res => {
            this.listOfRestaurant = res;
        });
    }
    saveFood() {
        if (this.base64textString !== undefined) {
            this.regform.get('picture').setValue(this.base64textString);
        }
        let restaurantId = localStorage.getItem("userId");
        this.regform.get('restaurantId').setValue(restaurantId);
        if (this.regform.valid) {
            if (!this.foodId) {
                this.foodService.create(this.regform.value);
            }
            else {
                this.foodService.updateFood(this.regform.value, this.foodId);
            }
            this.base64textString = '';
            this.foodId = null;
            this.regform.reset();
            this.presentAlert();
        }
        else {
            this.ErrorAlert();
        }
    }
    edit(food, slidingItem) {
        this.editMode = true;
        this.foodId = food.id;
        this.regform.get('Name').setValue(food.Name);
        this.regform.get('CookingTime').setValue(food.CookingTime);
        this.regform.get('DeliveryTime').setValue(food.DeliveryTime);
        this.regform.get('Description').setValue(food.Description);
        this.regform.get('Price').setValue(food.Price);
        this.regform.get('type').setValue(food.type);
        this.regform.get('categoryId').setValue(food.categoryId);
        this.regform.get('restaurantId').setValue(food.restaurantId);
        this.base64textString = food.picture;
        slidingItem.close();
    }
    delete(food, slidingItem) {
        this.presentAlertConfirm(food);
        slidingItem.close();
    }
    presentAlertConfirm(food) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm!',
                message: '<strong>Are you sure you want delete?</strong>',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'OK',
                        handler: () => {
                            this.foodService.removeFood(food.id);
                            this.regform.reset();
                            this.foodId = null;
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    ErrorAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Error',
                // subHeader: 'Subtitle',
                message: 'Please Enter All field.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    presentAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Food ',
                // subHeader: 'Subtitle',
                message: 'Food Saved successfully.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    onPickImage() {
        if (this.usePicker == true) {
            // if (!Capacitor.isPluginAvailable('Camera')) {
            this.filePickerRef.nativeElement.click();
            return;
        }
        _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"].Camera.getPhoto({
            quality: 50,
            source: _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["CameraSource"].Prompt,
            correctOrientation: true,
            height: 100,
            width: 100,
            resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["CameraResultType"].Base64
        })
            .then(image => {
            this.base64textString = 'data:image/png;base64,' + image.base64String;
        })
            .catch(error => {
            console.log(error);
            if (this.usePicker) {
                this.filePickerRef.nativeElement.click();
            }
            return false;
        });
    }
    onFileChosen(event) {
        const pickedFile = event.target.files[0];
        if (!pickedFile) {
            return;
        }
        const fr = new FileReader();
        fr.onload = () => {
            const dataUrl = fr.result.toString();
            this.base64textString = dataUrl;
        };
        fr.readAsDataURL(pickedFile);
    }
    closeModal() {
        this.modalController.dismiss();
    }
};
FoodPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _Service_food_service__WEBPACK_IMPORTED_MODULE_8__["FoodService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _Service_category_service__WEBPACK_IMPORTED_MODULE_7__["CategoryService"] },
    { type: _Service_restaurant_service__WEBPACK_IMPORTED_MODULE_9__["RestaurantService"] }
];
FoodPage.propDecorators = {
    filePickerRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['filePicker', { static: false },] }]
};
FoodPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-food',
        template: _raw_loader_food_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_food_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FoodPage);



/***/ }),

/***/ "r15m":
/*!*********************************************!*\
  !*** ./src/app/food/food-routing.module.ts ***!
  \*********************************************/
/*! exports provided: FoodPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodPageRoutingModule", function() { return FoodPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _food_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./food.page */ "hP/2");




const routes = [
    {
        path: '',
        component: _food_page__WEBPACK_IMPORTED_MODULE_3__["FoodPage"]
    },
];
let FoodPageRoutingModule = class FoodPageRoutingModule {
};
FoodPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FoodPageRoutingModule);



/***/ }),

/***/ "vx67":
/*!*************************************!*\
  !*** ./src/app/food/food.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".picker {\n  width: 30rem;\n  max-width: 80%;\n  height: 20rem;\n  max-height: 30vh;\n  border: 1px solid var(--ion-color-primary);\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.image {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\nion-item-sliding .item {\n  --background: linear-gradient(90deg, rgb(223, 226, 230) 0%, rgb(222, 225, 231) 35%, rgb(224, 228, 233) 100%);\n}\n\n.label-class {\n  --inner-padding-start:12px;\n  --inner-padding-end:10px;\n  margin-left: 67px;\n}\n\n.label-class-al {\n  margin-left: 67px;\n}\n\n.ion-input {\n  margin-left: 67px;\n}\n\n.dx-lookup-field {\n  padding: 5px 23px 12px 54px;\n  font-size: 1em;\n}\n\nion-content ion-item {\n  padding: 0;\n  --border-radius: 14px;\n}\n\nion-content ion-searchbar {\n  --border-radius: 14px;\n  --background: rgb(243, 243, 243);\n  margin-top: -13px;\n}\n\nion-content ion-segment {\n  margin: 5px 0;\n}\n\ntable.table-hover tbody tr:hover {\n  cursor: pointer;\n}\n\n.modal-wrapper {\n  background: #222;\n}\n\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n\n.my-custom-class .modal-wrapper {\n  background: #222;\n}\n\n.my-custom-class {\n  --background: #222;\n}\n\nion-content ion-item {\n  padding: 0;\n  --border-radius: 14px;\n}\n\nion-content ion-searchbar {\n  --border-radius: 14px;\n  --background: rgb(243, 243, 243);\n  margin-top: -13px;\n}\n\nion-slides {\n  height: 50%;\n}\n\n.swiper-slide {\n  display: block;\n}\n\n.swiper-slide h2 {\n  margin-top: 2.8rem;\n}\n\n.swiper-slide img {\n  max-height: 50%;\n  max-width: 80%;\n  margin: 0px 0 4px;\n  pointer-events: none;\n}\n\nb {\n  font-weight: 500;\n}\n\np {\n  padding: 0 4px;\n  font-size: 12px;\n  line-height: 1.5;\n  color: var(--ion-color-step-600, #60646b);\n}\n\np b {\n  color: var(--ion-text-color, #000000);\n}\n\n#container {\n  -moz-columns: 2;\n       columns: 2;\n  -moz-column-gap: 10px;\n       column-gap: 10px;\n}\n\n#container ion-card {\n  width: 100%;\n  margin: 0 0 10px 0;\n  -moz-column-break-inside: avoid;\n       break-inside: avoid;\n  --border-radius: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZvb2QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FBQ0o7O0FBQ0E7RUFDRSw0R0FBQTtBQUVGOztBQU9BO0VBQ0UsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0FBSkY7O0FBTUE7RUFDRSxpQkFBQTtBQUhGOztBQUtBO0VBQ0UsaUJBQUE7QUFGRjs7QUFJQTtFQUNFLDJCQUFBO0VBQ0EsY0FBQTtBQURGOztBQU1JO0VBRUUsVUFBQTtFQUVBLHFCQUFBO0FBTE47O0FBU0M7RUFDQyxxQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7QUFQRjs7QUFVQTtFQUNFLGFBQUE7QUFQRjs7QUFTQTtFQUNFLGVBQUE7QUFORjs7QUFRQTtFQUNFLGdCQUFBO0FBTEY7O0FBUUEsdUVBQUE7O0FBQ0E7RUFDRSxnQkFBQTtBQUxGOztBQU9BO0VBQ0Usa0JBQUE7QUFKRjs7QUFTSTtFQUVFLFVBQUE7RUFFQSxxQkFBQTtBQVJOOztBQVlDO0VBQ0MscUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0FBVkY7O0FBYUE7RUFDRSxXQUFBO0FBVkY7O0FBYUE7RUFDRSxjQUFBO0FBVkY7O0FBYUE7RUFDRSxrQkFBQTtBQVZGOztBQWFBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBVkY7O0FBYUE7RUFDRSxnQkFBQTtBQVZGOztBQWFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0FBVkY7O0FBYUE7RUFDRSxxQ0FBQTtBQVZGOztBQVlBO0VBQ0UsZUFBQTtPQUFBLFVBQUE7RUFDQSxxQkFBQTtPQUFBLGdCQUFBO0FBVEY7O0FBVUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtPQUFBLG1CQUFBO0VBQ0EscUJBQUE7QUFSSiIsImZpbGUiOiJmb29kLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5waWNrZXIge1xyXG4gICAgd2lkdGg6IDMwcmVtO1xyXG4gICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDIwcmVtO1xyXG4gICAgbWF4LWhlaWdodDogMzB2aDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbWFnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxuaW9uLWl0ZW0tc2xpZGluZyAuaXRlbSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYigyMjMsIDIyNiwgMjMwKSAwJSwgcmdiKDIyMiwgMjI1LCAyMzEpIDM1JSwgcmdiKDIyNCwgMjI4LCAyMzMpIDEwMCUpO1xyXG59XHJcbi8vIC5uZy12YWxpZFtyZXF1aXJlZF0sIC5uZy12YWxpZC5yZXF1aXJlZCAge1xyXG4vLyAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2Y4ZDdkYTsgLyogZ3JlZW4gKi9cclxuLy8gfVxyXG5cclxuLy8gLm5nLWludmFsaWQ6bm90KGZvcm0pICB7XHJcbi8vICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZjhkN2RhOyAvKiByZWQgKi9cclxuLy8gfVxyXG4ubGFiZWwtY2xhc3N7XHJcbiAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OjEycHg7XHJcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDoxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA2N3B4O1xyXG59XHJcbi5sYWJlbC1jbGFzcy1hbHtcclxuICBtYXJnaW4tbGVmdDogNjdweDtcclxufVxyXG4uaW9uLWlucHV0e1xyXG4gIG1hcmdpbi1sZWZ0OiA2N3B4O1xyXG59XHJcbi5keC1sb29rdXAtZmllbGQge1xyXG4gIHBhZGRpbmc6IDVweCAyM3B4IDEycHggNTRweDtcclxuICBmb250LXNpemU6IDFlbTtcclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgLy8tLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSg0Myw5MCwxNDgsMSkgMCUsIHJnYmEoNDUsMTEyLDIyOSwxKSAzNSUsIHJnYmEoNDUsMTEyLDIyOSwxKSAxMDAlKTtcclxuIFxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiByZ2IoMTIwLCAxMjYsIDEzNCk7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgLy8gbWFyZ2luOiAxNHB4IDA7XHJcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgICAvLyBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgLy9mb250LXdlaWdodDogNjAwO1xyXG4gfVxyXG4gaW9uLXNlYXJjaGJhcntcclxuICAtLWJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQzLCAyNDMsIDI0Myk7XHJcbiAgbWFyZ2luLXRvcDogLTEzcHg7XHJcbiB9XHJcbn1cclxuaW9uLWNvbnRlbnQgaW9uLXNlZ21lbnQge1xyXG4gIG1hcmdpbjogNXB4IDA7XHJcbn1cclxudGFibGUudGFibGUtaG92ZXIgdGJvZHkgdHI6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubW9kYWwtd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZDogIzIyMjtcclxufVxyXG5cclxuLyogV29ya3MgLSBwYXNzIFwibXktY3VzdG9tLWNsYXNzXCIgaW4gY3NzQ2xhc3MgdG8gaW5jcmVhc2Ugc3BlY2lmaWNpdHkgKi9cclxuLm15LWN1c3RvbS1jbGFzcyAubW9kYWwtd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZDogIzIyMjtcclxufVxyXG4ubXktY3VzdG9tLWNsYXNzIHtcclxuICAtLWJhY2tncm91bmQ6ICMyMjI7XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gIC8vLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoNDMsOTAsMTQ4LDEpIDAlLCByZ2JhKDQ1LDExMiwyMjksMSkgMzUlLCByZ2JhKDQ1LDExMiwyMjksMSkgMTAwJSk7XHJcbiBcclxuICAgIGlvbi1pdGVtIHtcclxuICAgIC8vIC0tYmFja2dyb3VuZDogcmdiKDEyMCwgMTI2LCAxMzQpO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgIC8vIG1hcmdpbjogMTRweCAwO1xyXG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICAgLy8gY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgIC8vZm9udC13ZWlnaHQ6IDYwMDtcclxuIH1cclxuIGlvbi1zZWFyY2hiYXJ7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIC0tYmFja2dyb3VuZDogcmdiKDI0MywgMjQzLCAyNDMpO1xyXG4gIG1hcmdpbi10b3A6IC0xM3B4O1xyXG4gfVxyXG59XHJcbmlvbi1zbGlkZXMge1xyXG4gIGhlaWdodDogNTAlO1xyXG59XHJcblxyXG4uc3dpcGVyLXNsaWRlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnN3aXBlci1zbGlkZSBoMiB7XHJcbiAgbWFyZ2luLXRvcDogMi44cmVtO1xyXG59XHJcblxyXG4uc3dpcGVyLXNsaWRlIGltZyB7XHJcbiAgbWF4LWhlaWdodDogNTAlO1xyXG4gIG1heC13aWR0aDogODAlO1xyXG4gIG1hcmdpbjogMHB4IDAgNHB4O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG5iIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5wIHtcclxuICBwYWRkaW5nOiAwIDRweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCAjNjA2NDZiKTtcclxufVxyXG5cclxucCBiIHtcclxuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IsICMwMDAwMDApO1xyXG59XHJcbiNjb250YWluZXJ7XHJcbiAgY29sdW1uczoyO1xyXG4gIGNvbHVtbi1nYXA6IDEwcHg7XHJcbiAgaW9uLWNhcmR7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWFyZ2luOjAgMCAxMHB4IDA7XHJcbiAgICBicmVhay1pbnNpZGU6YXZvaWQ7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgfVxyXG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=food-food-module-es2015.js.map