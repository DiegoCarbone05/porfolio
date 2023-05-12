import { Component, Input, OnInit } from '@angular/core';

export interface IHero {
  firstText: string;
  secondText: string;
  thirdText: string;
  imgSrc:string;
}

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent{

  @Input() heroData!:IHero

  constructor(){
  }

}
