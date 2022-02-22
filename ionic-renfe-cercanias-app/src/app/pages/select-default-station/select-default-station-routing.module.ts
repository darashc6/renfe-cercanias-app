import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectDefaultStationPage } from './select-default-station.page';

const routes: Routes = [
  {
    path: '',
    component: SelectDefaultStationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectDefaultStationPageRoutingModule {}
