import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }
  from '@angular/forms';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      "email":["", Validators.required],
      "password":
        [ "",
          Validators.compose(
            [
              Validators.required,
              Validators.minLength(8),
              Validators.maxLength(20)
            ]
          )
        ]
    });
  }

  public login() {
    console.log(this.form.value);
  }

}
