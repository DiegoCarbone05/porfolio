import { Injectable } from "@angular/core";
import { SkillsStore } from "../state/skills.store";
import { ISkill } from "../Interfaces/iskill";

@Injectable({
  providedIn: 'root',
})
export class SkillsFacade {
  constructor(private SkillStore:SkillsStore){}

  getAll(){
    return this.SkillStore.getAll();
  }

  save(item:ISkill){
    return this.SkillStore.save(item)
  }

  refresh(){
    this.SkillStore.refresh()
  }

  deleteSkill(id:number) {
    return this.SkillStore.deleteSkill(id)
  }

}
