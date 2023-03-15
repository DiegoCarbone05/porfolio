import { IHero } from './../../../shared/hero/hero.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent {
  heroData:IHero = {
    firstText:'Hola',
    secondText:'Soy Diego Carbone',
    thirdText:'Full Stack Developer',
  }
}
