import { ICard } from './../../shared/card/card.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { Configuration } from '../models/configuration';
import { Observable, share } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private get getAuthHeader() {
    const token = localStorage.getItem('auth');
    return {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
        'Access-Control-Allow-Origin': '*',
      }),
    };
  }

  verifyToken(token: string) {
    return this.http
      .get<{ token: string }>(
        `${environment.baseUrl}auth/verify`,
        this.getAuthHeader
      )
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
    return this.http
      .post<void>(`${environment.baseUrl}config/`, data, this.getAuthHeader)
      .pipe(share());
  }

  getCards(): Observable<ICard[]> {
    return this.http
      .get<ICard[]>(`${environment.baseUrl}config/cards/`)
      .pipe(share());
  }

  saveCards(newCard: ICard[]): Observable<ICard[]> {
    return this.http
      .post<ICard[]>(`${environment.baseUrl}config/cards/`, newCard, this.getAuthHeader)
      .pipe(share());
  }
}
