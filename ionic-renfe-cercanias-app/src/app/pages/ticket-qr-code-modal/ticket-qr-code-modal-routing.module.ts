import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketQrCodeModalPage } from './ticket-qr-code-modal.page';

const routes: Routes = [
  {
    path: '',
    component: TicketQrCodeModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketQrCodeModalPageRoutingModule {}
