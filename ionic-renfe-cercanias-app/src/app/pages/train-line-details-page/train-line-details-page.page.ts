import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainLine } from 'src/app/models/TrainLine';
import { TrainLineService } from 'src/app/services/train-line/train-line.service';

@Component({
  selector: 'app-train-line-details-page',
  templateUrl: './train-line-details-page.page.html',
  styleUrls: ['./train-line-details-page.page.scss'],
})
export class TrainLineDetailsPagePage implements OnInit {
  private trainLine: TrainLine = null;

  constructor(private trainLineService: TrainLineService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getTrainLine();
  }

  getTrainLine() {
    let trainLineId = this.activatedRoute.snapshot.paramMap.get('id');

    this.trainLineService.getTrainLine(trainLineId).subscribe(trainLine => this.trainLine = trainLine);  }
}
