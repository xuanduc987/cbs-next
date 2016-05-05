import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {DataService} from '../core/data.service';

@Injectable()
export class RoomService {

  constructor(private _dataService: DataService) {}

  getRooms(): Observable<any[]> {
    return this._dataService.list('rooms');
  }
}
