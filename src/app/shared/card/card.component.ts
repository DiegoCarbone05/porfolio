import { Component, Input } from '@angular/core';


export interface ICard{
  picture:string;
  title:string;
  descript:string;
  path?:string;
  button?:string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() data!:ICard[]
}
