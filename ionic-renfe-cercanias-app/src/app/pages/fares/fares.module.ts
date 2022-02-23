import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaresPageRoutingModule } from './fares-routing.module';

import { FaresPage } from './fares.page';

import { FareHeaderCardComponent } from 'src/app/components/fare-header-card/fare-header-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaresPageRoutingModule
  ],
  declarations: [FaresPage, FareHeaderCardComponent]
})
export class FaresPageModule { }
