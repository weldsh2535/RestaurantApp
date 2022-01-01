import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Plugins, CameraSource, CameraResultType } from '@capacitor/core';
import { AlertController, IonContent, IonItemSliding, LoadingController, ModalController, Platform } from '@ionic/angular';
import { Category, Food, Restaurant } from 'src/Table/table';
import { CategoryService } from '../Service/category.service';
import { FoodService } from '../Service/food.service';
import { RestaurantService } from '../Service/restaurant.service';
@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss'],
})
export class FoodPage implements OnInit {
  @ViewChild('filePicker', { static: false }) filePickerRef: ElementRef<HTMLInputElement>;
  @ViewChild('pageTop') pageTop: IonContent
  usePicker = false;
  regform = this.fb.group({});
  foodId: number;
  listOfFood: Food[];
  editMode: boolean;
  base64textString: string;
  itemType = "Food"
  listOfCategory: Category[];
  SelectedCategoryId: string;
  SelectedRestaurantId: number
  listOfRestaurant: Restaurant[];
  listOfCategoryFilter: any[] = [];
  listOfFoodFilter: any[];
  foodOfRestaurantLength: number;
  id: any;
  generatefoodId: string = '0';
  foodIdOfGenerate: string = "";
  showScroll: boolean = false
  public pageScroller() {
    this.pageTop.scrollToTop();
  }
  constructor(private fb: FormBuilder,
    private foodService: FoodService,
    private alertController: AlertController,
    private platform: Platform,
    private modalController: ModalController,
    private categoryService: CategoryService,
    private restaurantservice: RestaurantService,
    private loadingController:LoadingController) {
    this.getCategory();
  }

  async ngOnInit() {
    this.regform = this.fb.group({
      name: ["", Validators.required],
      price: ["", Validators.required],
      description: [""],
      cookingTime: ["", Validators.required],  //cooctime lrft 15min
      deliveryTime: ["", Validators.required],
      picture: ["", Validators.required],
      type: ["", Validators.required],//food or drink or other
      categoryId: ["", Validators.required],
      restaurantId: ["", Validators.required],
      foodId: [""]
    })
    if ((this.platform.is('mobile') && !this.platform.is('hybrid')) ||
      this.platform.is('desktop')
    ) {
      this.usePicker = true;
    }
    this.getFood();
    this.getRestaurant();
    this.generateFoodId();
  }
  generateFoodId() {
    let No = 0;
    this.foodService.getAllFood().subscribe(async res => {
      if (this.listOfRestaurant != undefined) {
        let resObj = this.listOfRestaurant.find(c => c.accountId == +localStorage.getItem("userId"));
        let foodObj = await res.filter(c => c.restaurantId == (resObj.id).toString());
        if (foodObj.length == 0)
          No = 1;
        else
          No = foodObj.length + 1;
        this.generatefoodId = "VN-" + this.generatefoodId.padStart(4, '0') + No;
        console.log(this.generatefoodId);
      }
      else {
        this.getRefresh();
      }
    })
  }
  getRefresh() {
    setTimeout(() => {
      this.generateFoodId();
    }, 200);
  }
  getFood() {
    this.foodService.getAllFood().subscribe(async res => {
      this.listOfFood = await res;
      this.listOfFoodFilter = await res.filter(c => c.restaurantId == localStorage.getItem("userId"));
      this.foodOfRestaurantLength = this.listOfFoodFilter.length;
    })
  }
  getCategory() {
    this.categoryService.getAllCategory().subscribe(async res => {
      this.listOfCategory = await res;
    })
  }
  selectRestaurant($event) {
    this.id = $event;
    this.listOfCategoryFilter = [];
    if ($event !== undefined && $event != null) {
      this.foodService.getAllFood().subscribe(async res => {
        this.listOfFoodFilter = await res.filter(c => c.restaurantId == $event);
        this.foodOfRestaurantLength = this.listOfFoodFilter.length;
        let categories = this.listOfRestaurant.find(c => c.accountId == $event).categoryId;
        let restaurantId = this.listOfRestaurant.find(c => c.accountId == $event).resId;
        for (let i = 0; i < categories.length; i++) {
          let data = {
            id: this.listOfCategory.find(c => c.categoryName == categories[i]).id,
            categoryName: this.listOfCategory.find(c => c.categoryName == categories[i]).categoryName
          }
          this.listOfCategoryFilter.push(data)
          console.log(this.listOfCategoryFilter)
        }
        //to inital generate foodId
        if (this.foodIdOfGenerate.length == 0) {
          this.generatefoodId = "";
          let No = 0;
          if (this.listOfFood.filter(c => c.restaurantId == $event).length == 0)
            No = 1;
          else
            No = (this.listOfFood.filter(c => c.restaurantId == $event).length) + 1;
          this.generatefoodId = restaurantId + this.generatefoodId.padStart(0, '0') + No;
        }
      });
    }
  }
  getRestaurant() {
    this.restaurantservice.getAllRestaurant().subscribe(async res => {
      this.listOfRestaurant = await res.filter(c => c.accountId == +localStorage.getItem("userId"));
      this.SelectedRestaurantId = this.listOfRestaurant.find(c => c.accountId).accountId
    })
  }
  filter(ev) {
    this.foodService.getAllFood().subscribe(async res => {
      this.listOfFoodFilter = await res.filter(c => c.type == ev.target.value && c.restaurantId == (this.SelectedRestaurantId).toString());
      this.foodOfRestaurantLength = this.listOfFoodFilter.length;
    })
  }
  saveFood() {
    if (this.base64textString !== undefined) {
      this.regform.get('picture').setValue(this.base64textString);
    }
    let restaurantId = localStorage.getItem("userId");
    this.regform.get('restaurantId').setValue(restaurantId);
    this.regform.get('foodId').setValue(this.generatefoodId)
    if (this.regform.valid) {
      if (!this.foodId) {
        this.foodService.create(this.regform.value).subscribe(res => {
          console.log(res.toString());
          this.getFood();
        });
      }
      else {
        const data = {
          id: this.foodId,
          name: this.regform.get('name').value,
          price: this.regform.get('price').value,
          description: this.regform.get('description').value,
          cookingTime: this.regform.get('cookingTime').value,
          deliveryTime: this.regform.get('deliveryTime').value,
          picture: this.regform.get('picture').value,
          type: this.regform.get('type').value, // food or drink or other
          categoryId: this.regform.get('categoryId').value,
          restaurantId: this.regform.get('restaurantId').value,
          foodId: this.foodIdOfGenerate,
        };
        this.foodService.updateFood(data).subscribe(res => {
          console.log(res.toString());
          this.getFood();
        })
      }
      this.base64textString = '';
      this.foodId = null;
      this.regform.reset();
      this.presentAlert();
    }
    else {
      this.ErrorAlert();
    }
  }
  edit(food: Food, slidingItem: IonItemSliding) {
    this.editMode = true;
    this.foodId = food.id;
    this.foodIdOfGenerate = food.foodId;
    this.regform.get('name').setValue(food.name);
    this.regform.get('cookingTime').setValue(food.cookingTime);
    this.regform.get('deliveryTime').setValue(food.deliveryTime);
    this.regform.get('description').setValue(food.description);
    this.regform.get('price').setValue(food.price);
    this.regform.get('type').setValue(food.type);
    this.regform.get('categoryId').setValue(food.categoryId);
    this.regform.get('restaurantId').setValue(food.restaurantId);
    this.base64textString = food.picture;
    slidingItem.close();
  }
  delete(food: Food, slidingItem: IonItemSliding) {
    this.presentAlertConfirm(food);
    slidingItem.close();
  }
  async presentAlertConfirm(food: Food) {
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
            this.foodService.removeFood(food.id).then(res => {
              console.log(res.toString());
              this.getFood();
            });
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
  onPickImage() {
    if (this.usePicker == true) {
      // if (!Capacitor.isPluginAvailable('Camera')) {
      this.filePickerRef.nativeElement.click();
      return;
    }
    Plugins.Camera.getPhoto({
      quality: 50,
      source: CameraSource.Prompt,
      correctOrientation: true,
      height: 100,
      width: 100,
      resultType: CameraResultType.Base64
    })
      .then(image => {
        this.base64textString = 'data:image/png;base64,' + image.base64String;
      })
      .catch(error => {
        console.log(error);
        if (this.usePicker) {
          this.filePickerRef.nativeElement.click();
        }
        return false;
      });
  }
  onFileChosen(event: Event) {
    const pickedFile = (event.target as HTMLInputElement).files[0];
    if (!pickedFile) {
      return;
    }
    const fr = new FileReader();
    fr.onload = () => {
      const dataUrl = fr.result.toString();
      this.base64textString = dataUrl;
    };
    fr.readAsDataURL(pickedFile);
  }
  closeModal() {
    this.modalController.dismiss();
  }
  scroll(ev) {
    const offset = ev.detail.scrollTop;
    this.showScroll = offset > 300;
  }
}
