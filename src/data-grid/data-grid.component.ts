import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { GridColumn } from './models/grid-column.model';
import { GridData } from './models/grid-data.model';
import { GridStatusEnum } from './enums/grid-status.enum';
import { GridDataTag } from './models/grid-tag.model';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss'],
})
export class DataGridComponent {
  @Input() title: string = '';
  @Input() columns: GridColumn[] = [];
  @Input() data: GridData[] = [];

  constructor(public dialog: MatDialog) {}

  currentPage = 1;
  checkAll = false;
  countTagColor: GridDataTag = {
    background_color: '#f8f5fe',
    text_color: '#856bcd',
    value: '',
  };
  statusTagColor: { [key in GridStatusEnum]: GridDataTag } = {
    Churned: {
      background_color: '#f9fafb',
      text_color: '#687083',
      value: 'Churned',
    },
    Customer: {
      background_color: '#effdf4',
      text_color: '#3c7a54',
      value: 'Customer',
    },
  };

  getTagColor(status: GridStatusEnum): GridDataTag {
    return this.statusTagColor[status];
  }

  onDelete(item: GridData) {
    this.onDialog('Delete', 'Are you sure want to delete?', 'delete', item);
  }

  onEdit(item: GridData) {
    this.onDialog('Edit', 'Edit below details', 'edit', item);
  }

  onDialog(
    title: string,
    subHeading: string,
    type: 'edit' | 'delete',
    item: GridData
  ) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {
        type: type,
        subHeading: subHeading,
        header: title,
        content: item,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.ok && result.data.type === 'delete') {
        this.deleteItem(result.data.content.id);
      }
    });
  }

  deleteItem(id: any) {
    const index = this.data.findIndex((item) => item.id === id);
    this.data.splice(index, 1);
  }

  getArray(length: number) {
    let arr: any = [];
    for (let i = 0; i < length / 10; i++) {
      arr[i] = 0;
    }
    return arr;
  }
}
