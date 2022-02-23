import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StationDetailsCustomerServicePage } from './station-details-customer-service.page';

const routes: Routes = [
  {
    path: '',
    component: StationDetailsCustomerServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StationDetailsCustomerServicePageRoutingModule {}
