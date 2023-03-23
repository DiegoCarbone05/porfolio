import { ICard } from './../card.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-card-edit-dialog',
  templateUrl: './card-edit-dialog.component.html',
  styleUrls: ['./card-edit-dialog.component.scss'],
})
export class CardEditDialogComponent implements OnInit {
  currentData!: ICard;

  editCardForm = new FormGroup({
    title: new FormControl(this.data.currentCardsData.title),
    descript: new FormControl(this.data.currentCardsData.descript),
    path: new FormControl(this.data.currentCardsData.path),
  });

  constructor(
    public dialogRef: MatDialogRef<CardEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { currentCardsData: ICard }
  ) {}

  ngOnInit(): void {
    this.currentData = this.data.currentCardsData;

    this.editCardForm.valueChanges.subscribe((data) => {
      this.currentData = {
        ...this.currentData,
        title: data.title as string,
        descript: data.descript as string,
        path: data.path as string,
      } as ICard;
    });
  }

  submit() {
    this.dialogRef.close(this.currentData);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
