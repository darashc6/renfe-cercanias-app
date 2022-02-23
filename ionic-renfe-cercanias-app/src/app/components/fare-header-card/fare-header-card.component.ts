import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fare } from 'src/app/models/Fare';

@Component({
  selector: 'app-fare-header-card',
  templateUrl: './fare-header-card.component.html',
  styleUrls: ['./fare-header-card.component.scss'],
})
export class FareHeaderCardComponent implements OnInit {
  @Input() fareId: string = "";
  @Input() fareTitle: string = "";
  @Input() fareSubtitle: string = "";

  constructor(private router: Router) { }

  ngOnInit() { }

  goToFareDetailsPage() {
    this.router.navigateByUrl(`/app/home/fares/${this.fareId}`);
  }
}
