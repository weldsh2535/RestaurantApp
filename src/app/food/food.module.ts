import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodPageRoutingModule } from './food-routing.module';

import { FoodPage } from './food.page';
import { RouterModule } from '@angular/router';
import { ShardDirectivesModule } from '../directive/shard-directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShardDirectivesModule,
    FoodPageRoutingModule,
    ReactiveFormsModule,
 
  ],
  declarations: [FoodPage],
})
export class FoodPageModule {}
