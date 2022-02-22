import { Component, Input, OnInit } from '@angular/core';
import { Info } from 'src/app/models/Info';

@Component({
  selector: 'app-info-details-card',
  templateUrl: './info-details-card.component.html',
  styleUrls: ['./info-details-card.component.scss'],
})
export class InfoDetailsCardComponent implements OnInit {
  @Input()
  info: Info = null;

  constructor() { }

  ngOnInit() {
  }

}
