import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FareOptionAccordionModule } from 'src/app/modules/fare-option-accordion/fare-option-accordion.module';

import { TrainRouteInfoPageRoutingModule } from './train-route-info-routing.module';

import { TrainRouteInfoPage } from './train-route-info.page';

import { RouteTimingsInfoComponent } from 'src/app/components/route-timings-info/route-timings-info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainRouteInfoPageRoutingModule,
    FareOptionAccordionModule
  ],
  declarations: [TrainRouteInfoPage, RouteTimingsInfoComponent]
})
export class TrainRouteInfoPageModule {}
