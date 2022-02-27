import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerServiceContactFormPage } from './customer-service-contact-form.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerServiceContactFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerServiceContactFormPageRoutingModule {}
