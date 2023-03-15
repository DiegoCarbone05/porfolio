import { UtilsService } from './../../core/services/utils.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface navItem {
  text: string;
  path: string;
  icon: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navItems: navItem[];
  darkMode: boolean = false;
  isLogged: boolean = false;
  sidenavStatus: boolean = false;

  constructor(private utilsSvc: UtilsService, private router: Router) {
    this.navItems = [
      { text: 'Inicio', path: '/home', icon: 'home' },
      { text: 'Sobre mi', path: '/about', icon: 'person' },
      { text: 'Habilidades', path: '/skills', icon: 'query_stats' },
    ];
  }

  ngOnInit(): void {
    const ls = localStorage.getItem('auth')
    if (ls) {
      this.isLogged = true
    }else{
      this.isLogged = false

    }
  }

  changeTheme() {
    this.darkMode = !this.darkMode;
    if (localStorage.getItem('theme')) {
      if (localStorage.getItem('theme') === 'light') {
        this.utilsSvc.setTheme('dark');
        localStorage.setItem('theme', 'dark');
      } else if (localStorage.getItem('theme') === 'dark') {
        this.utilsSvc.setTheme('light');
        localStorage.setItem('theme', 'light');
      }
    } else {
      this.utilsSvc.setTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
  }

  redirectTo(path: string) {
    this.sidenavStatus = false;
    this.router.navigateByUrl(path);
  }

  changeSidenavStatus() {
    this.sidenavStatus = !this.sidenavStatus;
    if (this.sidenavStatus) {
      document.body.classList.add('not-overflow');
    } else {
      document.body.classList.remove('not-overflow');
    }
  }
  goToAuth() {
    this.router.navigateByUrl('auth/login');
  }
  openAdmin() {
    this.router.navigateByUrl('admin/dashboard');
  }
}
