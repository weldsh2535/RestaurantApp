(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-role-user-role-module"],{

/***/ "27eP":
/*!***********************************************!*\
  !*** ./src/app/user-role/user-role.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXJvbGUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "DRiP":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-role/user-role.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>User Role</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form [formGroup]=\"regform\">\n    <ion-list>\n      <ion-item>\n        <ion-label>User Role </ion-label>\n        <ion-select name=\"userId\" formControlName=\"userId\" interface=\"popover\" (ionChange)=\"selectedEv($event)\">\n          <ion-select-option *ngFor=\"let code of role\" value=\"{{code?.name}}\">\n            {{code?.name}}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n      <div class=\"widget-container\">\n        <dx-list #list [dataSource]=\"listOfFunctinality\" [height]=\"400\" displayExpr=\"compName\"\n          [selectionMode]=\"selectionModeValue\" [selectAllMode]=\"selectAllModeVlaue\" \n          [showSelectionControls]=\"true\" [selectedItemKeys]=\"arr_names\"\n          (onSelectionChanged)=\"onSelectionChanged($event)\"\n          (onSelectAllValueChanged)=\"onSelectAllValueChanged($event)\">\n        </dx-list>\n      </div>\n      <ion-button class=\"btn btn-secondary\" expand=\"block\" (click)=\"save()\">\n        Save\n      </ion-button>\n    </ion-list>\n  </form>\n</ion-content>");

/***/ }),

/***/ "HY0A":
/*!*******************************************************!*\
  !*** ./src/app/user-role/user-role-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: UserRolePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRolePageRoutingModule", function() { return UserRolePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_role_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-role.page */ "oGsv");




const routes = [
    {
        path: '',
        component: _user_role_page__WEBPACK_IMPORTED_MODULE_3__["UserRolePage"]
    }
];
let UserRolePageRoutingModule = class UserRolePageRoutingModule {
};
UserRolePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserRolePageRoutingModule);



/***/ }),

/***/ "oGsv":
/*!*********************************************!*\
  !*** ./src/app/user-role/user-role.page.ts ***!
  \*********************************************/
/*! exports provided: UserRolePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRolePage", function() { return UserRolePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_role_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-role.page.html */ "DRiP");
/* harmony import */ var _user_role_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-role.page.scss */ "27eP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme/data/data_source */ "OSLH");
/* harmony import */ var _Service_Functionality_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Service/Functionality.service */ "OWjg");
/* harmony import */ var _Service_userRole_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Service/userRole.service */ "O1Io");
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! devextreme/data/array_store */ "tJmT");
/* harmony import */ var _Service_account_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Service/account.service */ "6wYF");











let UserRolePage = class UserRolePage {
    constructor(fb, userRoleService, accountService, functionalityService, platform, alertController) {
        this.fb = fb;
        this.userRoleService = userRoleService;
        this.accountService = accountService;
        this.functionalityService = functionalityService;
        this.platform = platform;
        this.alertController = alertController;
        this.regform = this.fb.group({});
        this.isChecked = true;
        this.funwithuser = [];
        this.CheckedProject = [];
        this.NewWithOldArray = [];
        this.selectAllModeVlaue = "page";
        this.selectionModeValue = "all";
        this.arr_names = new Array();
        this.deleteRoleId = [];
        this.usePicker = false;
        this.role = [
            { id: 1, name: 'admin' },
            { id: 2, name: 'customer' },
            { id: 3, name: 'driver' },
            { id: 4, name: 'restaurant' },
        ];
    }
    ngOnInit() {
        this.regform = this.fb.group({
            funId: [''],
            userId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            remark: [''],
        });
        if ((this.platform.is('mobile') && !this.platform.is('hybrid')) ||
            this.platform.is('desktop')) {
            this.usePicker = true;
        }
        this.getFunctionality();
    }
    selectedEv(ev) {
        let id = ev.target.value;
        //console.log(ev.target.value);
        this.userRoleService.getUerRoleId(id).subscribe(res => {
            this.listOfUserRole = res;
            this.CheckedProject = [];
            this.arr_names = [];
            this.deleteRoleId = [];
            res.forEach(element => {
                this.arr_names.push(element.funId);
                this.deleteRoleId.push(element);
                this.NewWithOldArray.push(element.funId);
                //   let listitems = {
                //     SN: element.funId,
                //     compName:this.listOfFun.find(c=>c.SN==+element.funId).compName,
                //     description: this.listOfFun.find(c=>c.SN==+element.funId).description,
                //     id: this.listOfFun.find(c=>c.SN==+element.funId).id,
                //     remark:this.listOfFun.find(c=>c.SN==+element.funId).remark
                //   }
                //  this.CheckedProject.push(listitems);
            });
            //console.log(res)
        });
    }
    save() {
        if (this.regform.valid) {
            if (this.CheckedProject.length > 0) {
                this.deleteRoleId.forEach(element => {
                    this.userRoleService.deleteUserRole(element.id);
                });
                let user = this.regform.get("userId").value;
                this.CheckedProject.forEach(el => {
                    let fun = {
                        funId: el.SN,
                        userId: user,
                        remark: ''
                    };
                    this.userRoleService.create(fun);
                });
            }
            this.presentAlert();
            // })
        }
        else {
            // notify('Please select Project and User');
        }
    }
    presentAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm! ',
                message: 'Successfully Inserted!!',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    getFunctionality() {
        this.functionalityService.getAllFunctionality().subscribe(res => {
            this.listOfFun = res;
            this.listOfFunctinality = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_6__["default"]({
                store: new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_9__["default"]({
                    key: "SN",
                    data: res
                })
            });
        });
    }
    onSelectionChanged(e) {
        let addedItems = e.addedItems;
        addedItems.forEach(element => {
            let listitems = {
                SN: element.SN,
                compName: element.compName,
                description: element.description,
                id: element.id,
                remark: element.remark
            };
            this.CheckedProject.push(listitems);
        });
        console.log(this.CheckedProject);
        // this.CheckedProject.push(addedItems);
        // let removedItems = e.removedItems;
        // let found = this.NewWithOldArray.filter(c => c.SN == addedItems[0].SN)
        // if (found)
        //   this.NewWithOldArray.push(addedItems[0].SN);
        // Handler of the "selectionChanged" event
    }
    onSelectAllValueChanged(e) {
        let newCheckBoxValue = e.value;
        // Handler of the "selectAllValueChanged" event
    }
};
UserRolePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _Service_userRole_service__WEBPACK_IMPORTED_MODULE_8__["UserRoleService"] },
    { type: _Service_account_service__WEBPACK_IMPORTED_MODULE_10__["AccountService"] },
    { type: _Service_Functionality_service__WEBPACK_IMPORTED_MODULE_7__["FunctionalityService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
UserRolePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-role',
        template: _raw_loader_user_role_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_role_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UserRolePage);



/***/ }),

/***/ "tVnk":
/*!***********************************************!*\
  !*** ./src/app/user-role/user-role.module.ts ***!
  \***********************************************/
/*! exports provided: UserRolePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRolePageModule", function() { return UserRolePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _user_role_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-role-routing.module */ "HY0A");
/* harmony import */ var _user_role_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-role.page */ "oGsv");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular */ "384S");








let UserRolePageModule = class UserRolePageModule {
};
UserRolePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _user_role_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserRolePageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_7__["DxLookupModule"], devextreme_angular__WEBPACK_IMPORTED_MODULE_7__["DxTemplateModule"], devextreme_angular__WEBPACK_IMPORTED_MODULE_7__["DxListModule"]
        ],
        declarations: [_user_role_page__WEBPACK_IMPORTED_MODULE_6__["UserRolePage"]]
    })
], UserRolePageModule);



/***/ })

}]);
//# sourceMappingURL=user-role-user-role-module-es2015.js.map