import { GridAlignmentEnum } from '../enums/grid-alignment.enum';
import { GridTypeEnum } from '../enums/grid-type.enum';

export interface GridColumn {
  column_key: string;
  column_name: string;
  type: GridTypeEnum;
  align: GridAlignmentEnum;
}
