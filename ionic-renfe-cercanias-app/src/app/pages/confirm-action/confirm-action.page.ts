import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-confirm-action',
  templateUrl: './confirm-action.page.html',
  styleUrls: ['./confirm-action.page.scss'],
})
export class ConfirmActionPage implements OnInit {
  endRoute: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.endRoute = this.router.getCurrentNavigation().extras.state.endRoute;
  }

  goToHomePage() {
    this.router.navigateByUrl(this.endRoute, { replaceUrl: true })
  }
}
