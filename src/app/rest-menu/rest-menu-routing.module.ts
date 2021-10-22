import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestMenuPage } from './rest-menu.page';

const routes: Routes = [
  {
    path: '',
    component: RestMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestMenuPageRoutingModule {}
