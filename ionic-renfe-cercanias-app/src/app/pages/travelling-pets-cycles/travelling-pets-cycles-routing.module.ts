import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TravellingPetsCyclesPage } from './travelling-pets-cycles.page';

const routes: Routes = [
  {
    path: '',
    component: TravellingPetsCyclesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravellingPetsCyclesPageRoutingModule {}
