import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainLinesPageRoutingModule } from './train-lines-routing.module';

import { TrainLinesPage } from './train-lines.page';

import { TrainLineInfoCardComponent } from 'src/app/components/train-line-info-card/train-line-info-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainLinesPageRoutingModule
  ],
  declarations: [TrainLinesPage, TrainLineInfoCardComponent]
})
export class TrainLinesPageModule { }
