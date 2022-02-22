import { Component, OnInit } from '@angular/core';
import { Info } from 'src/app/models/Info';

@Component({
  selector: 'app-info-information-list',
  templateUrl: './info-information-list.page.html',
  styleUrls: ['./info-information-list.page.scss'],
})
export class InfoInformationListPage implements OnInit {
  listInfo: Info[] = [
    {
      title: 'Mejora - Cercanias App',
      date: '07/06/2021',
      message: 'Renfe informa, con motivo de mejoras en la  App Cercanías, se incluye la posibilidad de de registrarse como usuario para la obtención de títulos, información actualizada sobre cambios en el servicio regular, accesibilidad y estacionamiento de nuestros trenes. Para más información, contacten a través de puntos de información en estaciones, www.renfe.com o en el 912 320 320.'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
