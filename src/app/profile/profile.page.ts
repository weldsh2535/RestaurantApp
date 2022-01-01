import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Plugins, CameraSource, CameraResultType } from '@capacitor/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Account } from 'src/Table/table';
import { AccountService } from '../Service/account.service';
import { AuthService } from '../Service/auth.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  @ViewChild('filePicker', { static: false }) filePickerRef: ElementRef<HTMLInputElement>;
  usePicker = false;
  regform = this.fb.group({});
  base64textString: string;
  photo: string;
  listOfAccount: Account[];
  fullName: string
  loader: any;
  constructor(private router: Router, private authServices: AuthService,
    private alertCtrl: AlertController, private accountService: AccountService,
    private fb: FormBuilder, private loadingController: LoadingController) { }

  ngOnInit() {
    this.getAccount();
  }
  getAccount() {
    this.accountService.getAllAccount().subscribe(async res => {
      this.listOfAccount = res;
      this.base64textString = res.find(c => c.id == +localStorage.getItem("userId")).photo;
      this.fullName = res.find(c => c.id == +localStorage.getItem("userId")).fullName
    }, async (err) => {
      await this.loader.dismiss().then();
      console.log(err);
    })
  }
  account() {
    this.router.navigate(["/account-details"]);
  }
  setting() {
    this.router.navigate(["/setting"]);
  }
  contact() {
    this.router.navigate(["/contact"]);
  }
  async logout(): Promise<void> {
    localStorage.setItem("userId", null);
    localStorage.setItem("fullName", null);
    localStorage.setItem("active", null);
    localStorage.setItem("roleType", null);
    this.router.navigateByUrl('login');
    async error => {
      const alert = await this.alertCtrl.create({
        message: error.message,
        buttons: [{ text: 'ok', role: 'cancel' }],
      });
      await alert.present();
    }
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
        let accounts = this.listOfAccount.find(c => c.id == +localStorage.getItem("userId"));
        let data = {
          id: accounts.id,
          email: accounts.email,
          phonenumber: accounts.phonenumber,
          password: accounts.password,
          fullName: accounts.fullName,
          locationId: accounts.locationId,
          active: accounts.active,
          type: accounts.type,
          photo: this.base64textString
        }
        this.accountService.updateAccount(data).subscribe(async res => {
          console.log(res);
        }, async (err) => {
          await this.loader.dismiss().then();
          console.log(err);
        })
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
}
