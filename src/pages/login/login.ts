import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder }
  from '@angular/forms';
import { GlobalValidators } from '../../app/shared/validators/global-validators';
import { User } from '../../app/shared/models/user'
import { AuthenticationService } from '../../app/shared/services/authentication.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  form: FormGroup;
  user: User;
  errorMessage: string;

  constructor(fb: FormBuilder, private authenticationService: AuthenticationService) {
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
    let form = this.form.value
    this.authenticationService.logIn(form.email, form.password)
      .subscribe(
        user => this.user = user,
        error => this.errorMessage = <any> error
      );
  }

}
