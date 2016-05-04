import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {DataService} from '../core/data.service';

@Injectable()
export class RoomService {
  roomsRef = this._dataService.dataRef.child('rooms');

  constructor(private _dataService: DataService) {}

  getRooms(): Observable<any[]> {
    return Observable.create(observer => {
      let listener = this.roomsRef.on('value', snapshot => {
        observer.next(DataService.SnapshotToArray(snapshot));
      }, observer.error);

      return () => {
        this.roomsRef.off('value', listener);
      };
    });
  }
}
