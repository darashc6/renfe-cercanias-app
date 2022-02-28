import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainTimingsPageRoutingModule } from './train-timings-routing.module';

import { TrainTimingsPage } from './train-timings.page';

import { IconModule } from '@visurel/iconify-angular';

import { TrainTimingInfoCardComponent } from 'src/app/components/train-timing-info-card/train-timing-info-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainTimingsPageRoutingModule,
    IconModule
  ],
  declarations: [TrainTimingsPage, TrainTimingInfoCardComponent]
})
export class TrainTimingsPageModule { }
