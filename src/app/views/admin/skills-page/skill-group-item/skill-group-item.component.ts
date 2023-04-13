import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skill-group-item',
  templateUrl: './skill-group-item.component.html',
  styleUrls: ['./skill-group-item.component.scss'],
})
export class SkillGroupItemComponent {
  constructor(private router: Router) {}

  openSkillGroup() {
    this.router.navigateByUrl('admin/skills-group/soreteeeee');
  }
}
