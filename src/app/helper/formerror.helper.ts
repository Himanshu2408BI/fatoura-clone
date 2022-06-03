import { FormGroup, ValidatorFn, AbstractControl } from '@angular/forms';

export const valueChanges = (form: FormGroup, formErrors: any, errorMessages: any): any => {
    if (!form) { return; }
    for (const field in formErrors) {
      if (formErrors.hasOwnProperty(field)) {
        formErrors[field] = '';
        const control = form.get(field);
        if (control && (control.dirty || control.touched) && !control.valid) {
          const messages = errorMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
    return formErrors;
};