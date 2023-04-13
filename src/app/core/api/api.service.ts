import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { Configuration } from '../models/configuration';
import {share} from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getConfigs(){
    return this.http.get<Configuration[]>(`${environment.baseUrl}config/`).pipe(share());
  }

  setConfig(data:Configuration){
    return this.http.post<void>(`${environment.baseUrl}config/`, data).pipe(share());
  }


}
