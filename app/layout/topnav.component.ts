import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'cbs-topnav',
  templateUrl: 'app/layout/topnav.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class TopnavComponent {
  constructor(public auth: AuthService) {}

  public onClickLogin(event) {
    event.preventDefault();
    this.auth.login();
  }

  public onClickLogout(event) {
    event.preventDefault();
    this.auth.logout();
  }
}
