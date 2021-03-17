import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { IListItem, ITableColumn } from 'src/app/app.interfaces';
import { DocumentsService } from './services/documents.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  @ViewChild('customTable') customTable: Table;
  columns: ITableColumn[] = [];
  documents: IListItem[] = [];
  loading: boolean = true;

  /**
   * Creates an instance of DocumentsComponent
   *
   * @param {DocumentsService} documentsSrv
   * @memberof DocumentsComponent
   */
  constructor(private documentsSrv: DocumentsService) {}

  /**
   * Angular's OnInit implementation
   *
   * @memberof DocumentsComponent
   */
  async ngOnInit() {
    this.columns = this.documentsSrv.populateColumns();
    this.documents = await this.documentsSrv.fetchDocuments();
    this.loading = false;
  }
}
