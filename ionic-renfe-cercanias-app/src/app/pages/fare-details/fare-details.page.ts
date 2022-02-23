import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fare } from 'src/app/models/Fare';
import { FareService } from 'src/app/services/fare/fare.service';

@Component({
  selector: 'app-fare-details',
  templateUrl: './fare-details.page.html',
  styleUrls: ['./fare-details.page.scss'],
})
export class FareDetailsPage implements OnInit {
  fare: Fare = null;

  constructor(private activatedRoute: ActivatedRoute, private fareService: FareService) { }

  ngOnInit() {
    this.getFare();
  }

  getFare() {
    let fareId = this.activatedRoute.snapshot.paramMap.get('id');
    this.fareService.getFare(fareId).subscribe(fare => this.fare = fare);
  }

}
