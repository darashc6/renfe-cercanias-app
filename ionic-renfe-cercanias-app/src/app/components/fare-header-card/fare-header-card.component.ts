import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    this.router.navigateByUrl(`home/fares/${this.fareId}`);
  }
}
