import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  template: `
    <div class="login-page">
      <div>
        <h1>Login</h1>
      </div>
      <div>
        <div class="login-inputs">
          <input type="text" />
          <input type="password" />
        </div>
        <div class="login-buttons">
          <button type="button" (click)="login()">Login</button>
          <button type="button">Create New User</button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  login(): void {
    this.router.navigate(['/']);
  }
}
