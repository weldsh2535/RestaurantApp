import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountDetailsPageRoutingModule } from './account-details-routing.module';

import { AccountDetailsPage } from './account-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountDetailsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AccountDetailsPage]
})
export class AccountDetailsPageModule {}
