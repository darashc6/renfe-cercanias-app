import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainLineDetailsPagePageRoutingModule } from './train-line-details-page-routing.module';

import { TrainLineDetailsPagePage } from './train-line-details-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainLineDetailsPagePageRoutingModule
  ],
  declarations: [TrainLineDetailsPagePage]
})
export class TrainLineDetailsPagePageModule {}
