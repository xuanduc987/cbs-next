import {Injectable} from '@angular/core';
import Firebase from 'firebase';

import C from '../constants/firebase';

@Injectable()
export class DataService {
  dataRef = new Firebase(C.FIREBASE_URI);

  static SnapshotToArray(snapshot): any[] {
    let arr = [];
    snapshot.forEach((child) => {
      arr.push(Object.assign({$id: child.key()}, child.val()));
    });
    return arr;
  }
}
