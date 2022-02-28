import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainRouteInfoPage } from './train-route-info.page';

const routes: Routes = [
  {
    path: '',
    component: TrainRouteInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainRouteInfoPageRoutingModule {}
