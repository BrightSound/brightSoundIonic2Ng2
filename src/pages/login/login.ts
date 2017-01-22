import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }
  from '@angular/forms';
import { forbiddenNameValidator } from '../../app/forbidden-name.directive';

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
              forbiddenNameValidator((/bob/i))
            ]
          )
        ],
      "password":
        [ "",
          Validators.compose(
            [
              Validators.required,
              Validators.minLength(8),
              Validators.maxLength(20),
              Validators.pattern('[*@!#%&()^~{}]+'),
              Validators.pattern('[A-Z]+'),
              Validators.pattern('[a-z]+')
            ]
          )
        ]
    });
  }

  public login() {
    console.log(this.form.value);
  }

}
