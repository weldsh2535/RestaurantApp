(window.webpackJsonp=window.webpackJsonp||[]).push([[18,17],{"+cje":function(t,r,e){"use strict";e.d(r,"a",function(){return h});var a=e("HDdC"),n=e("XEKg"),s=e("5Jak"),o=e("/GcI"),i=e("cxbk"),u=e("fXoL"),c=e("tk/3");let h=(()=>{class t{constructor(t){this.http=t,this.APIURL=i.a.apiURL}create(t){return this.http.post(this.APIURL+"/restaurant",t)}getAllRestaurant(){return this.http.get(this.APIURL+"/restaurant")}updateRestaurant(t){return this.http.put(this.APIURL+"/restaurant/",t)}removeRestaurant(t){return this.http.delete(this.APIURL+"/restaurant/"+t).toPromise()}handleError(t){return a.a.throw(400===t.status?new n.a(t.json()):404===t.status?new s.a:new o.a(t))}}return t.\u0275fac=function(r){return new(r||t)(u.cc(c.a))},t.\u0275prov=u.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},ldse:function(t,r,e){"use strict";e.d(r,"a",function(){return s});var a=e("2Vo4"),n=e("fXoL");let s=(()=>{class t{constructor(){this.restaurant=new a.a({}),this.status=new a.a({}),this.location=new a.a({}),this.orderId=new a.a({}),this.RestaurantLocation=new a.a({}),this.resId=new a.a({}),this.listOfCatagoryFilter=new a.a({})}getMenuFilter(){return this.listOfCatagoryFilter}getLocation(){return this.location}getStatus(){return this.status}getRestaurantLocation(){return this.RestaurantLocation}getRestaurantId(){return this.resId}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=n.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);