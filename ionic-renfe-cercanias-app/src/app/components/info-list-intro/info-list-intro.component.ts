import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Info } from 'src/app/models/Info';

@Component({
  selector: 'app-info-list-intro',
  templateUrl: './info-list-intro.component.html',
  styleUrls: ['./info-list-intro.component.scss'],
})
export class InfoListIntroComponent implements OnInit {
  @Input()
  headerName: string = "";

  @Input()
  listInfoRoute: string = "";

  @Input()
  infoToDisplay: Info = null;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToListPage() {
    this.router.navigateByUrl(this.listInfoRoute);
  }

}
