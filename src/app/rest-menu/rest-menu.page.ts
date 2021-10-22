import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AlertController, IonItemSliding, Platform } from '@ionic/angular';
import { Restaurant, RestMenu } from 'src/Table/table';
import { RestMenuService } from '../Service/rest-menu.service';
import { RestaurantService } from '../Service/restaurant.service';

@Component({
  selector: 'app-rest-menu',
  templateUrl: './rest-menu.page.html',
  styleUrls: ['./rest-menu.page.scss'],
})
export class RestMenuPage implements OnInit {
  regform = this.fb.group({});
  listOfRestaurant: Restaurant[];
  listOfRestMenu: RestMenu[];
  defalutRestaurantId: string;
  editMode:boolean
  restMenuId: string;
  usePicker: boolean;
  constructor(private fb: FormBuilder,
    private restMenuService: RestMenuService,
    private restaurantService:RestaurantService,
    private alertController:AlertController,
    private platform:Platform ) { }

  ngOnInit() {
    this.regform = this.fb.group({
      RestaurantId: [""],
      Name: [""],
      Price: [""],
      CookingTime: [""],
      DeliveryTime: [""],
      Avaliable: [""],
      Favourite: [""]
    });
    if ((this.platform.is('mobile') && !this.platform.is('hybrid')) ||
    this.platform.is('desktop')
  ) {
    this.usePicker = true;
  }
    this.getRestaurant();
    this.getRestMenu();
  }
  getRestMenu(){
    this.restMenuService.getAllRestMenu().subscribe(res=>{
      this.listOfRestMenu =res;
    })
  }
  getRestaurant(){
    this.restaurantService.getAllRestaurant().subscribe(res=>{
      this.listOfRestaurant = res;
      this.defalutRestaurantId = res[0].Name
    })
  }

  saveRestaurant(){
   if(this.regform.valid){
     if(!this.restMenuId){
       this.restMenuService.create(this.regform.value)
     }
     else{
       this.restMenuService.updateRestMenu(this.regform.value,this.restMenuId);
     }
     this.regform.reset();
     this.presentAlert();
   }
   else{
     this.ErrorAlert();
   }
  }
  edit(restMenu:RestMenu,slide:IonItemSliding){
    this.editMode = true;
    this.restMenuId = restMenu.id;
    this.regform.get('Name').setValue(restMenu.name);
    this.regform.get('Price').setValue(restMenu.price);
    this.regform.get('CookingTime').setValue(restMenu.cookingTime);
    this.regform.get('DeliveryTime').setValue(restMenu.deliveryTime);
    this.regform.get('Favourite').setValue(restMenu.favourite);
    this.regform.get('RestaurantId').setValue(restMenu.restaurantId);
    this.regform.get('Avaliable').setValue(restMenu.avaliable);
    slide.close();
  }
  delete(restMenu:RestMenu,slide:IonItemSliding){
  this.presentAlertConfirm(restMenu);
  slide.close();
  }
  async presentAlertConfirm(restMenu: RestMenu) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: '<strong>Are you sure you want delete?</strong>',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'OK',
          handler: () => {
            this.restMenuService.removeRestMenu(restMenu.id);
            this.regform.reset();
            this.restMenuId = null;
          }
        }
      ]
    });
    await alert.present();
  }
  async ErrorAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      // subHeader: 'Subtitle',
      message: 'Please Enter All field.',
      buttons: ['OK']
    });
  
    await alert.present();
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Account',
      // subHeader: 'Subtitle',
      message: 'Account Saved successfully.',
      buttons: ['OK']
    });
  
    await alert.present();
  }
}
