import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-station-radio-btn',
  templateUrl: './default-station-radio-btn.component.html',
  styleUrls: ['./default-station-radio-btn.component.scss'],
})
export class DefaultStationRadioBtnComponent implements OnInit {
  @Input() label: string = '';
  @Input() value: string = '';

  constructor() { }

  ngOnInit() {}

}
