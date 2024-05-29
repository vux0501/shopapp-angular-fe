//import { OrderAdminComponent } from './components/admin/order/order.admin.component';

import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { OrderConfirmComponent } from './components/order-confirm/order-confirm.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products/:id', component: DetailProductComponent },
  { path: 'order-confirm', component: OrderConfirmComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
