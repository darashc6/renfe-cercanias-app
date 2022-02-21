import { Component } from '@angular/core';
import { IconService } from '@visurel/iconify-angular';
import { appIcons } from 'src/assets/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private iconService: IconService) {
    iconService.registerAll(appIcons);
  }
}
