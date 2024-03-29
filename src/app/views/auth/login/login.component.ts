import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private authSvc: AuthService) {}

  inputsContent: any = false;
  errorMessage: boolean = false;
  showPassword:boolean = false
  isLoading: boolean = false;

  aboutMeContent = new FormGroup({
    mail: new FormControl(),
    password: new FormControl(),
    savePassword: new FormControl(),
  });

  ngOnInit(): void {
    this.aboutMeContent.valueChanges.subscribe((data) => {
      this.inputsContent = data.mail && data.password;
    });
  }
  exitOfLogin(){
    this.router.navigateByUrl("/")
  }

  loggin() {
    this.isLoading = true;
    this.authSvc
      .login({
        mail: this.aboutMeContent.value.mail,
        password: this.aboutMeContent.value.password,
        savePassword: true,
      })
      .subscribe({
        next: (token) => {
          this.authSvc.accessToken = token.token;
          localStorage.setItem('auth', this.authSvc.accessToken);
          this.router.navigateByUrl('/');
          this.isLoading = false;
          this.authSvc.loginStatus.next(true)
        },
        error: (err) => {
          this.isLoading = false;
          this.errorMessage = true;
          setTimeout(() => {
            this.errorMessage = false;
          }, 5000);
        },
      });
  }
}
