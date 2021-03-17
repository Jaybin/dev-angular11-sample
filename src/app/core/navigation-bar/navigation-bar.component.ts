import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { COMPANY_NAME, APP_VERSION, PAGE, NAVIGATION_BAR_STATE } from 'src/app/app.constants';
import { DocumentsService } from 'src/app/features/documents/services/documents.service';
import { PlansService } from 'src/app/features/plans/services/plans.service';

interface IPage {
  key: string;
  label: string;
  icon: string;
  active: boolean;
  count: number;
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
export class NavigationBarComponent implements OnDestroy {
  state = 'open';
  title = COMPANY_NAME;
  version = APP_VERSION;
  options: IPage[] = [
    {
      key: 'plans', label: 'Plans',
      icon: 'pi pi-pencil', active: false, count: 0
    },
    {
      key: 'documents', label: 'Documents',
      icon: 'pi pi-file', active: false, count: 0
    }
  ];
  isOpen = true;
  selectedValues = [];
  plansSubscription: Subscription;
  documentsSubscription: Subscription;

  /**
   * Creates an instance of NavigationBarComponent
   *
   * @param {Router} router
   * @param {ActivatedRoute} activatedRoute
   * @memberof NavigationBarComponent
   */
  constructor(private router: Router, private activatedRoute: ActivatedRoute,
  private plansService: PlansService, private documentsSrv: DocumentsService) {
    this.listenToRouteEvent();
    this.activatePlansSubscription();
    this.activateDocumentsSubscription();
  }

  /**
   * Angular's OnDestroy implementation
   *
   * @memberof NavigationBarComponent
   */
  ngOnDestroy(): void {
    if (this.plansSubscription) this.plansSubscription.unsubscribe();
    if (this.documentsSubscription) this.documentsSubscription.unsubscribe();
  }

  /**
   * Start a subscription to update plans count
   *
   * @memberof NavigationBarComponent
   */
  activatePlansSubscription() {
    this.plansSubscription = this.plansService.onUpdatePlansCount()
    .subscribe((count: number) => {
      const option = this.options.find(opt => opt.key === PAGE.PLANS);
      option.count = count;
    });
  }

  /**
   * Start a subscription to update documents count
   *
   * @memberof NavigationBarComponent
   */
  activateDocumentsSubscription() {
    this.documentsSubscription = this.documentsSrv.onUpdateDocumentsCount()
    .subscribe((count: number) => {
      const option = this.options.find(opt => opt.key === PAGE.DOCUMENTS);
      option.count = count;
    });
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
    this.state =
    this.isOpen ? NAVIGATION_BAR_STATE.OPEN : NAVIGATION_BAR_STATE.CLOSED;
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
      case PAGE.PLANS:
        this.router.navigate([`/${PAGE.PLANS}`]);
        break;
      case PAGE.DOCUMENTS:
        this.router.navigate([`/${PAGE.DOCUMENTS}`]);
        break;
      default:
        this.router.navigate([`/${PAGE.HOME}`]);
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
      filter(event => {
        return event instanceof NavigationEnd
      }),
      map(() => this.activatedRoute)
    ).subscribe((activatedRoute: ActivatedRoute) => {
      this.options.forEach(opt => opt.active = false);
      const url = activatedRoute.firstChild?.snapshot?.url?.[0];
      const option =
      this.options.find(opt => opt.label.toLowerCase() === url.path);
      if (option) option.active = true;
    });
  }
}
