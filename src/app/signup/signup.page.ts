import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Account } from 'src/Table/table';
import { AccountService } from '../Service/account.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  regform = this.fb.group({});
  accountId: any;
  fieldTextType: boolean;
  conformPassword:boolean;
  constructor(private fb: FormBuilder,
    private accountService: AccountService,
    private alertController: AlertController,
    private router: Router) { }

  ngOnInit() {
    this.regform = this.fb.group({
      FullName: ["", Validators.required],
      email: ["", Validators.required],
      phonenumber: ["", Validators.required],
      FirstTimeLocation: ["", Validators.required],
      password: ["", Validators.required],
      confirmPassword: ["", Validators.required],
      type: ['restaurant'],
      active:[""],
    })
  }
  registerAccount() {
    if (this.regform.get("password").value === this.regform.get("confirmPassword").value) {
      if (this.regform.valid) {
        if(this.regform.get("type").value === "customer"){
          this.regform.get("active").setValue("true");
          this.router.navigate(["/user"]);
        }
        else{
          this.regform.get("active").setValue("false");
          this.accountService.create(this.regform.value).subscribe(res => {
            console.log(res);
            this.router.navigate(["/menu/login"]);
          });
        }
        this.regform.reset();
      }
      else {
        this.ErrorAlert("Please Enter All field.");
      }
    }
    else{
      this.ErrorAlert("Password donot match");
    }
  }
  login() {
    this.router.navigate(["/login"]);
  }
  async presentAlertConfirm(account: Account) {
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
            this.accountService.removeAccount(account.id);
            this.regform.reset();
            this.accountId = null;
          }
        }
      ]
    });

    await alert.present();
  }
  async ErrorAlert(message) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      // subHeader: 'Subtitle',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
  conPassword(){
    this.conformPassword = !this.conformPassword;
  }
}
