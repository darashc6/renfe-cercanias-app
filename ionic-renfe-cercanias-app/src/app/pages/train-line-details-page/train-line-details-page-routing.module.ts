import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainLineDetailsPagePage } from './train-line-details-page.page';

const routes: Routes = [
  {
    path: '',
    component: TrainLineDetailsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainLineDetailsPagePageRoutingModule {}
