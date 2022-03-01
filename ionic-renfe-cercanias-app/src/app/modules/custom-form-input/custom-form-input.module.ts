import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomFormInputComponent } from 'src/app/components/custom-form-input/custom-form-input.component';


@NgModule({
  declarations: [
    CustomFormInputComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CustomFormInputComponent
  ]
})
export class CustomFormInputModule { }
