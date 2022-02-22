import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrCodeModalPage } from './qr-code-modal.page';

const routes: Routes = [
  {
    path: '',
    component: QrCodeModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrCodeModalPageRoutingModule {}
