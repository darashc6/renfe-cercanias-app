import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-payment-method',
  templateUrl: './select-payment-method.page.html',
  styleUrls: ['./select-payment-method.page.scss'],
})
export class SelectPaymentMethodPage implements OnInit {
  endRoute: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.endRoute = this.router.getCurrentNavigation().extras.state.endRoute;
  }

}
