import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { IListItem, ITableColumn } from 'src/app/app.interfaces';
import { PlansService } from './services/plans.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  @ViewChild('customTable') customTable: Table;
  columns: ITableColumn[] = [];
  plans: IListItem[] = [];
  loading: boolean = true;

  /**
   * Creates an instance of PlansComponent
   *
   * @param {PlansService} plansSrv
   * @memberof PlansComponent
   */
  constructor(private plansSrv: PlansService,) {}

  /**
   * Angular's OnInit implementation
   *
   * @memberof PlansComponent
   */
  async ngOnInit() {
    this.columns = this.plansSrv.populateColumns();
    this.plans = await this.plansSrv.fetchPlans();
    this.loading = false;
  }

  
}
