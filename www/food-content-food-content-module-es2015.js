(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["food-content-food-content-module"],{

/***/ "52jl":
/*!***************************************************!*\
  !*** ./src/app/food-content/food-content.page.ts ***!
  \***************************************************/
/*! exports provided: FoodContentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodContentPage", function() { return FoodContentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_food_content_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./food-content.page.html */ "E2oG");
/* harmony import */ var _food_content_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./food-content.page.scss */ "5uXB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _Service_food_content_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Service/food-content.service */ "pfyr");
/* harmony import */ var _Service_food_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Service/food.service */ "Dkj+");








let FoodContentPage = class FoodContentPage {
    constructor(fb, foodContentService, foodService, alertController, platform) {
        this.fb = fb;
        this.foodContentService = foodContentService;
        this.foodService = foodService;
        this.alertController = alertController;
        this.platform = platform;
        this.regform = this.fb.group({});
    }
    ngOnInit() {
        this.regform = this.fb.group({
            FoodId: [""],
            ContentName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            ContentDescription: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            qty: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        if ((this.platform.is('mobile') && !this.platform.is('hybrid')) ||
            this.platform.is('desktop')) {
            this.usePicker = true;
        }
        this.getFoodContent();
        this.getFood();
    }
    getFood() {
        this.foodService.getAllFood().subscribe(res => {
            this.listOfFood = res;
            this.defualtFoodContent = res[0].Name;
        });
    }
    getFoodContent() {
        this.foodContentService.getAllFoodContent().subscribe(res => {
            this.listOfFoodContent = res;
        });
    }
    saveFoodContent() {
        if (this.regform.valid) {
            if (!this.foodId) {
                this.foodContentService.create(this.regform.value);
            }
            else {
                this.foodContentService.updateFoodContent(this.regform.value);
            }
            this.regform.reset();
            this.foodId = null;
            this.presentAlert();
        }
        else {
            this.ErrorAlert();
        }
    }
    edit(food, slidingItem) {
        this.editMode = true;
        this.foodId = food.id;
        this.regform.get('FoodId').setValue(food.foodId);
        this.regform.get('ContentName').setValue(food.foodContentName);
        this.regform.get('ContentDescription').setValue(food.foodContentDescription);
        this.regform.get('qty').setValue(food.qty);
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
                            this.foodContentService.removeFoodContent(food.id);
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
};
FoodContentPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _Service_food_content_service__WEBPACK_IMPORTED_MODULE_6__["FoodContentService"] },
    { type: _Service_food_service__WEBPACK_IMPORTED_MODULE_7__["FoodService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] }
];
FoodContentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-food-content',
        template: _raw_loader_food_content_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_food_content_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FoodContentPage);



/***/ }),

/***/ "5uXB":
/*!*****************************************************!*\
  !*** ./src/app/food-content/food-content.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".label-class {\n  --inner-padding-start:12px;\n  --inner-padding-end:10px;\n  margin-left: 67px;\n}\n\n.label-class-al {\n  margin-left: 67px;\n}\n\n.ion-input {\n  margin-left: 67px;\n}\n\n.dx-lookup-field {\n  padding: 5px 23px 12px 54px;\n  font-size: 1em;\n}\n\nion-content ion-item {\n  padding: 0;\n  --border-radius: 14px;\n}\n\nion-content ion-searchbar {\n  --border-radius: 14px;\n  --background: rgb(243, 243, 243);\n  margin-top: -13px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZvb2QtY29udGVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSwwQkFBc0I7RUFDdEIsd0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUFyQjs7QUFFRTtFQUNFLGlCQUFpQjtBQUNyQjs7QUFDRTtFQUNFLGlCQUFpQjtBQUVyQjs7QUFBRTtFQUNFLDJCQUEyQjtFQUMzQixjQUFjO0FBR2xCOztBQURFO0VBS00sVUFBVTtFQUVWLHFCQUFnQjtBQUR4Qjs7QUFORTtFQVlFLHFCQUFnQjtFQUNoQixnQ0FBYTtFQUNiLGlCQUFpQjtBQUZyQiIsImZpbGUiOiJmb29kLWNvbnRlbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5sYWJlbC1jbGFzc3tcclxuICAgIC0taW5uZXItcGFkZGluZy1zdGFydDoxMnB4O1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDoxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDY3cHg7XHJcbiAgfVxyXG4gIC5sYWJlbC1jbGFzcy1hbHtcclxuICAgIG1hcmdpbi1sZWZ0OiA2N3B4O1xyXG4gIH1cclxuICAuaW9uLWlucHV0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDY3cHg7XHJcbiAgfVxyXG4gIC5keC1sb29rdXAtZmllbGQge1xyXG4gICAgcGFkZGluZzogNXB4IDIzcHggMTJweCA1NHB4O1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgfVxyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIC8vLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoNDMsOTAsMTQ4LDEpIDAlLCByZ2JhKDQ1LDExMiwyMjksMSkgMzUlLCByZ2JhKDQ1LDExMiwyMjksMSkgMTAwJSk7XHJcbiAgIFxyXG4gICAgICBpb24taXRlbSB7XHJcbiAgICAgIC8vIC0tYmFja2dyb3VuZDogcmdiKDEyMCwgMTI2LCAxMzQpO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAvLyBtYXJnaW46IDE0cHggMDtcclxuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICAgICAvLyBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAvL2ZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgIH1cclxuICAgaW9uLXNlYXJjaGJhcntcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDI0MywgMjQzLCAyNDMpO1xyXG4gICAgbWFyZ2luLXRvcDogLTEzcHg7XHJcbiAgIH1cclxuICB9Il19 */");

/***/ }),

/***/ "E2oG":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/food-content/food-content.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\" >\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Food</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"regform\">\n    <ion-item>\n       <ion-label>Food Id </ion-label>\n       <ion-select interface=\"popover\" formControlName=\"FoodId\" [(ngModel)]=\"defualtFoodContent\">\n        <ion-select-option   *ngFor=\"let code of listOfFood\" value=\"{{code?.id}}\">\n          {{code?.Name}}\n        </ion-select-option>\n      </ion-select>\n       <small class=\"form-text text-muted\" *ngIf=\"!regform.get('FoodId').valid && regform.get('FoodId').touched\" > This field is required! </small> \n     </ion-item>\n     <ion-item>\n       <ion-label>Content Name</ion-label>\n       <ion-input formControlName=\"ContentName\" type=\"text\"></ion-input>\n       <small class=\"form-text text-muted\" *ngIf=\"!regform.get('ContentName').valid && regform.get('ContentName').touched\" > This field is required! </small> \n     </ion-item>\n      <ion-item>\n       <ion-label>Content Description</ion-label>\n       <ion-input formControlName=\"ContentDescription\" type=\"text\"></ion-input>\n       <small class=\"form-text text-muted\" *ngIf=\"!regform.get('ContentDescription').valid && regform.get('ContentDescription').touched\" > This field is required! </small> \n     </ion-item>\n     <ion-item>\n      <ion-label>Quantity</ion-label>\n      <ion-input formControlName=\"qty\" type=\"number\"></ion-input>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('qty').valid && regform.get('qty').touched\" > This field is required! </small> \n    </ion-item>\n    \n    <div style=\"text-align: center; margin: auto;\">\n       <ion-button id=\"add items\" (click)=\"saveFoodContent()\"> \n         <ion-icon slot=\"start\" name=\"add-circle-outline\"></ion-icon>\n         {{editMode?'Update Food Content':'Add Food Content'}}</ion-button>\n     </div> \n </form>\n\n <ion-item-sliding  *ngFor=\"let item of listOfFoodContent \" #slidingItem >\n  <ion-item detail>\n    <ion-label>{{item.ContentName}}</ion-label>\n    <ion-label> {{item.Name}}</ion-label>\n    <ion-label> {{item.qty}}</ion-label>\n    <ion-label> {{item.ContentDescription}}</ion-label>\n  </ion-item>\n  <ion-item-options side=\"start\">\n    <ion-item-option color=\"danger\" (click)=\"edit(item,slidingItem)\">\n   <ion-icon  name=\"create\" slot=\"icon-only\"></ion-icon></ion-item-option>\n   <ion-item-option color=\"danger\" (click)=\"delete(item,slidingItem)\">\n    <ion-icon  name=\"trash\" slot=\"icon-only\"></ion-icon></ion-item-option>\n  </ion-item-options>\n</ion-item-sliding>\n\n</ion-content>\n");

/***/ }),

/***/ "igtm":
/*!*****************************************************!*\
  !*** ./src/app/food-content/food-content.module.ts ***!
  \*****************************************************/
/*! exports provided: FoodContentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodContentPageModule", function() { return FoodContentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _food_content_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./food-content-routing.module */ "zxYR");
/* harmony import */ var _food_content_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./food-content.page */ "52jl");







let FoodContentPageModule = class FoodContentPageModule {
};
FoodContentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _food_content_routing_module__WEBPACK_IMPORTED_MODULE_5__["FoodContentPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_food_content_page__WEBPACK_IMPORTED_MODULE_6__["FoodContentPage"]]
    })
], FoodContentPageModule);



/***/ }),

/***/ "pfyr":
/*!*************************************************!*\
  !*** ./src/app/Service/food-content.service.ts ***!
  \*************************************************/
/*! exports provided: FoodContentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodContentService", function() { return FoodContentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _common_app_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/app-error */ "/GcI");
/* harmony import */ var _common_bad_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/bad-input */ "XEKg");
/* harmony import */ var _common_not_found_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/not-found-error */ "5Jak");







let FoodContentService = class FoodContentService {
    constructor(http) {
        this.http = http;
        this.APIURL = 'http://localhost:49347/api';
    }
    create(val) {
        return this.http.post(this.APIURL + '/FoodContent', val);
    }
    getAllFoodContent() {
        return this.http.get(this.APIURL + '/FoodContent');
    }
    updateFoodContent(val) {
        return this.http.put(this.APIURL + '/FoodContent/', val);
    }
    removeFoodContent(id) {
        return this.http.delete(this.APIURL + '/FoodContent/' + id).toPromise();
    }
    handleError(error) {
        if (error.status === 400) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _common_bad_input__WEBPACK_IMPORTED_MODULE_5__["BadInput"](error.json()));
        }
        if (error.status === 404) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _common_not_found_error__WEBPACK_IMPORTED_MODULE_6__["NotFoundError"]());
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _common_app_error__WEBPACK_IMPORTED_MODULE_4__["AppError"](error));
    }
};
FoodContentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
FoodContentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], FoodContentService);



/***/ }),

/***/ "zxYR":
/*!*************************************************************!*\
  !*** ./src/app/food-content/food-content-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: FoodContentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodContentPageRoutingModule", function() { return FoodContentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _food_content_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./food-content.page */ "52jl");




const routes = [
    {
        path: '',
        component: _food_content_page__WEBPACK_IMPORTED_MODULE_3__["FoodContentPage"]
    }
];
let FoodContentPageRoutingModule = class FoodContentPageRoutingModule {
};
FoodContentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FoodContentPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=food-content-food-content-module-es2015.js.map