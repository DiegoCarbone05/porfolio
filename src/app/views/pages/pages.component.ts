import { IFooterData } from './../../shared/footer/footer.component';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent {
  constructor(private router: Router) {
    // if (location.pathname === '/') {
    //   this.router.navigateByUrl('/home');
    // }
  }

  footerData: IFooterData[] = [
    {
      secctionTitle: 'Contacto',
      items: [
        { title: 'Correo', content: 'diegocarbone22@gmail.com', path: '' },
      ],
    },
    {
      secctionTitle: 'Linkedin',
      items: [
        { title: 'Linkedin', content: 'Diego Santiago Carbone', path: 'https://www.linkedin.com/in/diego-santiago-carbone-715b66238/' },
        { title: 'Github', content: 'DiegoCarbone05', path: 'https://github.com/DiegoCarbone05' },
        { title: 'Instagram', content: '@diegocarbone05', path: 'https://www.instagram.com/diegocarbone05/' },
      ],
    },
  ];
}
