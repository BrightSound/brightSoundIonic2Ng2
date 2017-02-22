import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';

@Injectable()
export class AuthenticationService {
  private authenticationUrl = 'http://localhost:9292/api/authentication';

  constructor(private http: Http) { }

  logIn(email: string, password: string) : Observable<User> {
    let body = JSON.stringify({ "email": email, "password": password });
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.authenticationUrl + '/login', body, options)
      .map(res => <User> res.json())
      .catch(this.handleError)
  }

  private handleError (error: Response) {
    console.error('An error occurred', error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
