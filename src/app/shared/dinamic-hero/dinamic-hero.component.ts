import { Component, Input } from '@angular/core';

export interface IDinamicHero {
  secction: string;
  title: string;
  desc: string;
  buttons: IDinamicHeroButtons[];
  baseImg:string;
  pictures:IHeroPictures[];
}
export interface IDinamicHeroButtons {
  path:string;
  content:string;
}
export interface IHeroPictures {
  srcset:string;
  media:string;
}

@Component({
  selector: 'app-dinamic-hero',
  templateUrl: './dinamic-hero.component.html',
  styleUrls: ['./dinamic-hero.component.scss']
})
export class DinamicHeroComponent {
  @Input() dinamicHeroData!:IDinamicHero


}
