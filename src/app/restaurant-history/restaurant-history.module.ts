import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantHistoryPageRoutingModule } from './restaurant-history-routing.module';

import { RestaurantHistoryPage } from './restaurant-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantHistoryPageRoutingModule
  ],
  declarations: [RestaurantHistoryPage]
})
export class RestaurantHistoryPageModule {}
