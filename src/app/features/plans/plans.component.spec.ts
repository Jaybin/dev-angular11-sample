import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { PlansComponent } from './plans.component';
import { PlansService } from './services/plans.service';

describe('PlansComponent', () => {
  let component: PlansComponent;
  let fixture: ComponentFixture<PlansComponent>;
  let plansSrv: PlansService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    plansSrv = TestBed.inject(PlansService);
    fixture = TestBed.createComponent(PlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test OnInit implementation', fakeAsync(() => {
    const populateColumnsSpy: jasmine.Spy =
    spyOn(plansSrv, 'populateColumns').and.callThrough();
    const fetchPlansSpy: jasmine.Spy =
    spyOn(plansSrv, 'fetchPlans').and.callThrough();
    component.ngOnInit();
    tick(1000);
    expect(populateColumnsSpy).toHaveBeenCalledTimes(1);
    expect(component.columns.length).toEqual(5);
    expect(fetchPlansSpy).toHaveBeenCalledTimes(1);
    expect(component.plans.length).toEqual(25);
    expect(component.loading).toEqual(false);
  }));
});
