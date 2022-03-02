import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RechargeUserRenfeCardPageRoutingModule } from './recharge-user-renfe-card-routing.module';

import { RechargeUserRenfeCardPage } from './recharge-user-renfe-card.page';

import { IconModule } from '@visurel/iconify-angular';

import { FareOptionAccordionModule } from 'src/app/modules/fare-option-accordion/fare-option-accordion.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RechargeUserRenfeCardPageRoutingModule,
    IconModule,
    FareOptionAccordionModule
  ],
  declarations: [RechargeUserRenfeCardPage]
})
export class RechargeUserRenfeCardPageModule { }
