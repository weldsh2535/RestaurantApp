(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "+cje":
/*!***********************************************!*\
  !*** ./src/app/Service/restaurant.service.ts ***!
  \***********************************************/
/*! exports provided: RestaurantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantService", function() { return RestaurantService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _common_bad_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/bad-input */ "XEKg");
/* harmony import */ var _common_not_found_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/not-found-error */ "5Jak");
/* harmony import */ var _common_app_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/app-error */ "/GcI");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");







let RestaurantService = class RestaurantService {
    constructor(http) {
        this.http = http;
        this.APIURL = 'http://localhost:49347/api';
    }
    create(val) {
        return this.http.post(this.APIURL + '/Restaurant', val);
    }
    getAllRestaurant() {
        return this.http.get(this.APIURL + '/Restaurant');
    }
    updateRestaurant(val) {
        return this.http.put(this.APIURL + '/Restaurant/', val);
    }
    removeRestaurant(id) {
        return this.http.delete(this.APIURL + '/Restaurant/' + id).toPromise();
    }
    handleError(error) {
        if (error.status === 400) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(new _common_bad_input__WEBPACK_IMPORTED_MODULE_3__["BadInput"](error.json()));
        }
        if (error.status === 404) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(new _common_not_found_error__WEBPACK_IMPORTED_MODULE_4__["NotFoundError"]());
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(new _common_app_error__WEBPACK_IMPORTED_MODULE_5__["AppError"](error));
    }
};
RestaurantService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
];
RestaurantService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RestaurantService);



/***/ }),

/***/ "/GcI":
/*!*************************************!*\
  !*** ./src/app/common/app-error.ts ***!
  \*************************************/
/*! exports provided: AppError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppError", function() { return AppError; });
class AppError {
    constructor(originalError) {
        this.originalError = originalError;
    }
}


/***/ }),

/***/ "0/6H":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-e806d1f6.js */ "A36C");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-f49d994d.js */ "iWo5");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "qULd");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "5Jak":
/*!*******************************************!*\
  !*** ./src/app/common/not-found-error.ts ***!
  \*******************************************/
/*! exports provided: NotFoundError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundError", function() { return NotFoundError; });
/* harmony import */ var _app_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-error */ "/GcI");

class NotFoundError extends _app_error__WEBPACK_IMPORTED_MODULE_0__["AppError"] {
}


/***/ }),

/***/ "6wYF":
/*!********************************************!*\
  !*** ./src/app/Service/account.service.ts ***!
  \********************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _common_app_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/app-error */ "/GcI");
/* harmony import */ var _common_bad_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/bad-input */ "XEKg");
/* harmony import */ var _common_not_found_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/not-found-error */ "5Jak");







let AccountService = class AccountService {
    constructor(http) {
        this.http = http;
        this.APIURL = 'http://localhost:49347/api';
    }
    create(val) {
        return this.http.post(this.APIURL + '/Account', val);
    }
    getAllAccount() {
        return this.http.get(this.APIURL + '/Account');
    }
    updateAccount(val) {
        return this.http.put(this.APIURL + '/Account/', val);
    }
    removeAccount(id) {
        return this.http.delete(this.APIURL + '/Account/' + id).toPromise();
    }
    handleError(error) {
        if (error.status === 400) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _common_bad_input__WEBPACK_IMPORTED_MODULE_5__["BadInput"](error.json()));
        }
        if (error.status === 404) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _common_not_found_error__WEBPACK_IMPORTED_MODULE_6__["NotFoundError"]());
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _common_app_error__WEBPACK_IMPORTED_MODULE_4__["AppError"](error));
    }
};
AccountService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
AccountService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AccountService);



/***/ }),

/***/ "74mu":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "8D9V":
/*!*************************************************!*\
  !*** ./src/app/Service/order-detail.service.ts ***!
  \*************************************************/
/*! exports provided: OrderDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailService", function() { return OrderDetailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _common_app_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/app-error */ "/GcI");
/* harmony import */ var _common_bad_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/bad-input */ "XEKg");
/* harmony import */ var _common_not_found_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/not-found-error */ "5Jak");







let OrderDetailService = class OrderDetailService {
    constructor(http) {
        this.http = http;
        this.APIURL = 'http://localhost:49347/api';
    }
    create(val) {
        return this.http.post(this.APIURL + '/OrderDetail', val);
    }
    getAllOrderDetail() {
        return this.http.get(this.APIURL + '/OrderDetail');
    }
    updateOrderDetail(val) {
        return this.http.put(this.APIURL + '/OrderDetail/', val);
    }
    removeOrderDetail(id) {
        return this.http.delete(this.APIURL + '/OrderDetail/' + id).toPromise();
    }
    handleError(error) {
        if (error.status === 400) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _common_bad_input__WEBPACK_IMPORTED_MODULE_5__["BadInput"](error.json()));
        }
        if (error.status === 404) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _common_not_found_error__WEBPACK_IMPORTED_MODULE_6__["NotFoundError"]());
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _common_app_error__WEBPACK_IMPORTED_MODULE_4__["AppError"](error));
    }
};
OrderDetailService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
OrderDetailService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], OrderDetailService);



/***/ }),

/***/ "Dkj+":
/*!*****************************************!*\
  !*** ./src/app/Service/food.service.ts ***!
  \*****************************************/
/*! exports provided: FoodService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodService", function() { return FoodService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _common_app_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/app-error */ "/GcI");
/* harmony import */ var _common_bad_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/bad-input */ "XEKg");
/* harmony import */ var _common_not_found_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/not-found-error */ "5Jak");







let FoodService = class FoodService {
    constructor(http) {
        this.http = http;
        this.APIURL = 'http://localhost:49347/api';
    }
    create(val) {
        return this.http.post(this.APIURL + '/Food', val);
    }
    getAllFood() {
        return this.http.get(this.APIURL + '/Food');
    }
    updateFood(val) {
        return this.http.put(this.APIURL + '/Food/', val);
    }
    removeFood(id) {
        return this.http.delete(this.APIURL + '/Food/' + id).toPromise();
    }
    handleError(error) {
        if (error.status === 400) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _common_bad_input__WEBPACK_IMPORTED_MODULE_5__["BadInput"](error.json()));
        }
        if (error.status === 404) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _common_not_found_error__WEBPACK_IMPORTED_MODULE_6__["NotFoundError"]());
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _common_app_error__WEBPACK_IMPORTED_MODULE_4__["AppError"](error));
    }
};
FoodService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
FoodService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], FoodService);



/***/ }),

/***/ "VNSQ":
/*!******************************************!*\
  !*** ./src/app/Service/order.service.ts ***!
  \******************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _common_app_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/app-error */ "/GcI");
/* harmony import */ var _common_bad_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/bad-input */ "XEKg");
/* harmony import */ var _common_not_found_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/not-found-error */ "5Jak");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared.service */ "ldse");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");








let OrderService = class OrderService {
    constructor(http, sharedService) {
        this.http = http;
        this.sharedService = sharedService;
        this.cart = [];
        this.cartItemCount = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.RestaurantId = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.orderStatus = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.order = [];
        this.orderItemCount = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.APIURL = 'http://localhost:49347/api';
    }
    // create(orderObj) {
    //   let values = this.orderCollectionList.add(orderObj)
    //     .then((docRef) => {
    //       this.sharedService.orderId.next(docRef.id);
    //     })
    //   return values;
    // }
    // getOrderBy(id){
    //   const orderObj = this.db.collection('Order', ref => ref.where('id', '==', id)).snapshotChanges();
    //   this.orderList = orderObj.pipe(
    //     map(changes => changes.map(a => {
    //       const data = a.payload.doc.data() as Order;
    //       const id = a.payload.doc.id;
    //       return { id, ...data };
    //     }))
    //   );
    //   return this.orderList;
    // }
    // getOrderByDriverId(driverId){
    //   const orderObj = this.db.collection('Order', ref => ref.where('Driver', '==', driverId)).snapshotChanges();
    //   this.orderList = orderObj.pipe(
    //     map(changes => changes.map(a => {
    //       const data = a.payload.doc.data() as Order;
    //       const id = a.payload.doc.id;
    //       return { id, ...data };
    //     }))
    //   );
    //   return this.orderList;
    // }
    create(val) {
        return this.http.post(this.APIURL + '/Order', val);
    }
    getAllOrder() {
        return this.http.get(this.APIURL + '/Order');
    }
    updateOrder(val) {
        return this.http.put(this.APIURL + '/Order/', val);
    }
    updateOrderStatus(val) {
        return this.http.put(this.APIURL + '/OrderStatus/', val);
    }
    updateRestaurantStatus(val) {
        return this.http.put(this.APIURL + '/RestaurantStatus/', val);
    }
    updateStatus(val) {
        return this.http.put(this.APIURL + '/Status/', val);
    }
    removeOrder(id) {
        return this.http.delete(this.APIURL + '/Order/' + id).toPromise();
    }
    handleError(error) {
        if (error.status === 400)
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(new _common_bad_input__WEBPACK_IMPORTED_MODULE_4__["BadInput"](error.json()));
        if (error.status === 404)
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(new _common_not_found_error__WEBPACK_IMPORTED_MODULE_5__["NotFoundError"]());
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(new _common_app_error__WEBPACK_IMPORTED_MODULE_3__["AppError"](error));
    }
    getCart() {
        return this.cart;
    }
    getOrders() {
        return this.order;
    }
    getCartItemCount() {
        return this.cartItemCount;
    }
    getOrderItemCount() {
        return this.orderItemCount;
    }
    getRestaurantId() {
        return this.RestaurantId;
    }
    getOrderStatus() {
        return this.orderStatus;
    }
    addOrder(items) {
        this.order = [];
        this.amount = 0;
        this.order.forEach(el => {
            let index = this.order.indexOf(c => c.orderDetailsId === el.orderDetailsId);
            this.order.splice(index, 1);
        });
        this.orderItemCount.next(0);
        items.forEach(element => {
            this.amount = this.amount + element.amount;
            let data = {
                CookingTime: element.CookingTime,
                DeliveryTime: element.DeliveryTime,
                Description: element.Description,
                Name: element.Name,
                Price: element.Price,
                amount: element.amount,
                categoryId: element.categoryId,
                id: element.Food,
                picture: element.picture,
                restaurantId: element.restaurantId,
                type: element.type,
                orderDetailsId: element.orderDetailsId,
            };
            this.order.push(data);
        });
        this.orderItemCount.next(this.orderItemCount.value + this.amount);
    }
    addProduct(product) {
        let added = false;
        for (let p of this.cart) {
            if (p.id === product.id) {
                p.amount += 1;
                added = true;
                break;
            }
        }
        if (!added) {
            product.amount = 1;
            this.cart.push(product);
        }
        this.cartItemCount.next(this.cartItemCount.value + 1);
    }
    decreaseProduct(product) {
        for (let [index, p] of this.cart.entries()) {
            if (p.id === product.id) {
                p.amount -= 1;
                if (p.amount == 0) {
                    this.cart.splice(index, 1);
                }
            }
        }
        this.cartItemCount.next(this.cartItemCount.value - 1);
    }
    removeProduct(product) {
        for (let [index, p] of this.cart.entries()) {
            if (p.id === product.id) {
                this.cartItemCount.next(this.cartItemCount.value - p.amount);
                this.cart.splice(index, 1);
            }
        }
    }
};
OrderService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] }
];
OrderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OrderService);



/***/ }),

/***/ "XEKg":
/*!*************************************!*\
  !*** ./src/app/common/bad-input.ts ***!
  \*************************************/
/*! exports provided: BadInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadInput", function() { return BadInput; });
/* harmony import */ var _app_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-error */ "/GcI");

class BadInput extends _app_error__WEBPACK_IMPORTED_MODULE_0__["AppError"] {
}


/***/ }),

/***/ "ZaV5":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  if (el.componentOnReady) {
    await el.componentOnReady();
  }
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "h3R7":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "ldse":
/*!*******************************************!*\
  !*** ./src/app/Service/shared.service.ts ***!
  \*******************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



let SharedService = class SharedService {
    constructor() {
        this.restaurant = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.status = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.location = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.orderId = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.RestaurantLocation = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.resId = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.listOfCatagoryFilter = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
    }
    getMenuFilter() {
        return this.listOfCatagoryFilter;
    }
    getLocation() {
        return this.location;
    }
    getStatus() {
        return this.status;
    }
    getRestaurantLocation() {
        return this.RestaurantLocation;
    }
    getRestaurantId() {
        return this.resId;
    }
};
SharedService.ctorParameters = () => [];
SharedService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SharedService);



/***/ }),

/***/ "neG8":
/*!*********************************************!*\
  !*** ./src/app/Service/category.service.ts ***!
  \*********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _common_app_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/app-error */ "/GcI");
/* harmony import */ var _common_bad_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/bad-input */ "XEKg");
/* harmony import */ var _common_not_found_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/not-found-error */ "5Jak");







let CategoryService = class CategoryService {
    constructor(http) {
        this.http = http;
        this.APIURL = 'http://localhost:49347/api';
    }
    create(val) {
        return this.http.post(this.APIURL + '/Categorie', val);
    }
    getAllCategory() {
        return this.http.get(this.APIURL + '/Categorie');
    }
    updateCategory(val) {
        return this.http.put(this.APIURL + '/Categorie/', val);
    }
    removeCategory(id) {
        return this.http.delete(this.APIURL + '/Categorie/' + id).toPromise();
    }
    handleError(error) {
        if (error.status === 400) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _common_bad_input__WEBPACK_IMPORTED_MODULE_5__["BadInput"](error.json()));
        }
        if (error.status === 404) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _common_not_found_error__WEBPACK_IMPORTED_MODULE_6__["NotFoundError"]());
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _common_app_error__WEBPACK_IMPORTED_MODULE_4__["AppError"](error));
    }
};
CategoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
CategoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], CategoryService);



/***/ }),

/***/ "qULd":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map