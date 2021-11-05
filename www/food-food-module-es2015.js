(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["food-food-module"],{

/***/ "9TIY":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/food/food.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\" >\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n   <ion-title style=\"text-align: center;\">Food</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"regform\">\n    <ion-item>\n       <ion-label>Name </ion-label>\n       <ion-input formControlName=\"name\" type=\"text\"></ion-input>\n       <small class=\"form-text text-muted\" *ngIf=\"!regform.get('name').valid && regform.get('name').touched\" > This field is required! </small> \n     </ion-item>\n     <ion-item>\n       <ion-label>Price</ion-label>\n       <ion-input formControlName=\"price\" type=\"text\"></ion-input>\n       <small class=\"form-text text-muted\" *ngIf=\"!regform.get('price').valid && regform.get('price').touched\" > This field is required! </small> \n     </ion-item>\n      <ion-item>\n       <ion-label>Type</ion-label>\n       <ion-select interface=\"popover\" formControlName=\"type\" [(ngModel)]=\"itemType\">\n        <ion-select-option value=\"Food\">Food</ion-select-option>\n        <ion-select-option value=\"Drink\">Drink</ion-select-option>\n        <ion-select-option value=\"other\">other</ion-select-option>\n      </ion-select>\n       <small class=\"form-text text-muted\" *ngIf=\"!regform.get('type').valid && regform.get('type').touched\" > This field is required! </small> \n     </ion-item>\n     <ion-item>\n      <ion-label>Restaurant Id</ion-label>\n      <ion-select interface=\"popover\" formControlName=\"restaurantId\" (ngModelChange)=\"selectRestaurant($event)\" [(ngModel)]=\"SelectedRestaurantId\">\n        <ion-select-option   *ngFor=\"let code of listOfRestaurant\" value=\"{{code?.accountId}}\">\n          {{code?.name}}\n        </ion-select-option>\n      </ion-select>\n      </ion-item>\n     <ion-item>\n      <ion-label>Category Id</ion-label>\n      <ion-select interface=\"popover\" formControlName=\"categoryId\" [(ngModel)]=\"SelectedCategoryId\">\n        <ion-select-option   *ngFor=\"let code of this.listOfCategoryFilter\" value=\"{{code?.id}}\">\n          {{code?.categoryName}}\n        </ion-select-option>\n      </ion-select>\n      </ion-item>\n  \n     <ion-item>\n       <ion-label>Description</ion-label>\n       <ion-input formControlName=\"description\" type=\"text\"></ion-input>\n       <small class=\"form-text text-muted\" *ngIf=\"!regform.get('description').valid && regform.get('description').touched\" > This field is required! </small> \n     </ion-item>\n     <ion-item>\n      <ion-label>Cooking Time</ion-label>\n      <ion-datetime formControlName=\"cookingTime\" display-format=\"h:mm A\" picker-format=\"h:mm A\" value=\"1990-02-19T07:43Z\"></ion-datetime>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('cookingTime').valid && regform.get('cookingTime').touched\" > This field is required! </small> \n    </ion-item>\n    <ion-item>\n      <ion-label>DeliveryTime</ion-label>\n      <ion-datetime formControlName=\"deliveryTime\" display-format=\"h:mm A\" picker-format=\"h:mm A\" value=\"1990-02-19T07:43Z\"></ion-datetime>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('deliveryTime').valid && regform.get('deliveryTime').touched\" > This field is required! </small> \n    </ion-item>\n   \n   <div class=\"picker\">\n    <ion-img role=\"button\" class=\"image\" (click)=\"onPickImage()\" [src]=\"base64textString\"\n      *ngIf=\"base64textString\"></ion-img>\n    <ion-button color=\"primary\" (click)=\"onPickImage()\" *ngIf=\"!base64textString\">\n      <ion-icon name=\"camera\" slot=\"start\"></ion-icon>\n      <ion-label>Take Picture</ion-label>\n    </ion-button>\n  </div>\n  <input hidden type=\"file\" accept=\"image/jpeg\" *ngIf=\"usePicker\" #filePicker (change)=\"onFileChosen($event)\" />\n    <div style=\"text-align: center; margin: auto;\">\n       <ion-button id=\"add items\" (click)=\"saveFood()\"> \n         <ion-icon slot=\"start\" name=\"add-circle-outline\"></ion-icon>\n         {{editMode?'Update Food':'Add Food'}}</ion-button>\n     </div> \n </form>\n <ion-item>\n  <ion-label style=\"margin-left: 12px;\">list of food </ion-label>\n   <ion-select interface=\"popover\" class=\"form-control\" (ionChange)=\"filter($event)\" placeholder=\"Food or Drink\">\n      <ion-select-option value=\"Drink\">Drink</ion-select-option>\n      <ion-select-option value=\"Food\">Food</ion-select-option>\n    </ion-select>\n  <ion-badge slot=\"end\">{{foodOfRestaurantLength}}</ion-badge>\n</ion-item>\n <ion-item-sliding  *ngFor=\"let item of listOfFoodFilter \" #slidingItem >\n <ion-item detail>\n    <ion-thumbnail slot=\"start\">\n      <img [src]=\"item.picture\">\n    </ion-thumbnail>\n    <ion-label> {{item.name}}</ion-label>\n    <ion-label> {{item.price}}</ion-label>\n    <ion-label> {{item.description}}</ion-label>\n    <ion-label> {{item.type}} </ion-label>\n  </ion-item>\n  <ion-item-options side=\"start\">\n    <ion-item-option color=\"danger\" (click)=\"edit(item,slidingItem)\">\n   <ion-icon  name=\"create\" slot=\"icon-only\"></ion-icon></ion-item-option>\n   <ion-item-option color=\"danger\" (click)=\"delete(item,slidingItem)\">\n    <ion-icon  name=\"trash\" slot=\"icon-only\"></ion-icon></ion-item-option>\n  </ion-item-options>\n</ion-item-sliding>\n</ion-content>\n");

/***/ }),

/***/ "XRg5":
/*!*************************************************!*\
  !*** ./src/app/directive/parallax.directive.ts ***!
  \*************************************************/
/*! exports provided: ParallaxDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParallaxDirective", function() { return ParallaxDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



let ParallaxDirective = class ParallaxDirective {
    constructor(
    // private renderer: Renderer2,
    domCtrl) {
        this.domCtrl = domCtrl;
    }
    onContentScroll($event) {
        const scrollTop = $event.detail.scrollTop;
        if (scrollTop > 0) {
            // Use higher values to move the image out faster
            // Use lower values to move it out slower
            this.moveImage = scrollTop / 1.6;
            this.scaleImage = 1;
        }
        else {
            // +1 at the end as the other part can become 0
            // and the image would disappear
            this.scaleImage = -scrollTop / 200 + 1;
            this.moveImage = scrollTop / 1.6;
        }
        // this.domCtrl.write(() => {
        //   this.renderer.setStyle(this.imageEl, 'webkitTransform',
        //     'translate3d(0,' + this.moveImage + 'px,0) scale(' + this.scaleImage + ',' + this.scaleImage + ')'
        //   );
        // });
    }
};
ParallaxDirective.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["DomController"] }
];
ParallaxDirective.propDecorators = {
    imageEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['appParallax',] }],
    onContentScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['ionScroll', ['$event'],] }]
};
ParallaxDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appParallax]'
    })
], ParallaxDirective);



/***/ }),

/***/ "bLo3":
/*!******************************************************!*\
  !*** ./src/app/directive/shard-directives.module.ts ***!
  \******************************************************/
/*! exports provided: ShardDirectivesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShardDirectivesModule", function() { return ShardDirectivesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _parallax_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parallax.directive */ "XRg5");
/* harmony import */ var _hide_header_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hide-header.directive */ "kQ4E");





let ShardDirectivesModule = class ShardDirectivesModule {
};
ShardDirectivesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_parallax_directive__WEBPACK_IMPORTED_MODULE_3__["ParallaxDirective"], _hide_header_directive__WEBPACK_IMPORTED_MODULE_4__["HideHeaderDirective"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [_parallax_directive__WEBPACK_IMPORTED_MODULE_3__["ParallaxDirective"], _hide_header_directive__WEBPACK_IMPORTED_MODULE_4__["HideHeaderDirective"]],
    })
], ShardDirectivesModule);



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
        this.listOfCategoryFilter = [];
        this.generatefoodId = '0';
        this.foodIdOfGenerate = "";
    }
    ngOnInit() {
        this.regform = this.fb.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            price: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description: [""],
            cookingTime: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            deliveryTime: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            picture: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            type: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            categoryId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            restaurantId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            foodId: [""]
        });
        if ((this.platform.is('mobile') && !this.platform.is('hybrid')) ||
            this.platform.is('desktop')) {
            this.usePicker = true;
        }
        this.getFood();
        this.getCategory();
        this.getRestaurant();
        this.generateFoodId();
    }
    generateFoodId() {
        let No = 0;
        this.foodService.getAllFood().subscribe(res => {
            if (this.listOfRestaurant != undefined) {
                let resObj = this.listOfRestaurant.find(c => c.accountId == +localStorage.getItem("userId"));
                let foodObj = res.filter(c => c.restaurantId == resObj.id);
                if (foodObj.length == 0)
                    No = 1;
                else
                    No = foodObj.length + 1;
                this.generatefoodId = "VN-" + this.generatefoodId.padStart(4, '0') + No;
                console.log(this.generatefoodId);
            }
            else {
                this.getRefresh();
            }
        });
    }
    getRefresh() {
        setTimeout(() => {
            this.generateFoodId();
        }, 200);
    }
    getFood() {
        this.foodService.getAllFood().subscribe(res => {
            this.listOfFood = res;
            this.listOfFoodFilter = res.filter(c => c.restaurantId == localStorage.getItem("userId"));
            this.foodOfRestaurantLength = this.listOfFoodFilter.length;
        });
    }
    getCategory() {
        this.categoryService.getAllCategory().subscribe(res => {
            this.listOfCategory = res;
        });
    }
    selectRestaurant($event) {
        this.id = $event;
        this.listOfCategoryFilter = [];
        if ($event !== undefined && $event != null) {
            this.foodService.getAllFood().subscribe(res => {
                this.listOfFoodFilter = res.filter(c => c.restaurantId == $event);
                this.foodOfRestaurantLength = this.listOfFoodFilter.length;
                let categories = this.listOfRestaurant.find(c => c.accountId == $event).categoryId;
                let restaurantId = this.listOfRestaurant.find(c => c.accountId == $event).resId;
                for (let i = 0; i < categories.length; i++) {
                    let data = {
                        categoryName: this.listOfCategory.find(c => c.categoryName == categories[i]).categoryName
                    };
                    this.listOfCategoryFilter.push(data);
                }
                //to inital generate foodId
                if (this.foodIdOfGenerate.length == 0) {
                    this.generatefoodId = "";
                    let No = 0;
                    if (this.listOfFood.filter(c => c.restaurantId == $event).length == 0)
                        No = 1;
                    else
                        No = (this.listOfFood.filter(c => c.restaurantId == $event).length) + 1;
                    this.generatefoodId = restaurantId + this.generatefoodId.padStart(0, '0') + No;
                }
            });
        }
    }
    getRestaurant() {
        this.restaurantservice.getAllRestaurant().subscribe(res => {
            this.listOfRestaurant = res.filter(c => c.accountId == localStorage.getItem("userId"));
            this.SelectedRestaurantId = this.listOfRestaurant.find(c => c.accountId).accountId;
        });
    }
    filter(ev) {
        this.foodService.getAllFood().subscribe(res => {
            this.listOfFoodFilter = res.filter(c => c.type == ev.target.value);
            this.foodOfRestaurantLength = this.listOfFoodFilter.length;
        });
    }
    saveFood() {
        if (this.base64textString !== undefined) {
            this.regform.get('picture').setValue(this.base64textString);
        }
        let restaurantId = localStorage.getItem("userId");
        this.regform.get('restaurantId').setValue(restaurantId);
        this.regform.get('foodId').setValue(this.generatefoodId);
        if (this.regform.valid) {
            if (!this.foodId) {
                this.foodService.create(this.regform.value);
            }
            else {
                const data = {
                    id: this.foodId,
                    name: this.regform.get('name').value,
                    price: this.regform.get('price').value,
                    description: this.regform.get('description').value,
                    cookingTime: this.regform.get('cookingTime').value,
                    deliveryTime: this.regform.get('deliveryTime').value,
                    picture: this.regform.get('picture').value,
                    type: this.regform.get('type').value,
                    categoryId: this.regform.get('categoryId').value,
                    restaurantId: this.regform.get('restaurantId').value,
                    foodId: this.foodIdOfGenerate,
                };
                this.foodService.updateFood(data).subscribe(res => {
                    alert(res.toString());
                });
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
        this.foodIdOfGenerate = food.foodId;
        this.regform.get('Name').setValue(food.name);
        this.regform.get('CookingTime').setValue(food.cookingTime);
        this.regform.get('DeliveryTime').setValue(food.deliveryTime);
        this.regform.get('Description').setValue(food.description);
        this.regform.get('Price').setValue(food.price);
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

/***/ "kQ4E":
/*!****************************************************!*\
  !*** ./src/app/directive/hide-header.directive.ts ***!
  \****************************************************/
/*! exports provided: HideHeaderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HideHeaderDirective", function() { return HideHeaderDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



let HideHeaderDirective = class HideHeaderDirective {
    constructor(
    //  private renderer: Renderer2,
    domCtrl) {
        this.domCtrl = domCtrl;
        this.headerHeight = Object(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["isPlatform"])('ios') ? 44 : 56;
    }
    ngAfterViewInit() {
        this.header = this.header.el;
        this.children = this.header.children;
    }
    onContentScroll($event) {
        const scrollTop = $event.detail.scrollTop;
        let newPosition = -scrollTop;
        if (newPosition < -this.headerHeight) {
            newPosition = -this.headerHeight;
        }
        let newOpacity = 1 - (newPosition / -this.headerHeight);
        // this.domCtrl.write(() => {
        //   this.renderer.setStyle(this.header, 'top', newPosition + 'px');
        //   for (let c of this.children) {
        //     this.renderer.setStyle(c, 'opacity', newOpacity);
        //   }
        // });
    }
};
HideHeaderDirective.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["DomController"] }
];
HideHeaderDirective.propDecorators = {
    header: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['appHideHeader',] }],
    onContentScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['ionScroll', ['$event'],] }]
};
HideHeaderDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appHideHeader]'
    })
], HideHeaderDirective);



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
/* harmony default export */ __webpack_exports__["default"] = (".picker {\n  width: 30rem;\n  max-width: 80%;\n  height: 20rem;\n  max-height: 30vh;\n  border: 1px solid var(--ion-color-primary);\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.image {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\nion-item-sliding .item {\n  --background: linear-gradient(90deg, rgb(223, 226, 230) 0%, rgb(222, 225, 231) 35%, rgb(224, 228, 233) 100%);\n}\n\n.label-class {\n  --inner-padding-start:12px;\n  --inner-padding-end:10px;\n  margin-left: 67px;\n}\n\n.label-class-al {\n  margin-left: 67px;\n}\n\n.ion-input {\n  margin-left: 67px;\n}\n\n.dx-lookup-field {\n  padding: 5px 23px 12px 54px;\n  font-size: 1em;\n}\n\nion-content ion-item {\n  padding: 0;\n  --border-radius: 14px;\n}\n\nion-content ion-searchbar {\n  --border-radius: 14px;\n  --background: rgb(243, 243, 243);\n  margin-top: -13px;\n}\n\nion-content ion-segment {\n  margin: 5px 0;\n}\n\ntable.table-hover tbody tr:hover {\n  cursor: pointer;\n}\n\n.modal-wrapper {\n  background: #222;\n}\n\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n\n.my-custom-class .modal-wrapper {\n  background: #222;\n}\n\n.my-custom-class {\n  --background: #222;\n}\n\nion-content ion-item {\n  padding: 0;\n  --border-radius: 14px;\n}\n\nion-content ion-searchbar {\n  --border-radius: 14px;\n  --background: rgb(243, 243, 243);\n  margin-top: -13px;\n}\n\nion-slides {\n  height: 50%;\n}\n\n.swiper-slide {\n  display: block;\n}\n\n.swiper-slide h2 {\n  margin-top: 2.8rem;\n}\n\n.swiper-slide img {\n  max-height: 50%;\n  max-width: 80%;\n  margin: 0px 0 4px;\n  pointer-events: none;\n}\n\nb {\n  font-weight: 500;\n}\n\np {\n  padding: 0 4px;\n  font-size: 12px;\n  line-height: 1.5;\n  color: var(--ion-color-step-600, #60646b);\n}\n\np b {\n  color: var(--ion-text-color, #000000);\n}\n\n#container {\n  -moz-columns: 2;\n       columns: 2;\n  -moz-column-gap: 10px;\n       column-gap: 10px;\n}\n\n#container ion-card {\n  width: 100%;\n  margin: 0 0 10px 0;\n  -moz-column-break-inside: avoid;\n       break-inside: avoid;\n  --border-radius: 14px;\n}\n\n.select-icon {\n  width: 19px;\n  height: 19px;\n  margin-left: 94px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZvb2QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLDBDQUEwQztFQUMxQyxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDdkI7O0FBRUU7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFpQjtLQUFqQixpQkFBaUI7QUFDckI7O0FBQ0E7RUFDRSw0R0FBYTtBQUVmOztBQU9BO0VBQ0UsMEJBQXNCO0VBQ3RCLHdCQUFvQjtFQUNwQixpQkFBaUI7QUFKbkI7O0FBTUE7RUFDRSxpQkFBaUI7QUFIbkI7O0FBS0E7RUFDRSxpQkFBaUI7QUFGbkI7O0FBSUE7RUFDRSwyQkFBMkI7RUFDM0IsY0FBYztBQURoQjs7QUFHQTtFQUtNLFVBQVU7RUFFVixxQkFBZ0I7QUFMdEI7O0FBRkE7RUFZRSxxQkFBZ0I7RUFDaEIsZ0NBQWE7RUFDYixpQkFBaUI7QUFObkI7O0FBU0E7RUFDRSxhQUFhO0FBTmY7O0FBUUE7RUFDRSxlQUFlO0FBTGpCOztBQU9BO0VBQ0UsZ0JBQWdCO0FBSmxCOztBQU9BLHVFQUFBOztBQUNBO0VBQ0UsZ0JBQWdCO0FBSmxCOztBQU1BO0VBQ0Usa0JBQWE7QUFIZjs7QUFLQTtFQUtNLFVBQVU7RUFFVixxQkFBZ0I7QUFQdEI7O0FBQUE7RUFZRSxxQkFBZ0I7RUFDaEIsZ0NBQWE7RUFDYixpQkFBaUI7QUFSbkI7O0FBV0E7RUFDRSxXQUFXO0FBUmI7O0FBV0E7RUFDRSxjQUFjO0FBUmhCOztBQVdBO0VBQ0Usa0JBQWtCO0FBUnBCOztBQVdBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsb0JBQW9CO0FBUnRCOztBQVdBO0VBQ0UsZ0JBQWdCO0FBUmxCOztBQVdBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUNBQXlDO0FBUjNDOztBQVdBO0VBQ0UscUNBQXFDO0FBUnZDOztBQVVBO0VBQ0UsZUFBUztPQUFULFVBQVM7RUFDVCxxQkFBZ0I7T0FBaEIsZ0JBQWdCO0FBUGxCOztBQUtBO0VBSUksV0FBVTtFQUNWLGtCQUFpQjtFQUNqQiwrQkFBa0I7T0FBbEIsbUJBQWtCO0VBQ2xCLHFCQUFnQjtBQUxwQjs7QUFRQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0FBTG5CIiwiZmlsZSI6ImZvb2QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBpY2tlciB7XHJcbiAgICB3aWR0aDogMzByZW07XHJcbiAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogMjByZW07XHJcbiAgICBtYXgtaGVpZ2h0OiAzMHZoO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG5pb24taXRlbS1zbGlkaW5nIC5pdGVtIHtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiKDIyMywgMjI2LCAyMzApIDAlLCByZ2IoMjIyLCAyMjUsIDIzMSkgMzUlLCByZ2IoMjI0LCAyMjgsIDIzMykgMTAwJSk7XHJcbn1cclxuLy8gLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkICB7XHJcbi8vICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZjhkN2RhOyAvKiBncmVlbiAqL1xyXG4vLyB9XHJcblxyXG4vLyAubmctaW52YWxpZDpub3QoZm9ybSkgIHtcclxuLy8gICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNmOGQ3ZGE7IC8qIHJlZCAqL1xyXG4vLyB9XHJcbi5sYWJlbC1jbGFzc3tcclxuICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6MTJweDtcclxuICAtLWlubmVyLXBhZGRpbmctZW5kOjEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDY3cHg7XHJcbn1cclxuLmxhYmVsLWNsYXNzLWFse1xyXG4gIG1hcmdpbi1sZWZ0OiA2N3B4O1xyXG59XHJcbi5pb24taW5wdXR7XHJcbiAgbWFyZ2luLWxlZnQ6IDY3cHg7XHJcbn1cclxuLmR4LWxvb2t1cC1maWVsZCB7XHJcbiAgcGFkZGluZzogNXB4IDIzcHggMTJweCA1NHB4O1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAvLy0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDQzLDkwLDE0OCwxKSAwJSwgcmdiYSg0NSwxMTIsMjI5LDEpIDM1JSwgcmdiYSg0NSwxMTIsMjI5LDEpIDEwMCUpO1xyXG4gXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6IHJnYigxMjAsIDEyNiwgMTM0KTtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAvLyBtYXJnaW46IDE0cHggMDtcclxuICAgICAgLS1ib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gICAgIC8vIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAvL2ZvbnQtd2VpZ2h0OiA2MDA7XHJcbiB9XHJcbiBpb24tc2VhcmNoYmFye1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAtLWJhY2tncm91bmQ6IHJnYigyNDMsIDI0MywgMjQzKTtcclxuICBtYXJnaW4tdG9wOiAtMTNweDtcclxuIH1cclxufVxyXG5pb24tY29udGVudCBpb24tc2VnbWVudCB7XHJcbiAgbWFyZ2luOiA1cHggMDtcclxufVxyXG50YWJsZS50YWJsZS1ob3ZlciB0Ym9keSB0cjpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5tb2RhbC13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMjIyO1xyXG59XHJcblxyXG4vKiBXb3JrcyAtIHBhc3MgXCJteS1jdXN0b20tY2xhc3NcIiBpbiBjc3NDbGFzcyB0byBpbmNyZWFzZSBzcGVjaWZpY2l0eSAqL1xyXG4ubXktY3VzdG9tLWNsYXNzIC5tb2RhbC13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMjIyO1xyXG59XHJcbi5teS1jdXN0b20tY2xhc3Mge1xyXG4gIC0tYmFja2dyb3VuZDogIzIyMjtcclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgLy8tLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSg0Myw5MCwxNDgsMSkgMCUsIHJnYmEoNDUsMTEyLDIyOSwxKSAzNSUsIHJnYmEoNDUsMTEyLDIyOSwxKSAxMDAlKTtcclxuIFxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiByZ2IoMTIwLCAxMjYsIDEzNCk7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgLy8gbWFyZ2luOiAxNHB4IDA7XHJcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgICAvLyBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgLy9mb250LXdlaWdodDogNjAwO1xyXG4gfVxyXG4gaW9uLXNlYXJjaGJhcntcclxuICAtLWJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQzLCAyNDMsIDI0Myk7XHJcbiAgbWFyZ2luLXRvcDogLTEzcHg7XHJcbiB9XHJcbn1cclxuaW9uLXNsaWRlcyB7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbn1cclxuXHJcbi5zd2lwZXItc2xpZGUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uc3dpcGVyLXNsaWRlIGgyIHtcclxuICBtYXJnaW4tdG9wOiAyLjhyZW07XHJcbn1cclxuXHJcbi5zd2lwZXItc2xpZGUgaW1nIHtcclxuICBtYXgtaGVpZ2h0OiA1MCU7XHJcbiAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luOiAwcHggMCA0cHg7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbmIge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbnAge1xyXG4gIHBhZGRpbmc6IDAgNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsICM2MDY0NmIpO1xyXG59XHJcblxyXG5wIGIge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMDAwMCk7XHJcbn1cclxuI2NvbnRhaW5lcntcclxuICBjb2x1bW5zOjI7XHJcbiAgY29sdW1uLWdhcDogMTBweDtcclxuICBpb24tY2FyZHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXJnaW46MCAwIDEwcHggMDtcclxuICAgIGJyZWFrLWluc2lkZTphdm9pZDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTRweDtcclxuICB9XHJcbn1cclxuLnNlbGVjdC1pY29uIHtcclxuICB3aWR0aDogMTlweDtcclxuICBoZWlnaHQ6IDE5cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDk0cHg7XHJcbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=food-food-module-es2015.js.map