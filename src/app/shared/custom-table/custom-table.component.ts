import { Component, Input, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { ITableColumn } from 'src/app/app.interfaces';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css']
})
export class CustomTableComponent {
  @ViewChild('customTable') customTable: Table;
  @Input() dataKey: string;
  @Input() caption: string = '';
  @Input() columns: ITableColumn[] = [];
  @Input() rows: any[] = [];
  @Input() loading: boolean = false;
  selectedRows: any[] = [];
}
