import { ConfigurationFacade } from 'src/app/core/facade/configuration.facade';
import { ICard } from './../../../shared/card/card.component';
import { IHero } from './../../../shared/hero/hero.component';
import { Component, OnInit } from '@angular/core';
import { Configuration } from 'src/app/core/models/configuration';
import { combineLatest } from 'rxjs';
import { CardsFacade } from 'src/app/core/facade/cards.facade';

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
    imgSrc: '',
  };

  cardData: ICard[] = [];
  cardTitleSeccion!: string;

  constructor(
    private configFacade: ConfigurationFacade,
    private cardFacade: CardsFacade
  ) {}

  ngOnInit(): void {
    this.configFacade.getAll().subscribe((res) => {
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
          case 'card_section_title':
            this.cardTitleSeccion = result.value;
            break;
          case 'banner_img_src':
            this.heroData.imgSrc = result.value;
            break;
        }
      });
    });
    this.cardFacade.getCards.subscribe((res) => (this.cardData = res));
  }

  //save card data
  saveDataCard(value: ICard[]) {
    this.cardData = value;
    //Send data
    this.cardFacade
      .saveCards(this.cardData.filter((card) => card))
      .subscribe((res) => {
        this.cardFacade.refresh();
      });
  }

  saveCardTitle() {
    this.configFacade
      .setConfig(new Configuration('card_section_title', this.cardTitleSeccion))
      .subscribe(() => {
        this.configFacade.refresh();
      });
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
      this.configFacade.setConfig(
        new Configuration('banner_img_src', this.heroData.imgSrc)
      ),
    ]).subscribe(() => {
      this.configFacade.refresh();
    });
  }
}
