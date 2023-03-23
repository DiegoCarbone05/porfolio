import { ICard } from './../../../shared/card/card.component';
import { Component } from '@angular/core';
import { IHero } from 'src/app/shared/hero/hero.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {


  heroData:IHero = {
    firstText:'Hola',
    secondText:'Soy Diego Carbone',
    thirdText:'Full Stack Developer',
  }


  cardData: ICard[] = [
    {
      index:0,
      picture: 'assets/resources/cards-pictures/nest-card.svg',
      title: 'Nest JS',
      descript:
        'Hace relativamente poco intente mejorar mi apartado de backend y comenze tomando un curso de Udemy de NestJs.',
    },
    {
      index:1,
      picture: 'assets/resources/cards-pictures/sp-card.svg',
      title: 'Java SpringBoot',
      descript:
        'En mi cursada actual de Argentina Programa estoy aprendiendo a usar Java y en su defecto Springboot.',
    },
    {
      index:2,
      picture: 'assets/resources/cards-pictures/next-card.svg',
      title: 'Angular',
      descript:
        'Angular es uno de los primeros framework que aprendi a usar a mediados de 2020, pero aun sigo aprendiendo cosas nuevas, podria decirse que es mi framework principal',
    },
    {
      index:3,
      picture: 'assets/resources/cards-pictures/react-card.svg',
      title: 'React',
      descript:
        'Con mi conocimiento previo en Angular quise aprender otro framework en donde el Server Side Render sea un poco mas suporteado.',
    },
  ];
}
