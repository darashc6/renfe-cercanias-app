import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

import { StationDetailsBtnComponent } from 'src/app/components/station-details-btn/station-details-btn.component';

import { SearchTrainTimingsFormComponent } from 'src/app/components/search-train-timings-form/search-train-timings-form.component';

import { IconModule } from '@visurel/iconify-angular';
import { SearchTrainTimingsFormModule } from 'src/app/modules/search-train-timings-form/search-train-timings-form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SearchTrainTimingsFormModule
  ],
  declarations: [HomePage, StationDetailsBtnComponent]
})
export class HomePageModule { }
