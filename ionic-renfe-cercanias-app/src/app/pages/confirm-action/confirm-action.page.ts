import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-action',
  templateUrl: './confirm-action.page.html',
  styleUrls: ['./confirm-action.page.scss'],
})
export class ConfirmActionPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToProfilePage() {
    this.router.navigateByUrl('/app/profile', { replaceUrl: true })
  }
}
