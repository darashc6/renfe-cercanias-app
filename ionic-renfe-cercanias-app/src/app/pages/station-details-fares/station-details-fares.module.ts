import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StationDetailsFaresPageRoutingModule } from './station-details-fares-routing.module';

import { StationDetailsFaresPage } from './station-details-fares.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StationDetailsFaresPageRoutingModule
  ],
  declarations: [StationDetailsFaresPage]
})
export class StationDetailsFaresPageModule {}
