import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoInformationListPageRoutingModule } from './info-information-list-routing.module';

import { InfoInformationListPage } from './info-information-list.page';

import { InfoDetailsCardComponent } from 'src/app/components/info-details-card/info-details-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoInformationListPageRoutingModule
  ],
  declarations: [InfoInformationListPage, InfoDetailsCardComponent]
})
export class InfoInformationListPageModule {}
