import { Component, OnInit } from '@angular/core';
import { Fare } from 'src/app/models/Fare';
import { FareService } from 'src/app/services/fare/fare.service';

@Component({
  selector: 'app-recharge-user-renfe-card',
  templateUrl: './recharge-user-renfe-card.page.html',
  styleUrls: ['./recharge-user-renfe-card.page.scss'],
})
export class RechargeUserRenfeCardPage implements OnInit {
  fareList: Fare[] = [];

  constructor(private fareService: FareService) { }

  ngOnInit() {
    this.getAvailablePasses()
  }

  switchSelectedStations() {
    // TODO
  }

  getAvailablePasses() {
    this.fareService.getAvailablePasses().subscribe(availablePasses => this.fareList = availablePasses)
  }
}
