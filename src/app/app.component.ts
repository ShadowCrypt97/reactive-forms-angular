import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

interface UserModel {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  city: FormControl<string | null>;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Desafio3-reactive-forms';

}
