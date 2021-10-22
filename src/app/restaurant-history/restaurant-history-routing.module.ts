import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantHistoryPage } from './restaurant-history.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantHistoryPageRoutingModule {}
