import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StationDetailsTrainLinesPageRoutingModule } from './station-details-train-lines-routing.module';

import { StationDetailsTrainLinesPage } from './station-details-train-lines.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StationDetailsTrainLinesPageRoutingModule
  ],
  declarations: [StationDetailsTrainLinesPage]
})
export class StationDetailsTrainLinesPageModule {}
