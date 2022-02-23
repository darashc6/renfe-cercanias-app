import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainLinesPage } from './train-lines.page';

const routes: Routes = [
  {
    path: '',
    component: TrainLinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainLinesPageRoutingModule {}
