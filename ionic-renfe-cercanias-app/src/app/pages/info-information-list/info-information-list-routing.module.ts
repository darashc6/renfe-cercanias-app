import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoInformationListPage } from './info-information-list.page';

const routes: Routes = [
  {
    path: '',
    component: InfoInformationListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoInformationListPageRoutingModule {}
