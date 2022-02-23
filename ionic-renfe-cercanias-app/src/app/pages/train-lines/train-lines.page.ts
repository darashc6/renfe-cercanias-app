import { Component, OnInit } from '@angular/core';
import { TrainLine } from 'src/app/models/TrainLine';
import { TrainLineService } from 'src/app/services/train-line/train-line.service';

@Component({
  selector: 'app-train-lines',
  templateUrl: './train-lines.page.html',
  styleUrls: ['./train-lines.page.scss'],
})
export class TrainLinesPage implements OnInit {
  trainLines: TrainLine[] = [];

  constructor(private trainLineService: TrainLineService) { }

  ngOnInit() {
    this.getTrainLines();
  }

  getTrainLines() {
    this.trainLineService.getTrainLines().subscribe(trainLines => this.trainLines = trainLines);
  }

}
