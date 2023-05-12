import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ISkill } from 'src/app/core/Interfaces/iskill';

@Component({
  selector: 'app-skill-group-visualizer',
  templateUrl: './skill-group-visualizer.component.html',
  styleUrls: ['./skill-group-visualizer.component.scss'],
})
export class SkillGroupVisualizerComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}


  ngOnInit(): void {
    const groupId = this.route.snapshot.paramMap.get('groupId');
  }
}
