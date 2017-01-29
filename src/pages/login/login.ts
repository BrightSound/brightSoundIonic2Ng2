import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }
  from '@angular/forms';
import { GlobalValidators } from '../../app/forbidden-name.directive';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  form: FormGroup;

  constructor(fb: FormBuilder) {
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
    console.log(this.form.value);
  }

}
