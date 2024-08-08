import { GridColumn } from './grid-column.model';
import { GridData } from './grid-data.model';

export interface GridResponse {
  grid_columns: Array<GridColumn>;
  grid_data: Array<GridData>;
}
