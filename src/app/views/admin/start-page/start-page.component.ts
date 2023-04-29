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
  };

  cardData: ICard[] = [];

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
        }
      });
    });
    this.cardFacade.getCards.subscribe((res) => (this.cardData = res));
  }

  //save card data
  saveDataCard(value: ICard[]) {
    this.cardData = value;
    //Send data
    this.cardFacade.saveCards(this.cardData.filter(card => card)).subscribe((res) => {
      this.cardFacade.refresh();
      console.log(res);

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
    ]).subscribe(() => {
      this.configFacade.refresh();
    });
  }
}
