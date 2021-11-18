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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let UserRoleService = class UserRoleService {
    constructor(http) {
        this.http = http;
        this.APIURL = 'http://localhost:49347/api';
    }
    create(val) {
        return this.http.post(this.APIURL + '/UserRole', val);
    }
    getAllUserRole() {
        return this.http.get(this.APIURL + '/UserRole');
    }
    updateUserRole(val) {
        return this.http.put(this.APIURL + '/UserRole/', val);
    }
    deleteUserRole(id) {
        return this.http.delete(this.APIURL + '/UserRole/' + id).toPromise();
    }
    getUerRoleId(userId) {
        return this.http.get(this.APIURL + '/UserRole/' + userId);
    }
};
UserRoleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
UserRoleService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let FunctionalityService = class FunctionalityService {
    constructor(http) {
        this.http = http;
        this.APIURL = 'http://localhost:49347/api';
    }
    create(val) {
        return this.http.post(this.APIURL + '/functionalitie', val);
    }
    getAllFunctionality() {
        return this.http.get(this.APIURL + '/functionalitie');
    }
    updateFunctionality(val) {
        return this.http.put(this.APIURL + '/functionalitie/', val);
    }
    removeFunctionality(id) {
        return this.http.delete(this.APIURL + '/functionalitie/' + id).toPromise();
    }
};
FunctionalityService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
FunctionalityService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-split-pane contentId=\"main\">\n  <ion-menu contentId=\"main\" type=\"overlay\">\n  <ion-content>\n      <ion-list>\n        <ion-item color=\"primary\">\n          <ion-avatar style=\"height: 62px;\n          width: 68px;\" class=\"ion-margin-start\">\n           <img [src]=\"this.base64textString\">\n          </ion-avatar> &nbsp;&nbsp;\n          <ion-label>\n            {{this.userName}} \n          </ion-label>\n        </ion-item>\n     </ion-list>\n      <ion-list id=\"inbox-list\">\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of pageList; let i = index\">\n          <ion-item routerDirection=\"root\"(click)=\"selectedIndex = i\" [routerLink]=\"[p.url]\" (click)=\"readPath1(p)\"  lines=\"none\" detail=\"false\"\n            routerLinkActive=\"selected\" [class.selected]=\"selectedIndex == i\">\n            <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\n            <ion-label>{{ p.title }}</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n    \n       </ion-list> \n       <ion-footer>\n        <ion-toolbar>\n          <ion-row align-items-center>\n            <ion-col></ion-col>\n            <ion-col>\n              <ion-button ion-button full clear icon-left \n              (click)=\"logout()\">\n              <ion-icon name=\"log-out-outline\"></ion-icon>Logout\n            </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-toolbar>\n      </ion-footer> \n  </ion-content>\n  </ion-menu>\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\n  </ion-split-pane>\n  ");

/***/ }),

/***/ "gZmG":
/*!*************************************!*\
  !*** ./src/app/menu/menu.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 5px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n  background-color: #ebeff3;\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #1f09ec;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 28px;\n  --padding-end: 17px;\n  --padding-top: 2px;\n  border-radius: 7px;\n  background-color: #dfe6e7;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\n#sidenav ion-item-group[submenu] {\n  overflow: hidden;\n  display: block;\n  height: 0;\n  transition: height 0.3s linear;\n  padding-left: 20%;\n}\n\n#sidenav ion-item-group[submenu].visible {\n  height: inherit;\n}\n\n.manu-list {\n  margin-left: 11px;\n  text-align: center;\n  background-color: #ffffff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkVBQWE7QUFDakI7O0FBRUU7RUFDRSxvQkFBZ0I7RUFDaEIsa0JBQWM7RUFDZCxtQkFBYztFQUNkLHNCQUFpQjtBQUNyQjs7QUFFRTtFQUNFLGNBQWM7QUFDbEI7O0FBRUU7RUFDRSxtQkFBbUI7QUFDdkI7O0FBRUU7O0VBRUUsa0JBQWtCO0FBQ3RCOztBQUVFO0VBQ0UsMkRBQTJEO0VBQzNELHlCQUFvQztBQUN4Qzs7QUFFRTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVFO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUVuQixjQUFjO0VBRWQsZ0JBQWdCO0FBRHBCOztBQUlFO0VBQ0UscUJBQWdCO0VBQ2hCLG1CQUFjO0VBQ2Qsa0JBQWM7RUFDZCxrQkFBa0I7RUFDbEIseUJBQXlCO0FBRDdCOztBQUlFO0VBQ0Usc0RBQWE7QUFEakI7O0FBSUU7RUFDRSwrQkFBK0I7QUFEbkM7O0FBSUU7RUFDRSxjQUFjO0FBRGxCOztBQUlFO0VBQ0UsZ0JBQWdCO0FBRHBCOztBQUlFO0VBQ0Usc0JBQWlCO0FBRHJCOztBQUlFO0VBQ0UsbUJBQW1CO0FBRHZCOztBQUlFO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUR2Qjs7QUFJRTtFQUNFLHFCQUFnQjtFQUNoQixtQkFBYztFQUNkLGtCQUFhO0FBRGpCOztBQUlFO0VBQ0UsK0JBQStCO0FBRG5DOztBQUlFO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFEbEI7O0FBSUU7RUFDRSxrQkFBa0I7QUFEdEI7O0FBSUU7O0VBRUUsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUR2Qjs7QUFJRTtFQUNFLGtCQUFrQjtBQUR0Qjs7QUFJRTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBRWYsb0NBQW9DO0FBRnhDOztBQUtFO0VBQ0UsaUNBQVE7QUFGWjs7QUFJRTtFQUVJLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsU0FBUztFQUNULDhCQUE4QjtFQUM5QixpQkFBaUI7QUFGdkI7O0FBSkU7RUFRTSxlQUFlO0FBQXZCOztBQUtFO0VBQ0ksaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNuQix5QkFBeUI7QUFGOUIiLCJmaWxlIjoibWVudS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudSBpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogOHB4O1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMjBweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51Lm1kIGlvbi1saXN0IHtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5tZCBpb24tbm90ZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXHJcbiAgaW9uLW1lbnUubWQgaW9uLW5vdGUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjM5LCAyNDMpO1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWluLWhlaWdodDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgXHJcbiAgICBjb2xvcjogIzFmMDllYztcclxuICBcclxuICAgIG1pbi1oZWlnaHQ6IDI2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMjhweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDE3cHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlNmU3O1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjNjE2ZTdlO1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51LmlvcyBpb24tbGlzdCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5pb3MgaW9uLW5vdGUge1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTZweDtcclxuICAgIC0tbWluLWhlaWdodDogNTBweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUuaW9zIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjb2xvcjogIzczODQ5YTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXHJcbiAgaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51LmlvcyBpb24tbm90ZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1ub3RlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICBcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWl0ZW0uc2VsZWN0ZWQge1xyXG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxuICAjc2lkZW5hdiB7XHJcbiAgICBpb24taXRlbS1ncm91cFtzdWJtZW51XSB7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjNzIGxpbmVhcjtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAyMCU7XHJcbiAgICAgICYudmlzaWJsZSB7XHJcbiAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICAgIC8vIHRoaXMgaXMganVzdCBzYW1wbGUgdmFsdWUsIGNhbGN1bGF0ZSBob3cgbXVjaCBzcGFjZSB5b3UgbmVlZCBmb3IgeW91ciBtZW51IGl0ZW1zXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLm1hbnUtbGlzdHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDExcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIH0iXX0= */");

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
                loadChildren: () => Promise.all(/*! import() | restaurant-restaurant-module */[__webpack_require__.e("default~food-food-module~profile-profile-module~restaurant-restaurant-module"), __webpack_require__.e("common"), __webpack_require__.e("restaurant-restaurant-module")]).then(__webpack_require__.bind(null, /*! ../restaurant/restaurant.module */ "xt6y")).then(m => m.RestaurantPageModule)
            },
            {
                path: 'food',
                loadChildren: () => Promise.all(/*! import() | food-food-module */[__webpack_require__.e("default~food-food-module~profile-profile-module~restaurant-restaurant-module"), __webpack_require__.e("common"), __webpack_require__.e("food-food-module")]).then(__webpack_require__.bind(null, /*! ../food/food.module */ "d3P2")).then(m => m.FoodPageModule)
            },
            {
                path: 'account',
                loadChildren: () => Promise.all(/*! import() | account-account-module */[__webpack_require__.e("common"), __webpack_require__.e("account-account-module")]).then(__webpack_require__.bind(null, /*! ../account/account.module */ "jcJX")).then(m => m.AccountPageModule)
            },
            {
                path: 'food-content',
                loadChildren: () => Promise.all(/*! import() | food-content-food-content-module */[__webpack_require__.e("common"), __webpack_require__.e("food-content-food-content-module")]).then(__webpack_require__.bind(null, /*! ../food-content/food-content.module */ "igtm")).then(m => m.FoodContentPageModule)
            },
            {
                path: 'location',
                loadChildren: () => Promise.all(/*! import() | location-location-module */[__webpack_require__.e("common"), __webpack_require__.e("location-location-module")]).then(__webpack_require__.bind(null, /*! ../location/location.module */ "cf3W")).then(m => m.LocationPageModule)
            },
            {
                path: 'cart-modal',
                loadChildren: () => Promise.all(/*! import() | cart-modal-cart-modal-module */[__webpack_require__.e("common"), __webpack_require__.e("cart-modal-cart-modal-module")]).then(__webpack_require__.bind(null, /*! ../cart-modal/cart-modal.module */ "pUdO")).then(m => m.CartModalPageModule)
            },
            {
                path: 'login',
                loadChildren: () => __webpack_require__.e(/*! import() | login-login-module */ "login-login-module").then(__webpack_require__.bind(null, /*! ../login/login.module */ "X3zk")).then(m => m.LoginPageModule)
            },
            {
                path: 'order-history',
                loadChildren: () => Promise.all(/*! import() | order-history-order-history-module */[__webpack_require__.e("common"), __webpack_require__.e("order-history-order-history-module")]).then(__webpack_require__.bind(null, /*! ../order-history/order-history.module */ "piv+")).then(m => m.OrderHistoryPageModule)
            },
            {
                path: 'restaurant-home',
                loadChildren: () => Promise.all(/*! import() | restaurant-home-restaurant-home-module */[__webpack_require__.e("common"), __webpack_require__.e("restaurant-home-restaurant-home-module")]).then(__webpack_require__.bind(null, /*! ../restaurant-home/restaurant-home.module */ "YGi6")).then(m => m.RestaurantHomePageModule)
            },
            {
                path: 'restaurant-history',
                loadChildren: () => Promise.all(/*! import() | restaurant-history-restaurant-history-module */[__webpack_require__.e("common"), __webpack_require__.e("restaurant-history-restaurant-history-module")]).then(__webpack_require__.bind(null, /*! ../restaurant-history/restaurant-history.module */ "qmIW")).then(m => m.RestaurantHistoryPageModule)
            },
            {
                path: 'profile',
                loadChildren: () => Promise.all(/*! import() | profile-profile-module */[__webpack_require__.e("default~food-food-module~profile-profile-module~restaurant-restaurant-module"), __webpack_require__.e("common"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null, /*! ../profile/profile.module */ "cRhG")).then(m => m.ProfilePageModule)
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
        this.ListOfMenu1 = [
            { title: 'restaurant', url: '/restaurant', icon: 'restaurant' },
            { title: 'order', url: '/order', icon: 'cart' },
            { title: 'Add food', url: '/food', icon: 'fast-food' },
            { title: 'food-content', url: '/food-content', icon: 'list' },
            { title: 'location', url: '/location', icon: 'locate' },
            { title: 'orders', url: '/restaurant-home', icon: 'cart' },
            { title: 'My orders', url: '/restaurant-history', icon: 'cart' },
            { title: 'profile', url: '/profile', icon: 'person' }
        ];
        this.getRoute();
        this.getAccount();
    }
    getAccount() {
        this.accountService.getAllAccount().subscribe(res => {
            this.listOfAccount = res;
            this.base64textString = res.find(c => c.id == localStorage.getItem("userId")).photo;
        });
    }
    getRoute() {
        this.functionalityService.getAllFunctionality().subscribe(result => {
            this.listOfFunctionality = result;
            //console.log(result)
            if (result.length > 0) {
                this.roleType = localStorage.getItem("roleType");
                this.userName = localStorage.getItem("fullName");
                this.userRoleService.getAllUserRole().subscribe(res => {
                    // console.log(res)
                    let result = res.filter(c => c.userId == this.roleType);
                    let active = localStorage.getItem("active");
                    if (result.length > 0 && active == "true") {
                        //To check transcation menu in user role
                        result.forEach(element => {
                            let isFound = this.listOfFunctionality.filter(c => c.id == +element.funId);
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
            localStorage.setItem("userId", null);
            localStorage.setItem("fullName", null);
            localStorage.setItem("active", null);
            localStorage.setItem("roleType", null);
            this.router.navigateByUrl('login');
            (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const alert = yield this.alertCtrl.create({
                    message: error.message,
                    buttons: [{ text: 'ok', role: 'cancel' }],
                });
                yield alert.present();
            });
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