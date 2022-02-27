import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectDefaultStationPageRoutingModule } from './select-default-station-routing.module';

import { SelectDefaultStationPage } from './select-default-station.page';

import { DefaultStationRadioBtnComponent } from 'src/app/components/default-station-radio-btn/default-station-radio-btn.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectDefaultStationPageRoutingModule
  ],
  declarations: [SelectDefaultStationPage, DefaultStationRadioBtnComponent]
})
export class SelectDefaultStationPageModule { }
