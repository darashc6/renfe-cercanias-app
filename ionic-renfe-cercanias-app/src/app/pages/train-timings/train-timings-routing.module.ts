import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainTimingsPage } from './train-timings.page';

const routes: Routes = [
  {
    path: '',
    component: TrainTimingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainTimingsPageRoutingModule {}
