import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  nameControl = new FormControl(null, [Validators.required]);
  surnameControl = new FormControl()
  emailControl = new FormControl(null, [Validators.required, Validators.email])
  passwordControl = new FormControl(null, [Validators.required, Validators.minLength(8)])
  countryControl = new FormControl(null, [Validators.required])
  cityControl = new FormControl()

  userModel = new FormGroup({
    name: this.nameControl,
    surname: this.surnameControl,
    email: this.emailControl,
    password: this.passwordControl,
    country: this.countryControl,
    city: this.cityControl
  })

  validateName(): string {
    if (this.nameControl.errors && this.nameControl.errors['required'] === true) {
      return 'Name field is required'
    }
    return ''
  }
  validateEmail(): string {
    if (this.emailControl.errors && this.emailControl.errors['required'] === true) {
      return 'Email field is required'
    }
    if (this.emailControl.errors && this.emailControl.errors['email'] === true) {
      return 'Value must be an email e.g. example@mail.com'
    }
    return ''
  }
  validatePassword(): string {
    if (this.passwordControl.errors) {
      if (this.passwordControl.errors['required'] === true) {
        return 'password field is required'
      }
    }
    return ''
  }
  validateCountry(): string {
    if (this.countryControl.errors && this.countryControl.errors['required'] === true) {
      return 'Country field is required'
    }
    return ''
  }
}
