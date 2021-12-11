import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, Platform } from '@ionic/angular';
import { Account, functionality } from 'src/Table/table';
import { AccountService } from '../Service/account.service';
import { AuthService } from '../Service/auth.service';
import { FunctionalityService } from '../Service/Functionality.service';
import { UserRoleService } from '../Service/userRole.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  public selectedIndex = 0;
  roleType: string;
  listOfFunctionality: functionality[];
  listOfUser: Account[];
  userName: any;
  transcation: boolean;
  ListOfMenu1: any[] = [];
  pageList: any[] = [];
  usePicker: boolean;
  listOfAccount: Account[];
  base64textString: string;
  loader: any;
  constructor(private authServices: AuthService,
    private router: Router,
    private alertCtrl: AlertController,
    private functionalityService: FunctionalityService,
    private userRoleService: UserRoleService,
    private accountService: AccountService,
    private platform: Platform,
    private loadingController: LoadingController) { }

  ngOnInit() {

    if ((this.platform.is('mobile') && !this.platform.is('hybrid')) ||
      this.platform.is('desktop')
    ) {
      this.usePicker = true;
    }
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      // this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
    this.ListOfMenu1 = [
      { title: 'restaurant', url: '/restaurant', icon: 'restaurant' },
      { title: 'order', url: '/order', icon: 'cart' },
      { title: 'Add food', url: '/food', icon: 'fast-food' },
      { title: 'food-content', url: '/food-content', icon: 'list' },
      { title: 'location', url: '/location', icon: 'locate' },
      { title: 'orders', url: '/restaurant-home', icon: 'cart' },
      { title: 'My orders', url: '/restaurant-history', icon: 'cart' },
      { title: 'profile', url: '/profile', icon: 'person' }
    ];
    this.getRoute();
    this.getAccount();
  }
  getAccount() {
    this.accountService.getAllAccount().subscribe(async res => {
      this.listOfAccount = res;
      this.base64textString = res.find(c => c.id == localStorage.getItem("userId")).photo;
    }, async (err) => {
      await this.loader.dismiss().then();
      console.log(err);
    })
  }
  getRoute() {
    this.functionalityService.getAllFunctionality().subscribe(async result => {
      this.listOfFunctionality = result;
      //console.log(result)
      if (result.length > 0) {
        this.roleType = localStorage.getItem("roleType");
        this.userName = localStorage.getItem("fullName");
        this.userRoleService.getAllUserRole().subscribe(res => {
          // console.log(res)
          let result = res.filter(c => c.userId == this.roleType);
          let active = localStorage.getItem("active");
          if (result.length > 0 && active == "true") {
            //To check transcation menu in user role
            result.forEach(element => {
              let isFound = this.listOfFunctionality.filter(c => c.id == +element.funId)
              if (isFound.length > 0) {
                let rol = this.ListOfMenu1.filter(c => c.title == isFound[0].compName)[0];
                if (rol) {
                  let y = {
                    title: isFound[0].compName,
                    url: rol.url,
                    icon: rol.icon
                  }
                  this.pageList.push(y);
                }
              }
            });
          }
        })

      }
    }, async (err) => {
      await this.loader.dismiss().then();
      console.log(err);
    })
  }

  readPath1(path) {
    let pa = path.url
    this.router.navigate(["/menu/" + pa]);
  }
  async AlertInternet() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Internet',
      // subHeader: 'Subtitle',
      message: 'Please turn on wifi or data',
      buttons: ['OK']
    });

    await alert.present();
  }
  async logout() {
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
}
