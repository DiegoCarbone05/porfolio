import { ConfigurationFacade } from 'src/app/core/facade/configuration.facade';
import { ICard } from './../../../shared/card/card.component';
import { IHero } from './../../../shared/hero/hero.component';
import { Component, OnInit } from '@angular/core';
import { Configuration } from 'src/app/core/models/configuration';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
})
export class StartPageComponent implements OnInit {
  heroData: IHero = {
    firstText: '',
    secondText: '',
    thirdText: '',
  };

  cardData: ICard[] = [
    {
      index: 0,
      picture: 'assets/resources/cards-pictures/nest-card.svg',
      title: 'Nest JS',
      descript:
        'Hace relativamente poco intente mejorar mi apartado de backend y comenze tomando un curso de Udemy de NestJs.',
    },
    {
      index: 1,
      picture: 'assets/resources/cards-pictures/sp-card.svg',
      title: 'Java SpringBoot',
      descript:
        'En mi cursada actual de Argentina Programa estoy aprendiendo a usar Java y en su defecto Springboot.',
    },
    {
      index: 2,
      picture: 'assets/resources/cards-pictures/next-card.svg',
      title: 'Angular',
      descript:
        'Angular es uno de los primeros framework que aprendi a usar a mediados de 2020, pero aun sigo aprendiendo cosas nuevas, podria decirse que es mi framework principal',
    },
    {
      index: 3,
      picture: 'assets/resources/cards-pictures/react-card.svg',
      title: 'React',
      descript:
        'Con mi conocimiento previo en Angular quise aprender otro framework en donde el Server Side Render sea un poco mas suporteado.',
    },
  ];

  constructor(private configFacade: ConfigurationFacade) {}

  ngOnInit(): void {
    this.configFacade.getAll().subscribe((res) => {
      const [first, second, third] = res;

      this.heroData = {
        firstText: first.value,
        secondText: second.value,
        thirdText: third.value,
      };
    });
  }

  //save card data
  saveDataCard(value: ICard[]) {
    this.cardData = value;
    //Send data
  }
  saveDataHero() {
    combineLatest([
      this.configFacade.setConfig(
        new Configuration('banner_top_text', this.heroData.firstText)
      ),
      this.configFacade.setConfig(
        new Configuration('banner_center_text', this.heroData.secondText)
      ),
      this.configFacade.setConfig(
        new Configuration('banner_bottom_text', this.heroData.thirdText)
      ),
    ]).subscribe((res) => {
      console.log(res);
      this.configFacade.refresh();
    });
  }
}
