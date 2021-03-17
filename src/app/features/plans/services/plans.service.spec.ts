import { TestBed } from "@angular/core/testing";
import { TABLE_COLUMNS } from "src/app/app.constants";
import { UtilityService } from "src/app/utilities/utility.service";
import { PlansService } from "./plans.service";
import plansListJSON from "../../../../assets/PlansList.json";

describe('PlansService', () => {
  let plansSrv: PlansService;
  let utilitySrv: UtilityService;
  
  beforeEach(() => {
    plansSrv = TestBed.inject(PlansService);
    utilitySrv = TestBed.inject(UtilityService);
  });

  it('should create', () => {
    expect(plansSrv).toBeDefined();
  });

  describe('updatePlansCount()', () => {
    it('should call spy', () => {
      // @ts-ignore
      const spy: jasmine.Spy = spyOn(plansSrv.subject, 'next');
      plansSrv.updatePlansCount(10);
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('onUpdatePlansCount()', () => {
    it('should call spy', () => {
      // @ts-ignore
      const spy: jasmine.Spy = spyOn(plansSrv.subject, 'asObservable');
      plansSrv.onUpdatePlansCount();
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('fetchPlans()', () => {
    it('should return plans', (done) => {
      const addTitleSpy: jasmine.Spy =
      // @ts-ignore
      spyOn(plansSrv, 'addTitle').and.callThrough();
      const addTypeSpy: jasmine.Spy =
      // @ts-ignore
      spyOn(plansSrv, 'addType').and.callThrough();
      plansSrv.fetchPlans().then(plans => {
        expect(addTitleSpy).toHaveBeenCalledTimes(1);
        expect(addTypeSpy).toHaveBeenCalledTimes(1);
        expect(plans.length).toEqual(25);
        done();
      });
    });
  });

  describe('populateColumns()', () => {
    it('should call utility service populateColumns function', () => {
      const spy: jasmine.Spy =
      spyOn(utilitySrv, 'populateColumns').and.callThrough();
      plansSrv.populateColumns();
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(TABLE_COLUMNS);
    });
  });

  describe('addTitle()', () => {
    it('should call utility service extractWordAtIndex function', () => {
      const spy: jasmine.Spy =
      spyOn(utilitySrv, 'extractWordAtIndex').and.callThrough();
      // @ts-ignore
      plansSrv.addTitle(plansListJSON);
      expect(spy).toHaveBeenCalledTimes(25);
    });
  });

  describe('addType()', () => {
    it('should call utility service extractMatchingWordInText function', () => {
      const spy: jasmine.Spy =
      spyOn(utilitySrv, 'extractMatchingWordInText').and.callThrough();
      // @ts-ignore
      plansSrv.addType(plansListJSON);
      expect(spy).toHaveBeenCalledTimes(25);
    });
  });
});