import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormInputModule } from 'src/app/modules/custom-form-input/custom-form-input.module';

import { IonicModule } from '@ionic/angular';

import { EditProfilePageRoutingModule } from './edit-profile-routing.module';

import { EditProfilePage } from './edit-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditProfilePageRoutingModule,
    CustomFormInputModule
  ],
  declarations: [EditProfilePage]
})
export class EditProfilePageModule { }
