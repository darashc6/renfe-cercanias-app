import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectPaymentMethodPageRoutingModule } from './select-payment-method-routing.module';

import { SelectPaymentMethodPage } from './select-payment-method.page';

import { PaymentMethodBtnComponent } from 'src/app/components/payment-method-btn/payment-method-btn.component';

import { IconModule } from '@visurel/iconify-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectPaymentMethodPageRoutingModule,
    IconModule
  ],
  declarations: [SelectPaymentMethodPage, PaymentMethodBtnComponent]
})
export class SelectPaymentMethodPageModule {}
