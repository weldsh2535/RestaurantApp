(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"+cje":function(t,e,o){"use strict";o.d(e,"a",function(){return d});var i=o("HDdC"),n=o("XEKg"),r=o("5Jak"),c=o("/GcI"),s=o("cxbk"),a=o("fXoL"),l=o("tk/3");let d=(()=>{class t{constructor(t){this.http=t,this.APIURL=s.a.apiURL}create(t){return this.http.post(this.APIURL+"/restaurant",t)}getAllRestaurant(){return this.http.get(this.APIURL+"/restaurant")}updateRestaurant(t){return this.http.put(this.APIURL+"/restaurant/",t)}removeRestaurant(t){return this.http.delete(this.APIURL+"/restaurant/"+t).toPromise()}handleError(t){return i.a.throw(400===t.status?new n.a(t.json()):404===t.status?new r.a:new c.a(t))}}return t.\u0275fac=function(e){return new(e||t)(a.cc(l.a))},t.\u0275prov=a.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"Dkj+":function(t,e,o){"use strict";o.d(e,"a",function(){return d});var i=o("HDdC"),n=o("cxbk"),r=o("/GcI"),c=o("XEKg"),s=o("5Jak"),a=o("fXoL"),l=o("tk/3");let d=(()=>{class t{constructor(t){this.http=t,this.APIURL=n.a.apiURL}create(t){return this.http.post(this.APIURL+"/food",t)}getAllFood(){return this.http.get(this.APIURL+"/food")}updateFood(t){return this.http.put(this.APIURL+"/food/",t)}removeFood(t){return this.http.delete(this.APIURL+"/food/"+t).toPromise()}handleError(t){return i.a.throw(400===t.status?new c.a(t.json()):404===t.status?new s.a:new r.a(t))}}return t.\u0275fac=function(e){return new(e||t)(a.cc(l.a))},t.\u0275prov=a.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},d3P2:function(t,e,o){"use strict";o.r(e),o.d(e,"FoodPageModule",function(){return j});var i=o("ofXK"),n=o("3Pt+"),r=o("TEn/"),c=o("tyNb"),s=o("mrSG"),a=o("gcOT"),l=o("fXoL"),d=o("Dkj+"),g=o("HDdC"),u=o("cxbk"),f=o("/GcI"),h=o("XEKg"),b=o("5Jak"),m=o("tk/3");let p=(()=>{class t{constructor(t){this.http=t,this.APIURL=u.a.apiURL}create(t){return this.http.post(this.APIURL+"/categorie",t)}getAllCategory(){return this.http.get(this.APIURL+"/categorie")}updateCategory(t){return this.http.put(this.APIURL+"/categorie/",t)}removeCategory(t){return this.http.delete(this.APIURL+"/categorie/"+t).toPromise()}handleError(t){return g.a.throw(400===t.status?new h.a(t.json()):404===t.status?new b.a:new f.a(t))}}return t.\u0275fac=function(e){return new(e||t)(l.cc(m.a))},t.\u0275prov=l.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var v=o("+cje");const C=["filePicker"],I=["pageTop"];function y(t,e){1&t&&(l.Vb(0,"small",34),l.Ec(1," This field is required! "),l.Ub())}function O(t,e){1&t&&(l.Vb(0,"small",34),l.Ec(1," This field is required! "),l.Ub())}function U(t,e){1&t&&(l.Vb(0,"small",34),l.Ec(1," This field is required! "),l.Ub())}function P(t,e){if(1&t&&(l.Vb(0,"ion-select-option",35),l.Ec(1),l.Ub()),2&t){const t=e.$implicit;l.pc("value",null==t?null:t.accountId),l.Eb(1),l.Gc(" ",null==t?null:t.name," ")}}function V(t,e){if(1&t&&(l.Vb(0,"ion-select-option",35),l.Ec(1),l.Ub()),2&t){const t=e.$implicit;l.pc("value",null==t?null:t.id),l.Eb(1),l.Gc(" ",null==t?null:t.categoryName," ")}}function k(t,e){1&t&&(l.Vb(0,"small",34),l.Ec(1," This field is required! "),l.Ub())}function E(t,e){1&t&&(l.Vb(0,"small",34),l.Ec(1," This field is required! "),l.Ub())}function F(t,e){1&t&&(l.Vb(0,"small",34),l.Ec(1," This field is required! "),l.Ub())}function R(t,e){if(1&t){const t=l.Wb();l.Vb(0,"ion-img",36),l.gc("click",function(){return l.wc(t),l.ic().onPickImage()}),l.Ub()}if(2&t){const t=l.ic();l.oc("src",t.base64textString)}}function M(t,e){if(1&t){const t=l.Wb();l.Vb(0,"ion-button",37),l.gc("click",function(){return l.wc(t),l.ic().onPickImage()}),l.Rb(1,"ion-icon",38),l.Vb(2,"ion-label"),l.Ec(3,"Take Picture"),l.Ub(),l.Ub()}}function x(t,e){if(1&t){const t=l.Wb();l.Vb(0,"input",39,40),l.gc("change",function(e){return l.wc(t),l.ic().onFileChosen(e)}),l.Ub()}}function w(t,e){if(1&t){const t=l.Wb();l.Vb(0,"ion-item-sliding",null,41),l.Vb(2,"ion-item",42),l.Vb(3,"ion-thumbnail",2),l.Rb(4,"img",43),l.Ub(),l.Vb(5,"ion-label"),l.Ec(6),l.Ub(),l.Vb(7,"ion-label"),l.Ec(8),l.Ub(),l.Vb(9,"ion-label"),l.Ec(10),l.Ub(),l.Vb(11,"ion-label"),l.Ec(12),l.Ub(),l.Ub(),l.Vb(13,"ion-item-options",44),l.Vb(14,"ion-item-option",45),l.gc("click",function(){l.wc(t);const o=e.$implicit,i=l.vc(1);return l.ic().edit(o,i)}),l.Rb(15,"ion-icon",46),l.Ub(),l.Vb(16,"ion-item-option",45),l.gc("click",function(){l.wc(t);const o=e.$implicit,i=l.vc(1);return l.ic().delete(o,i)}),l.Rb(17,"ion-icon",47),l.Ub(),l.Ub(),l.Ub()}if(2&t){const t=e.$implicit;l.Eb(4),l.oc("src",t.picture,l.xc),l.Eb(2),l.Gc(" ",t.name,""),l.Eb(2),l.Gc(" ",t.price,""),l.Eb(2),l.Gc(" ",t.description,""),l.Eb(2),l.Gc(" ",t.type," ")}}const S=function(t,e){return{"location-visible":t,"location-hidden":e}},T=[{path:"",component:(()=>{class t{constructor(t,e,o,i,n,r,c,s){this.fb=t,this.foodService=e,this.alertController=o,this.platform=i,this.modalController=n,this.categoryService=r,this.restaurantservice=c,this.loadingController=s,this.usePicker=!1,this.regform=this.fb.group({}),this.itemType="Food",this.listOfCategoryFilter=[],this.generatefoodId="0",this.foodIdOfGenerate="",this.showScroll=!1,this.getCategory()}pageScroller(){this.pageTop.scrollToTop()}ngOnInit(){return Object(s.a)(this,void 0,void 0,function*(){this.regform=this.fb.group({name:["",n.m.required],price:["",n.m.required],description:[""],cookingTime:["",n.m.required],deliveryTime:["",n.m.required],picture:["",n.m.required],type:["",n.m.required],categoryId:["",n.m.required],restaurantId:["",n.m.required],foodId:[""]}),(this.platform.is("mobile")&&!this.platform.is("hybrid")||this.platform.is("desktop"))&&(this.usePicker=!0),this.getFood(),this.getRestaurant(),this.generateFoodId()})}generateFoodId(){let t=0;this.foodService.getAllFood().subscribe(e=>Object(s.a)(this,void 0,void 0,function*(){if(null!=this.listOfRestaurant){let o=this.listOfRestaurant.find(t=>t.accountId==+localStorage.getItem("userId")),i=yield e.filter(t=>t.restaurantId==o.id.toString());t=0==i.length?1:i.length+1,this.generatefoodId="VN-"+this.generatefoodId.padStart(4,"0")+t,console.log(this.generatefoodId)}else this.getRefresh()}))}getRefresh(){setTimeout(()=>{this.generateFoodId()},200)}getFood(){this.foodService.getAllFood().subscribe(t=>Object(s.a)(this,void 0,void 0,function*(){this.listOfFood=yield t,this.listOfFoodFilter=yield t.filter(t=>t.restaurantId==localStorage.getItem("userId")),this.foodOfRestaurantLength=this.listOfFoodFilter.length}))}getCategory(){this.categoryService.getAllCategory().subscribe(t=>Object(s.a)(this,void 0,void 0,function*(){this.listOfCategory=yield t}))}selectRestaurant(t){this.id=t,this.listOfCategoryFilter=[],void 0!==t&&null!=t&&this.foodService.getAllFood().subscribe(e=>Object(s.a)(this,void 0,void 0,function*(){this.listOfFoodFilter=yield e.filter(e=>e.restaurantId==t),this.foodOfRestaurantLength=this.listOfFoodFilter.length;let o=this.listOfRestaurant.find(e=>e.accountId==t).categoryId,i=this.listOfRestaurant.find(e=>e.accountId==t).resId;for(let t=0;t<o.length;t++){let e={id:this.listOfCategory.find(e=>e.categoryName==o[t]).id,categoryName:this.listOfCategory.find(e=>e.categoryName==o[t]).categoryName};this.listOfCategoryFilter.push(e),console.log(this.listOfCategoryFilter)}if(0==this.foodIdOfGenerate.length){this.generatefoodId="";let e=0;e=0==this.listOfFood.filter(e=>e.restaurantId==t).length?1:this.listOfFood.filter(e=>e.restaurantId==t).length+1,this.generatefoodId=i+this.generatefoodId.padStart(0,"0")+e}}))}getRestaurant(){this.restaurantservice.getAllRestaurant().subscribe(t=>Object(s.a)(this,void 0,void 0,function*(){this.listOfRestaurant=yield t.filter(t=>t.accountId==+localStorage.getItem("userId")),this.SelectedRestaurantId=this.listOfRestaurant.find(t=>t.accountId).accountId}))}filter(t){this.foodService.getAllFood().subscribe(e=>Object(s.a)(this,void 0,void 0,function*(){this.listOfFoodFilter=yield e.filter(e=>e.type==t.target.value&&e.restaurantId==this.SelectedRestaurantId.toString()),this.foodOfRestaurantLength=this.listOfFoodFilter.length}))}saveFood(){void 0!==this.base64textString&&this.regform.get("picture").setValue(this.base64textString);let t=localStorage.getItem("userId");if(this.regform.get("restaurantId").setValue(t),this.regform.get("foodId").setValue(this.generatefoodId),this.regform.valid){if(this.foodId){const t={id:this.foodId,name:this.regform.get("name").value,price:this.regform.get("price").value,description:this.regform.get("description").value,cookingTime:this.regform.get("cookingTime").value,deliveryTime:this.regform.get("deliveryTime").value,picture:this.regform.get("picture").value,type:this.regform.get("type").value,categoryId:this.regform.get("categoryId").value,restaurantId:this.regform.get("restaurantId").value,foodId:this.foodIdOfGenerate};this.foodService.updateFood(t).subscribe(t=>{console.log(t.toString()),this.getFood()})}else this.foodService.create(this.regform.value).subscribe(t=>{console.log(t.toString()),this.getFood()});this.base64textString="",this.foodId=null,this.regform.reset(),this.presentAlert()}else this.ErrorAlert()}edit(t,e){this.editMode=!0,this.foodId=t.id,this.foodIdOfGenerate=t.foodId,this.regform.get("name").setValue(t.name),this.regform.get("cookingTime").setValue(t.cookingTime),this.regform.get("deliveryTime").setValue(t.deliveryTime),this.regform.get("description").setValue(t.description),this.regform.get("price").setValue(t.price),this.regform.get("type").setValue(t.type),this.regform.get("categoryId").setValue(t.categoryId),this.regform.get("restaurantId").setValue(t.restaurantId),this.base64textString=t.picture,e.close()}delete(t,e){this.presentAlertConfirm(t),e.close()}presentAlertConfirm(t){return Object(s.a)(this,void 0,void 0,function*(){const e=yield this.alertController.create({header:"Confirm!",message:"<strong>Are you sure you want delete?</strong>",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:t=>{console.log("Confirm Cancel: blah")}},{text:"OK",handler:()=>{this.foodService.removeFood(t.id).then(t=>{console.log(t.toString()),this.getFood()}),this.regform.reset(),this.foodId=null}}]});yield e.present()})}ErrorAlert(){return Object(s.a)(this,void 0,void 0,function*(){const t=yield this.alertController.create({cssClass:"my-custom-class",header:"Error",message:"Please Enter All field.",buttons:["OK"]});yield t.present()})}presentAlert(){return Object(s.a)(this,void 0,void 0,function*(){const t=yield this.alertController.create({cssClass:"my-custom-class",header:"Food ",message:"Food Saved successfully.",buttons:["OK"]});yield t.present()})}onPickImage(){1!=this.usePicker?a.c.Camera.getPhoto({quality:50,source:a.b.Prompt,correctOrientation:!0,height:100,width:100,resultType:a.a.Base64}).then(t=>{this.base64textString="data:image/png;base64,"+t.base64String}).catch(t=>(console.log(t),this.usePicker&&this.filePickerRef.nativeElement.click(),!1)):this.filePickerRef.nativeElement.click()}onFileChosen(t){const e=t.target.files[0];if(!e)return;const o=new FileReader;o.onload=()=>{const t=o.result.toString();this.base64textString=t},o.readAsDataURL(e)}closeModal(){this.modalController.dismiss()}scroll(t){this.showScroll=t.detail.scrollTop>300}}return t.\u0275fac=function(e){return new(e||t)(l.Qb(n.a),l.Qb(d.a),l.Qb(r.a),l.Qb(r.V),l.Qb(r.T),l.Qb(p),l.Qb(v.a),l.Qb(r.S))},t.\u0275cmp=l.Kb({type:t,selectors:[["app-food"]],viewQuery:function(t,e){if(1&t&&(l.Ic(C,1),l.Ic(I,1)),2&t){let t;l.uc(t=l.hc())&&(e.filePickerRef=t.first),l.uc(t=l.hc())&&(e.pageTop=t.first)}},decls:77,vars:23,consts:[[3,"translucent"],["color","primary"],["slot","start"],[2,"text-align","center"],["scrollEvents","true",3,"ionScroll"],["pageTop",""],[3,"formGroup"],["formControlName","name","type","text"],["class","form-text text-muted",4,"ngIf"],["formControlName","price","type","text"],["interface","popover","formControlName","type",3,"ngModel","ngModelChange"],["value","Food"],["value","Drink"],["value","other"],["interface","popover","formControlName","restaurantId",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["interface","popover","formControlName","categoryId",3,"ngModel","ngModelChange"],["formControlName","description","type","text"],["formControlName","cookingTime","display-format","h:mm A","picker-format","h:mm A","value","1990-02-19T07:43Z"],["formControlName","deliveryTime","display-format","h:mm A","picker-format","h:mm A","value","1990-02-19T07:43Z"],[1,"picker"],["role","button","class","image",3,"src","click",4,"ngIf"],["color","primary",3,"click",4,"ngIf"],["hidden","","type","file","accept","image/jpeg",3,"change",4,"ngIf"],[2,"text-align","center","margin","auto"],["id","add items",3,"click"],["slot","start","name","add-circle-outline"],[2,"margin-left","12px"],["interface","popover","placeholder","Food or Drink",1,"form-control",3,"ionChange"],["slot","end"],[4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed",3,"ngClass"],["color","light",3,"click"],["md","chevron-up-outline","ios","chevron-up-circle-outline"],[1,"form-text","text-muted"],[3,"value"],["role","button",1,"image",3,"src","click"],["color","primary",3,"click"],["name","camera","slot","start"],["hidden","","type","file","accept","image/jpeg",3,"change"],["filePicker",""],["slidingItem",""],["detail",""],[3,"src"],["side","start"],["color","danger",3,"click"],["name","create","slot","icon-only"],["name","trash","slot","icon-only"]],template:function(t,e){1&t&&(l.Vb(0,"ion-header",0),l.Vb(1,"ion-toolbar",1),l.Vb(2,"ion-buttons",2),l.Rb(3,"ion-menu-button"),l.Ub(),l.Vb(4,"ion-title",3),l.Ec(5,"Food"),l.Ub(),l.Ub(),l.Ub(),l.Vb(6,"ion-content",4,5),l.gc("ionScroll",function(t){return e.scroll(t)}),l.Vb(8,"form",6),l.Vb(9,"ion-item"),l.Vb(10,"ion-label"),l.Ec(11,"Name "),l.Ub(),l.Rb(12,"ion-input",7),l.Cc(13,y,2,0,"small",8),l.Ub(),l.Vb(14,"ion-item"),l.Vb(15,"ion-label"),l.Ec(16,"Price"),l.Ub(),l.Rb(17,"ion-input",9),l.Cc(18,O,2,0,"small",8),l.Ub(),l.Vb(19,"ion-item"),l.Vb(20,"ion-label"),l.Ec(21,"Type"),l.Ub(),l.Vb(22,"ion-select",10),l.gc("ngModelChange",function(t){return e.itemType=t}),l.Vb(23,"ion-select-option",11),l.Ec(24,"Food"),l.Ub(),l.Vb(25,"ion-select-option",12),l.Ec(26,"Drink"),l.Ub(),l.Vb(27,"ion-select-option",13),l.Ec(28,"other"),l.Ub(),l.Ub(),l.Cc(29,U,2,0,"small",8),l.Ub(),l.Vb(30,"ion-item"),l.Vb(31,"ion-label"),l.Ec(32,"Restaurant Id"),l.Ub(),l.Vb(33,"ion-select",14),l.gc("ngModelChange",function(t){return e.selectRestaurant(t)})("ngModelChange",function(t){return e.SelectedRestaurantId=t}),l.Cc(34,P,2,2,"ion-select-option",15),l.Ub(),l.Ub(),l.Vb(35,"ion-item"),l.Vb(36,"ion-label"),l.Ec(37,"Category Id"),l.Ub(),l.Vb(38,"ion-select",16),l.gc("ngModelChange",function(t){return e.SelectedCategoryId=t}),l.Cc(39,V,2,2,"ion-select-option",15),l.Ub(),l.Ub(),l.Vb(40,"ion-item"),l.Vb(41,"ion-label"),l.Ec(42,"Description"),l.Ub(),l.Rb(43,"ion-input",17),l.Cc(44,k,2,0,"small",8),l.Ub(),l.Vb(45,"ion-item"),l.Vb(46,"ion-label"),l.Ec(47,"Cooking Time"),l.Ub(),l.Rb(48,"ion-datetime",18),l.Cc(49,E,2,0,"small",8),l.Ub(),l.Vb(50,"ion-item"),l.Vb(51,"ion-label"),l.Ec(52,"DeliveryTime"),l.Ub(),l.Rb(53,"ion-datetime",19),l.Cc(54,F,2,0,"small",8),l.Ub(),l.Vb(55,"div",20),l.Cc(56,R,1,1,"ion-img",21),l.Cc(57,M,4,0,"ion-button",22),l.Ub(),l.Cc(58,x,2,0,"input",23),l.Vb(59,"div",24),l.Vb(60,"ion-button",25),l.gc("click",function(){return e.saveFood()}),l.Rb(61,"ion-icon",26),l.Ec(62),l.Ub(),l.Ub(),l.Ub(),l.Vb(63,"ion-item"),l.Vb(64,"ion-label",27),l.Ec(65,"list of food "),l.Ub(),l.Vb(66,"ion-select",28),l.gc("ionChange",function(t){return e.filter(t)}),l.Vb(67,"ion-select-option",12),l.Ec(68,"Drink"),l.Ub(),l.Vb(69,"ion-select-option",11),l.Ec(70,"Food"),l.Ub(),l.Ub(),l.Vb(71,"ion-badge",29),l.Ec(72),l.Ub(),l.Ub(),l.Cc(73,w,18,5,"ion-item-sliding",30),l.Vb(74,"ion-fab",31),l.Vb(75,"ion-fab-button",32),l.gc("click",function(){return e.pageScroller()}),l.Rb(76,"ion-icon",33),l.Ub(),l.Ub(),l.Ub()),2&t&&(l.oc("translucent",!0),l.Eb(8),l.oc("formGroup",e.regform),l.Eb(5),l.oc("ngIf",!e.regform.get("name").valid&&e.regform.get("name").touched),l.Eb(5),l.oc("ngIf",!e.regform.get("price").valid&&e.regform.get("price").touched),l.Eb(4),l.oc("ngModel",e.itemType),l.Eb(7),l.oc("ngIf",!e.regform.get("type").valid&&e.regform.get("type").touched),l.Eb(4),l.oc("ngModel",e.SelectedRestaurantId),l.Eb(1),l.oc("ngForOf",e.listOfRestaurant),l.Eb(4),l.oc("ngModel",e.SelectedCategoryId),l.Eb(1),l.oc("ngForOf",e.listOfCategoryFilter),l.Eb(5),l.oc("ngIf",!e.regform.get("description").valid&&e.regform.get("description").touched),l.Eb(5),l.oc("ngIf",!e.regform.get("cookingTime").valid&&e.regform.get("cookingTime").touched),l.Eb(5),l.oc("ngIf",!e.regform.get("deliveryTime").valid&&e.regform.get("deliveryTime").touched),l.Eb(2),l.oc("ngIf",e.base64textString),l.Eb(1),l.oc("ngIf",!e.base64textString),l.Eb(1),l.oc("ngIf",e.usePicker),l.Eb(4),l.Gc(" ",e.editMode?"Update Food":"Add Food"," "),l.Eb(10),l.Fc(e.foodOfRestaurantLength),l.Eb(1),l.oc("ngForOf",e.listOfFoodFilter),l.Eb(1),l.oc("ngClass",l.sc(20,S,e.showScroll,!e.showScroll)))},directives:[r.q,r.P,r.i,r.B,r.N,r.k,n.n,n.i,n.c,r.u,r.y,r.t,r.Y,n.h,n.b,i.n,r.J,r.X,r.K,i.m,r.l,r.h,r.r,r.g,r.m,i.l,r.n,r.s,r.x,r.M,r.w,r.v],styles:[".picker[_ngcontent-%COMP%]{width:30rem;max-width:80%;height:20rem;max-height:30vh;border:1px solid var(--ion-color-primary);margin:auto;display:flex;justify-content:center;align-items:center}.image[_ngcontent-%COMP%]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}ion-item-sliding[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{--background:linear-gradient(90deg,#dfe2e6,#dee1e7 35%,#e0e4e9)}.label-class[_ngcontent-%COMP%]{--inner-padding-start:12px;--inner-padding-end:10px}.ion-input[_ngcontent-%COMP%], .label-class[_ngcontent-%COMP%], .label-class-al[_ngcontent-%COMP%]{margin-left:67px}.dx-lookup-field[_ngcontent-%COMP%]{padding:5px 23px 12px 54px;font-size:1em}ion-content[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%]{margin:5px 0}table.table-hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{cursor:pointer}.modal-wrapper[_ngcontent-%COMP%], .my-custom-class[_ngcontent-%COMP%]   .modal-wrapper[_ngcontent-%COMP%]{background:#222}.my-custom-class[_ngcontent-%COMP%]{--background:#222}ion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{padding:0;--border-radius:14px}ion-content[_ngcontent-%COMP%]   ion-searchbar[_ngcontent-%COMP%]{--border-radius:14px;--background:#f3f3f3;margin-top:-13px}ion-slides[_ngcontent-%COMP%]{height:50%}.swiper-slide[_ngcontent-%COMP%]{display:block}.swiper-slide[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:2.8rem}.swiper-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:50%;max-width:80%;margin:0 0 4px;pointer-events:none}b[_ngcontent-%COMP%]{font-weight:500}p[_ngcontent-%COMP%]{padding:0 4px;font-size:12px;line-height:1.5;color:var(--ion-color-step-600,#60646b)}p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:var(--ion-text-color,#000)}#container[_ngcontent-%COMP%]{-moz-columns:2;column-count:2;-moz-column-gap:10px;column-gap:10px}#container[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{width:100%;margin:0 0 10px;-moz-column-break-inside:avoid;break-inside:avoid;--border-radius:14px}.select-icon[_ngcontent-%COMP%]{width:19px;height:19px;margin-left:94px}.location-visible[_ngcontent-%COMP%]{opacity:1;transition:.5s}.location-hidden[_ngcontent-%COMP%]{opacity:0;transition:.5s}"]}),t})()}];let A=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.Ob({type:t}),t.\u0275inj=l.Nb({imports:[[c.j.forChild(T)],c.j]}),t})(),_=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.Ob({type:t}),t.\u0275inj=l.Nb({imports:[[i.c]]}),t})(),j=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.Ob({type:t}),t.\u0275inj=l.Nb({imports:[[i.c,n.d,r.Q,_,A,n.k]]}),t})()}}]);