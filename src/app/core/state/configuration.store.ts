import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '../api/api.service';
import { supportsScrollBehavior } from '@angular/cdk/platform';
import { Configuration } from '../models/configuration';
import { AuthService } from 'src/app/views/auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationStore {
  private $configs = new BehaviorSubject<Configuration[]>([]);

  constructor(private apiSvc: ApiService, private authSvc:AuthService) {}

  public getAll() {
    return this.$configs.asObservable();
  }

  public refresh() {
    this.apiSvc.getConfigs().subscribe((result) => {
      this.$configs.next(result);
    });
  }

  setConfig(data: Configuration) {

    const obs = this.apiSvc.setConfig(data);
    obs.subscribe(() => {
      this.refresh();
    });
    return obs;
  }
}
