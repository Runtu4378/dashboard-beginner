import { Injectable } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { environment } from '../../../../environments/environment';


@Injectable()
export class AccountService {

  constructor(private auth: AuthService) { }

  signIn(data) {
    return this.auth.post(environment.baseUrl + '/api/auth/signin', data);
  }

  signUp(data) {
    return this.auth.post(environment.baseUrl + '/api/auth/signup', data);
  }

  signOut() {
    return this.auth.delete(environment.baseUrl + '/api/auth/signout');
  }

}
