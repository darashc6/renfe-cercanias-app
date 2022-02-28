import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmActionPage } from './confirm-action.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmActionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmActionPageRoutingModule {}
