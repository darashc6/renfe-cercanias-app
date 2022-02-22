import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoWarningsListPageRoutingModule } from './info-warnings-list-routing.module';

import { InfoWarningsListPage } from './info-warnings-list.page';

import { InfoDetailsCardComponent } from 'src/app/components/info-details-card/info-details-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoWarningsListPageRoutingModule
  ],
  declarations: [InfoWarningsListPage, InfoDetailsCardComponent]
})
export class InfoWarningsListPageModule {}
