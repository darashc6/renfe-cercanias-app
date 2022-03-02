import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchTrainTimingsFormComponent } from 'src/app/components/search-train-timings-form/search-train-timings-form.component';
import { IonicModule } from '@ionic/angular';
import { IconModule } from '@visurel/iconify-angular';


@NgModule({
  declarations: [SearchTrainTimingsFormComponent],
  imports: [
    CommonModule,
    IonicModule,
    IconModule
  ],
  exports: [SearchTrainTimingsFormComponent]
})
export class SearchTrainTimingsFormModule { }
