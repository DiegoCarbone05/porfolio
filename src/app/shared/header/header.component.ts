import { UtilsService } from './../../core/services/utils.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/views/auth/services/auth.service';

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
  argentinaProgramaLogoUrl: string =
    'assets/resources/logos/SVG/ap-logo-light.svg';

  constructor(
    private utilsSvc: UtilsService,
    private router: Router,
    private authSvc: AuthService
  ) {
    this.navItems = [
      { text: 'Inicio', path: '/home', icon: 'home' },
      { text: 'Sobre mi', path: '/about', icon: 'person' },
      // { text: 'Habilidades', path: '/skills', icon: 'query_stats' },
    ];
  }

  ngOnInit(): void {
    this.authSvc.verifyToken()?.subscribe({
      next: () => {
        console.log('Autenticacion correcta');
        this.authSvc.loginStatus = true;
        this.isLogged = this.authSvc.loginStatus;
      },
      error: (err) => {
        console.log('Autenticacion correcta');
        localStorage.removeItem('auth');
        this.authSvc.loginStatus = true;
        this.isLogged = this.authSvc.loginStatus;
      },
    });

    this.utilsSvc.$darkMode.subscribe((isDarkMode: boolean) => {
      if (isDarkMode) {
        this.argentinaProgramaLogoUrl =
          'assets/resources/logos/SVG/ap-logo-dark.svg';
      } else {
        this.argentinaProgramaLogoUrl =
          'assets/resources/logos/SVG/ap-logo-light.svg';
      }
    });
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
  }
  goToAuth() {
    this.router.navigateByUrl('auth/login');
  }
  openAdmin() {
    this.router.navigateByUrl('admin/dashboard');
  }
}
