import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-option-btn',
  templateUrl: './profile-option-btn.component.html',
  styleUrls: ['./profile-option-btn.component.scss'],
})
export class ProfileOptionBtnComponent implements OnInit {
  @Input() btnIcon: string = "";
  @Input() btnLabel: string = "";

  constructor() { }

  ngOnInit() {
  }

}
