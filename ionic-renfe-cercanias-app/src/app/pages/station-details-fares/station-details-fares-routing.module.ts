import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StationDetailsFaresPage } from './station-details-fares.page';

const routes: Routes = [
  {
    path: '',
    component: StationDetailsFaresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StationDetailsFaresPageRoutingModule {}
