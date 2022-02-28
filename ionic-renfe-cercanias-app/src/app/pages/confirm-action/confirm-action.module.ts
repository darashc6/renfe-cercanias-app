import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmActionPageRoutingModule } from './confirm-action-routing.module';

import { ConfirmActionPage } from './confirm-action.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmActionPageRoutingModule
  ],
  declarations: [ConfirmActionPage]
})
export class ConfirmActionPageModule {}
