(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["category-category-module"],{

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

/***/ "+xmm":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/category.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\" >\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Restaurant Menu</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form [formGroup]=\"regform\">\n    <ion-item>\n      <ion-label position=\"floating\">category Name  </ion-label>\n      <ion-input formControlName=\"categoryName\" type=\"text\"></ion-input>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('categoryName').valid && regform.get('categoryName').touched\" > This field is required! </small> \n    </ion-item>\n    <ion-item>\n      <ion-label>Restaurant Id</ion-label>\n      <ion-select interface=\"popover\" formControlName=\"restaurantId\" (ngModelChange)=\"selectRestaurant($event)\"[(ngModel)]=\"defalutRestaurantId\">\n        <ion-select-option *ngFor=\"let code of listOfRestaurant\" value=\"{{code?.id}}\">\n          {{code?.Name}}\n        </ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">description</ion-label>\n      <ion-input formControlName=\"description\" type=\"text\"></ion-input>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('description').valid && regform.get('description').touched\" > This field is required! </small> \n    </ion-item>\n    <div class=\"picker\">\n      <ion-img role=\"button\" class=\"image\" (click)=\"onPickImage()\" [src]=\"base64textString\"\n        *ngIf=\"base64textString\"></ion-img>\n      <ion-button color=\"primary\" (click)=\"onPickImage()\" *ngIf=\"!base64textString\">\n        <ion-icon name=\"camera\" slot=\"start\"></ion-icon>\n        <ion-label>Take Picture</ion-label>\n      </ion-button>\n    </div>\n    <input hidden type=\"file\" accept=\"image/jpeg\" *ngIf=\"usePicker\" #filePicker (change)=\"onFileChosen($event)\" />\n    \n    <div style=\"text-align: center; margin: auto;\">\n      <ion-button id=\"add items\" (click)=\"SaveCategory()\"> \n        <ion-icon slot=\"start\" name=\"add-circle-outline\"></ion-icon>\n        {{editMode?'Update Category':'Add Category'}}</ion-button>\n    </div>\n</form>\n<ion-item-sliding  *ngFor=\"let item of listOfCatagoryFilter\" #slidingItem >\n  <ion-item detail>\n    <ion-thumbnail slot=\"start\">\n      <img [src]=\"item.image\">\n    </ion-thumbnail>\n    <ion-label> {{item.categoryName}}</ion-label>\n    <ion-label> {{item.description}}</ion-label>\n  </ion-item>\n  <ion-item-options side=\"start\">\n    <ion-item-option color=\"danger\" (click)=\"edit(item,slidingItem)\">\n   <ion-icon  name=\"create\" slot=\"icon-only\"></ion-icon></ion-item-option>\n   <ion-item-option color=\"danger\" (click)=\"delete(item,slidingItem)\">\n    <ion-icon  name=\"trash\" slot=\"icon-only\"></ion-icon></ion-item-option>\n  </ion-item-options>\n</ion-item-sliding>\n</ion-content>\n");

/***/ }),

/***/ "Ak7V":
/*!*********************************************!*\
  !*** ./src/app/category/category.module.ts ***!
  \*********************************************/
/*! exports provided: CategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPageModule", function() { return CategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _category_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category-routing.module */ "R3uw");
/* harmony import */ var _category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category.page */ "sYqR");







let CategoryPageModule = class CategoryPageModule {
};
CategoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _category_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoryPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_category_page__WEBPACK_IMPORTED_MODULE_6__["CategoryPage"]]
    })
], CategoryPageModule);



/***/ }),

/***/ "R3uw":
/*!*****************************************************!*\
  !*** ./src/app/category/category-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CategoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPageRoutingModule", function() { return CategoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _category_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category.page */ "sYqR");




const routes = [
    {
        path: '',
        component: _category_page__WEBPACK_IMPORTED_MODULE_3__["CategoryPage"]
    }
];
let CategoryPageRoutingModule = class CategoryPageRoutingModule {
};
CategoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CategoryPageRoutingModule);



/***/ }),

/***/ "jky3":
/*!*********************************************!*\
  !*** ./src/app/category/category.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".picker {\n  width: 30rem;\n  max-width: 80%;\n  height: 20rem;\n  max-height: 30vh;\n  border: 1px solid var(--ion-color-primary);\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.image {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\nion-item-sliding .item {\n  --background: linear-gradient(90deg, rgb(223, 226, 230) 0%, rgb(222, 225, 231) 35%, rgb(224, 228, 233) 100%);\n}\n\n.label-class {\n  --inner-padding-start:12px;\n  --inner-padding-end:10px;\n  margin-left: 67px;\n}\n\n.label-class-al {\n  margin-left: 67px;\n}\n\n.ion-input {\n  margin-left: 67px;\n}\n\n.dx-lookup-field {\n  padding: 5px 23px 12px 54px;\n  font-size: 1em;\n}\n\nion-content ion-item {\n  padding: 0;\n  --border-radius: 14px;\n}\n\nion-content ion-searchbar {\n  --border-radius: 14px;\n  --background: rgb(243, 243, 243);\n  margin-top: -13px;\n}\n\nion-content ion-segment {\n  margin: 5px 0;\n}\n\ntable.table-hover tbody tr:hover {\n  cursor: pointer;\n}\n\n.modal-wrapper {\n  background: #222;\n}\n\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n\n.my-custom-class .modal-wrapper {\n  background: #222;\n}\n\n.my-custom-class {\n  --background: #222;\n}\n\nion-content ion-item {\n  padding: 0;\n  --border-radius: 14px;\n}\n\nion-content ion-searchbar {\n  --border-radius: 14px;\n  --background: rgb(243, 243, 243);\n  margin-top: -13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNhdGVnb3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQUNKOztBQUNBO0VBQ0UsNEdBQUE7QUFFRjs7QUFDQTtFQUNJLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUFFO0VBQ0UsaUJBQUE7QUFHSjs7QUFERTtFQUNFLGlCQUFBO0FBSUo7O0FBRkU7RUFDRSwyQkFBQTtFQUNBLGNBQUE7QUFLSjs7QUFBTTtFQUVFLFVBQUE7RUFFQSxxQkFBQTtBQUNSOztBQUdHO0VBQ0MscUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0FBREo7O0FBSUU7RUFDRSxhQUFBO0FBREo7O0FBR0U7RUFDRSxlQUFBO0FBQUo7O0FBRUU7RUFDRSxnQkFBQTtBQUNKOztBQUVFLHVFQUFBOztBQUNBO0VBQ0UsZ0JBQUE7QUFDSjs7QUFDRTtFQUNFLGtCQUFBO0FBRUo7O0FBR007RUFFRSxVQUFBO0VBRUEscUJBQUE7QUFGUjs7QUFNRztFQUNDLHFCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtBQUpKIiwiZmlsZSI6ImNhdGVnb3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5waWNrZXIge1xyXG4gICAgd2lkdGg6IDMwcmVtO1xyXG4gICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDIwcmVtO1xyXG4gICAgbWF4LWhlaWdodDogMzB2aDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbWFnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxuaW9uLWl0ZW0tc2xpZGluZyAuaXRlbSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYigyMjMsIDIyNiwgMjMwKSAwJSwgcmdiKDIyMiwgMjI1LCAyMzEpIDM1JSwgcmdiKDIyNCwgMjI4LCAyMzMpIDEwMCUpO1xyXG59XHJcblxyXG4ubGFiZWwtY2xhc3N7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6MTJweDtcclxuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6MTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA2N3B4O1xyXG4gIH1cclxuICAubGFiZWwtY2xhc3MtYWx7XHJcbiAgICBtYXJnaW4tbGVmdDogNjdweDtcclxuICB9XHJcbiAgLmlvbi1pbnB1dHtcclxuICAgIG1hcmdpbi1sZWZ0OiA2N3B4O1xyXG4gIH1cclxuICAuZHgtbG9va3VwLWZpZWxkIHtcclxuICAgIHBhZGRpbmc6IDVweCAyM3B4IDEycHggNTRweDtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gIH1cclxuICBpb24tY29udGVudCB7XHJcbiAgICAvLy0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDQzLDkwLDE0OCwxKSAwJSwgcmdiYSg0NSwxMTIsMjI5LDEpIDM1JSwgcmdiYSg0NSwxMTIsMjI5LDEpIDEwMCUpO1xyXG4gICBcclxuICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAvLyAtLWJhY2tncm91bmQ6IHJnYigxMjAsIDEyNiwgMTM0KTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgLy8gbWFyZ2luOiAxNHB4IDA7XHJcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gICAgICAgLy8gY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgLy9mb250LXdlaWdodDogNjAwO1xyXG4gICB9XHJcbiAgIGlvbi1zZWFyY2hiYXJ7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyNDMsIDI0MywgMjQzKTtcclxuICAgIG1hcmdpbi10b3A6IC0xM3B4O1xyXG4gICB9XHJcbiAgfVxyXG4gIGlvbi1jb250ZW50IGlvbi1zZWdtZW50IHtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgfVxyXG4gIHRhYmxlLnRhYmxlLWhvdmVyIHRib2R5IHRyOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLm1vZGFsLXdyYXBwZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzIyMjtcclxuICB9XHJcbiAgXHJcbiAgLyogV29ya3MgLSBwYXNzIFwibXktY3VzdG9tLWNsYXNzXCIgaW4gY3NzQ2xhc3MgdG8gaW5jcmVhc2Ugc3BlY2lmaWNpdHkgKi9cclxuICAubXktY3VzdG9tLWNsYXNzIC5tb2RhbC13cmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMyMjI7XHJcbiAgfVxyXG4gIC5teS1jdXN0b20tY2xhc3Mge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMjIyO1xyXG4gIH1cclxuICBpb24tY29udGVudCB7XHJcbiAgICAvLy0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDQzLDkwLDE0OCwxKSAwJSwgcmdiYSg0NSwxMTIsMjI5LDEpIDM1JSwgcmdiYSg0NSwxMTIsMjI5LDEpIDEwMCUpO1xyXG4gICBcclxuICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAvLyAtLWJhY2tncm91bmQ6IHJnYigxMjAsIDEyNiwgMTM0KTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgLy8gbWFyZ2luOiAxNHB4IDA7XHJcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gICAgICAgLy8gY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgLy9mb250LXdlaWdodDogNjAwO1xyXG4gICB9XHJcbiAgIGlvbi1zZWFyY2hiYXJ7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyNDMsIDI0MywgMjQzKTtcclxuICAgIG1hcmdpbi10b3A6IC0xM3B4O1xyXG4gICB9XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "sYqR":
/*!*******************************************!*\
  !*** ./src/app/category/category.page.ts ***!
  \*******************************************/
/*! exports provided: CategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPage", function() { return CategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_category_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./category.page.html */ "+xmm");
/* harmony import */ var _category_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category.page.scss */ "jky3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _Service_category_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Service/category.service */ "neG8");
/* harmony import */ var _Service_restaurant_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Service/restaurant.service */ "+cje");









let CategoryPage = class CategoryPage {
    constructor(fb, categoryService, alertController, restaurantService, platform) {
        this.fb = fb;
        this.categoryService = categoryService;
        this.alertController = alertController;
        this.restaurantService = restaurantService;
        this.platform = platform;
        this.regform = this.fb.group({});
    }
    ngOnInit() {
        this.regform = this.fb.group({
            categoryName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description: [""],
            image: [""],
            restaurantId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        if ((this.platform.is('mobile') && !this.platform.is('hybrid')) ||
            this.platform.is('desktop')) {
            this.usePicker = true;
        }
        this.getCategory();
        this.getRestaurant();
    }
    getCategory() {
        this.categoryService.getAllCategory().subscribe(res => {
            this.listOfCategory = res;
        });
    }
    getRestaurant() {
        this.restaurantService.getAllRestaurant().subscribe(res => {
            this.listOfRestaurant = res;
            this.defalutRestaurantId = res[0].id;
        });
    }
    selectRestaurant(event) {
        if (event != undefined) {
            this.listOfCatagoryFilter = this.listOfCategory.filter(c => c.restaurantId == event);
        }
    }
    SaveCategory() {
        if (this.base64textString !== undefined) {
            this.regform.get('image').setValue(this.base64textString);
        }
        if (this.regform.valid) {
            if (!this.categoryId) {
                this.categoryService.create(this.regform.value);
            }
            else {
                this.categoryService.updateCategory(this.regform.value, this.categoryId);
            }
            this.regform.reset();
            this.base64textString = '';
            this.presentAlert();
            this.categoryId = null;
        }
        else {
            this.ErrorAlert();
        }
    }
    edit(category, sliding) {
        this.editMode = true;
        this.categoryId = category.id;
        this.regform.get('categoryName').setValue(category.categoryName);
        this.regform.get('description').setValue(category.description);
        this.regform.get('restaurantId').setValue(category.restaurantId);
        this.base64textString = category.image;
        sliding.close();
    }
    delete(category, sliding) {
        this.presentAlertConfirm(category);
        sliding.close();
    }
    presentAlertConfirm(category) {
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
                            this.categoryService.removeCategory(category.id);
                            this.regform.reset();
                            this.categoryId = null;
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
                header: 'Category',
                // subHeader: 'Subtitle',
                message: 'Category Saved successfully.',
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
};
CategoryPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _Service_category_service__WEBPACK_IMPORTED_MODULE_7__["CategoryService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _Service_restaurant_service__WEBPACK_IMPORTED_MODULE_8__["RestaurantService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] }
];
CategoryPage.propDecorators = {
    filePickerRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['filePicker', { static: false },] }]
};
CategoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-category',
        template: _raw_loader_category_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_category_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CategoryPage);



/***/ })

}]);
//# sourceMappingURL=category-category-module-es2015.js.map