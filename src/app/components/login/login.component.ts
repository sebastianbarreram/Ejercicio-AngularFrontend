import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

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

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private snackBar: MatSnackBar, private router: Router) {}

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
      console.log('Formulario valido');
      if (
        this.form.get('email')?.value === 's@s.com' &&
        this.form.get('password')?.value === 'ssssss'
      ) {
        console.log(this.form.get('email')?.value);
        console.log(this.form.get('password')?.value);
        this.snackBar.open(`Bienvenido ${this.form.get('email')?.value}`, '', {
          verticalPosition: 'top',
          panelClass: ['mat-toolbar', 'mat-accent'],
        });
        this.router.navigate(["/"])
      } else {
        this.snackBar.open('Usuario o contraseña inválido', '', {
          verticalPosition: 'top',
          panelClass: ['mat-toolbar', 'mat-warn'],
        });
      }
    }
  }
}
