import { Component, OnInit } from '@angular/core';
import { Fare } from 'src/app/models/Fare';
import { FareService } from 'src/app/services/fare/fare.service';

@Component({
  selector: 'app-train-route-info',
  templateUrl: './train-route-info.page.html',
  styleUrls: ['./train-route-info.page.scss'],
})
export class TrainRouteInfoPage implements OnInit {
  basicFares: Fare[] = [];
  route: any[] = [
    {
      station: 'Fuengirola',
      time: '13:40'
    },
    {
      station: 'Los Boliches',
      time: '13:44'
    },
    {
      station: 'Torreblanca',
      time: '13:47'
    },
    {
      station: 'Carvajal',
      time: '13:49'
    },
    {
      station: 'Torremuelle',
      time: '13:52'
    },
    {
      station: 'Benalmádena',
      time: '13:55'
    },
    {
      station: 'El Pinillo',
      time: '13:58'
    },
    {
      station: 'Montemar Alto',
      time: '14:01'
    },
    {
      station: 'Torremolinos',
      time: '14:03'
    },
    {
      station: 'La Colina',
      time: '14:06'
    },
    {
      station: 'Los Álamos',
      time: '14:07'
    },
    {
      station: 'Plaza Mayor',
      time: '14:09'
    },
    {
      station: 'Aeropuerto',
      time: '14:13'
    },
    {
      station: 'Guadalhorce',
      time: '14:16'
    },
  ]

  constructor(private fareService: FareService) { }

  ngOnInit() {
    this.getBasicFares();
  }

  getBasicFares() {
    this.fareService.getBasicFares().subscribe(fares => this.basicFares = fares)
  }

}
