import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RestaurantService } from '../Service/restaurant.service';
import { Plugins, CameraSource, CameraResultType } from '@capacitor/core';
import { Account, Category, Restaurant } from 'src/Table/table';
import { AlertController, IonItemSliding, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { SharedService } from '../Service/shared.service';
import { LocationPage } from '../location/location.page';
import LocationPicker from "location-picker";
import { AccountService } from '../Service/account.service';
import { CategoryService } from '../Service/category.service';
interface Coordinates {
  address: string;
  latitude: number;
  longitude: number;
}
@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {
  coordinates: Coordinates;
  regform = this.fb.group({});
  base64textString: string;
  @ViewChild('filePicker', { static: false }) filePickerRef: ElementRef<HTMLInputElement>;
  usePicker = false;
  restaurantId: number;
  listOfRestaurant: Restaurant[];
  editMode: boolean
  latitude: any;
  longtiude: any;
  lp: LocationPicker;
  listOfAccount:Account[];
  listOfCategory: Category[];
  constructor(private fb: FormBuilder,
    private restaurantService: RestaurantService,
    private alertController: AlertController,
    private platform: Platform,
    private sharedService: SharedService,
    private accountService: AccountService,
    private router: Router,
    private categoryService:CategoryService) {
    this.coordinates = {} as Coordinates;
  }
  ngAfterViewInit() {
    this.sharedService.restaurant.subscribe(restaurant => {
      this.restaurantId = restaurant.id;
      this.regform.get('name').setValue(restaurant.name);
      this.regform.get('phoneNumber').setValue(restaurant.phoneNumber);
      this.regform.get('email').setValue(restaurant.email);
      this.regform.get('contactPerson').setValue(restaurant.contactPerson);
      this.regform.get('areaSpace').setValue(restaurant.areaSpace);
      this.regform.get('gm').setValue(restaurant.gm);
      this.regform.get('type').setValue(restaurant.type);
      this.regform.get('startWorkingHour').setValue(restaurant.startWorkingHour);
      this.regform.get('endWorkingHour').setValue(restaurant.endWorkingHour);
      this.regform.get('accountId').setValue(restaurant.accountId);
      this.regform.get('status').setValue(restaurant.status);
      this.regform.get('categoryId').setValue(restaurant.categoryId);
    })
  }
  ngOnInit() {
    this.regform = this.fb.group({
      name: ['', Validators.required],
      location: [''],
      type: ['', Validators.required],
      startWorkingHour: ['', Validators.required],
      endWorkingHour: ['', Validators.required],
      areaSpace: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      gm: ['', Validators.required],
      contactPerson: [''],
      email: ['', Validators.email],
      photo: [''],
      accountId: ['', Validators.required],
      status: ['', Validators.required],
      categoryId: [''],
      resId: ['']
    });
    if ((this.platform.is('mobile') && !this.platform.is('hybrid')) ||
      this.platform.is('desktop')
    ) {
      this.usePicker = true;
    }
    this.getAccount();
    this.getRestaurant();
    this.getCategory();
    this.sharedService.location.subscribe(res => {
      this.latitude = res.lat;
      this.longtiude = res.lon
      console.log(res)
    })
  }
  getCategory(){
    this.categoryService.getAllCategory().subscribe(res=>{
      this.listOfCategory = res;
    })
  }
  getRestaurant() {
    this.restaurantService.getAllRestaurant().subscribe(res => {
      this.listOfRestaurant = res;
    })
  }
  getAccount(){
    this.accountService.getAllAccount().subscribe(res=>{
      this.listOfAccount = res.filter(c=>c.type =="restaurant")
      console.log(this.listOfAccount);
    })
  }
  getFormatedStartTime(dateString){
    var date = new Date(dateString);
    var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    var am_pm = date.getHours() >= 12 ? "pm" : "am";
    var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let time = hours + ":" + minutes + " " + am_pm;
    this.regform.get('StartWorkingHour').setValue(time);
   // return time;
 }
 getFormatedEndTime(dateString){
  var date = new Date(dateString);
  var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  var am_pm = date.getHours() >= 12 ? "pm" : "am";
  var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  let time = hours + ":" + minutes + " " + am_pm;
  this.regform.get('EndWorkingHour').setValue(time);
 // return time;
}
  saveRestaurant() {
    let startWorkTime = this.regform.get('StartWorkingHour').value;
    //this.getFormatedStartTime(startWorkTime);
    let EndWorkingHour = this.regform.get('EndWorkingHour').value;
   // this.getFormatedEndTime(EndWorkingHour);
    if (this.base64textString !== undefined) {
      this.regform.get('photo').setValue(this.base64textString);
    }
    let data = {
      lat: this.latitude,
      lon: this.longtiude
    }
    this.regform.get('location').setValue(data);
    this.regform.get('resId').setValue('Res1');
    const accountId = this.regform.get('accountId').value;
    this.regform.get('accountId').setValue(+accountId);
    if (this.regform.valid) {
      if (!this.restaurantId) {
        this.restaurantService.create(this.regform.value)
      }
      else {
        const data = {
          id: this.restaurantId,
          name: this.regform.get('name').value,
          phoneNumber: this.regform.get('phoneNumber').value,
          email: this.regform.get('email').value,
          contactPerson: this.regform.get('contactPerson').value,
          areaSpace: this.regform.get('areaSpace').value,
          gm: this.regform.get('gm').value,
          type: this.regform.get('type').value,
          startWorkingHour: this.regform.get('startWorkingHour').value,
          endWorkingHour: this.regform.get('endWorkingHour').value,
          accountId: this.regform.get('accountId').value,
          status: this.regform.get('status').value,
          categoryId: this.regform.get('categoryId').value,
          location: this.regform.get('location').value,
          photo: this.regform.get('photo').value,
          resId: this.regform.get('resId').value
        };
        this.restaurantService.updateRestaurant(data).subscribe(res=>{
          alert(res.toString());
        })
      }
      this.base64textString = '';
      this.restaurantId = null;
      this.presentAlert();
      this.regform.reset();
    }
    else {
      this.ErrorAlert();
    }
  }
  edit(restaurant: Restaurant, slide: IonItemSliding) {
    this.editMode = true;
    this.restaurantId = restaurant.id;
    this.regform.get('name').setValue(restaurant.name);
    this.regform.get('phoneNumber').setValue(restaurant.phoneNumber);
    this.regform.get('email').setValue(restaurant.email);
    this.regform.get('contactPerson').setValue(restaurant.contactPerson);
    this.regform.get('areaSpace').setValue(restaurant.areaSpace);
    this.regform.get('gm').setValue(restaurant.gm);
    this.regform.get('type').setValue(restaurant.type);
    this.regform.get('startWorkingHour').setValue(restaurant.startWorkingHour);
    this.regform.get('endWorkingHour').setValue(restaurant.endWorkingHour);
    this.regform.get('status').setValue(restaurant.status);
    this.regform.get('categoryId').setValue(restaurant.categoryId);
    this.regform.get('location').setValue(restaurant.location);
    this.base64textString = restaurant.photo;
    this.sharedService.restaurant.next(restaurant);
    this.sharedService.location.next(restaurant.location)
    slide.close();
  }
  delete(restaurant: Restaurant, slide: IonItemSliding) {
    this.presentAlertConfirm(restaurant);
    slide.close();
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
  async presentAlertConfirm(restaurant: Restaurant) {
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
            this.restaurantService.removeRestaurant(restaurant.id);
            this.regform.reset();
            this.restaurantId = null;
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
      header: 'Restaurant',
      // subHeader: 'Subtitle',
      message: 'Restaurant Saved successfully.',
      buttons: ['OK']
    });

    await alert.present();
  }
  openLocation() {
    this.sharedService.status.next("restaurant");
    this.router.navigate(["/menu/location"]);
  }
  // selectActive(event) {
  //   let type = this.regform.get('accountId').value;
  //   this.accountService.getAllAccount().subscribe(res => {
  //     if (type !== "") {
  //       this.listOfAccount = res.filter(c => c.active == event && c.type == type);
  //     }
  //     else {
  //       this.listOfAccount = res.filter(c => c.active == event);
  //     }
  //   })
  // }

}
