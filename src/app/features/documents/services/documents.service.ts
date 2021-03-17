import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { DOCUMENT_TYPES, TABLE_COLUMNS } from "src/app/app.constants";
import { IListItem, ITypes } from "src/app/app.interfaces";
import { UtilityService } from "src/app/utilities/utility.service";
import documentsListJSON from "../../../../assets/documentsList.json";

@Injectable({
    providedIn: 'root'
})
export class DocumentsService {
  private subject = new Subject<number>();

  /**
   * Creates an instance of DocumentsService
   * 
   * @param {UtilityService} utilitySrv
   * @memberof DocumentsService
   */
  constructor(private utilitySrv: UtilityService) {}

  /**
   * Emit the count value to subscribers
   *
   * @param {number} count
   * @memberof DocumentsService
   */
   updateDocumentsCount(count: number) {
    this.subject.next(count);
  }

  /**
   * Start an observable stream
   *
   * @return {*}  {Observable<number>}
   * @memberof DocumentsService
   */
  onUpdateDocumentsCount(): Observable<number> {
    return this.subject.asObservable();
  }

  /**
   * Fetches the documents json document (does it asynchronously as an example) 
   *
   * @return {Promise<IListItem[]>}
   * @memberof DocumentsService
   */
  fetchDocuments(): Promise<IListItem[]> {
    return new Promise((resolve) => {
      const documents: IListItem[] = documentsListJSON;
      this.addTitle(documents);
      this.addType(documents, DOCUMENT_TYPES);
      setTimeout(() => { resolve(documents); }, 1000);
    });
  }

  /**
   * Populates table columns
   *
   * @return {*} 
   * @memberof DocumentsService
   */
  populateColumns() {
    return this.utilitySrv.populateColumns(TABLE_COLUMNS);
  }

  /**
   * Creates a title field for all items
   *
   * @private
   * @param {IListItem[]} items
   * @memberof DocumentsService
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
   * @memberof DocumentsService
   */
  private addType(items: IListItem[], types: ITypes) {
    items.forEach(item => {
      const type =
      this.utilitySrv.extractMatchingWordInText(types, item.Description);
      item.Type = type ? type: 'UNKNOWN'
    });
  }
}