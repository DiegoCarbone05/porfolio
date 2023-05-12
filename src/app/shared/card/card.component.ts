import { Router } from '@angular/router';
import { CardEditDialogComponent } from './card-edit-dialog/card-edit-dialog.component';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Output, EventEmitter } from '@angular/core';

export interface ICard {
  id: number;
  picture: string;
  title: string;
  desc: string;
  url?: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() data!: ICard[];
  @Input() editMode!: boolean;
  @Output() saveNewCard = new EventEmitter<ICard[]>();

  cards!: ICard[];

  constructor(public router: Router, public dialog: MatDialog) {}

  ngOnChanges(changes: any): void {
    this.cards = changes.data.currentValue
  }

  ngOnInit(): void {
    this.cards = this.data;

  }

  editCard(index: number) {

    if (this.editMode) {


      let dialogRef = this.dialog.open(CardEditDialogComponent, {
        data: {
          currentCardsData: this.cards[index],
        },
      });


      dialogRef.afterClosed().subscribe((result) => {
        if(!result) return
        const index = this.cards.findIndex((card)=> card.id == result.id)
        if(index == -1) return
        this.cards[index] = result;
        this.saveNewCard.emit(this.cards);

      });



    } else {
      window.open(this.cards[index].url, '_blank');
    }
  }
}
