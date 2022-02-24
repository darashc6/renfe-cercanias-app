import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainLineDetailsPagePageRoutingModule } from './train-line-details-page-routing.module';

import { TrainLineDetailsPagePage } from './train-line-details-page.page';

import { TrainStationInfoCardComponent } from 'src/app/components/train-station-info-card/train-station-info-card.component';

import { IconModule } from '@visurel/iconify-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainLineDetailsPagePageRoutingModule,
    IconModule
  ],
  declarations: [TrainLineDetailsPagePage, TrainStationInfoCardComponent]
})
export class TrainLineDetailsPagePageModule {}
