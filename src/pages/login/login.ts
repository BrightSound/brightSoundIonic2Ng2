import { Component } from '@angular/core';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  registerCredentials = {email: '', password: ''};

  public login() {
    alert([this.registerCredentials.email, this.registerCredentials.password]);
  }

}
