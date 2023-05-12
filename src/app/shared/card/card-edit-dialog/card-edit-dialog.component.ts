import { ICard } from './../card.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-card-edit-dialog',
  templateUrl: './card-edit-dialog.component.html',
  styleUrls: ['./card-edit-dialog.component.scss'],
})
export class CardEditDialogComponent implements OnInit {
  currentData!: ICard;
  @ViewChild('file') fileInput!: ElementRef;
  fileAttr = 'Choose File';

  editCardForm = new FormGroup({
    picture: new FormControl(this.data.currentCardsData?.picture ?? 'assets/resources/pictures/img-404-card.svg'),
    title: new FormControl(this.data.currentCardsData?.title ?? 'Titulo'),
    desc: new FormControl(this.data.currentCardsData?.desc ?? 'Descripción'),
    url: new FormControl(this.data.currentCardsData?.url ?? ''),
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
        picture: data.picture as string,
        title: data.title as string,
        desc: data.desc as string,
        url: data.url as string,
      } as ICard;
    });
  }

  submit() {
    console.log(this.currentData);

    this.dialogRef.close(this.currentData);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
