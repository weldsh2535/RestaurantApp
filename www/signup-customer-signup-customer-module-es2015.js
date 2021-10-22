(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-customer-signup-customer-module"],{

/***/ "0jBB":
/*!*******************************************************************!*\
  !*** ./src/app/signup-customer/signup-customer-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: SignupCustomerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupCustomerPageRoutingModule", function() { return SignupCustomerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _signup_customer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup-customer.page */ "mlHJ");




const routes = [
    {
        path: '',
        component: _signup_customer_page__WEBPACK_IMPORTED_MODULE_3__["SignupCustomerPage"]
    }
];
let SignupCustomerPageRoutingModule = class SignupCustomerPageRoutingModule {
};
SignupCustomerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignupCustomerPageRoutingModule);



/***/ }),

/***/ "LWGn":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup-customer/signup-customer.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title style=\"text-align: center\">signup</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"regform\">\n    <ion-item>\n      <ion-label>Full Name</ion-label>\n      <ion-input formControlName=\"FullName\" type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Email </ion-label>\n      <ion-input formControlName=\"email\" type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Phone number</ion-label>\n      <ion-input formControlName=\"phonenumber\" type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Password</ion-label>\n      <ion-input [type]=\"fieldTextType ? 'text' : 'password'\" formControlName=\"password\" [required]></ion-input>\n      <i class=\"fa\" [ngClass]=\"{'fa-eye-slash': !fieldTextType,'fa-eye': fieldTextType }\"\n        (click)=\"toggleFieldTextType()\"></i>\n    </ion-item>\n    <ion-item>\n      <ion-label>Confirm Password</ion-label>\n      <ion-input [type]=\"conformPassword ? 'text' : 'password'\" formControlName=\"confirmPassword\" [required]>\n      </ion-input>\n      <i class=\"fa\" [ngClass]=\"{'fa-eye-slash': !conformPassword,'fa-eye': conformPassword }\" \n        (click)=\"conPassword()\"></i>\n    </ion-item>\n    <div style=\"text-align: center; margin: auto\">\n      <ion-button expand=\"full\" (click)=\"registerAccount()\">\n        <ion-icon slot=\"start\" name=\"add-circle-outline\"></ion-icon>\n        Sign Up\n      </ion-button>\n    </div>\n    <ion-item>\n      <ion-label style=\"text-align: center\">Already have an account ?</ion-label>\n      <button style=\"margin-left: -37px; color: #234ada; background-color: #f8f9fa\" (click)=\"login()\">\n        Login\n      </button>\n    </ion-item>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "QpyC":
/*!***********************************************************!*\
  !*** ./src/app/signup-customer/signup-customer.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-item {\n  padding: 0;\n  --border-radius: 14px;\n}\nion-content ion-searchbar {\n  --border-radius: 14px;\n  --background: rgb(243, 243, 243);\n  margin-top: -13px;\n}\nion-content ion-segment {\n  margin: 5px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNpZ251cC1jdXN0b21lci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR007RUFFRSxVQUFBO0VBRUEscUJBQUE7QUFKUjtBQVFHO0VBQ0MscUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0FBTko7QUFTRTtFQUNFLGFBQUE7QUFOSiIsImZpbGUiOiJzaWdudXAtY3VzdG9tZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLy8tLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSg0Myw5MCwxNDgsMSkgMCUsIHJnYmEoNDUsMTEyLDIyOSwxKSAzNSUsIHJnYmEoNDUsMTEyLDIyOSwxKSAxMDAlKTtcclxuICAgXHJcbiAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgLy8gLS1iYWNrZ3JvdW5kOiByZ2IoMTIwLCAxMjYsIDEzNCk7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgIC8vIG1hcmdpbjogMTRweCAwO1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgICAgIC8vIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIC8vZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgfVxyXG4gICBpb24tc2VhcmNoYmFye1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQzLCAyNDMsIDI0Myk7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTNweDtcclxuICAgfVxyXG4gIH1cclxuICBpb24tY29udGVudCBpb24tc2VnbWVudCB7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "Tftg":
/*!***********************************************************!*\
  !*** ./src/app/signup-customer/signup-customer.module.ts ***!
  \***********************************************************/
/*! exports provided: SignupCustomerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupCustomerPageModule", function() { return SignupCustomerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _signup_customer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup-customer-routing.module */ "0jBB");
/* harmony import */ var _signup_customer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup-customer.page */ "mlHJ");







let SignupCustomerPageModule = class SignupCustomerPageModule {
};
SignupCustomerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _signup_customer_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupCustomerPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_signup_customer_page__WEBPACK_IMPORTED_MODULE_6__["SignupCustomerPage"]]
    })
], SignupCustomerPageModule);



/***/ }),

/***/ "mlHJ":
/*!*********************************************************!*\
  !*** ./src/app/signup-customer/signup-customer.page.ts ***!
  \*********************************************************/
/*! exports provided: SignupCustomerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupCustomerPage", function() { return SignupCustomerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_signup_customer_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./signup-customer.page.html */ "LWGn");
/* harmony import */ var _signup_customer_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup-customer.page.scss */ "QpyC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _Service_account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Service/account.service */ "6wYF");








let SignupCustomerPage = class SignupCustomerPage {
    constructor(fb, accountService, alertController, router) {
        this.fb = fb;
        this.accountService = accountService;
        this.alertController = alertController;
        this.router = router;
        this.regform = this.fb.group({});
    }
    ngOnInit() {
        this.regform = this.fb.group({
            FullName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            phonenumber: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            FirstTimeLocation: [""],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            confirmPassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            type: [""],
            active: [""],
        });
    }
    registerAccount() {
        if (this.regform.get("password").value === this.regform.get("confirmPassword").value) {
            if (this.regform.valid) {
                this.regform.get("active").setValue("true");
                this.regform.get("type").setValue("customer");
                this.accountService.create(this.regform.value);
                this.router.navigate(["/menu/login"]);
            }
            else {
                this.ErrorAlert("Please Enter All field.");
            }
        }
        else {
            this.ErrorAlert("Password donot match");
        }
    }
    login() {
        this.router.navigate(["/menu/login"]);
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
    ErrorAlert(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Error',
                // subHeader: 'Subtitle',
                message: message,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    toggleFieldTextType() {
        this.fieldTextType = !this.fieldTextType;
    }
    conPassword() {
        this.conformPassword = !this.conformPassword;
    }
};
SignupCustomerPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _Service_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
SignupCustomerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-signup-customer',
        template: _raw_loader_signup_customer_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_signup_customer_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SignupCustomerPage);



/***/ })

}]);
//# sourceMappingURL=signup-customer-signup-customer-module-es2015.js.map