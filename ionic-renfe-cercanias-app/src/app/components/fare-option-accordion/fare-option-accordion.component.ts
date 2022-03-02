import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fare } from 'src/app/models/Fare';

@Component({
  selector: 'app-fare-option-accordion',
  templateUrl: './fare-option-accordion.component.html',
  styleUrls: ['./fare-option-accordion.component.scss'],
})
export class FareOptionAccordionComponent implements OnInit {
  @Input() fare: Fare = null;
  @Input() endRoute: string = '';

  constructor(private router: Router) { }

  ngOnInit() { }

  goToPaymentPage() {
    this.router.navigateByUrl('/app/profile/recharge/payment-method', { state: { endRoute: this.endRoute } })
  }

}
