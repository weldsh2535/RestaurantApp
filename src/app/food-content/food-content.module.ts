import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodContentPageRoutingModule } from './food-content-routing.module';

import { FoodContentPage } from './food-content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodContentPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FoodContentPage]
})
export class FoodContentPageModule {}
