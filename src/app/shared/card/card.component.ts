import { Router } from '@angular/router';
import { CardEditDialogComponent } from './card-edit-dialog/card-edit-dialog.component';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Output, EventEmitter } from '@angular/core';

export interface ICard {
  index: number;
  picture: string;
  title: string;
  descript: string;
  path?: string;
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

  currentData!: ICard[];

  constructor(public router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.currentData = this.data;
  }

  editCard(index: number) {

    if (this.editMode) {


      let dialogRef = this.dialog.open(CardEditDialogComponent, {
        data: {
          currentCardsData: {...this.currentData[index]},
        },
      });


      dialogRef.afterClosed().subscribe((result) => {
        if(!result) return
        this.currentData[result.index] = result;
        this.saveNewCard.emit(this.currentData);
      });



    } else {
      this.router.navigateByUrl(this.currentData[index].path || '');
    }
  }
}
