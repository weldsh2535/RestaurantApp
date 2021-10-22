(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-modal-cart-modal-module"], {
    /***/
    "pUdO":
    /*!*************************************************!*\
      !*** ./src/app/cart-modal/cart-modal.module.ts ***!
      \*************************************************/

    /*! exports provided: CartModalPageModule */

    /***/
    function pUdO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartModalPageModule", function () {
        return CartModalPageModule;
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


      var _cart_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cart-modal-routing.module */
      "wCfP");
      /* harmony import */


      var _cart_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./cart-modal.page */
      "Vefk");

      var CartModalPageModule = function CartModalPageModule() {
        _classCallCheck(this, CartModalPageModule);
      };

      CartModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cart_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["CartModalPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_cart_modal_page__WEBPACK_IMPORTED_MODULE_6__["CartModalPage"]]
      })], CartModalPageModule);
      /***/
    },

    /***/
    "wCfP":
    /*!*********************************************************!*\
      !*** ./src/app/cart-modal/cart-modal-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: CartModalPageRoutingModule */

    /***/
    function wCfP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartModalPageRoutingModule", function () {
        return CartModalPageRoutingModule;
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


      var _cart_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cart-modal.page */
      "Vefk");

      var routes = [{
        path: '',
        component: _cart_modal_page__WEBPACK_IMPORTED_MODULE_3__["CartModalPage"]
      }];

      var CartModalPageRoutingModule = function CartModalPageRoutingModule() {
        _classCallCheck(this, CartModalPageRoutingModule);
      };

      CartModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CartModalPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=cart-modal-cart-modal-module-es5.js.map