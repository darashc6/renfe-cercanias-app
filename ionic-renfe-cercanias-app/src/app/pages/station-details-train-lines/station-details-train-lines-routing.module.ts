import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StationDetailsTrainLinesPage } from './station-details-train-lines.page';

const routes: Routes = [
  {
    path: '',
    component: StationDetailsTrainLinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StationDetailsTrainLinesPageRoutingModule {}
