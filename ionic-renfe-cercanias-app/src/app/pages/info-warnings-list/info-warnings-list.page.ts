import { Component, OnInit } from '@angular/core';
import { Info } from 'src/app/models/Info';

@Component({
  selector: 'app-info-warnings-list',
  templateUrl: './info-warnings-list.page.html',
  styleUrls: ['./info-warnings-list.page.scss'],
})
export class InfoWarningsListPage implements OnInit {
  listWarnings: Info[] = [
    {
      title: "General - Málaga",
      date: "10/01/2022",
      message: "Con motivo de unas obras de mejora y adecuación, Torremolios permanecerá temporalmente cerrada a partir del día 10 de enero de 2022. Disculpen las molestias."
    },
    {
      title: "General - Málaga",
      date: "01/12/2021",
      message: "A causa de un robo y posterior incendio en la estación de Benaládena, han quedado afectados  los servicios de Cercanías de la línea C-1 del Núcleo de Málaga."
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
