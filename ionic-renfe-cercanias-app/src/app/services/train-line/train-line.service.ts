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
      cssColor: 'light-blue'
    },
    {
      id: 'malaga-c2',
      line: 'C2',
      originStation: 'Málaga Centro-Alameda',
      destinationStation: 'Álora',
      cssColor: 'darker-green'
    }

  ]

  constructor() { }

  getTrainLines() {
    return of(this.trainLines);
  }
}
