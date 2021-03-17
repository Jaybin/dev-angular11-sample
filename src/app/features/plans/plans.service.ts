import { Injectable } from "@angular/core";
import { UtilityService } from "src/app/utilities/utility.service";
import { PLAN_TYPES, TABLE_COLUMNS } from "src/app/app.constants";
import plansListJSON from "../../../assets/PlansList.json";
import { IListItem, ITableColumn, ITypes } from "src/app/app.interfaces";

@Injectable({
  providedIn: 'root'
})
export class PlansService {

  /**
   * Creates an instance of PlansService
   *
   * @param {UtilityService} utilitySrv
   * @memberof PlansService
   */
  constructor(private utilitySrv: UtilityService) {}

  /**
   * Fetches the plans json document (does it asynchronously as an example)
   *
   * @return {Promise<IListItem[]>}
   * @memberof PlansService
   */
  fetchPlans(): Promise<IListItem[]> {
    return new Promise((resolve) => {
      const plans: IListItem[] = plansListJSON;
      this.addTitle(plans);
      this.addType(plans, PLAN_TYPES);
      setTimeout(() => { resolve(plans); }, 1000);
    });
  }

  /**
   * Populates table columns
   *
   * @return {ITableColumn[]} 
   * @memberof PlansService
   */
  populateColumns(): ITableColumn[] {
    return this.utilitySrv.populateColumns(TABLE_COLUMNS);
  }

  /**
   * Creates a title field for all items
   *
   * @private
   * @param {IListItem[]} items
   * @memberof PlansService
   */
  private addTitle(items: IListItem[]) {
    items.forEach(item => {
      item.Title = this.utilitySrv.extractWordAtIndex(item.Description, 0);
    });
  }

  /**
   * Creates a type field for all items
   *
   * @private
   * @param {IListItem[]} items
   * @param {ITypes} types
   * @memberof PlansService
   */
  private addType(items: IListItem[], types: ITypes) {
    items.forEach(item => {
      const type =
      this.utilitySrv.extractMatchingWordInText(types, item.Description);
      item.Type = type ? type: 'UNKNOWN'
    });
  }
}