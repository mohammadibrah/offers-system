import {Component, Input, OnChanges} from '@angular/core';


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
  @Input() dataSource: TableItem[] = [];
  columnDefinitions: string[] = [];

  ngOnChanges(): void {
    if (this.dataSource.length > 0) {
      this.columnDefinitions = Object.keys(this.dataSource[0]);
    }
  }
}

