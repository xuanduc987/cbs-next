import {Injectable, Inject} from '@angular/core';
import {AngularFire, FirebaseRef, FirebaseListObservable} from 'angularfire2';

import {Room} from './room';


@Injectable()
export class RoomService {
  constructor(
    private _af: AngularFire,
    @Inject(FirebaseRef) private _ref: Firebase) {}

  public list(): FirebaseListObservable<Room[]> {
    return this._af.list('/rooms');
  }

  public add(room: Room): Promise<void> {
    let roomRef = this._ref.child(`rooms/${room.roomName}`);

    return roomRef.once('value').then(snap => {
      if (snap.val()) {
        throw new Error(`Room with name ${room.roomName} existed!`);
      }

      return roomRef.set(room);
    });
  }
}
