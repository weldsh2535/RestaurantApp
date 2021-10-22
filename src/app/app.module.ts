
import { RouteReuseStrategy } from '@angular/router';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import {
  DxLookupModule
} from 'devextreme-angular';
import { AppErrorHandler } from './common/app-error-handler';
import { File } from '@ionic-native/file/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { DatePipe } from '@angular/common';
// import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
const config= {
  apiKey: "AIzaSyDJ0I6Nu7J3wlns9EWmKIEMNuR_pVKmwaY",
  authDomain: "mtk-delivery.firebaseapp.com",
  projectId: "mtk-delivery",
  storageBucket: "mtk-delivery.appspot.com",
  messagingSenderId: "683827920990",
  appId: "1:683827920990:web:014c718f855977b94eb4cf",
  measurementId: "G-H6XJDHS7VQ"
}
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    DxLookupModule,
  
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyDJ0I6Nu7J3wlns9EWmKIEMNuR_pVKmwaY',
    //   libraries: ['places']
    // })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DatePipe,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: ErrorHandler, useClass: AppErrorHandler },
    File,
    SocialSharing,FileOpener
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
