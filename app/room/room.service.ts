import {Injectable} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';


@Injectable()
export class RoomService {

  constructor(private _af: AngularFire) {}

  public getAll(): FirebaseListObservable<any[]> {
    return this._af.list('/rooms');
  }
}
