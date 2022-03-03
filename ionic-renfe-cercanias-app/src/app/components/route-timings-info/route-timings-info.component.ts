import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-timings-info',
  templateUrl: './route-timings-info.component.html',
  styleUrls: ['./route-timings-info.component.scss'],
})
export class RouteTimingsInfoComponent implements OnInit {
  @Input() stop: any = null;
  @Input() isLast: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
