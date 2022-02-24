import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { TrainLine } from 'src/app/models/TrainLine';

@Injectable({
  providedIn: 'root'
})
export class TrainLineService {
  private trainLines: TrainLine[] = [
    {
      id: 'malaga-c1',
      line: 'C1',
      originStation: 'Málaga Centro-Alameda',
      destinationStation: 'Fuengirola',
      cssColor: 'light-blue',
      stations: [
        {
          name: 'Málaga Centro-Alameda',
          additionalInfo: [
            'accesible',
            'bus-stop'
          ]
        },
        {
          name: 'Málaga María Zambrano',
          additionalInfo: [
            'accesible',
            'bus-stop'
          ]
        },
        {
          name: 'Victoria Kent',
          additionalInfo: [
            'accesible',
            'bus-stop'
          ]
        },
        {
          name: 'Guadalhorce',
          additionalInfo: [
            'accesible',
          ]
        },
        {
          name: 'Aeropuerto',
          additionalInfo: [
            'accesible',
          ]
        },
        {
          name: 'Plaza Mayor',
          additionalInfo: [
            'accesible',
          ]
        },
        {
          name: 'Los Álamos',
          additionalInfo: [
            'accesible',
          ]
        },
        {
          name: 'La Colina',
          additionalInfo: [
            'accesible',
          ]
        },
        {
          name: 'Torremolinos',
          additionalInfo: [
            'bus-stop',
          ]
        },
        {
          name: 'Montemar Alto',
          additionalInfo: [
            'accesible',
          ]
        },
        {
          name: 'El Pinillo',
          additionalInfo: [
            'accesible',
          ]
        },
        {
          name: 'Benalmádena',
          additionalInfo: [
            'accesible',
          ]
        },
        {
          name: 'Torremuelle',
          additionalInfo: [
            'accesible',
          ]
        },
        {
          name: 'Carvajal',
          additionalInfo: [
            'accesible',
          ]
        },
        {
          name: 'Torreblanca',
          additionalInfo: [
            'accesible',
          ]
        },
        {
          name: 'Los Boliches',
          additionalInfo: [
            'accesible',
          ]
        },
        {
          name: 'Fuengirola',
          additionalInfo: [
            'accesible',
            'bus-stop'
          ]
        }
      ]
    },
    {
      id: 'malaga-c2',
      line: 'C2',
      originStation: 'Málaga Centro-Alameda',
      destinationStation: 'Álora',
      cssColor: 'darker-green',
      stations: [
        {
          name: 'Málaga Centro-Alameda',
          additionalInfo: [
            'accesible',
            'bus-stop'
          ]
        },
        {
          name: 'Málaga María Zambrano',
          additionalInfo: [
            'accesible',
            'bus-stop'
          ]
        },
        {
          name: 'Victoria Kent',
          additionalInfo: [
            'accesible',
            'bus-stop'
          ]
        },
        {
          name: 'Los Prados',
          additionalInfo: [
            'accesible'
          ]
        },
        {
          name: 'Campanillas',
          additionalInfo: [
            'accesible'
          ]
        },
        {
          name: 'Cártama',
          additionalInfo: [
            'accesible'
          ]
        },
        {
          name: 'Aljaima',
          additionalInfo: [
            'accesible'
          ]
        },
        {
          name: 'Pizarra',
          additionalInfo: [
            'accesible'
          ]
        },
        {
          name: 'Álora',
          additionalInfo: [
            'accesible'
          ]
        }
      ]
    }

  ]

  constructor() { }

  getTrainLines() {
    return of(this.trainLines);
  }

  getTrainLine(trainLineId: string) {
    let trainLine = this.trainLines.find((trainLine: TrainLine) => trainLine.id === trainLineId);
    return of (trainLine);
  }
}
