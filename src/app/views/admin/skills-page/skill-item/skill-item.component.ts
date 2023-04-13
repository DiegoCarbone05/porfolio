import { Component, Output, EventEmitter, Input  } from '@angular/core';
import { ISkill } from 'src/app/core/Interfaces/iskill';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.scss']
})
export class SkillItemComponent {

  @Input() itemSource!:ISkill
  @Output() modifySkill = new EventEmitter<string>();

  editSkill(){
    this.modifySkill.emit('value');
  }
}
