(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vehicle-vehicle-module"],{

/***/ "1hCE":
/*!***************************************************!*\
  !*** ./src/app/vehicle/vehicle-routing.module.ts ***!
  \***************************************************/
/*! exports provided: VehiclePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclePageRoutingModule", function() { return VehiclePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _vehicle_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vehicle.page */ "oYSW");




const routes = [
    {
        path: '',
        component: _vehicle_page__WEBPACK_IMPORTED_MODULE_3__["VehiclePage"]
    }
];
let VehiclePageRoutingModule = class VehiclePageRoutingModule {
};
VehiclePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VehiclePageRoutingModule);



/***/ }),

/***/ "8e7Y":
/*!*******************************************!*\
  !*** ./src/app/vehicle/vehicle.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZWhpY2xlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "IuRZ":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle/vehicle.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\" >\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Vehicle</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"regform\">\n    <ion-item>\n       <ion-label>Name of Plate </ion-label>\n       <ion-input formControlName=\"Plate\" type=\"text\"></ion-input>\n       <small class=\"form-text text-muted\" *ngIf=\"!regform.get('Plate').valid && regform.get('Plate').touched\" > This field is required! </small> \n     </ion-item>\n     <ion-item>\n      <ion-label>Type</ion-label>\n      <ion-select interface=\"popover\" formControlName=\"Type\" [(ngModel)]=\"defaultType\">\n        <ion-select-option value=\"motorcycles\">motorcycles</ion-select-option>\n        <ion-select-option value=\"cars\">cars</ion-select-option>\n        <ion-select-option value=\" trucks\"> trucks</ion-select-option>\n        <ion-select-option value=\"buses\">buses</ion-select-option>\n      </ion-select> <small class=\"form-text text-muted\" *ngIf=\"!regform.get('Type').valid && regform.get('Type').touched\" > This field is required! </small> \n    </ion-item>\n     <ion-item>\n       <ion-label>Model</ion-label>\n       <ion-input formControlName=\"Model\" type=\"text\"></ion-input>\n       <small class=\"form-text text-muted\" *ngIf=\"!regform.get('Model').valid && regform.get('Model').touched\" > This field is required! </small> \n     </ion-item>\n     <ion-item>\n       <ion-label>MotorNumber</ion-label>\n       <ion-input formControlName=\"MotorNumber\" type=\"text\"></ion-input>\n       <small class=\"form-text text-muted\" *ngIf=\"!regform.get('MotorNumber').valid && regform.get('MotorNumber').touched\" > This field is required! </small> \n     </ion-item>\n     <div style=\"text-align: center; margin: auto;\">\n       <ion-button id=\"add items\" (click)=\"saveVehicle()\"> \n         <ion-icon slot=\"start\" name=\"add-circle-outline\"></ion-icon>\n         {{editMode?'Update Vehicle':'Add Vehicle'}}</ion-button>\n     </div> \n </form>\n <ion-item-sliding *ngFor=\"let item of listOfVehicle \" #slidingItem >\n  <ion-item detail>\n    <ion-label>{{item.Plate}}</ion-label>\n    <ion-label>{{item.Type}}</ion-label>\n    <ion-label>{{item.Model}}</ion-label>\n    <ion-label>{{item.MotorNumber}} </ion-label>\n  </ion-item>\n  <ion-item-options side=\"start\">\n    <ion-item-option color=\"danger\" (click)=\"edit(item,slidingItem)\">\n   <ion-icon  name=\"create\" slot=\"icon-only\"></ion-icon></ion-item-option>\n   <ion-item-option color=\"danger\" (click)=\"delete(item,slidingItem)\">\n    <ion-icon  name=\"trash\" slot=\"icon-only\"></ion-icon></ion-item-option>\n  </ion-item-options>\n</ion-item-sliding>\n\n</ion-content>\n\n");

/***/ }),

/***/ "Qq7v":
/*!*******************************************!*\
  !*** ./src/app/vehicle/vehicle.module.ts ***!
  \*******************************************/
/*! exports provided: VehiclePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclePageModule", function() { return VehiclePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _vehicle_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vehicle-routing.module */ "1hCE");
/* harmony import */ var _vehicle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vehicle.page */ "oYSW");







let VehiclePageModule = class VehiclePageModule {
};
VehiclePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _vehicle_routing_module__WEBPACK_IMPORTED_MODULE_5__["VehiclePageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_vehicle_page__WEBPACK_IMPORTED_MODULE_6__["VehiclePage"]]
    })
], VehiclePageModule);



/***/ }),

/***/ "oYSW":
/*!*****************************************!*\
  !*** ./src/app/vehicle/vehicle.page.ts ***!
  \*****************************************/
/*! exports provided: VehiclePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclePage", function() { return VehiclePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_vehicle_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./vehicle.page.html */ "IuRZ");
/* harmony import */ var _vehicle_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vehicle.page.scss */ "8e7Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _Service_vehicle_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Service/vehicle.service */ "5ZJP");







let VehiclePage = class VehiclePage {
    constructor(fb, vehicleService, alertController, platform) {
        this.fb = fb;
        this.vehicleService = vehicleService;
        this.alertController = alertController;
        this.platform = platform;
        this.regform = this.fb.group({});
        this.defaultType = "motorcycles";
    }
    ngOnInit() {
        this.regform = this.fb.group({
            Plate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Type: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Model: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            MotorNumber: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        if ((this.platform.is('mobile') && !this.platform.is('hybrid')) ||
            this.platform.is('desktop')) {
            this.usePicker = true;
        }
        this.getVehicle();
    }
    getVehicle() {
        this.vehicleService.getAllVehicle().subscribe(res => {
            this.listOfVehicle = res;
        });
    }
    saveVehicle() {
        if (this.regform.valid) {
            if (!this.vechileId) {
                this.vehicleService.create(this.regform.value);
            }
            else {
                this.vehicleService.updateVehicle(this.regform.value, this.vechileId);
            }
            this.regform.reset();
            this.presentAlert();
            this.vechileId = null;
        }
        else {
            this.ErrorAlert();
        }
    }
    edit(vehicle, slidingItem) {
        this.editMode = true;
        this.vechileId = vehicle.id;
        this.regform.get('Model').setValue(vehicle.Model);
        this.regform.get('MotorNumber').setValue(vehicle.MotorNumber);
        this.regform.get('Plate').setValue(vehicle.Plate);
        this.regform.get('Type').setValue(vehicle.Type);
        slidingItem.close();
    }
    delete(vehicle, slidingItem) {
        this.presentAlertConfirm(vehicle);
        slidingItem.close();
    }
    presentAlertConfirm(vehicle) {
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
                            this.vehicleService.removeVehicle(vehicle.id);
                            this.regform.reset();
                            this.vechileId = null;
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
                header: 'vehicle ',
                // subHeader: 'Subtitle',
                message: 'vehicle Saved successfully.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
VehiclePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _Service_vehicle_service__WEBPACK_IMPORTED_MODULE_6__["VehicleService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] }
];
VehiclePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-vehicle',
        template: _raw_loader_vehicle_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_vehicle_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VehiclePage);



/***/ })

}]);
//# sourceMappingURL=vehicle-vehicle-module-es2015.js.map