import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ISkill } from '../Interfaces/iskill';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class SkillsStore {
  private $skillsStore = new BehaviorSubject<ISkill[]>([]);

  constructor(private apiSvc: ApiService) {}

  getAll() {
    return this.$skillsStore.asObservable();
  }

  refresh() {
    this.apiSvc.getSkills().subscribe((res) => {
      this.$skillsStore.next(res)
    });
  }

  deleteSkill(id:number) {
    return this.apiSvc.deleteSkill(id)
  }

  save(item: ISkill) {
    return this.apiSvc.saveSkills(item)
  }
}
