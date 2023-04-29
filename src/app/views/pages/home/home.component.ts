import { CardsFacade } from 'src/app/core/facade/cards.facade';
import { IDinamicHero } from './../../../shared/dinamic-hero/dinamic-hero.component';
import { ICard } from './../../../shared/card/card.component';
import { Component, OnInit } from '@angular/core';
import { IHero } from 'src/app/shared/hero/hero.component';
import { ConfigurationFacade } from 'src/app/core/facade/configuration.facade';
import { Configuration } from 'src/app/core/models/configuration';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  heroData:IHero = {
    firstText:'',
    secondText:'',
    thirdText:'',
  }

  cardData: ICard[] = [];

  dinamicHeroData: IDinamicHero = {
    secction:'',
    title:'Diseño de logos e interfaces',
    desc:'En este sector aparecera todo mi conocimiento relacionado con el diseño de logos, interfaces, modelado 3D, etc.',
    buttons: [
      {path:'', content:'Ver Mas'},
    ],
    baseImg:'assets/resources/hero-pictures/ganudesign-banner-mobile.png',
    pictures:[
      {srcset:'assets/resources/hero-pictures/ganudesign-banner.png', media:'(min-width: 768px)'}
    ]
  }

  constructor(private configurationFacade:ConfigurationFacade, private CardsFacade:CardsFacade){
    this.configurationFacade.getAll().subscribe(res =>{

      res.forEach((result: Configuration) => {
        switch (result.name) {
          case 'banner_top_text':
            this.heroData.firstText = result.value;
            break;

          case 'banner_center_text':
            this.heroData.secondText = result.value;
            break;

          case 'banner_bottom_text':
            this.heroData.thirdText = result.value;
            break;
        }
      });
    })
  }

  ngOnInit(): void {
      this.CardsFacade.getCards.subscribe(res => this.cardData = res)
  }


}

