import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './components/customer/add-customer/add-customer.component';
import { CustomerGridComponent } from './components/customer/customer-grid/customer-grid.component';
import { ShowCustomerComponent } from './components/customer/show-customer/show-customer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ImpressumComponent } from './components/impressum/impressum.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'addCustomer', component: AddCustomerComponent },
  { path: 'customers', component: CustomerGridComponent },
  { path: 'customer', component: ShowCustomerComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
