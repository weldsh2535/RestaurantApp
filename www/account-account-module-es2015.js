(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"],{

/***/ "+aji":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\" >\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Account</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form [formGroup]=\"regform\">\n    <ion-item>\n      <ion-label>Full Name</ion-label>\n      <ion-input formControlName=\"FullName\" type=\"text\"></ion-input>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('FullName').valid && regform.get('FullName').touched\" > This field is required! </small> \n      </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Email  </ion-label>\n      <ion-input formControlName=\"email\" type=\"text\"></ion-input>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('email').valid && regform.get('email').touched\" > This field is required! </small> \n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Phone number</ion-label>\n      <ion-input formControlName=\"phonenumber\" type=\"text\"></ion-input>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('phonenumber').valid && regform.get('phonenumber').touched\" > This field is required! </small> \n    </ion-item>\n    <ion-item>\n      <ion-label>Type</ion-label>\n      <ion-select interface=\"popover\" formControlName=\"type\" (ngModelChange)=\"selectType($event)\">\n        <ion-select-option value=\"driver\">Driver</ion-select-option>\n        <ion-select-option value=\"restaurant\">Restaurant</ion-select-option>\n        <ion-select-option value=\"customer\"> Customer</ion-select-option>\n        <ion-select-option value=\"admin\">Admin</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Active</ion-label>\n      <ion-select interface=\"popover\" formControlName=\"active\" (ngModelChange)=\"selectActive($event)\">\n        <ion-select-option value=\"true\">true</ion-select-option>\n        <ion-select-option value=\"false\">false</ion-select-option>\n      </ion-select>\n     </ion-item>\n    <!-- <ion-item>\n      <ion-label>Location On Order</ion-label>\n      <ion-input formControlName=\"LocationOnOrder\" type=\"text\"></ion-input>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('LocationOnOrder').valid && regform.get('LocationOnOrder').touched\" > This field is required! </small> \n    </ion-item> -->\n    <ion-item>\n      <ion-label>First Time Location</ion-label>\n      <ion-input formControlName=\"FirstTimeLocation\" type=\"text\"></ion-input>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('FirstTimeLocation').valid && regform.get('FirstTimeLocation').touched\" > This field is required! </small> \n    </ion-item>\n    <ion-item>\n      <ion-label>Password</ion-label>\n      <ion-input formControlName=\"password\" type=\"text\"></ion-input>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('password').valid && regform.get('password').touched\" > This field is required! </small> \n    </ion-item>\n    <div style=\"text-align: center; margin: auto;\">\n      <ion-button id=\"add items\" (click)=\"SaveAccount()\"> \n        <ion-icon slot=\"start\" name=\"add-circle-outline\"></ion-icon>\n        {{editMode?'Update Account':'Add Account'}}</ion-button>\n    </div>\n</form>\n<ion-item-sliding  *ngFor=\"let item of listOfAccount\" #slidingItem >\n  <ion-item detail>\n    <ion-label> {{item.FullName}}</ion-label>\n    <ion-label> {{item.phonenumber}}</ion-label>\n  </ion-item>\n  <ion-item-options side=\"start\">\n    <ion-item-option color=\"danger\" (click)=\"edit(item,slidingItem)\">\n   <ion-icon  name=\"create\" slot=\"icon-only\"></ion-icon></ion-item-option>\n   <ion-item-option color=\"danger\" (click)=\"delete(item,slidingItem)\">\n    <ion-icon  name=\"trash\" slot=\"icon-only\"></ion-icon></ion-item-option>\n  </ion-item-options>\n</ion-item-sliding>\n</ion-content>\n");

/***/ }),

/***/ "jcJX":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-routing.module */ "sGj0");
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account.page */ "mdzQ");







let AccountPageModule = class AccountPageModule {
};
AccountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _account_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]]
    })
], AccountPageModule);



/***/ }),

/***/ "mdzQ":
/*!*****************************************!*\
  !*** ./src/app/account/account.page.ts ***!
  \*****************************************/
/*! exports provided: AccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPage", function() { return AccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_account_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./account.page.html */ "+aji");
/* harmony import */ var _account_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account.page.scss */ "n3U/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _Service_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Service/account.service */ "6wYF");







let AccountPage = class AccountPage {
    constructor(fb, accountService, alertController, platform) {
        this.fb = fb;
        this.accountService = accountService;
        this.alertController = alertController;
        this.platform = platform;
        this.regform = this.fb.group({});
    }
    ngOnInit() {
        this.regform = this.fb.group({
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email],
            phonenumber: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            FullName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            FirstTimeLocation: [""],
            type: [""],
            active: [""]
        });
        if ((this.platform.is('mobile') && !this.platform.is('hybrid')) ||
            this.platform.is('desktop')) {
            this.usePicker = true;
        }
        this.getAccount();
    }
    getAccount() {
        this.accountService.getAllAccount().subscribe(res => {
            this.listOfAccount = res;
        });
    }
    selectType(event) {
        let active = this.regform.get("active").value;
        this.accountService.getAllAccount().subscribe(res => {
            if (active !== "") {
                this.listOfAccount = res.filter(c => c.type == event && c.active == active);
            }
            else {
                this.listOfAccount = res.filter(c => c.type == event);
            }
        });
    }
    selectActive(event) {
        let type = this.regform.get("type").value;
        this.accountService.getAllAccount().subscribe(res => {
            if (type !== "") {
                this.listOfAccount = res.filter(c => c.active == event && c.type == type);
            }
            else {
                this.listOfAccount = res.filter(c => c.active == event);
            }
        });
    }
    SaveAccount() {
        if (this.regform.valid) {
            if (!this.accountId) {
                this.accountService.create(this.regform.value);
            }
            else {
                this.accountService.updateAccount(this.regform.value, this.accountId);
            }
            this.regform.reset();
            this.presentAlert();
            this.accountId = null;
        }
        else {
            this.ErrorAlert();
        }
    }
    edit(account, sliding) {
        this.editMode = true;
        this.accountId = account.id;
        this.regform.get('FullName').setValue(account.FullName);
        this.regform.get('FirstTimeLocation').setValue(account.FirstTimeLocation);
        this.regform.get('email').setValue(account.email);
        this.regform.get('password').setValue(account.password);
        this.regform.get('phonenumber').setValue(account.phonenumber);
        this.regform.get('active').setValue(account.active);
        this.regform.get('type').setValue(account.type);
        sliding.close();
    }
    delete(account, sliding) {
        this.presentAlertConfirm(account);
        sliding.close();
    }
    presentAlertConfirm(account) {
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
                            this.accountService.removeAccount(account.id);
                            this.regform.reset();
                            this.accountId = null;
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
                header: 'Account',
                // subHeader: 'Subtitle',
                message: 'Account Saved successfully.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
AccountPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _Service_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] }
];
AccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-account',
        template: _raw_loader_account_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_account_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AccountPage);



/***/ }),

/***/ "n3U/":
/*!*******************************************!*\
  !*** ./src/app/account/account.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".label-class {\n  --inner-padding-start:12px;\n  --inner-padding-end:10px;\n  margin-left: 67px;\n}\n\n.label-class-al {\n  margin-left: 67px;\n}\n\n.ion-input {\n  margin-left: 67px;\n}\n\n.dx-lookup-field {\n  padding: 5px 23px 12px 54px;\n  font-size: 1em;\n}\n\nion-content ion-item {\n  padding: 0;\n  --border-radius: 14px;\n}\n\nion-content ion-searchbar {\n  --border-radius: 14px;\n  --background: rgb(243, 243, 243);\n  margin-top: -13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksMEJBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBRUU7RUFDRSxpQkFBQTtBQUNKOztBQUNFO0VBQ0UsaUJBQUE7QUFFSjs7QUFBRTtFQUNFLDJCQUFBO0VBQ0EsY0FBQTtBQUdKOztBQUVNO0VBRUUsVUFBQTtFQUVBLHFCQUFBO0FBRFI7O0FBS0c7RUFDQyxxQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7QUFISiIsImZpbGUiOiJhY2NvdW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubGFiZWwtY2xhc3N7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6MTJweDtcclxuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6MTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA2N3B4O1xyXG4gIH1cclxuICAubGFiZWwtY2xhc3MtYWx7XHJcbiAgICBtYXJnaW4tbGVmdDogNjdweDtcclxuICB9XHJcbiAgLmlvbi1pbnB1dHtcclxuICAgIG1hcmdpbi1sZWZ0OiA2N3B4O1xyXG4gIH1cclxuICAuZHgtbG9va3VwLWZpZWxkIHtcclxuICAgIHBhZGRpbmc6IDVweCAyM3B4IDEycHggNTRweDtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gIH1cclxuICBpb24tY29udGVudCB7XHJcbiAgICAvLy0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDQzLDkwLDE0OCwxKSAwJSwgcmdiYSg0NSwxMTIsMjI5LDEpIDM1JSwgcmdiYSg0NSwxMTIsMjI5LDEpIDEwMCUpO1xyXG4gICBcclxuICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAvLyAtLWJhY2tncm91bmQ6IHJnYigxMjAsIDEyNiwgMTM0KTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgLy8gbWFyZ2luOiAxNHB4IDA7XHJcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gICAgICAgLy8gY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgLy9mb250LXdlaWdodDogNjAwO1xyXG4gICB9XHJcbiAgIGlvbi1zZWFyY2hiYXJ7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyNDMsIDI0MywgMjQzKTtcclxuICAgIG1hcmdpbi10b3A6IC0xM3B4O1xyXG4gICB9XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "sGj0":
/*!***************************************************!*\
  !*** ./src/app/account/account-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AccountPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageRoutingModule", function() { return AccountPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.page */ "mdzQ");




const routes = [
    {
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_3__["AccountPage"]
    }
];
let AccountPageRoutingModule = class AccountPageRoutingModule {
};
AccountPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AccountPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=account-account-module-es2015.js.map