import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertController, IonItemSliding, Platform } from '@ionic/angular';
import { Account } from 'src/Table/table';
import { AccountService } from '../Service/account.service';
import { SharedService } from '../Service/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  regform = this.fb.group({});
  accountId: number;
  editMode: boolean;
  SelectedCustomerId: string;
  listOfAccount: Account[];
  usePicker: boolean;
  latitude: any;
  longtiude: any;
  constructor(private fb: FormBuilder,
              private accountService: AccountService,
              private alertController: AlertController,
              private platform: Platform,
              private sharedService: SharedService,
              private router: Router) { }

  ngOnInit() {
    this.regform = this.fb.group({
      email: ['', Validators.email],
      phonenumber: ['', Validators.required],
      password: ['', Validators.required],
      fullName: ['', Validators.required],
      locationId: [''],
      type: [''],
      active: ['']
    });
    if ((this.platform.is('mobile') && !this.platform.is('hybrid')) ||
      this.platform.is('desktop')
    ) {
      this.usePicker = true;
    }
    this.getAccount();
    this.sharedService.location.subscribe(res => {
      this.latitude = res.lat;
      this.longtiude = res.lon;
      console.log(res);
    });
  }
  getAccount() {
    this.accountService.getAllAccount().subscribe(res => {
      this.listOfAccount = res;
      console.log(res);
    });
  }
  selectType(event) {
    const active = this.regform.get('active').value;
    this.accountService.getAllAccount().subscribe(res => {
      if (active !== '') {
        this.listOfAccount = res.filter(c => c.type === event && c.active === active);
      }
      else {
        this.listOfAccount = res.filter(c => c.type === event);
      }
    });
  }
  selectActive(event) {
    const type = this.regform.get('type').value;
    this.accountService.getAllAccount().subscribe(res => {
      if (type !== '') {
        this.listOfAccount = res.filter(c => c.active === event && c.type === type);
      }
      else {
        this.listOfAccount = res.filter(c => c.active === event);
      }
    });
  }
  openLocation() {
    this.sharedService.status.next('account');
    this.router.navigate(['/menu/location']);
  }
  SaveAccount() {
    if (this.regform.valid) {
      const locationData = {
        latitude: this.latitude,
        longtude: this.longtiude
      };
      this.regform.get('locationId').setValue(locationData);
      if (!this.accountId) {
        this.accountService.create(this.regform.value).subscribe(res => {
          alert(res.toString());
        });
      }
      else {
        const data = {
          id: this.accountId,
          email: this.regform.get('email').value,
          phonenumber: this.regform.get('phonenumber').value,
          password: this.regform.get('password').value,
          fullName: this.regform.get('fullName').value,
          locationId: this.regform.get('locationId').value,
          type: this.regform.get('type').value,
          active: this.regform.get('active').value
        };
        this.accountService.updateAccount(data).subscribe(res => {
          alert(res.toString());
        });
      }
      this.regform.reset();
      this.presentAlert();
      this.accountId = null;
    }
    else {
      this.ErrorAlert();
    }
  }
  edit(account: Account, sliding: IonItemSliding) {
    this.editMode = true;
    this.accountId = account.id;
    this.regform.get('fullName').setValue(account.fullName);
    this.regform.get('locationId').setValue(account.locationId);
    this.regform.get('email').setValue(account.email);
    this.regform.get('password').setValue(account.password);
    this.regform.get('phonenumber').setValue(account.phonenumber);
    this.regform.get('active').setValue(account.active);
    this.regform.get('type').setValue(account.type);
    sliding.close();
  }
  delete(account: Account, sliding: IonItemSliding) {
    this.presentAlertConfirm(account);
    sliding.close();
  }
  async presentAlertConfirm(account: Account) {
    const alert1 = await this.alertController.create({
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
            this.accountService.removeAccount(account.id).then(res => {
              alert(res.toString());
            });
            this.regform.reset();
            this.accountId = null;
          }
        }
      ]
    });

    await alert1.present();
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
