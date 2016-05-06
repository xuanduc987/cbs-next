import {Injectable} from '@angular/core';
import {
  FirebaseAuth,
  FirebaseAuthState,
  AuthProviders,
  AuthMethods
} from  'angularfire2';
import {Observable} from 'rxjs/Observable';

import {User} from './user';

@Injectable()
export class AuthService {
  public currentUser: Observable<User>;

  constructor(private _auth: FirebaseAuth) {
    this.currentUser = this._auth.map((authState: FirebaseAuthState) => {
      if (!authState) return authState;

      switch (authState.provider) {
        case AuthProviders.Google:
          return {
          profileImageUrl: authState.google.profileImageURL,
          name: authState.google.displayName
        };
        default:
          throw new Error(`Unsupported provider $(authState.provider)`);
      };
    });
  }


  public login() {
    this._auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
      remember: 'default',
      scope: ['email']
    });
  }

  public logout() {
    this._auth.logout();
  }
}
