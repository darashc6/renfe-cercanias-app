import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-train-timing-info-card',
  templateUrl: './train-timing-info-card.component.html',
  styleUrls: ['./train-timing-info-card.component.scss'],
})
export class TrainTimingInfoCardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  goToTrainRoutePage() {
    this.router.navigateByUrl('home/timings/route')
  }
}
