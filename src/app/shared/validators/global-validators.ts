import { FormControl } from '@angular/forms';

export class GlobalValidators {
  static email(control: FormControl): any {
    const email_regexp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i
    return email_regexp.test(control.value) ? null : {
        "not_a_valid_email": true
      }
  };

  static password(control: FormControl): any {
    const digit_regexp    = /^(?=.*\d)/;
    const downcase_regexp = /^(?=.*[a-z])/;
    const upcase_regexp   = /^(?=.*[A-Z])/;
    const length_regexp   = /^.{8,20}$/;

    if(!digit_regexp.test(control.value)){
      return {
        "digit_required": true
      };
    }

    if(!downcase_regexp.test(control.value)){
      return {
        "downcase_required": true
      };
    }

    if(!upcase_regexp.test(control.value)){
      return {
        "upcase_required": true
      };
    }

    if(!length_regexp.test(control.value)){
      return {
        "proper_length_required": true
      };
    }

    return null;
  };
}
