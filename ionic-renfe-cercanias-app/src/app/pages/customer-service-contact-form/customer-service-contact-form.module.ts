import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CustomFormInputModule } from 'src/app/modules/custom-form-input/custom-form-input.module';

import { CustomerServiceContactFormPageRoutingModule } from './customer-service-contact-form-routing.module';

import { CustomerServiceContactFormPage } from './customer-service-contact-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CustomerServiceContactFormPageRoutingModule,
    CustomFormInputModule
  ],
  declarations: [CustomerServiceContactFormPage]
})
export class CustomerServiceContactFormPageModule { }
