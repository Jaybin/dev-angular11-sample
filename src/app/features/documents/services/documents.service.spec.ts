import { TestBed } from "@angular/core/testing";
import { TABLE_COLUMNS } from "src/app/app.constants";
import { UtilityService } from "src/app/utilities/utility.service";
import { DocumentsService } from "./documents.service";
import documentsListJSON from "../../../../assets/documentsList.json";

describe('DocumentsService', () => {
  let documentsSrv: DocumentsService;
  let utilitySrv: UtilityService;
  
  beforeEach(() => {
    documentsSrv = TestBed.inject(DocumentsService);
    utilitySrv = TestBed.inject(UtilityService);
  });

  it('should create', () => {
    expect(documentsSrv).toBeDefined();
  });

  describe('updatePlansCount()', () => {
    it('should call spy', () => {
      // @ts-ignore
      const spy: jasmine.Spy = spyOn(documentsSrv.subject, 'next');
      documentsSrv.updateDocumentsCount(10);
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('onUpdatePlansCount()', () => {
    it('should call spy', () => {
      // @ts-ignore
      const spy: jasmine.Spy = spyOn(documentsSrv.subject, 'asObservable');
      documentsSrv.onUpdateDocumentsCount();
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('fetchDocuments()', () => {
    it('should return documents', (done) => {
      const addTitleSpy: jasmine.Spy =
      // @ts-ignore
      spyOn(documentsSrv, 'addTitle').and.callThrough();
      const addTypeSpy: jasmine.Spy =
      // @ts-ignore
      spyOn(documentsSrv, 'addType').and.callThrough();
      documentsSrv.fetchDocuments().then(documents => {
        expect(addTitleSpy).toHaveBeenCalledTimes(1);
        expect(addTypeSpy).toHaveBeenCalledTimes(1);
        expect(documents.length).toEqual(50);
        done();
      });
    });
  });

  describe('populateColumns()', () => {
    it('should call utility service populateColumns function', () => {
      const spy: jasmine.Spy =
      spyOn(utilitySrv, 'populateColumns').and.callThrough();
      documentsSrv.populateColumns();
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(TABLE_COLUMNS);
    });
  });

  describe('addTitle()', () => {
    it('should call utility service extractWordAtIndex function', () => {
      const spy: jasmine.Spy =
      spyOn(utilitySrv, 'extractWordAtIndex').and.callThrough();
      // @ts-ignore
      documentsSrv.addTitle(documentsListJSON);
      expect(spy).toHaveBeenCalledTimes(50);
    });
  });

  describe('addType()', () => {
    it('should call utility service extractMatchingWordInText function', () => {
      const spy: jasmine.Spy =
      spyOn(utilitySrv, 'extractMatchingWordInText').and.callThrough();
      // @ts-ignore
      documentsSrv.addType(documentsListJSON);
      expect(spy).toHaveBeenCalledTimes(50);
    });
  });
});