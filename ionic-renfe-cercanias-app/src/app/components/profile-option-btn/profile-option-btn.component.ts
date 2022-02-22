import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-option-btn',
  templateUrl: './profile-option-btn.component.html',
  styleUrls: ['./profile-option-btn.component.scss'],
})
export class ProfileOptionBtnComponent implements OnInit {
  @Input() btnIcon: string = "";
  @Input() btnLabel: string = "";
  @Input() optionRoute: string = "";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToSettingsPage() {
    this.router.navigateByUrl(this.optionRoute);
  }
}
