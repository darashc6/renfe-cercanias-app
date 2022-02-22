import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RechargeUserRenfeCardPage } from './recharge-user-renfe-card.page';

const routes: Routes = [
  {
    path: '',
    component: RechargeUserRenfeCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RechargeUserRenfeCardPageRoutingModule {}
