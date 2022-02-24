import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainLineDetailsPagePageRoutingModule } from './train-line-details-page-routing.module';

import { TrainLineDetailsPagePage } from './train-line-details-page.page';

import { TrainStationInfoCardComponent } from 'src/app/components/train-station-info-card/train-station-info-card.component';

import { IconModule } from '@visurel/iconify-angular';

import { RenfeIconComponent } from 'src/app/components/renfe-icon/renfe-icon.component';

import { AdditionalInfoIconComponent } from 'src/app/components/additional-info-icon/additional-info-icon.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainLineDetailsPagePageRoutingModule,
    IconModule
  ],
  declarations: [TrainLineDetailsPagePage, TrainStationInfoCardComponent, RenfeIconComponent, AdditionalInfoIconComponent]
})
export class TrainLineDetailsPagePageModule { }
