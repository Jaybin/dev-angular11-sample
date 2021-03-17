import { Component } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { MenuItem } from "primeng/api";
import { filter, map } from "rxjs/operators";
import * as _ from 'lodash';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html' 
})
export class HeaderComponent {
  items: MenuItem[] = [];
  home: MenuItem = {icon: 'pi pi-home', routerLink: '/'};

  /**
   * Creates an instance of HeaderComponent
   *
   * @param {Router} router
   * @param {ActivatedRoute} activatedRoute
   * @memberof HeaderComponent
   */
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.listenToRouteEvent();
  }

  /**
   * Listens to route events and updates the breadcrumbs
   *
   * @private
   * @memberof HeaderComponent
   */
  private listenToRouteEvent() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute)
    ).subscribe(e => {
      const url = e.firstChild?.snapshot?.url?.[0];
      this.items = [];
      if (url.path !== 'home') {
        this.items.push({ label: _.capitalize(url.path) });
      }
    });
  }
}