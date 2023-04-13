import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '../api/api.service';
import { supportsScrollBehavior } from '@angular/cdk/platform';
import { Configuration } from '../models/configuration';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationStore {
  private $configs = new BehaviorSubject<Configuration[]>([]);

  constructor(private apiSvc: ApiService) {}

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
