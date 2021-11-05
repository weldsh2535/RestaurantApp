(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-contact-module"], {
    /***/
    "BjQp":
    /*!*******************************************!*\
      !*** ./src/app/contact/contact.module.ts ***!
      \*******************************************/

    /*! exports provided: ContactPageModule */

    /***/
    function BjQp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactPageModule", function () {
        return ContactPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _contact_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./contact-routing.module */
      "Yuog");
      /* harmony import */


      var _contact_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./contact.page */
      "Ds8B");

      var ContactPageModule = function ContactPageModule() {
        _classCallCheck(this, ContactPageModule);
      };

      ContactPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _contact_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactPageRoutingModule"]],
        declarations: [_contact_page__WEBPACK_IMPORTED_MODULE_6__["ContactPage"]]
      })], ContactPageModule);
      /***/
    },

    /***/
    "Ds8B":
    /*!*****************************************!*\
      !*** ./src/app/contact/contact.page.ts ***!
      \*****************************************/

    /*! exports provided: ContactPage */

    /***/
    function Ds8B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactPage", function () {
        return ContactPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_contact_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./contact.page.html */
      "qbrv");
      /* harmony import */


      var _contact_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./contact.page.scss */
      "xWG2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _Service_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../Service/account.service */
      "6wYF");

      var ContactPage = /*#__PURE__*/function () {
        function ContactPage(accountService) {
          _classCallCheck(this, ContactPage);

          this.accountService = accountService;
        }

        _createClass(ContactPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.accountService.getAllAccount().subscribe(function (res) {
              var id = localStorage.getItem('userId');
              _this.address = res.find(function (c) {
                return c.id == id;
              }).FirstTimeLocation;
              _this.email = res.find(function (c) {
                return c.id == id;
              }).email;
            });
          }
        }, {
          key: "buttonClick",
          value: function buttonClick() {}
        }]);

        return ContactPage;
      }();

      ContactPage.ctorParameters = function () {
        return [{
          type: _Service_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"]
        }];
      };

      ContactPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contact',
        template: _raw_loader_contact_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contact_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ContactPage);
      /***/
    },

    /***/
    "Yuog":
    /*!***************************************************!*\
      !*** ./src/app/contact/contact-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: ContactPageRoutingModule */

    /***/
    function Yuog(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactPageRoutingModule", function () {
        return ContactPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _contact_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./contact.page */
      "Ds8B");

      var routes = [{
        path: '',
        component: _contact_page__WEBPACK_IMPORTED_MODULE_3__["ContactPage"]
      }];

      var ContactPageRoutingModule = function ContactPageRoutingModule() {
        _classCallCheck(this, ContactPageRoutingModule);
      };

      ContactPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ContactPageRoutingModule);
      /***/
    },

    /***/
    "qbrv":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function qbrv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"profile\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Contact Us</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-label>Our Address</ion-label>\n    {{address}}\n  </ion-item>\n  <ion-item button (click)=\"buttonClick()\" detail>\n    <ion-label>Email Us</ion-label>\n    {{email}}\n  </ion-item>\n</ion-content>\n";
      /***/
    },

    /***/
    "xWG2":
    /*!*******************************************!*\
      !*** ./src/app/contact/contact.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function xWG2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-input {\n  --padding-start: 85px;\n}\n\nion-content ion-item {\n  padding: 0;\n  --border-radius: 14px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbnRhY3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQWdCO0FBQ3BCOztBQUNFO0VBS0ksVUFBVTtFQUVWLHFCQUFnQjtBQUh0QiIsImZpbGUiOiJjb250YWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbnB1dCB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDg1cHg7XHJcbiAgfVxyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIC8vLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoNDMsOTAsMTQ4LDEpIDAlLCByZ2JhKDQ1LDExMiwyMjksMSkgMzUlLCByZ2JhKDQ1LDExMiwyMjksMSkgMTAwJSk7XHJcbiAgXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgIC8vIC0tYmFja2dyb3VuZDogcmdiKDEyMCwgMTI2LCAxMzQpO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAvLyBtYXJnaW46IDE0cHggMDtcclxuICAgICAgLS1ib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gICAgICAvLyBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgLy9mb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gIH0iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=contact-contact-module-es5.js.map