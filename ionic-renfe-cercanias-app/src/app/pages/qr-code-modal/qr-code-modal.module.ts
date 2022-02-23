import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrCodeModalPageRoutingModule } from './qr-code-modal-routing.module';

import { QrCodeModalPage } from './qr-code-modal.page';

import { RenfeCardComponent } from 'src/app/components/renfe-card/renfe-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrCodeModalPageRoutingModule
  ],
  declarations: [QrCodeModalPage, RenfeCardComponent]
})
export class QrCodeModalPageModule {}
