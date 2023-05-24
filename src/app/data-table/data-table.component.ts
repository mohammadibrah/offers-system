import {Component, Input, OnChanges} from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';


export interface TableItem {
  [key: string]: any;
  imageUrl?: string;
  actions?: Action[];
}

export interface Action {
  label: string;
  onClick: () => void;
}


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnChanges{
  @Input() columnTitles?: string[] = [];
  @Input() options?: { [key: string]: any } = {}
  @Input() dataSource: TableItem[] = [];
  columnDefinitions: string[] = [];
  sortedData: TableItem[] = [];
  enableSorting = false;

  ngOnChanges(): void {
    if (this.dataSource.length > 0) {
      this.columnDefinitions = Object.keys(this.dataSource[0]);
    }
    this.sortedData = this.dataSource.slice();
    this.enableSorting = this.options?.['enableSorting'] || false;
  }

  sortData(sort: Sort): void {
    const data = this.dataSource.slice();
  
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }
  
    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      const column = sort.active;
      const valueA = a[column];
      const valueB = b[column];
      return (valueA < valueB ? -1 : 1) * (isAsc ? 1 : -1);
    });
  }
}

