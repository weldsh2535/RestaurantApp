(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["driver-driver-module"],{

/***/ "9r9m":
/*!*****************************************!*\
  !*** ./src/app/driver/driver.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".picker {\n  width: 30rem;\n  max-width: 80%;\n  height: 20rem;\n  max-height: 30vh;\n  border: 1px solid var(--ion-color-primary);\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.image {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\nion-item-sliding .item {\n  --background: linear-gradient(90deg, rgb(223, 226, 230) 0%, rgb(222, 225, 231) 35%, rgb(224, 228, 233) 100%);\n}\n\n.label-class {\n  --inner-padding-start:12px;\n  --inner-padding-end:10px;\n  margin-left: 67px;\n}\n\n.label-class-al {\n  margin-left: 67px;\n}\n\n.ion-input {\n  margin-left: 67px;\n}\n\n.dx-lookup-field {\n  padding: 5px 23px 12px 54px;\n  font-size: 1em;\n}\n\nion-content ion-item {\n  padding: 0;\n  --border-radius: 14px;\n}\n\nion-content ion-searchbar {\n  --border-radius: 14px;\n  --background: rgb(243, 243, 243);\n  margin-top: -13px;\n}\n\n.meal-image {\n  width: 100%;\n  height: 100%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 5px;\n}\n\n.border-bottom {\n  border-bottom: 1px solid var(--ion-color-step-150, rgba(0, 0, 0, 0.07));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRyaXZlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFDSjs7QUFDQTtFQUNFLDRHQUFBO0FBRUY7O0FBT0E7RUFDRSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7QUFKRjs7QUFNQTtFQUNFLGlCQUFBO0FBSEY7O0FBS0E7RUFDRSxpQkFBQTtBQUZGOztBQUlBO0VBQ0UsMkJBQUE7RUFDQSxjQUFBO0FBREY7O0FBTUk7RUFFRSxVQUFBO0VBRUEscUJBQUE7QUFMTjs7QUFTQztFQUNDLHFCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtBQVBGOztBQVVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQVBGOztBQVVBO0VBQ0UsdUVBQUE7QUFQRiIsImZpbGUiOiJkcml2ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBpY2tlciB7XHJcbiAgICB3aWR0aDogMzByZW07XHJcbiAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogMjByZW07XHJcbiAgICBtYXgtaGVpZ2h0OiAzMHZoO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG5pb24taXRlbS1zbGlkaW5nIC5pdGVtIHtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiKDIyMywgMjI2LCAyMzApIDAlLCByZ2IoMjIyLCAyMjUsIDIzMSkgMzUlLCByZ2IoMjI0LCAyMjgsIDIzMykgMTAwJSk7XHJcbn1cclxuLy8gLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkICB7XHJcbi8vICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZjhkN2RhOyAvKiBncmVlbiAqL1xyXG4vLyB9XHJcblxyXG4vLyAubmctaW52YWxpZDpub3QoZm9ybSkgIHtcclxuLy8gICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNmOGQ3ZGE7IC8qIHJlZCAqL1xyXG4vLyB9XHJcbi5sYWJlbC1jbGFzc3tcclxuICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6MTJweDtcclxuICAtLWlubmVyLXBhZGRpbmctZW5kOjEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDY3cHg7XHJcbn1cclxuLmxhYmVsLWNsYXNzLWFse1xyXG4gIG1hcmdpbi1sZWZ0OiA2N3B4O1xyXG59XHJcbi5pb24taW5wdXR7XHJcbiAgbWFyZ2luLWxlZnQ6IDY3cHg7XHJcbn1cclxuLmR4LWxvb2t1cC1maWVsZCB7XHJcbiAgcGFkZGluZzogNXB4IDIzcHggMTJweCA1NHB4O1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAvLy0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDQzLDkwLDE0OCwxKSAwJSwgcmdiYSg0NSwxMTIsMjI5LDEpIDM1JSwgcmdiYSg0NSwxMTIsMjI5LDEpIDEwMCUpO1xyXG4gXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6IHJnYigxMjAsIDEyNiwgMTM0KTtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAvLyBtYXJnaW46IDE0cHggMDtcclxuICAgICAgLS1ib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gICAgIC8vIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAvL2ZvbnQtd2VpZ2h0OiA2MDA7XHJcbiB9XHJcbiBpb24tc2VhcmNoYmFye1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAtLWJhY2tncm91bmQ6IHJnYigyNDMsIDI0MywgMjQzKTtcclxuICBtYXJnaW4tdG9wOiAtMTNweDtcclxuIH1cclxufVxyXG4ubWVhbC1pbWFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uYm9yZGVyLWJvdHRvbSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgcmdiYSgwLCAwLCAwLCAwLjA3KSk7XHJcbn0iXX0= */");

/***/ }),

/***/ "HaEi":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/driver/driver.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\" >\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Driver</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"regform\">\n    <ion-item>\n       <ion-label>Full Name </ion-label>\n       <ion-input formControlName=\"FullName\" type=\"text\"></ion-input>\n       <small class=\"form-text text-muted\" *ngIf=\"!regform.get('FullName').valid && regform.get('FullName').touched\" > This field is required! </small> \n     </ion-item>\n     <ion-item>\n      <ion-label>Phone Number</ion-label>\n      <ion-input formControlName=\"PhoneNumber\" type=\"text\"></ion-input>\n      <small class=\"form-text text-muted\" *ngIf=\"!regform.get('PhoneNumber').valid && regform.get('PhoneNumber').touched\" > This field is required! </small> \n    </ion-item>\n     <ion-item>\n       <ion-label>Address</ion-label>\n       <ion-input formControlName=\"Address\" type=\"text\"></ion-input>\n       <small class=\"form-text text-muted\" *ngIf=\"!regform.get('Address').valid && regform.get('Address').touched\" > This field is required! </small> \n     </ion-item>\n      <ion-item>\n       <ion-label>Vehicle</ion-label>\n       <ion-select interface=\"popover\" formControlName=\"Vehicle\" [(ngModel)]=\"defaultVehicleId\">\n        <ion-select-option   *ngFor=\"let code of this.listOfVehicle\" value=\"{{code?.id}}\">\n          {{code?.MotorNumber}}\n        </ion-select-option>\n      </ion-select>\n     </ion-item>\n     <ion-item>\n       <ion-label>Initial Location of Day</ion-label>\n       <ion-input formControlName=\"InitialLocationofDay\" type=\"text\"></ion-input>\n       <small class=\"form-text text-muted\" *ngIf=\"!regform.get('InitialLocationofDay').valid && regform.get('InitialLocationofDay').touched\" > This field is required! </small> \n     </ion-item>\n    \n   <div class=\"picker\">\n    <ion-img role=\"button\" class=\"image\" (click)=\"onPickImage()\" [src]=\"base64textString\"\n      *ngIf=\"base64textString\"></ion-img>\n    <ion-button color=\"primary\" (click)=\"onPickImage()\" *ngIf=\"!base64textString\">\n      <ion-icon name=\"camera\" slot=\"start\"></ion-icon>\n      <ion-label>Take Picture</ion-label>\n    </ion-button>\n  </div>\n  <input hidden type=\"file\" accept=\"image/jpeg\" *ngIf=\"usePicker\" #filePicker (change)=\"onFileChosen($event)\" />\n    <div style=\"text-align: center; margin: auto;\">\n       <ion-button id=\"add items\" (click)=\"saveDriver()\"> \n         <ion-icon slot=\"start\" name=\"add-circle-outline\"></ion-icon>\n         {{editMode?'Update Restaurant':'Add Restaurant'}}</ion-button>\n     </div> \n </form>\n<ion-row *ngFor=\"let meal of listOfDriver\" class=\"ion-padding meal-row\">\n  <ion-col size=\"4\" class=\"border-bottom\">\n    <div class=\"meal-image\" [style.background-image]=\"'url(' + meal.Photo + ')'\"></div>\n  </ion-col>\n  <ion-col size=\"5\" class=\"border-bottom\">\n    <ion-label>\n      {{ meal.FullName }}\n      <p>{{ meal.PhoneNumber }}</p>\n      <p>{{ meal.Vehicle }}</p>\n    </ion-label>\n    <ion-text color=\"dark\"><b>{{ meal.Address }}</b></ion-text>\n   </ion-col>\n  <ion-col size=\"3\" class=\"border-bottom\">\n    <ion-button fill=\"clear\" (click)=\"edit(meal)\">\n      <ion-icon name=\"pencil\"></ion-icon>\n    </ion-button>\n    <ion-button fill=\"clear\" (click)=\"delete(meal)\">\n      <ion-icon name=\"trash\"></ion-icon>\n    </ion-button>\n  </ion-col>\n</ion-row>\n</ion-content>\n");

/***/ }),

/***/ "RWyF":
/*!***************************************!*\
  !*** ./src/app/driver/driver.page.ts ***!
  \***************************************/
/*! exports provided: DriverPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverPage", function() { return DriverPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_driver_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./driver.page.html */ "HaEi");
/* harmony import */ var _driver_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./driver.page.scss */ "9r9m");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _Service_driver_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Service/driver.service */ "1D3i");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _Service_vehicle_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Service/vehicle.service */ "5ZJP");









let DriverPage = class DriverPage {
    constructor(fb, driverService, alertController, vehicleService, platform) {
        this.fb = fb;
        this.driverService = driverService;
        this.alertController = alertController;
        this.vehicleService = vehicleService;
        this.platform = platform;
        this.usePicker = false;
        this.regform = this.fb.group({});
        this.listOfDriver = [];
    }
    ngOnInit() {
        this.regform = this.fb.group({
            FullName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Address: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            PhoneNumber: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Vehicle: [""],
            Photo: [""],
            InitialLocationofDay: [""],
        });
        if ((this.platform.is('mobile') && !this.platform.is('hybrid')) ||
            this.platform.is('desktop')) {
            this.usePicker = true;
        }
        this.getVehicle();
        this.getDriver();
    }
    getDriver() {
        this.driverService.getAllDriver().subscribe(res => {
            this.listOfDriver = [];
            res.forEach(ele => {
                let data = {
                    id: ele.id,
                    FullName: ele.FullName,
                    Address: ele.Address,
                    PhoneNumber: ele.PhoneNumber,
                    Vehicle: this.listOfVehicle.find(c => c.id == ele.Vehicle).MotorNumber,
                    Photo: ele.Photo,
                    InitialLocationofDay: ele.InitialLocationofDay
                };
                this.listOfDriver.push(data);
            });
        });
    }
    getVehicle() {
        this.vehicleService.getAllVehicle().subscribe(res => {
            this.listOfVehicle = res;
            this.defaultVehicleId = res[0].id;
        });
    }
    saveDriver() {
        if (this.base64textString !== undefined) {
            this.regform.get('Photo').setValue(this.base64textString);
        }
        if (this.regform.valid) {
            if (!this.driverId) {
                this.driverService.create(this.regform.value);
            }
            else {
                this.driverService.updateDriver(this.regform.value, this.driverId);
            }
            this.base64textString = '';
            this.driverId = null;
            this.regform.reset();
            this.presentAlert();
        }
        else {
            this.ErrorAlert();
        }
    }
    edit(driver) {
        this.editMode = true;
        this.driverId = driver.id;
        this.regform.get('FullName').setValue(driver.FullName);
        this.regform.get('Address').setValue(driver.Address);
        this.regform.get('PhoneNumber').setValue(driver.PhoneNumber);
        this.regform.get('Vehicle').setValue(this.listOfVehicle.find(c => c.MotorNumber == +driver.Vehicle).id);
        this.regform.get('InitialLocationofDay').setValue(driver.InitialLocationofDay);
        this.base64textString = driver.Photo;
    }
    delete(driver) {
        this.presentAlertConfirm(driver);
    }
    presentAlertConfirm(driver) {
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
                            this.driverService.removeDriver(driver.id);
                            this.regform.reset();
                            this.driverId = null;
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
                header: 'Driver ',
                // subHeader: 'Subtitle',
                message: 'Driver Saved successfully.',
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
        _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"].Camera.getPhoto({
            quality: 50,
            source: _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["CameraSource"].Prompt,
            correctOrientation: true,
            height: 100,
            width: 100,
            resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["CameraResultType"].Base64
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
DriverPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _Service_driver_service__WEBPACK_IMPORTED_MODULE_6__["DriverService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _Service_vehicle_service__WEBPACK_IMPORTED_MODULE_8__["VehicleService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] }
];
DriverPage.propDecorators = {
    filePickerRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['filePicker', { static: false },] }]
};
DriverPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-driver',
        template: _raw_loader_driver_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_driver_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DriverPage);



/***/ }),

/***/ "hMq5":
/*!*************************************************!*\
  !*** ./src/app/driver/driver-routing.module.ts ***!
  \*************************************************/
/*! exports provided: DriverPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverPageRoutingModule", function() { return DriverPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _driver_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./driver.page */ "RWyF");




const routes = [
    {
        path: '',
        component: _driver_page__WEBPACK_IMPORTED_MODULE_3__["DriverPage"]
    }
];
let DriverPageRoutingModule = class DriverPageRoutingModule {
};
DriverPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DriverPageRoutingModule);



/***/ }),

/***/ "qfjS":
/*!*****************************************!*\
  !*** ./src/app/driver/driver.module.ts ***!
  \*****************************************/
/*! exports provided: DriverPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverPageModule", function() { return DriverPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _driver_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./driver-routing.module */ "hMq5");
/* harmony import */ var _driver_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./driver.page */ "RWyF");







let DriverPageModule = class DriverPageModule {
};
DriverPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _driver_routing_module__WEBPACK_IMPORTED_MODULE_5__["DriverPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_driver_page__WEBPACK_IMPORTED_MODULE_6__["DriverPage"]]
    })
], DriverPageModule);



/***/ })

}]);
//# sourceMappingURL=driver-driver-module-es2015.js.map