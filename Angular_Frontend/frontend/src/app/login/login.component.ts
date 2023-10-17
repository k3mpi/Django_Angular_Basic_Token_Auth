import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData: any = {};

  constructor(
    private authService: AuthService, 
    private router: Router
  ) {}

  login() {
    this.authService.login(this.loginData.username, this.loginData.password).subscribe(
      (response) => {
        console.log('Login successful', response);
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Login error', error);
      }
    );
  }
}
