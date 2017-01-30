import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder }
  from '@angular/forms';
import { GlobalValidators } from '../../app/shared/validators/global-validators';
import {
          Http,
          Headers,
          URLSearchParams,
          RequestOptions
       } from '@angular/http';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  form: FormGroup;
  user: String;

  constructor(fb: FormBuilder, private http: Http) {
    this.form = fb.group({
      "email":
        [ "",
          Validators.compose(
            [
              Validators.required,
              GlobalValidators.email
            ]
          )
        ],
      "password":
        [ "",
          Validators.compose(
            [
              Validators.required,
              GlobalValidators.password
            ]
          )
        ]
    });
  }

  public login() {
    var form = this.form.value;

    // let params = new URLSearchParams();
    // params.set('email', form.email);
    // params.set('password', form.password);
    var params =
      {
        'email': form.email,
        'password': form.password
      }

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.http.post(
      'http://localhost:9292/api/authentication/login',
      params,
      options
    ).subscribe(res => this.user = res.json());

    console.log(this.user);

  }

}
