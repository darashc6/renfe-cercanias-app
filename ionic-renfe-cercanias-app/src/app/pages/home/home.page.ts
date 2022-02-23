import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  stationDetailsDataList: any[] = [
    {
      imgUrl: '../../../assets/cercanias-viajar-con-header-img.jpeg',
      title: 'Viajar con',
      subtitle: 'Mira las condiciones de viaje para mascotas y bicicletas.',
      nextPageUrl: 'TODO'
    },
    {
      imgUrl: '../../../assets/cercanias-estaciones-lineas-header-img.jpeg',
      title: 'Estaciones y líneas',
      subtitle: 'Mira el recorrido de las líneas y sus correspondencias.',
      nextPageUrl: 'TODO'
    },
    {
      imgUrl: '../../../assets/cercanias-tarifas-header-img.jpeg',
      title: 'Tarifas',
      subtitle: 'Consulta los billetes, descuentos y abonos disponibles para viajar en Cercanías.',
      nextPageUrl: 'TODO'
    },
    {
      imgUrl: '../../../assets/cercanias-atencion-cliente-header-img.jpeg',
      title: 'Atención al Cliente',
      subtitle: 'Resuelve tus dudas sobre Cercanías o ponte en contacto con nosotros.',
      nextPageUrl: 'TODO'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
