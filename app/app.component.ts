import {Component} from '@angular/core';
import {Router, Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

import {HomeComponent} from './static/home.component';
import {AboutComponent} from './static/about.component';
import {TopnavComponent} from './layout';

@Component({
  selector: 'cbs-app',
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES, TopnavComponent],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/', component: HomeComponent},
  {path: '/about', component: AboutComponent},
])
export class AppComponent {
  // need to inject router for initial routing
  constructor(private router: Router) {}
}
