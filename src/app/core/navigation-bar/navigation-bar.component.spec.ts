import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigationBarComponent } from './navigation-bar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NAVIGATION_BAR_STATE, PAGE } from 'src/app/app.constants';

describe('NavigationBarComponent', () => {
  let component: NavigationBarComponent;
  let fixture: ComponentFixture<NavigationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NoopAnimationsModule
      ],
      declarations: [ NavigationBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onItemClick()', () => {
    let spy: jasmine.Spy;
    beforeEach(() => {
      // @ts-ignore
      spy = spyOn(component, 'navigateToPage');
    })
    const option = { label: 'Plans', icon: 'pi pi-pencil', active: false };
    it('should call spy', () => {
      component.onItemClick(option);
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(option.label.toLowerCase());
    });
  });

  describe('toggleNavigationOpen()', () => {
    it('should set state to open', () => {
      component.isOpen = false;
      component.toggleNavigationOpen();
      expect(component.state).toEqual(NAVIGATION_BAR_STATE.OPEN);
    });
    it('should set state to closed', () => {
      component.isOpen = true;
      component.toggleNavigationOpen();
      expect(component.state).toEqual(NAVIGATION_BAR_STATE.CLOSED);
    });
  });

  describe('navigateToPage()', () => {
    it('should navigate to /plans', () => {
      // @ts-ignore
      const spy: jasmine.Spy = spyOn(component.router, 'navigate');
      // @ts-ignore
      component.navigateToPage(PAGE.PLANS);
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith([`/${PAGE.PLANS}`]);
    });
    it('should navigate to /documents', () => {
      // @ts-ignore
      const spy: jasmine.Spy = spyOn(component.router, 'navigate');
      // @ts-ignore
      component.navigateToPage(PAGE.DOCUMENTS);
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith([`/${PAGE.DOCUMENTS}`]);
    });
    
    it('should navigate to /home', () => {
      // @ts-ignore
      const spy: jasmine.Spy = spyOn(component.router, 'navigate');
      // @ts-ignore
      component.navigateToPage(PAGE.HOME);
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith([`/${PAGE.HOME}`]);
    });
  });
});
