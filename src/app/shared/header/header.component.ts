import { Component } from '@angular/core';

interface navItem {
  text:string,
  path:string,
  icon:string
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  navItems:navItem[]

  darkMode:boolean = false

  constructor(){
    this.navItems = [
      {text:'Inicio', path:'/home', icon:'home'},
      {text:'Sobre mi', path:'/about', icon:'person'},
      {text:'Habilidades', path:'/skills', icon:'person'},
      {text:'Estadisticas', path:'/stats', icon:'bar_chart'},
    ]
  }

  changeTheme(){
    this.darkMode = !this.darkMode
  }

}