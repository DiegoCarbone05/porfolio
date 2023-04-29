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

  showPassword: boolean = false;

  aboutMeContent = new FormGroup({
    mail: new FormControl(),
    password: new FormControl(),
    savePassword: new FormControl(),
  });

  ngOnInit(): void {
    this.aboutMeContent.valueChanges.subscribe((data) => {
      this.showPassword = data.savePassword;
    });
  }

  loggin() {
    this.authSvc.login({
      mail: this.aboutMeContent.value.mail,
      password: this.aboutMeContent.value.password,
      savePassword: true,
    })
    this.router.navigateByUrl('/');
  }
}
