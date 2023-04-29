import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICard } from 'src/app/shared/card/card.component';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class CardStore {
  constructor(private apiSvc: ApiService) {}

  private $cardStore = new BehaviorSubject<ICard[]>([]);

  get getCards() {
    return this.$cardStore.asObservable();
  }

  saveCards(cards: ICard[]) {
    return this.apiSvc.saveCards(cards);
  }

  refresh() {
    this.apiSvc.getCards().subscribe((res) => {
      this.$cardStore.next(res);
    });
  }
}
