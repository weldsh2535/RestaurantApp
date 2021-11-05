(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-details-account-details-module"],{

/***/ "4ToN":
/*!*******************************************************************!*\
  !*** ./src/app/account-details/account-details-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: AccountDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountDetailsPageRoutingModule", function() { return AccountDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _account_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account-details.page */ "HO9D");




const routes = [
    {
        path: '',
        component: _account_details_page__WEBPACK_IMPORTED_MODULE_3__["AccountDetailsPage"]
    }
];
let AccountDetailsPageRoutingModule = class AccountDetailsPageRoutingModule {
};
AccountDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AccountDetailsPageRoutingModule);



/***/ }),

/***/ "HO9D":
/*!*********************************************************!*\
  !*** ./src/app/account-details/account-details.page.ts ***!
  \*********************************************************/
/*! exports provided: AccountDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountDetailsPage", function() { return AccountDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_account_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./account-details.page.html */ "ricU");
/* harmony import */ var _account_details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account-details.page.scss */ "yGUt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _Service_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Service/account.service */ "6wYF");







let AccountDetailsPage = class AccountDetailsPage {
    constructor(fb, platform, accountService) {
        this.fb = fb;
        this.platform = platform;
        this.accountService = accountService;
        this.regform = this.fb.group({});
    }
    ngOnInit() {
        let id = localStorage.getItem("userId");
        this.accountService.getAllAccount().subscribe(res => {
            this.regform.get('FullName').setValue(res.find(c => c.id == id).FullName);
            this.regform.get('phonenumber').setValue(res.find(c => c.id == id).phonenumber);
            this.regform.get('email').setValue(res.find(c => c.id == id).email);
            this.regform.get('password').setValue(res.find(c => c.id == id).password);
        });
        this.regform = this.fb.group({
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email],
            phonenumber: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            FullName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        if ((this.platform.is('mobile') && !this.platform.is('hybrid')) ||
            this.platform.is('desktop')) {
            this.usePicker = true;
        }
    }
    SaveAccount() {
    }
};
AccountDetailsPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _Service_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"] }
];
AccountDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-account-details',
        template: _raw_loader_account_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_account_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AccountDetailsPage);



/***/ }),

/***/ "a9TH":
/*!***********************************************************!*\
  !*** ./src/app/account-details/account-details.module.ts ***!
  \***********************************************************/
/*! exports provided: AccountDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountDetailsPageModule", function() { return AccountDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _account_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-details-routing.module */ "4ToN");
/* harmony import */ var _account_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account-details.page */ "HO9D");







let AccountDetailsPageModule = class AccountDetailsPageModule {
};
AccountDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _account_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountDetailsPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_account_details_page__WEBPACK_IMPORTED_MODULE_6__["AccountDetailsPage"]]
    })
], AccountDetailsPageModule);



/***/ }),

/***/ "ricU":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account-details/account-details.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons>\n      <ion-back-button defaultHref=\"profile\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Account Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"regform\">\n    <ion-item>\n      <ion-label>Full Name</ion-label>\n      <ion-input formControlName=\"FullName\" type=\"text\"></ion-input>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('FullName').valid && regform.get('FullName').touched\" > This field is required! </small> \n      </ion-item>\n    <ion-item>\n      <ion-label>Email  </ion-label>\n      <ion-input formControlName=\"email\" type=\"text\"></ion-input>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('email').valid && regform.get('email').touched\" > This field is required! </small> \n    </ion-item>\n    <ion-item>\n      <ion-label>Phone number</ion-label>\n      <ion-input formControlName=\"phonenumber\" type=\"text\"></ion-input>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('phonenumber').valid && regform.get('phonenumber').touched\" > This field is required! </small> \n    </ion-item>\n    <ion-item>\n      <ion-label>Password</ion-label>\n      <ion-input formControlName=\"password\" type=\"text\"></ion-input>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('password').valid && regform.get('password').touched\" > This field is required! </small> \n    </ion-item>\n    <div style=\"text-align: center; margin: auto;\">\n      <ion-button id=\"add items\" (click)=\"SaveAccount()\">Save</ion-button>\n    </div>\n</form>\n</ion-content>\n");

/***/ }),

/***/ "yGUt":
/*!***********************************************************!*\
  !*** ./src/app/account-details/account-details.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-input {\n  --padding-start: 85px;\n}\n\nion-content ion-item {\n  padding: 0;\n  --border-radius: 14px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFjY291bnQtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBZ0I7QUFDbEI7O0FBQ0E7RUFLSSxVQUFVO0VBRVYscUJBQWdCO0FBSHBCIiwiZmlsZSI6ImFjY291bnQtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taW5wdXQge1xyXG4gIC0tcGFkZGluZy1zdGFydDogODVweDtcclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgLy8tLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSg0Myw5MCwxNDgsMSkgMCUsIHJnYmEoNDUsMTEyLDIyOSwxKSAzNSUsIHJnYmEoNDUsMTEyLDIyOSwxKSAxMDAlKTtcclxuXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiByZ2IoMTIwLCAxMjYsIDEzNCk7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgLy8gbWFyZ2luOiAxNHB4IDA7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICAvLyBjb2xvcjogI0ZGRkZGRjtcclxuICAgIC8vZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=account-details-account-details-module-es2015.js.map