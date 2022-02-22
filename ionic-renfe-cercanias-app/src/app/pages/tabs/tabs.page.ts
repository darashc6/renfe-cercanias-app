import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  showTabs: boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.displayTabsOnRoute();
  }

  displayTabsOnRoute() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let currentUrl = event.url;

        if (currentUrl === "/app/profile" || currentUrl === "/app/home" || currentUrl === "/app/info") {
          this.showTabs = true;
        } else {
          this.showTabs = false;
        }
      }
    });
  }
}
