import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RechargeUserRenfeCardPageRoutingModule } from './recharge-user-renfe-card-routing.module';

import { RechargeUserRenfeCardPage } from './recharge-user-renfe-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RechargeUserRenfeCardPageRoutingModule
  ],
  declarations: [RechargeUserRenfeCardPage]
})
export class RechargeUserRenfeCardPageModule {}
