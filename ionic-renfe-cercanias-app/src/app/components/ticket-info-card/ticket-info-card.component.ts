import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TicketQrCodeModalPage } from 'src/app/pages/ticket-qr-code-modal/ticket-qr-code-modal.page';

@Component({
  selector: 'app-ticket-info-card',
  templateUrl: './ticket-info-card.component.html',
  styleUrls: ['./ticket-info-card.component.scss'],
})
export class TicketInfoCardComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() { }

  async showQrCode() {
    const modal = await this.modalController.create({
      component: TicketQrCodeModalPage,
      breakpoints: [0, 0.6],
      initialBreakpoint: 0.6
    });

    await modal.present();
  }

}
