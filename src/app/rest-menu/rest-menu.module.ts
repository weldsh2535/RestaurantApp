import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestMenuPageRoutingModule } from './rest-menu-routing.module';

import { RestMenuPage } from './rest-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestMenuPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RestMenuPage]
})
export class RestMenuPageModule {}
