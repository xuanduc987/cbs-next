import {Injectable} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';


@Injectable()
export class RoomService {

  constructor(private af: AngularFire) {}

  getAll(): FirebaseListObservable<any[]> {
    return this.af.list('/rooms');
  }
}
