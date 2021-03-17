import { TestBed } from "@angular/core/testing";
import { PLAN_TYPES, TABLE_COLUMNS } from "../app.constants";
import { ITableColumn } from "../app.interfaces";
import { UtilityService } from "./utility.service";

describe('UtilityService', () => {
  let utilitySrv: UtilityService;
  
  beforeEach(() => {
    utilitySrv = TestBed.inject(UtilityService);
  });

  it('should create', () => {
    expect(utilitySrv).toBeDefined();
  });

  describe('populateColumns()', () => {
    it('should popuate columns', () => {
      const columns: ITableColumn[] =
      utilitySrv.populateColumns(TABLE_COLUMNS);
      expect(columns.length).toEqual(5);
    });
  });

  describe('extractWordAtIndex()', () => {
    it('should find word at provided index 0', () => {
      const word = utilitySrv.extractWordAtIndex('apple ball cat', 0);
      expect(word).toEqual('apple');
    });

    it('should find word at provided index 2', () => {
      const word = utilitySrv.extractWordAtIndex('apple ball cat', 2);
      expect(word).toEqual('cat');
    });

    it('should return empty string at provided index 3', () => {
      const word = utilitySrv.extractWordAtIndex('apple ball cat', 3);
      expect(word).toEqual('');
    });
  });

  describe('extractMatchingWordInText()', () => {
    it('should find matching word in text', () => {
      const word = utilitySrv.extractMatchingWordInText(PLAN_TYPES, 'house');
      expect(word).toEqual('HOUSE');
    });

    it('should return undefined when attempting to match word in text', () => {
      const word = utilitySrv.extractMatchingWordInText(PLAN_TYPES, 'backyard');
      expect(word).toBeUndefined();
    });
  });
});