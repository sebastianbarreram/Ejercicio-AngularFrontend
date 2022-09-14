import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;

  @Output() submitEM = new EventEmitter();

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor() {}

  ngOnInit(): void {}

  getErrorMessage(): string {
    if (this.form.get('email')?.hasError('required')) {
      return 'You must enter a value';
    }
    return this.form.get('email')?.hasError('email') ? 'Not a valid email' : '';
  }

  emailIsValid(): boolean {
    return (
      this.form.get('email')?.hasError('email')! &&
      this.form.get('email')?.touched!
    );
  }

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
      console.log("Formulario valido");
      
    }
  }
}
