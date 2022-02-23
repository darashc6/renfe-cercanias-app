import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StationDetailsTravellingPetsCyclesPageRoutingModule } from './station-details-travelling-pets-cycles-routing.module';

import { StationDetailsTravellingPetsCyclesPage } from './station-details-travelling-pets-cycles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StationDetailsTravellingPetsCyclesPageRoutingModule
  ],
  declarations: [StationDetailsTravellingPetsCyclesPage]
})
export class StationDetailsTravellingPetsCyclesPageModule {}
