import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainRouteInfoPageRoutingModule } from './train-route-info-routing.module';

import { TrainRouteInfoPage } from './train-route-info.page';

import { FareOptionAccordionComponent } from 'src/app/components/fare-option-accordion/fare-option-accordion.component';

import { RouteTimingsInfoComponent } from 'src/app/components/route-timings-info/route-timings-info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainRouteInfoPageRoutingModule
  ],
  declarations: [TrainRouteInfoPage, FareOptionAccordionComponent, RouteTimingsInfoComponent]
})
export class TrainRouteInfoPageModule {}
