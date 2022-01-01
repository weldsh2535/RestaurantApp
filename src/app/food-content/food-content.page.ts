import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertController, IonItemSliding, Platform } from '@ionic/angular';
import { Food, FoodContent } from 'src/Table/table';
import { FoodContentService } from '../Service/food-content.service';
import { FoodService } from '../Service/food.service';

@Component({
  selector: 'app-food-content',
  templateUrl: './food-content.page.html',
  styleUrls: ['./food-content.page.scss'],
})
export class FoodContentPage implements OnInit {

  regform = this.fb.group({});
  foodId: number;
  listOfFoodContent: FoodContent[];
  editMode: boolean;
  base64textString: string;
  listOfFood: Food[];
  defualtFoodContent: string;
  usePicker: boolean;
  constructor(private fb: FormBuilder,
    private foodContentService: FoodContentService,
    private foodService:FoodService,
    private alertController: AlertController,
    private platform:Platform) { }

  ngOnInit() {
    this.regform = this.fb.group({
      FoodId: [""],
      ContentName: ["", Validators.required],
      ContentDescription: ["", Validators.required],
      qty: ["", Validators.required],
    });
    if ((this.platform.is('mobile') && !this.platform.is('hybrid')) ||
    this.platform.is('desktop')
  ) {
    this.usePicker = true;
  }
    this.getFoodContent();
    this.getFood()
  }
  getFood(){
    this.foodService.getAllFood().subscribe(res=>{
      this.listOfFood = res;
      this.defualtFoodContent = res[0].name
    })
  }
  getFoodContent() {
    this.foodContentService.getAllFoodContent().subscribe(res => {
      this.listOfFoodContent = res;
    })
  }
  saveFoodContent() {
   if (this.regform.valid) {
      if (!this.foodId) {
        this.foodContentService.create(this.regform.value);
      }
      else {
        this.foodContentService.updateFoodContent(this.regform.value)
      }
      this.regform.reset();
      this.foodId = null;
      this.presentAlert();
    }
    else {
      this.ErrorAlert();
    }
  }
  edit(food: FoodContent, slidingItem: IonItemSliding) {
    this.editMode = true;
    this.foodId = food.id;
    this.regform.get('FoodId').setValue(food.foodId);
    this.regform.get('ContentName').setValue(food.foodContentName);
    this.regform.get('ContentDescription').setValue(food.foodContentDescription);
    this.regform.get('qty').setValue(food.qty);
    slidingItem.close();
  }
  delete(food: FoodContent, slidingItem: IonItemSliding) {
    this.presentAlertConfirm(food);
    slidingItem.close();
  }
  async presentAlertConfirm(food: FoodContent) {
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
            this.foodContentService.removeFoodContent(food.id);
            this.regform.reset();
            this.foodId = null;
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
      header: 'Food ',
      // subHeader: 'Subtitle',
      message: 'Food Saved successfully.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
