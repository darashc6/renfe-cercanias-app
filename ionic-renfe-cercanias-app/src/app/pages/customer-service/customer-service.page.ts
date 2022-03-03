import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-service',
  templateUrl: './customer-service.page.html',
  styleUrls: ['./customer-service.page.scss'],
})
export class CustomerServicePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToContactFormPage() {
    this.router.navigateByUrl('home/customer-service/contact-form');
  }

}
