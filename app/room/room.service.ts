import {Injectable, Inject} from '@angular/core';
import {AngularFire, FirebaseRef, FirebaseListObservable} from 'angularfire2';

import {Room} from './room';


@Injectable()
export class RoomService {
  constructor(
    private af: AngularFire,
    @Inject(FirebaseRef) private ref: Firebase) {}

  list(): FirebaseListObservable<Room[]> {
    return this.af.list('/rooms');
  }

  add(room: Room): Promise<void> {
    let roomRef = this.ref.child(`rooms/${room.roomName}`);

    return roomRef.once('value').then(snap => {
      if (snap.val()) {
        throw new Error(`Room with name ${room.roomName} existed!`);
      }

      return roomRef.set(room);
    });
  }
}
