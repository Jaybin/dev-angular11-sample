import { Injectable } from "@angular/core";
import * as _ from "lodash";
import { IColumns, ITableColumn, ITypes } from "../app.interfaces";

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  /**
   * Generates table columns from the available fields
   *
   * @param {IColumns} columns
   * @return {ITableColumn[]} 
   * @memberof UtilityService
   */
  populateColumns(columns: IColumns): ITableColumn[] {
    return Object.keys(columns).reduce((result, key) => {
      result.push(columns[key]);
      return result;
    }, []);
  }

  /**
   * Find word at provided index
   *
   * @param {string} text
   * @param {number} index
   * @return {string}
   * @memberof UtilityService
   */
  extractWordAtIndex(text: string, index: number): string {
    const words = text.split(' ');
    return (words[index]) ? words[index] : '';
  }

  /**
   * Finds matching word in text
   *
   * @param {ITypes} words
   * @param {string} text
   * @return {string}
   * @memberof UtilityService
   */
  extractMatchingWordInText(words: ITypes, text: string): string {
    return (_.keys(words)).find(key => {
      return _.lowerCase(text).indexOf(words[key]) > -1;
    });
  }
}