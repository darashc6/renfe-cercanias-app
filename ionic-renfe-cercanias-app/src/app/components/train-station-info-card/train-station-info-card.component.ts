import { Component, Input, OnInit } from '@angular/core';
import { Station } from 'src/app/models/Station';

@Component({
  selector: 'app-train-station-info-card',
  templateUrl: './train-station-info-card.component.html',
  styleUrls: ['./train-station-info-card.component.scss'],
})
export class TrainStationInfoCardComponent implements OnInit {
  @Input() station: Station = null;

  constructor() { }

  ngOnInit() {}
}
