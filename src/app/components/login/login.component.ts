import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDTO } from 'src/app/dtos/user/login.dto';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @ViewChild('loginForm') loginForm!: NgForm;
  // Khai báo các biến tương ứng với các trường dữ liệu trong form
  phoneNumber: string;
  password: string;

  constructor(private router: Router, private userService: UserService) {
    this.phoneNumber = '';
    this.password = '';
  }

  login() {
    const loginDTO: LoginDTO = {
      phone_number: this.phoneNumber,
      password: this.password,
    };
    this.userService.login(loginDTO).subscribe({
      next: (response: any) => {
        this.router.navigate(['/home']);
      },
      complete: () => {},
      error: (error: any) => {
        alert(`Cannot login, error: ${error.error}`);
      },
    });
  }
}
