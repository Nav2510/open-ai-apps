import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { GridResponse } from '../models/grid-response.model';
import { GRID_RESPONSE } from './grid-response.mocks';

@Injectable({
  providedIn: 'root',
})
export class DataGridService {

  fetchData(): Observable<GridResponse> {
    return of(GRID_RESPONSE);
  }
}
