import { ICard } from './../../../shared/card/card.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  cardData: ICard[] = [
    {
      picture: 'assets/resources/cards-pictures/nest-card.svg',
      title: 'Nest JS',
      descript: 'Jelouda',
    },
    {
      picture: 'assets/resources/cards-pictures/sp-card.svg',
      title: 'Nest JS',
      descript: 'Jelouda',
    },
    {
      picture: 'assets/resources/cards-pictures/next-card.svg',
      title: 'Nest JS',
      descript: 'Jelouda',
    },
    {
      picture: 'assets/resources/cards-pictures/react-card.svg',
      title: 'Nest JS',
      descript: 'Jelouda',
    },

  ];
}
