import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-station-details-btn',
  templateUrl: './station-details-btn.component.html',
  styleUrls: ['./station-details-btn.component.scss'],
})
export class StationDetailsBtnComponent implements OnInit {
  @Input() imgUrl: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = ''
  @Input() nextPageUrl: string = '';

  constructor(private router: Router) { }

  ngOnInit() { }

  goToStationDetailsPage() {
    this.router.navigateByUrl(this.nextPageUrl);
  }
}
