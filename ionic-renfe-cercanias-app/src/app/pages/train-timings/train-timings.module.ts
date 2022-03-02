import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainTimingsPageRoutingModule } from './train-timings-routing.module';

import { TrainTimingsPage } from './train-timings.page';

import { TrainTimingInfoCardComponent } from 'src/app/components/train-timing-info-card/train-timing-info-card.component';
import { SearchTrainTimingsFormModule } from 'src/app/modules/search-train-timings-form/search-train-timings-form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainTimingsPageRoutingModule,
    SearchTrainTimingsFormModule
  ],
  declarations: [TrainTimingsPage, TrainTimingInfoCardComponent]
})
export class TrainTimingsPageModule { }
