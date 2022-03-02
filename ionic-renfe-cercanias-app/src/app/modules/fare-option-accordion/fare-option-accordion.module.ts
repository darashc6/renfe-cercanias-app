import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { FareOptionAccordionComponent } from 'src/app/components/fare-option-accordion/fare-option-accordion.component';

@NgModule({
  declarations: [FareOptionAccordionComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [FareOptionAccordionComponent]
})
export class FareOptionAccordionModule { }
