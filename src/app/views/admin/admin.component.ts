import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  links = [
    {label:'Dashboard', path:'admin/dashboard'},
    {label:'Pagina principal', path:'admin/startPage'},
  ];
  activeLink = this.links[0].path;
  background: ThemePalette = undefined;

  constructor(private router:Router){}

  redirectTo(path:string){
    this.activeLink = path;
    this.router.navigateByUrl(path)
  }

}
