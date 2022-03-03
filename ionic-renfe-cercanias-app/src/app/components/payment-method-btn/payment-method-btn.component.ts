import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-method-btn',
  templateUrl: './payment-method-btn.component.html',
  styleUrls: ['./payment-method-btn.component.scss'],
})
export class PaymentMethodBtnComponent implements OnInit {
  @Input() icon: string = '';
  @Input() name: string = '';
  @Input() endRoute: string = '';

  constructor(private router: Router) { }

  ngOnInit() { }

  goToConfirmPage() {
    this.router.navigateByUrl('profile/recharge/confirm', { state: { endRoute: this.endRoute } })
  }
}
