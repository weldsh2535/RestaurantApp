import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodContentPage } from './food-content.page';

const routes: Routes = [
  {
    path: '',
    component: FoodContentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodContentPageRoutingModule {}
