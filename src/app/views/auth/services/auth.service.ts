import { Injectable } from '@angular/core';
import { LoginDto } from 'src/app/core/Dto/login-dto';
import { ApiService } from 'src/app/core/api/api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apiSvc: ApiService) {}

  public accessToken: string = '';
  loginStatus!: boolean;

  private credentialsUser = {
    mail: 'diegocarbone22@gmail.com',
    password: 'asdasd123123',
  };

  public verifyToken() {
    let ls = localStorage.getItem('auth');
    if (ls) {
      return this.apiSvc.verifyToken(ls);
    }
    return null;
  }

  private verifyCredentials(email: string, password: string) {
    let melisa = { email: email, password: password };

    if (melisa) {
      this.loginStatus = true;
    } else {
      this.loginStatus = false;
    }
    return this.apiSvc.login(melisa);
  }

  public login(credentials: LoginDto) {
    const { mail, password, savePassword } = credentials;

    this.verifyCredentials(mail, password).subscribe((token) => {
      this.accessToken = token.token;

      if (savePassword && token) {
        localStorage.setItem('auth', this.accessToken);
      }
    });
  }
}
