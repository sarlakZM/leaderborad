import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function isEmptyInputValue(value: any): boolean {
  return value == null || value.length === 0;
}



export type BooleanFn = () => boolean;

export class ValidationUtils {
  static conditional(condition: BooleanFn, validator: ValidatorFn): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return condition() ? validator(control) : null;
    };
  }

}
