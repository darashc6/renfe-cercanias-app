import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TicketQrCodeModalPageRoutingModule } from './ticket-qr-code-modal-routing.module';

import { TicketQrCodeModalPage } from './ticket-qr-code-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TicketQrCodeModalPageRoutingModule
  ],
  declarations: [TicketQrCodeModalPage]
})
export class TicketQrCodeModalPageModule {}
