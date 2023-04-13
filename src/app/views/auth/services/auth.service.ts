import { Injectable } from '@angular/core';
import { LoginDto } from 'src/app/core/Dto/login-dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor() {}

  private accessToken:boolean = false;

  private credentialsUser = {
    mail: 'diegocarbone22@gmail.com',
    password: 'asdasd123123',
  };

  public verifyToken(){
    let ls = localStorage.getItem('auth')
    if(ls == "true"){
      this.accessToken = true
    }
  }

  private verifyCredentials(mail:string, password:string){
    return mail == this.credentialsUser.mail && password == this.credentialsUser.password
  }

  public get getLoginStatus(){
    return this.accessToken
  }

  public login(credentials: LoginDto) {

    const { mail, password, savePassword } = credentials;

    this.accessToken = this.verifyCredentials(mail, password)

    if(savePassword){
      localStorage.setItem('auth','true')
    }
  }


}
