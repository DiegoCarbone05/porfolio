import { ICard } from 'src/app/shared/card/card.component';
import { CardStore } from './../state/card.store';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CardsFacade {
  constructor(private cardRepo: CardStore) {}

  get getCards() {
    return this.cardRepo.getCards;
  }

  saveCards(newCards: ICard[]) {
    return this.cardRepo.saveCards(newCards);
  }

  refresh() {
    this.cardRepo.refresh();
  }
}
