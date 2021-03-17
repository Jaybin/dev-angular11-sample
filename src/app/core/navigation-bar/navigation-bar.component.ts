import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { COMPANY_NAME, APP_VERSION } from 'src/app/app.constants';

interface IPage {
  label: string;
  icon: string;
  active: boolean;
}

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
  animations: [
    trigger('animationState', [
      state('open', style({
        width: '240px'
      })),
      state('closed', style({
        width: '64px'
      })),
      transition('open <=> closed', animate('0.2s ease-out')),
    ])
  ]
})
export class NavigationBarComponent {
  state = 'open';
  title = COMPANY_NAME;
  version = APP_VERSION;
  options: IPage[] = [
    { label: 'Plans', icon: 'pi pi-pencil', active: false },
    { label: 'Documents', icon: 'pi pi-file', active: false }
  ];
  isOpen = true;
  selectedValues = [];

  /**
   * Creates an instance of NavigationBarComponent
   *
   * @param {Router} router
   * @param {ActivatedRoute} activatedRoute
   * @memberof NavigationBarComponent
   */
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.listenToRouteEvent();
  }

  /**
   * Identifies the clicked navigation menu item
   * and navigates to the relevant page
   *
   * @param {IPage} option
   * @memberof NavigationBarComponent
   */
  onItemClick(option: IPage) {
    this.navigateToPage(option.label.toLowerCase());
  }

  /**
   * Toggles the state of the navigation bar
   *
   * @memberof NavigationBarComponent
   */
  toggleNavigationOpen() {
    this.isOpen = !this.isOpen;
    this.state = this.isOpen ? 'open' : 'closed';
  }

  /**
   * Navigates to the relavant page
   * 
   * @private
   * @param {string} name
   * @memberof NavigationBarComponent
   */
  private navigateToPage(name: string) {
    switch(name) {
      case 'documents':
        this.router.navigate(['/documents']);
        break;
      case 'plans':
        this.router.navigate(['/plans']);
        break;
      default:
        this.router.navigate(['/home']);
        break;
    }
  }

  /**
   * Listens to route events and highlights the selected option
   *
   *
   * @private
   * @memberof NavigationBarComponent
   */
  private listenToRouteEvent() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute)
    ).subscribe(e => {
      this.options.forEach(opt => opt.active = false);
      const url = e.firstChild?.snapshot?.url?.[0];
      const option =
      this.options.find(opt => opt.label.toLowerCase() === url.path);
      if (option) option.active = true;
    });
  }
}
