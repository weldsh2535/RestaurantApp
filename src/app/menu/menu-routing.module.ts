import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';


const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'restaurant',
        loadChildren: () => import('../restaurant/restaurant.module').then(m => m.RestaurantPageModule)
      },
      {
        path: 'food',
        loadChildren: () => import('../food/food.module').then(m => m.FoodPageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('../account/account.module').then(m => m.AccountPageModule)
      },
      {
        path: 'food-content',
        loadChildren: () => import('../food-content/food-content.module').then(m => m.FoodContentPageModule)
      },
      {
        path: 'location',
        loadChildren: () => import('../location/location.module').then(m => m.LocationPageModule)
      },
      {
        path: 'cart-modal',
        loadChildren: () => import('../cart-modal/cart-modal.module').then(m => m.CartModalPageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'order-history',
        loadChildren: () => import('../order-history/order-history.module').then(m => m.OrderHistoryPageModule)
      },
      {
        path: 'restaurant-home',
        loadChildren: () => import('../restaurant-home/restaurant-home.module').then(m => m.RestaurantHomePageModule)
      },
      {
        path: 'restaurant-history',
        loadChildren: () => import('../restaurant-history/restaurant-history.module').then(m => m.RestaurantHistoryPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/menu/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/menu',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule { }
