// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import * as firebase from "firebase";

export const environment = {
  production: false,
  // apiURL:'http://localhost:51978/api',
  firebase: {
    apiKey: "AIzaSyDJ0I6Nu7J3wlns9EWmKIEMNuR_pVKmwaY",
    authDomain: "mtk-delivery.firebaseapp.com",
    projectId: "mtk-delivery",
    storageBucket: "mtk-delivery.appspot.com",
    messagingSenderId: "683827920990",
    appId: "1:683827920990:web:014c718f855977b94eb4cf",
    measurementId: "G-H6XJDHS7VQ"
    // apiKey: "AIzaSyCaWbArUpfcSHik0TXR1h9AdiRur8V9DuI",
    // authDomain: "mtk-delivery-b2d8e.firebaseapp.com",
    // projectId: "mtk-delivery-b2d8e",
    // storageBucket: "mtk-delivery-b2d8e.appspot.com",
    // messagingSenderId: "1081832265677",
    // appId: "1:1081832265677:web:b8a73078260cf9bdbd5684",
    // measurementId: "G-47X5GN4F4F"
  }
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
