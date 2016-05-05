import {Injectable} from '@angular/core';
import Firebase from 'firebase';
import {Observable} from 'rxjs/Observable';

import C from '../constants/firebase';

@Injectable()
export class DataService {
  dataRef = new Firebase(C.FIREBASE_URI);

  list(path: string): Observable<any[]> {
    let ref = this.dataRef.child(path);
    let arr: any[] = [];
    let hasInitialLoad = false;

    return Observable.create(obs => {
      ref.once('value').then(snap => {
        hasInitialLoad = true;
        obs.next(arr.map(unwrapMapFn));
      });

      ref.on('child_added', (child, prevKey) => {
        arr = onChildAdded(arr, child, prevKey);

        if (hasInitialLoad) {
          obs.next(arr.map(unwrapMapFn));
        }
      });

      ref.on('child_removed', (child:any) => {
        arr = onChildRemoved(arr, child)
        if (hasInitialLoad) {
          obs.next(arr.map(unwrapMapFn));
        }
      });

      ref.on('child_changed', (child:any, prevKey: string) => {
        arr = onChildChanged(arr, child, prevKey)
        if (hasInitialLoad) {
          obs.next(arr.map(unwrapMapFn));
        }
      });

      return () => ref.off();
    });
  }
}

// From AngularFire2

function onChildAdded(arr:any[], child:any, prevKey:string): any[] {
  if (!arr.length) {
    return [child];
  }

  return arr.reduce((accumulator:FirebaseDataSnapshot[], curr:FirebaseDataSnapshot, i:number) => {
    if (!prevKey && i===0) {
      accumulator.push(child);
    }
    accumulator.push(curr);
    if (prevKey && prevKey === curr.key()) {
      accumulator.push(child);
    }
    return accumulator;
  }, []);
}

function unwrapMapFn (snapshot:FirebaseDataSnapshot) {
  var unwrapped = snapshot.val();
  if ((/string|number|boolean/).test(typeof unwrapped)) {
    unwrapped = {
      $value: unwrapped
    };
  }
  unwrapped.$key = snapshot.key();
  return unwrapped;
}

function onChildChanged(arr:any[], child:any, prevKey:string): any[] {
  return arr.reduce((accumulator:any[], val:any, i:number) => {
    if (!prevKey && i==0) {
      accumulator.push(child);
      if (val.key() !== child.key()) {
        accumulator.push(val);
      }
    } else if(val.key() === prevKey) {
      accumulator.push(val);
      accumulator.push(child);
    } else if (val.key() !== child.key()) {
      accumulator.push(val);
    }
    return accumulator;
  }, []);
}

function onChildRemoved(arr:any[], child:any): any[] {
  return arr.filter(c => c.key() !== child.key());
}
