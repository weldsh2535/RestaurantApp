(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["location-location-module"],{

/***/ "HAMg":
/*!******************************************************************!*\
  !*** ./node_modules/location-picker/dist/location-picker.es5.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".location-picker .centerMarker{position:absolute;background:url(\"data:image/png;base64,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\") no-repeat;background-size:100%;top:50%;left:50%;z-index:1;margin-left:-14px;margin-top:-43px;height:44px;width:28px;cursor:pointer}";
styleInject(css);

var LocationPicker = /** @class */ (function () {
    function LocationPicker(element, options, mapOptions) {
        if (options === void 0) { options = {}; }
        if (mapOptions === void 0) { mapOptions = {}; }
        var pO = {
            setCurrentPosition: true
        };
        Object.assign(pO, options);
        var mO = {
            center: new google.maps.LatLng(pO.lat ? pO.lat : 34.4346, pO.lng ? pO.lng : 35.8362),
            zoom: 15
        };
        Object.assign(mO, mapOptions);
        // Allow both, a string with the element's id or a direct reference to the element
        if (element instanceof HTMLElement) {
            this.element = element;
        }
        else {
            this.element = document.getElementById(element);
        }
        this.map = new google.maps.Map(this.element, mO);
        // Append CSS centered marker element
        var node = document.createElement('div');
        node.classList.add('centerMarker');
        if (this.element) {
            this.element.classList.add('location-picker');
            this.element.children[0].appendChild(node);
        }
        // Set center to current position if attribute `setCurrentPosition` is true and no initial position is set
        if (pO.setCurrentPosition && !pO.lat && !pO.lng) {
            this.setCurrentPosition();
        }
    }
    LocationPicker.prototype.getMarkerPosition = function () {
        var latLng = this.map.getCenter();
        return { lat: latLng.lat(), lng: latLng.lng() };
    };
    LocationPicker.prototype.setLocation = function (lat, lng) {
        this.map.setCenter(new google.maps.LatLng(lat, lng));
    };
    LocationPicker.prototype.setCurrentPosition = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                _this.map.setCenter(pos);
            }, function () {
                console.log('Could not determine your location...');
            });
        }
        else {
            console.log('Your browser does not support Geolocation.');
        }
    };
    return LocationPicker;
}());

/* harmony default export */ __webpack_exports__["default"] = (LocationPicker);
//# sourceMappingURL=location-picker.es5.js.map


/***/ }),

/***/ "cf3W":
/*!*********************************************!*\
  !*** ./src/app/location/location.module.ts ***!
  \*********************************************/
/*! exports provided: LocationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPageModule", function() { return LocationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _location_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./location-routing.module */ "pMSE");
/* harmony import */ var _location_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./location.page */ "xNjN");







let LocationPageModule = class LocationPageModule {
};
LocationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _location_routing_module__WEBPACK_IMPORTED_MODULE_5__["LocationPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_location_page__WEBPACK_IMPORTED_MODULE_6__["LocationPage"]]
    })
], LocationPageModule);



/***/ }),

/***/ "eeDV":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/location/location.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button  fill=\"solid\"  shape=\"round\" color=\"light\" (click)=\"backToHome()\" >\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\" color=\"primary\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Location</ion-title>\n    <ion-buttons slot=\"end\"> </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div id=\"map\"></div>\n<div *ngIf=\"location\">\n  <ion-item>\n    <button (click)=\"setLocationPick()\">Submit Location</button>\n  </ion-item>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"3\">\n        <b>Lattitude</b>\n      </ion-col>\n      <ion-col> {{latitude}} </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"3\">\n        <b>Longitude</b>\n      </ion-col>\n      <ion-col> {{longitude}} </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>\n</ion-content>\n");

/***/ }),

/***/ "jluf":
/*!*********************************************!*\
  !*** ./src/app/location/location.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map {\n  width: 100%;\n  height: 580px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFdBQVc7RUFDWCxhQUFhO0FBQWpCIiwiZmlsZSI6ImxvY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICNtYXAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDU4MHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "pMSE":
/*!*****************************************************!*\
  !*** ./src/app/location/location-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LocationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPageRoutingModule", function() { return LocationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _location_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./location.page */ "xNjN");




const routes = [
    {
        path: '',
        component: _location_page__WEBPACK_IMPORTED_MODULE_3__["LocationPage"]
    }
];
let LocationPageRoutingModule = class LocationPageRoutingModule {
};
LocationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LocationPageRoutingModule);



/***/ }),

/***/ "xNjN":
/*!*******************************************!*\
  !*** ./src/app/location/location.page.ts ***!
  \*******************************************/
/*! exports provided: LocationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPage", function() { return LocationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_location_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./location.page.html */ "eeDV");
/* harmony import */ var _location_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location.page.scss */ "jluf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var location_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! location-picker */ "HAMg");
/* harmony import */ var _Service_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Service/shared.service */ "ldse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Service_restaurant_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Service/restaurant.service */ "+cje");









let LocationPage = class LocationPage {
    constructor(sharedService, router, platform, restaurantService) {
        this.sharedService = sharedService;
        this.router = router;
        this.platform = platform;
        this.restaurantService = restaurantService;
        this.location = false;
        this.map = null;
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
        this.markers = [
        // {
        //   position: {
        //     lat: 9.015762798263422,
        //     lng: 38.76962972750053,
        //   },
        //   title: 'Africana Restaurant and Bar'
        // },
        // {
        //   position: {
        //     lat: 8.98339179692712,
        //     lng: 38.773790006329726,
        //   },
        //   title: 'Ethiopian Skylight Hotel'
        // },
        // {
        //   position: {
        //     lat: 9.0255328494506,
        //     lng: 38.78723060144852,
        //   },
        //   title: 'Andualem Cafe and Restaurant'
        // },
        // {
        //   position: {
        //     lat: 9.02164486810647,
        //     lng: 38.773880346562024,
        //   },
        //   title: ' Dashen Traditional Restaurant'
        // },
        ];
    }
    //  getRestaurant(){
    //    this.restaurantService.getAllRestaurant().subscribe(res=>{
    //      this.listOfRestaurant = res;
    //      res.forEach(ele=>{
    //        let postions ={
    //          lat:ele.Location.lat,
    //          lng:ele.Location.lon
    //        }
    //        let data ={
    //         position:postions,
    //         title:ele.Name
    //        }
    //        this.markers.push(data);
    //       })
    //    })
    //  }
    loadMap() {
        // create a new map by passing HTMLElement
        const mapEle = document.getElementById('map');
        // create LatLng object
        const myLatLng = { lat: 8.98339179692712, lng: 38.773790006329726 };
        // create map
        this.map = new google.maps.Map(mapEle, {
            center: myLatLng,
            zoom: 12
        });
        google.maps.event.addListenerOnce(this.map, 'idle', () => {
            this.renderMarkers();
            mapEle.classList.add('show-map');
        });
    }
    renderMarkers() {
        this.markers.forEach(marker => {
            this.addMarker(marker);
        });
    }
    addMarker(marker) {
        return new google.maps.Marker({
            position: marker.position,
            map: this.map,
            title: marker.title
        });
    }
    ngOnInit() {
        //this.getRestaurant();
        if ((this.platform.is('mobile') && !this.platform.is('hybrid')) ||
            this.platform.is('desktop')) {
            this.usePicker = true;
        }
        this.status = this.sharedService.status.value;
        if (this.status == "driver-home" || this.status == "restaurant-home" || this.status == "order" || this.status == "restaurant-history") {
            this.location = false;
            this.loadMap();
        }
        else {
            this.setLocation();
            this.location = true;
        }
        // console.log(this.status);
        this.RestaurantLocation = this.sharedService.RestaurantLocation.value;
        let pos = {
            lat: this.RestaurantLocation.latitude,
            lng: this.RestaurantLocation.longtude
        };
        let data = {
            position: pos,
            title: null
        };
        this.markers.push(data);
        console.log(this.RestaurantLocation);
    }
    setLocationPick() {
        this.latitude = this.lp.getMarkerPosition().lat;
        this.longitude = this.lp.getMarkerPosition().lng;
        let data = {
            lat: this.latitude,
            lon: this.longitude
        };
        console.log(data);
        this.sharedService.location.next(data);
        this.router.navigate(["/menu/" + this.status]);
    }
    showMap() {
        const location = new google.maps.LatLng(-17.824858, 31.853828);
        const options = {
            center: location,
            zoom: 15,
            disableDefaultUI: true
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, options);
    }
    setLocation() {
        this.lp = new location_picker__WEBPACK_IMPORTED_MODULE_5__["default"]('map', {
            setCurrentPosition: true,
        }, {
            zoom: 15 // You can set any google map options here, zoom defaults to 15
        });
    }
    getMarkerPosition() {
        const latLng = this.map.getCenter();
        return { lat: latLng.lat(), lng: latLng.lng() };
    }
    backToHome() {
        this.router.navigate(["/menu/" + this.status]);
    }
};
LocationPage.ctorParameters = () => [
    { type: _Service_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _Service_restaurant_service__WEBPACK_IMPORTED_MODULE_8__["RestaurantService"] }
];
LocationPage.propDecorators = {
    mapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['map', { read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], static: false },] }]
};
LocationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-location',
        template: _raw_loader_location_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_location_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LocationPage);



/***/ })

}]);
//# sourceMappingURL=location-location-module-es2015.js.map