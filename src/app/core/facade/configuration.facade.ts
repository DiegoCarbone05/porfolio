import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '../api/api.service';
import { supportsScrollBehavior } from '@angular/cdk/platform';
import { Configuration } from '../models/configuration';
import { ConfigurationStore } from '../state/configuration.store';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationFacade {

  constructor(private configStore: ConfigurationStore) {}

  public getAll() {
    return this.configStore.getAll();
  }

  setConfig(data: Configuration) {
    return this.configStore.setConfig(data);
  }

  public refresh(){
    this.configStore.refresh()
  }

}
