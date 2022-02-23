import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';

import { UserRenfeCardComponent } from 'src/app/components/user-renfe-card/user-renfe-card.component';
import { ProfileOptionBtnComponent } from 'src/app/components/profile-option-btn/profile-option-btn.component';

import { IconModule } from '@visurel/iconify-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    IconModule
  ],
  exports: [],
  declarations: [ProfilePage, UserRenfeCardComponent, ProfileOptionBtnComponent]
})
export class ProfilePageModule { }
