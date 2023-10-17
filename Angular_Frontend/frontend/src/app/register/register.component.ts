// register.component.ts

import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

  registerData: any = {}; // Deklaration von registerData

  constructor(private authService: AuthService) {}

  register() {
    // Verwenden Sie this.registerData.username, this.registerData.email usw. hier
    this.authService.register(this.registerData.username, this.registerData.password).subscribe(
      (response) => {
        // Handle successful registration, e.g., navigate to login page
      },
      (error) => {
        // Handle registration error
      }
    );
  }
}