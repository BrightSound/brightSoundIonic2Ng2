import { FormControl } from '@angular/forms';

export class GlobalValidators {
  static email(control: FormControl) {
    const email_regexp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i
    return email_regexp.test(control.value) ? null : {
        validateEmail: {
          valid: false
        }
      }
  };

  static password(control: FormControl) {
    const password_regexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/
    return password_regexp.test(control.value) ? null : {
        validatePassword: {
          valid: false
        }
      }
  };
}
