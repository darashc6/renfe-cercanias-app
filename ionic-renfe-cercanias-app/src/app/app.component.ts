import { Component } from '@angular/core';
import { IconService } from '@visurel/iconify-angular';
import { appIcons } from 'src/assets/icons';

import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(iconService: IconService) {
    iconService.registerAll(appIcons);

    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }
}
