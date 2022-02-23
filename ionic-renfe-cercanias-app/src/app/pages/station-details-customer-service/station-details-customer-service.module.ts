import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StationDetailsCustomerServicePageRoutingModule } from './station-details-customer-service-routing.module';

import { StationDetailsCustomerServicePage } from './station-details-customer-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StationDetailsCustomerServicePageRoutingModule
  ],
  declarations: [StationDetailsCustomerServicePage]
})
export class StationDetailsCustomerServicePageModule {}
