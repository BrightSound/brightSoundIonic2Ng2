import { FormControl } from '@angular/forms';

export class GlobalValidators {
  static email(control: FormControl): any {
    const email_regexp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i
    return email_regexp.test(control.value) ? null : {
        "not a valid email": true
      }
  };

  static password(control: FormControl): any {
    const digit_regexp    = /^(?=.*\d)/;
    const downcase_regexp = /^(?=.*[a-z])/;
    const upcase_regexp   = /^(?=.*[A-Z])/;
    const length_regexp   = /^.{8,20}$/;

    if(!digit_regexp.test(control.value)){
      return {
        "not containing at least one digit": true
      };
    }

    if(!downcase_regexp.test(control.value)){
      return {
        "not containing at least one downcase letter": true
      };
    }

    if(!upcase_regexp.test(control.value)){
      return {
        "not containing at least one upcase letter": true
      };
    }

    if(!length_regexp.test(control.value)){
      return {
        "length is not between 8 and 20 symbols": true
      };
    }

    return null;
  };
}
