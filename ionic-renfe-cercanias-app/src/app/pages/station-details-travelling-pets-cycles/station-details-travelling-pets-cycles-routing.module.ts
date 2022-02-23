import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StationDetailsTravellingPetsCyclesPage } from './station-details-travelling-pets-cycles.page';

const routes: Routes = [
  {
    path: '',
    component: StationDetailsTravellingPetsCyclesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StationDetailsTravellingPetsCyclesPageRoutingModule {}
