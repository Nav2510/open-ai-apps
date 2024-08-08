import { GridStatusEnum } from '../enums/grid-status.enum';
import { GridDataTag } from './grid-tag.model';

export interface GridData {
  id: string;
  name: GridDataName;
  status: GridStatusEnum;
  email: string;
  role: string;
  license_used: number;
  teams: Array<GridDataTeam>;
}

export interface GridDataTeam extends GridDataTag {}

export interface GridDataName {
  first_name: string;
  last_name: string;
  handle: string;
}
