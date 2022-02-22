import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { QrCodeModalPage } from 'src/app/pages/qr-code-modal/qr-code-modal.page';

@Component({
  selector: 'app-user-renfe-card',
  templateUrl: './user-renfe-card.component.html',
  styleUrls: ['./user-renfe-card.component.scss'],
})
export class UserRenfeCardComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  async showQrModal() {
    const modal = await this.modalController.create({
      component: QrCodeModalPage,
      breakpoints: [0, 1],
      initialBreakpoint: 1
    });

    await modal.present();
  }
}
