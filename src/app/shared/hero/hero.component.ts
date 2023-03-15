import { Component, Input, OnInit } from '@angular/core';

export interface IHero {
  firstText: string;
  secondText: string;
  thirdText: string;
}

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent{
  titlesLanguajes: IHero[] = [
    {
      firstText: 'Hola',
      secondText: 'Soy Diego Carbone',
      thirdText: 'Desarrollador Full Stack',
    },
    {
      firstText: 'Hi',
      secondText: "I'm Diego Carbone",
      thirdText: 'Full Stack Developper',
    },
    {
      firstText: "Oi",
      secondText: "Eu sou Diego Carbone",
      thirdText: "Desenvolvedor full stack",
    },
    {
      firstText: "你好",
      secondText: "我是迭戈卡博内",
      thirdText: "全栈开发人员",
    },
    {
      firstText: "Bonjour",
      secondText: "Je suis Diego Carbonee",
      thirdText: "Désenvoléou full stack",
    },
    {
      firstText: "やあ",
      secondText: "私はディエゴ・カーボンです",
      thirdText: "フルスタック開発者",
    },
    {
      firstText: "Ciao",
      secondText: "Sono Diego Carbone",
      thirdText: "Sviluppatore a stack completo",
    },
    {
      firstText: "やあ",
      secondText: "私はディエゴ・カーボンです",
      thirdText: "フルスタック開発者",
    },
  ];

  @Input() heroData!:IHero

  constructor(){
  }

}
