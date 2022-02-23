import { Component, OnInit } from '@angular/core';
import { Fare } from 'src/app/models/Fare';
import { FareService } from 'src/app/services/fare/fare.service';

@Component({
  selector: 'app-fares',
  templateUrl: './fares.page.html',
  styleUrls: ['./fares.page.scss'],
})
export class FaresPage implements OnInit {
  fareList: Fare[] = [];

  constructor(private fareService: FareService) { }

  ngOnInit() {
    this.getFares();
  }

  getFares() {
    this.fareService.getFares().subscribe(fares => this.fareList = fares);
  }
}
