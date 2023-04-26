import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { Configuration } from '../models/configuration';
import { share } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  verifyToken(token: string) {

    const authToken = { Authorization: 'Bearer '+ token }

    const headers = new HttpHeaders(authToken);
    return this.http
      .get<{ token: string }>(`${environment.baseUrl}auth/verify`, {
        headers: headers,
      })
      .pipe(share());
  }

  login(credentials: { email: string; password: string }) {
    return this.http
      .post<{ token: string }>(`${environment.baseUrl}auth/login`, credentials)
      .pipe(share());
  }

  getConfigs() {
    return this.http
      .get<Configuration[]>(`${environment.baseUrl}config/public`)
      .pipe(share());
  }

  setConfig(data: Configuration) {

    const token = localStorage.getItem('auth')

    const headers = new HttpHeaders({ Authorization: 'Bearer '+ token, 'Access-Control-Allow-Origin': '*' });
    console.log({ Authorization: 'Bearer '+ token });

    return this.http
      .post<void>(`${environment.baseUrl}config/`, data, {
        headers: headers,
      })
      .pipe(share());
  }
}
