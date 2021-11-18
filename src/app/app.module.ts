
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
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
