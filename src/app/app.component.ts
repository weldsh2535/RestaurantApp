
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {  AlertController, NavController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './Service/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
declare var telegramBot;
@Component({
  selector: 'app-root',
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  coordinates: any;
  @ViewChild('script', {static: true}) script: ElementRef;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private authServices:AuthService,
    private alertCtrl:AlertController,
    private modalService: NgbModal
  ) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngAfterViewInit() {
   // this.convertToScript();
  }
  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
    }
 }
    
}
