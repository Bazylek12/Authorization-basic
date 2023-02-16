import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  readonly loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  });

  constructor(private _authService: AuthService, private _router: Router) {
  }

  onLoginFormSubmitted(loginForm: FormGroup): void {
    if (!loginForm.valid) {
      return
    }
    this._authService.login({email: loginForm.value.email, password: loginForm.value.password}).subscribe({
      next: () => this._router.navigate(['/auto-login/logged-in'])
    })
  }
}
