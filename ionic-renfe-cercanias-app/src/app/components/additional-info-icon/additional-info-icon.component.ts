import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-additional-info-icon',
  templateUrl: './additional-info-icon.component.html',
  styleUrls: ['./additional-info-icon.component.scss'],
})
export class AdditionalInfoIconComponent implements OnInit {
  @Input() info: string = "";
  customCssColor: string = "";

  constructor() {
  }

  ngOnInit() {
    this.checkInfo();
  }

  checkInfo() {
    if (this.info === 'C1') {
      this.customCssColor = 'light-blue';
    }

    if (this.info === 'C2') {
      this.customCssColor = 'darker-green';
    }
  }
}
