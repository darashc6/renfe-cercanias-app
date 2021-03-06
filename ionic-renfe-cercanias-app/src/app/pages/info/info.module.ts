import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoPageRoutingModule } from './info-routing.module';

import { InfoPage } from './info.page';

import { InfoListIntroComponent } from 'src/app/components/info-list-intro/info-list-intro.component';

import { InfoDetailsCardComponent } from 'src/app/components/info-details-card/info-details-card.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoPageRoutingModule,
  ],
  declarations: [InfoPage, InfoListIntroComponent, InfoDetailsCardComponent]
})
export class InfoPageModule {}
