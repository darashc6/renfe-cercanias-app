import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerServiceContactFormPageRoutingModule } from './customer-service-contact-form-routing.module';

import { CustomerServiceContactFormPage } from './customer-service-contact-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerServiceContactFormPageRoutingModule
  ],
  declarations: [CustomerServiceContactFormPage]
})
export class CustomerServiceContactFormPageModule {}
