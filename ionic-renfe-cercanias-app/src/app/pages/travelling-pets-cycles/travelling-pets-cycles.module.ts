import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TravellingPetsCyclesPageRoutingModule } from './travelling-pets-cycles-routing.module';

import { TravellingPetsCyclesPage } from './travelling-pets-cycles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TravellingPetsCyclesPageRoutingModule
  ],
  declarations: [TravellingPetsCyclesPage]
})
export class TravellingPetsCyclesPageModule {}
