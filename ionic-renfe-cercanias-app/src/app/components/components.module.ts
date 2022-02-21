import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRenfeCardComponent } from './user-renfe-card/user-renfe-card.component';

@NgModule({
  declarations: [
    UserRenfeCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserRenfeCardComponent
  ]
})
export class ComponentsModule { }
