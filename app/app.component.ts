import {Component} from '@angular/core';
import {Router, Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

import {HomeComponent} from './static/home.component';
import {AboutComponent} from './static/about.component';
import {TopnavComponent} from './layout';
import {RoomComponent} from './room/room.component';

import {DataService} from './core/data.service';
import {RoomService} from './room/room.service';

@Component({
  selector: 'cbs-app',
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES, TopnavComponent],
  providers: [ROUTER_PROVIDERS, DataService, RoomService]
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
