import {Component} from '@angular/core';
import {Router, Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import {FIREBASE_PROVIDERS, defaultFirebase} from 'angularfire2';

import {HomeComponent} from './static/home.component';
import {AboutComponent} from './static/about.component';
import {TopnavComponent} from './layout';
import {RoomComponent} from './room/room.component';

import {RoomService} from './room/room.service';

import C from './constants/firebase';

@Component({
  selector: 'cbs-app',
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES, TopnavComponent],
  providers: [
    ROUTER_PROVIDERS,
    FIREBASE_PROVIDERS,
    defaultFirebase(C.FIREBASE_URI),
    RoomService
  ]
})
@Routes([
  {path: '/', component: HomeComponent},
  {path: '/about', component: AboutComponent},
  {path: '/rooms', component: RoomComponent},
])
export class AppComponent {
  // need to inject router for initial routing
  constructor(private router: Router) {}
}
