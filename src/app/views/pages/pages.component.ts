import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
  constructor(private router:Router){
    if(location.pathname === "/"){
      this.router.navigateByUrl('home')
    }
  }
}
