import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserTicketsPageRoutingModule } from './user-tickets-routing.module';

import { UserTicketsPage } from './user-tickets.page';

import { TicketInfoCardComponent } from 'src/app/components/ticket-info-card/ticket-info-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserTicketsPageRoutingModule
  ],
  declarations: [UserTicketsPage, TicketInfoCardComponent]
})
export class UserTicketsPageModule {}
