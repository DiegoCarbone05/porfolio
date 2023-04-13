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

  skillItems: ISkill[] = [
    {
      name: 'Meeting Studio',
      description:
        'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.',
    },
    {
      name: 'Meeting Studio',
      description:
        'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.',
    },
    {
      name: 'Meeting Studio',
      description:
        'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.',
    },
    {
      name: 'Meeting Studio',
      description:
        'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.',
    },
    {
      name: 'Meeting Studio',
      description:
        'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.',
    },
    {
      name: 'Meeting Studio',
      description:
        'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.',
    },
    {
      name: 'Meeting Studio',
      description:
        'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.',
    },
  ];

  ngOnInit(): void {
    const groupId = this.route.snapshot.paramMap.get('groupId');
  }
}
