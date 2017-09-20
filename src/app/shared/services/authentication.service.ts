import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import {CookieService} from 'angular2-cookie/core';

@Injectable()
export class AuthenticationService {
  // remove hardcoding
  private authenticationUrl = 'http://localhost:9292/api/authentication';

  constructor(private http: Http, private _cookieService: CookieService) { }

  logIn(email: string, password: string) : Observable<User> {
    let body = JSON.stringify({ "email": email, "password": password });
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });


    return this.http.post(this.authenticationUrl + '/login', body, options)
      // .map(res => <User> )
    // TODO: return user and set cookie
      .map((res) => {
        this._cookieService.put('bs_session', res.json().access_token);
        <User> res.json()
      })
      .catch(this.handleError)
  }

  private handleError (error: Response) {
    console.error('An error occurred', error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
