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
  currentUser: Observable<User>;

  constructor(private auth: FirebaseAuth) {
    this.currentUser = this.auth.map((authState: FirebaseAuthState) => {
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


  login() {
    this.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
      remember: 'default',
      scope: ['email']
    });
  }

  logout() {
    this.auth.logout();
  }
}
