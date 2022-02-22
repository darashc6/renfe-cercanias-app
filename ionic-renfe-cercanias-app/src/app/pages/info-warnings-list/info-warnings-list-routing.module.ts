import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoWarningsListPage } from './info-warnings-list.page';

const routes: Routes = [
  {
    path: '',
    component: InfoWarningsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoWarningsListPageRoutingModule {}
