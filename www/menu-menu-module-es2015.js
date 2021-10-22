(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-menu-module"],{

/***/ "19mU":
/*!*************************************!*\
  !*** ./src/app/menu/menu.module.ts ***!
  \*************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-routing.module */ "nedP");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu.page */ "ylOD");







let MenuPageModule = class MenuPageModule {
};
MenuPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuPageRoutingModule"]
        ],
        declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]]
    })
], MenuPageModule);



/***/ }),

/***/ "O1Io":
/*!*********************************************!*\
  !*** ./src/app/Service/userRole.service.ts ***!
  \*********************************************/
/*! exports provided: UserRoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoleService", function() { return UserRoleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "CqG3");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators/map */ "q3Kh");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__);




let UserRoleService = class UserRoleService {
    //db: any;
    constructor(db) {
        this.db = db;
        this.userRoleCollectionList = db.collection('userRole');
    }
    create(userR) {
        return this.userRoleCollectionList.add(userR);
    }
    getAllUserRole() {
        this.userRoleList = this.userRoleCollectionList.snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
        return this.userRoleList;
    }
    getUerRoleId(id) {
        const lookUpObj = this.db.collection('userRole', ref => ref.where('userId', '==', id)).snapshotChanges();
        this.userRoleLists = lookUpObj.pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(changes => changes.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return Object.assign({ id }, data);
        })));
        return this.userRoleLists;
    }
    deleteUserRole(id) {
        return this.userRoleCollectionList.doc(id).delete();
    }
};
UserRoleService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
UserRoleService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserRoleService);



/***/ }),

/***/ "OWjg":
/*!**************************************************!*\
  !*** ./src/app/Service/Functionality.service.ts ***!
  \**************************************************/
/*! exports provided: FunctionalityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionalityService", function() { return FunctionalityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "CqG3");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators/map */ "q3Kh");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__);




let FunctionalityService = class FunctionalityService {
    //db: any;
    constructor(db) {
        this.db = db;
        this.functionalityCollectionList = db.collection('functionality');
    }
    create(functionality) {
        return this.functionalityCollectionList.add(functionality);
    }
    getAllFunctionality() {
        this.functionlityList = this.functionalityCollectionList.snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
        return this.functionlityList;
    }
    updateFunctionality(funObj, id) {
        return this.functionalityCollectionList.doc(id).update(funObj);
    }
    removeFunctionality(id) {
        return this.functionalityCollectionList.doc(id).delete();
    }
};
FunctionalityService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
FunctionalityService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FunctionalityService);



/***/ }),

/***/ "QjfK":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-split-pane contentId=\"main\">\n  <ion-menu contentId=\"main\" type=\"overlay\">\n  <ion-content>\n      <ion-list>\n        <ion-item color=\"primary\">\n          <ion-avatar style=\"height: 62px;\n          width: 68px;\" class=\"ion-margin-start\">\n           <img src=\"./assets/userprofile.jpg\">\n          </ion-avatar> &nbsp;&nbsp;\n          <ion-label>\n            {{this.userName}} \n          </ion-label>\n        </ion-item>\n     </ion-list>\n      <ion-list id=\"inbox-list\">\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of pageList; let i = index\">\n          <ion-item routerDirection=\"root\"(click)=\"selectedIndex = i\" [routerLink]=\"[p.url]\" (click)=\"readPath1(p)\"  lines=\"none\" detail=\"false\"\n            routerLinkActive=\"selected\" [class.selected]=\"selectedIndex == i\">\n            <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\n            <ion-label>{{ p.title }}</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n    \n       </ion-list> \n       <ion-footer>\n        <ion-toolbar>\n          <ion-row align-items-center>\n            <ion-col></ion-col>\n            <ion-col>\n              <ion-button ion-button full clear icon-left \n              (click)=\"logout()\">\n              <ion-icon name=\"log-out-outline\"></ion-icon>Logout\n            </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-toolbar>\n      </ion-footer> \n  </ion-content>\n  </ion-menu>\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\n  </ion-split-pane>\n  ");

/***/ }),

/***/ "gZmG":
/*!*************************************!*\
  !*** ./src/app/menu/menu.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 5px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n  background-color: #ebeff3;\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #1f09ec;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 28px;\n  --padding-end: 17px;\n  --padding-top: 2px;\n  border-radius: 7px;\n  background-color: #dfe6e7;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\n#sidenav ion-item-group[submenu] {\n  overflow: hidden;\n  display: block;\n  height: 0;\n  transition: height 0.3s linear;\n  padding-left: 20%;\n}\n\n#sidenav ion-item-group[submenu].visible {\n  height: inherit;\n}\n\n.manu-list {\n  margin-left: 11px;\n  text-align: center;\n  background-color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkVBQUE7QUFDSjs7QUFFRTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUU7RUFDRSxjQUFBO0FBQ0o7O0FBRUU7RUFDRSxtQkFBQTtBQUNKOztBQUVFOztFQUVFLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSwyREFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBRUEsY0FBQTtFQUVBLGdCQUFBO0FBREo7O0FBSUU7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBREo7O0FBSUU7RUFDRSxzREFBQTtBQURKOztBQUlFO0VBQ0UsK0JBQUE7QUFESjs7QUFJRTtFQUNFLGNBQUE7QUFESjs7QUFJRTtFQUNFLGdCQUFBO0FBREo7O0FBSUU7RUFDRSxzQkFBQTtBQURKOztBQUlFO0VBQ0UsbUJBQUE7QUFESjs7QUFJRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQURKOztBQUlFO0VBQ0UsK0JBQUE7QUFESjs7QUFJRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBREo7O0FBSUU7RUFDRSxrQkFBQTtBQURKOztBQUlFOztFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJRTtFQUNFLGtCQUFBO0FBREo7O0FBSUU7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtBQUZKOztBQUtFO0VBQ0UsaUNBQUE7QUFGSjs7QUFLSTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FBRk47O0FBR007RUFDRSxlQUFBO0FBRFI7O0FBTUU7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0QseUJBQUE7QUFITCIsImZpbGUiOiJtZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51IGlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA4cHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51Lm1kIGlvbi1saXN0LWhlYWRlcixcclxuICBpb24tbWVudS5tZCBpb24tbm90ZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMzksIDI0Myk7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuICBcclxuICAgIGNvbG9yOiAjMWYwOWVjO1xyXG4gIFxyXG4gICAgbWluLWhlaWdodDogMjZweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAyOHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTdweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmU2ZTc7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICM2MTZlN2U7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1sYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcclxuICAgIHBhZGRpbmc6IDIwcHggMCAwIDA7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51LmlvcyBpb24tbm90ZSB7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51LmlvcyBpb24taXRlbSB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xyXG4gICAgLS1taW4taGVpZ2h0OiA1MHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUuaW9zIGlvbi1pdGVtIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiAjNzM4NDlhO1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcclxuICBpb24tbWVudS5pb3MgaW9uLW5vdGUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW5vdGUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIFxyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xyXG4gIH1cclxuICBcclxuICBpb24taXRlbS5zZWxlY3RlZCB7XHJcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgfVxyXG4gICNzaWRlbmF2IHtcclxuICAgIGlvbi1pdGVtLWdyb3VwW3N1Ym1lbnVdIHtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGhlaWdodDogMDtcclxuICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuM3MgbGluZWFyO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwJTtcclxuICAgICAgJi52aXNpYmxlIHtcclxuICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgICAgLy8gdGhpcyBpcyBqdXN0IHNhbXBsZSB2YWx1ZSwgY2FsY3VsYXRlIGhvdyBtdWNoIHNwYWNlIHlvdSBuZWVkIGZvciB5b3VyIG1lbnUgaXRlbXNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAubWFudS1saXN0e1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTFweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "nedP":
/*!*********************************************!*\
  !*** ./src/app/menu/menu-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MenuPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageRoutingModule", function() { return MenuPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.page */ "ylOD");




const routes = [
    {
        path: 'menu',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_3__["MenuPage"],
        children: [
            {
                path: 'restaurant',
                loadChildren: () => Promise.all(/*! import() | restaurant-restaurant-module */[__webpack_require__.e("default~category-category-module~driver-driver-module~food-food-module~restaurant-restaurant-module"), __webpack_require__.e("restaurant-restaurant-module")]).then(__webpack_require__.bind(null, /*! ../restaurant/restaurant.module */ "xt6y")).then(m => m.RestaurantPageModule)
            },
            {
                path: 'rest-menu',
                loadChildren: () => __webpack_require__.e(/*! import() | rest-menu-rest-menu-module */ "rest-menu-rest-menu-module").then(__webpack_require__.bind(null, /*! ../rest-menu/rest-menu.module */ "PDtb")).then(m => m.RestMenuPageModule)
            },
            {
                path: 'driver',
                loadChildren: () => Promise.all(/*! import() | driver-driver-module */[__webpack_require__.e("default~category-category-module~driver-driver-module~food-food-module~restaurant-restaurant-module"), __webpack_require__.e("common"), __webpack_require__.e("driver-driver-module")]).then(__webpack_require__.bind(null, /*! ../driver/driver.module */ "qfjS")).then(m => m.DriverPageModule)
            },
            {
                path: 'food',
                loadChildren: () => Promise.all(/*! import() | food-food-module */[__webpack_require__.e("default~category-category-module~driver-driver-module~food-food-module~restaurant-restaurant-module"), __webpack_require__.e("common"), __webpack_require__.e("food-food-module")]).then(__webpack_require__.bind(null, /*! ../food/food.module */ "d3P2")).then(m => m.FoodPageModule)
            },
            {
                path: 'account',
                loadChildren: () => __webpack_require__.e(/*! import() | account-account-module */ "account-account-module").then(__webpack_require__.bind(null, /*! ../account/account.module */ "jcJX")).then(m => m.AccountPageModule)
            },
            {
                path: 'order',
                loadChildren: () => Promise.all(/*! import() | order-order-module */[__webpack_require__.e("default~cart-modal-cart-modal-module~details-details-module~driver-home-driver-home-module~order-his~85fcea61"), __webpack_require__.e("order-order-module")]).then(__webpack_require__.bind(null, /*! ../order/order.module */ "+p+5")).then(m => m.OrderPageModule)
            },
            {
                path: 'user-role',
                loadChildren: () => __webpack_require__.e(/*! import() | user-role-user-role-module */ "user-role-user-role-module").then(__webpack_require__.bind(null, /*! ../user-role/user-role.module */ "tVnk")).then(m => m.UserRolePageModule)
            },
            {
                path: 'functionality',
                loadChildren: () => __webpack_require__.e(/*! import() | functionality-functionality-module */ "functionality-functionality-module").then(__webpack_require__.bind(null, /*! ../functionality/functionality.module */ "jEtB")).then(m => m.FunctionalityPageModule)
            },
            {
                path: 'food-content',
                loadChildren: () => __webpack_require__.e(/*! import() | food-content-food-content-module */ "food-content-food-content-module").then(__webpack_require__.bind(null, /*! ../food-content/food-content.module */ "igtm")).then(m => m.FoodContentPageModule)
            },
            {
                path: 'location',
                loadChildren: () => Promise.all(/*! import() | location-location-module */[__webpack_require__.e("default~driver-history-driver-history-module~location-location-module~menu-menu-module~restaurant-hi~a290b5de"), __webpack_require__.e("location-location-module")]).then(__webpack_require__.bind(null, /*! ../location/location.module */ "cf3W")).then(m => m.LocationPageModule)
            },
            {
                path: 'vehicle',
                loadChildren: () => Promise.all(/*! import() | vehicle-vehicle-module */[__webpack_require__.e("common"), __webpack_require__.e("vehicle-vehicle-module")]).then(__webpack_require__.bind(null, /*! ../vehicle/vehicle.module */ "Qq7v")).then(m => m.VehiclePageModule)
            },
            {
                path: 'details/:id',
                loadChildren: () => Promise.all(/*! import() | details-details-module */[__webpack_require__.e("default~cart-modal-cart-modal-module~details-details-module~driver-home-driver-home-module~order-his~85fcea61"), __webpack_require__.e("default~cart-modal-cart-modal-module~details-details-module"), __webpack_require__.e("common"), __webpack_require__.e("details-details-module")]).then(__webpack_require__.bind(null, /*! ../details/details.module */ "QR/W")).then(m => m.DetailsPageModule)
            },
            {
                path: 'home',
                loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("common"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ../home/home.module */ "ct+p")).then(m => m.HomePageModule)
            },
            {
                path: 'cart-modal',
                loadChildren: () => Promise.all(/*! import() | cart-modal-cart-modal-module */[__webpack_require__.e("default~cart-modal-cart-modal-module~details-details-module~driver-home-driver-home-module~order-his~85fcea61"), __webpack_require__.e("default~cart-modal-cart-modal-module~details-details-module"), __webpack_require__.e("cart-modal-cart-modal-module")]).then(__webpack_require__.bind(null, /*! ../cart-modal/cart-modal.module */ "pUdO")).then(m => m.CartModalPageModule)
            },
            {
                path: 'category',
                loadChildren: () => Promise.all(/*! import() | category-category-module */[__webpack_require__.e("default~category-category-module~driver-driver-module~food-food-module~restaurant-restaurant-module"), __webpack_require__.e("common"), __webpack_require__.e("category-category-module")]).then(__webpack_require__.bind(null, /*! ../category/category.module */ "Ak7V")).then(m => m.CategoryPageModule)
            },
            {
                path: 'login',
                loadChildren: () => __webpack_require__.e(/*! import() | login-login-module */ "login-login-module").then(__webpack_require__.bind(null, /*! ../login/login.module */ "X3zk")).then(m => m.LoginPageModule)
            },
            {
                path: 'order-history',
                loadChildren: () => Promise.all(/*! import() | order-history-order-history-module */[__webpack_require__.e("default~cart-modal-cart-modal-module~details-details-module~driver-home-driver-home-module~order-his~85fcea61"), __webpack_require__.e("order-history-order-history-module")]).then(__webpack_require__.bind(null, /*! ../order-history/order-history.module */ "piv+")).then(m => m.OrderHistoryPageModule)
            },
            {
                path: 'driver-home',
                loadChildren: () => Promise.all(/*! import() | driver-home-driver-home-module */[__webpack_require__.e("default~cart-modal-cart-modal-module~details-details-module~driver-home-driver-home-module~order-his~85fcea61"), __webpack_require__.e("common"), __webpack_require__.e("driver-home-driver-home-module")]).then(__webpack_require__.bind(null, /*! ../driver-home/driver-home.module */ "R1vZ")).then(m => m.DriverHomePageModule)
            },
            {
                path: 'restaurant-home',
                loadChildren: () => Promise.all(/*! import() | restaurant-home-restaurant-home-module */[__webpack_require__.e("default~cart-modal-cart-modal-module~details-details-module~driver-home-driver-home-module~order-his~85fcea61"), __webpack_require__.e("restaurant-home-restaurant-home-module")]).then(__webpack_require__.bind(null, /*! ../restaurant-home/restaurant-home.module */ "YGi6")).then(m => m.RestaurantHomePageModule)
            },
            {
                path: 'driver-history',
                loadChildren: () => Promise.all(/*! import() | driver-history-driver-history-module */[__webpack_require__.e("default~driver-history-driver-history-module~location-location-module~menu-menu-module~restaurant-hi~a290b5de"), __webpack_require__.e("common"), __webpack_require__.e("driver-history-driver-history-module")]).then(__webpack_require__.bind(null, /*! ../driver-history/driver-history.module */ "odG3")).then(m => m.DriverHistoryPageModule)
            },
            {
                path: 'restaurant-history',
                loadChildren: () => Promise.all(/*! import() | restaurant-history-restaurant-history-module */[__webpack_require__.e("default~cart-modal-cart-modal-module~details-details-module~driver-home-driver-home-module~order-his~85fcea61"), __webpack_require__.e("default~driver-history-driver-history-module~location-location-module~menu-menu-module~restaurant-hi~a290b5de"), __webpack_require__.e("common"), __webpack_require__.e("restaurant-history-restaurant-history-module")]).then(__webpack_require__.bind(null, /*! ../restaurant-history/restaurant-history.module */ "qmIW")).then(m => m.RestaurantHistoryPageModule)
            },
            {
                path: '',
                redirectTo: '/menu/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/menu',
        pathMatch: 'full'
    }
];
let MenuPageRoutingModule = class MenuPageRoutingModule {
};
MenuPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MenuPageRoutingModule);



/***/ }),

/***/ "ylOD":
/*!***********************************!*\
  !*** ./src/app/menu/menu.page.ts ***!
  \***********************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_menu_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./menu.page.html */ "QjfK");
/* harmony import */ var _menu_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.page.scss */ "gZmG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _Service_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Service/account.service */ "6wYF");
/* harmony import */ var _Service_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Service/auth.service */ "enR7");
/* harmony import */ var _Service_Functionality_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Service/Functionality.service */ "OWjg");
/* harmony import */ var _Service_userRole_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Service/userRole.service */ "O1Io");










let MenuPage = class MenuPage {
    constructor(authServices, router, alertCtrl, functionalityService, userRoleService, accountService, platform) {
        this.authServices = authServices;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.functionalityService = functionalityService;
        this.userRoleService = userRoleService;
        this.accountService = accountService;
        this.platform = platform;
        this.selectedIndex = 0;
        this.ListOfMenu1 = [];
        this.pageList = [];
    }
    ngOnInit() {
        if ((this.platform.is('mobile') && !this.platform.is('hybrid')) ||
            this.platform.is('desktop')) {
            this.usePicker = true;
        }
        const path = window.location.pathname.split('folder/')[1];
        if (path !== undefined) {
            // this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
        }
        this.getRoute();
    }
    ionViewWillEnter() {
        this.ListOfMenu1 = [
            { title: 'restaurant', url: '/restaurant', icon: 'restaurant' },
            { title: 'customer', url: '/customer', icon: 'person-add' },
            { title: 'driver', url: '/driver', icon: 'bus' },
            { title: 'order', url: '/order', icon: 'cart' },
            { title: 'Add food', url: '/food', icon: 'fast-food' },
            { title: 'rest-menu', url: '/rest-menu', icon: 'menu' },
            { title: 'account', url: '/account', icon: 'person-add' },
            { title: 'user-role', url: '/user-role', icon: 'person-circle' },
            { title: 'functionality', url: '/functionality', icon: 'add' },
            { title: 'food-content', url: '/food-content', icon: 'list' },
            { title: 'location', url: '/location', icon: 'locate' },
            { title: 'vehicle', url: '/vehicle', icon: 'bus' },
            { title: 'category', url: '/category', icon: 'menu' },
            { title: 'home', url: '/home', icon: 'home' },
            { title: 'Home', url: '/driver-home', icon: 'home' },
            { title: 'orders', url: '/restaurant-home', icon: 'cart' },
            { title: 'Orders', url: '/driver-history', icon: 'cart' },
            { title: 'My orders', url: '/restaurant-history', icon: 'cart' },
        ];
    }
    getRoute() {
        this.functionalityService.getAllFunctionality().subscribe(result => {
            this.listOfFunctionality = result;
            if (result.length > 0) {
                this.roleType = localStorage.getItem("roleType");
                this.userName = localStorage.getItem("fullName");
                this.userRoleService.getUerRoleId(this.roleType).subscribe(res => {
                    let result = res.filter(c => c.userId == this.roleType);
                    let active = localStorage.getItem("active");
                    if (result.length > 0 && active == "true") {
                        //To check transcation menu in user role
                        result.forEach(element => {
                            let isFound = this.listOfFunctionality.filter(c => c.SN == +element.funId);
                            if (isFound.length > 0) {
                                let rol = this.ListOfMenu1.filter(c => c.title == isFound[0].compName)[0];
                                if (rol) {
                                    let y = {
                                        title: isFound[0].compName,
                                        url: rol.url,
                                        icon: rol.icon
                                    };
                                    this.pageList.push(y);
                                }
                            }
                        });
                    }
                });
            }
        });
    }
    readPath1(path) {
        let pa = path.url;
        this.router.navigate(["/menu/" + pa]);
    }
    AlertInternet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                cssClass: 'my-custom-class',
                header: 'Internet',
                // subHeader: 'Subtitle',
                message: 'Please turn on wifi or data',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.authServices.logOutUser().
                then(() => {
                localStorage.setItem("userId", null);
                localStorage.setItem("fullName", null);
                localStorage.setItem("active", null);
                localStorage.setItem("roleType", null);
                this.router.navigateByUrl('login');
            }, (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const alert = yield this.alertCtrl.create({
                    message: error.message,
                    buttons: [{ text: 'ok', role: 'cancel' }],
                });
                yield alert.present();
            }));
        });
    }
};
MenuPage.ctorParameters = () => [
    { type: _Service_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _Service_Functionality_service__WEBPACK_IMPORTED_MODULE_8__["FunctionalityService"] },
    { type: _Service_userRole_service__WEBPACK_IMPORTED_MODULE_9__["UserRoleService"] },
    { type: _Service_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] }
];
MenuPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-menu',
        template: _raw_loader_menu_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_menu_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MenuPage);



/***/ })

}]);
//# sourceMappingURL=menu-menu-module-es2015.js.map