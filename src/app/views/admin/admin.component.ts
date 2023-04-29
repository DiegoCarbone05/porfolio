import { CardsFacade } from './../../core/facade/cards.facade';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { NavigationStart, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { AuthService } from '../auth/services/auth.service';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  background: ThemePalette = undefined;
  sidenavStatus: boolean = true;
  drawerMode: any = 'side';
  menuButtonVisibility: boolean = true;
  sidenavItems = {
    start: [
      {
        text: 'Inicio',
        icon: 'home',
        path: 'dashboard',
        parentRouter: 'admin/',
      },
      {
        text: 'Pagina principal',
        icon: 'domain_verification',
        path: 'main-page',
        parentRouter: 'admin/',
      },
      {
        text: 'Pagina sobre mi',
        icon: 'contacts',
        path: 'about-page',
        parentRouter: 'admin/',
      },
      // {
      //   text: 'Pagina de estadisticas',
      //   icon: 'monitoring',
      //   path: 'skills-page',
      //   parentRouter: 'admin/',
      // },
    ],
    end: [
      {
        text: 'Ripple :D',
        icon: 'drag_click',
        path: 'settings',
        parentRouter: 'admin/',
      },
      {
        text: 'Regresar al inicio',
        icon: 'keyboard_return',
        path: '/#/',
        parentRouter: '',
      },
    ],
  };

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private authSvc: AuthService,
    private utilsSvc: UtilsService,
    private CardsFacade: CardsFacade
  ) {
    this.authSvc.loginStatus.subscribe((res)=>{
      if (!res) {
        this.router.navigateByUrl('');
      }
    })
  }

  ngOnInit(): void {
    //Refresh Observers
    this.CardsFacade.refresh();

    if (window.innerWidth <= 1300) {
      this.drawerMode = 'over';
      this.sidenavStatus = false;
    }

    this.changeUIByRouter(location.hash);

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.changeUIByRouter(event.url);
      }
    });
  }

  changeUIByRouter(path: string) {
    if (path.includes('/skills-group/')) {
      this.menuButtonVisibility = false;
      if (this.sidenavStatus) {
        this.sidenavStatus = false;
      }
    } else {
      this.menuButtonVisibility = true;
      if (this.drawerMode == 'side' && !this.sidenavStatus) {
        this.sidenavStatus = true;
      }
    }
  }

  returnUrl() {
    this.router.navigateByUrl('/admin/skills-page');
  }

  redirectTo(path: string) {
    this.router.navigateByUrl(path);
    if (window.innerWidth <= 1300) {
      this.sidenavStatus = false;
    }
  }
  logout() {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: '¿Esta seguro que quiere cerrrar sesión?',
        text: 'Esto hara que en un futuro tenga que volver a poner las credenciales para volver a entrar al administrador.',
        action: () => {
          localStorage.removeItem('auth');
          location.reload();
        },
      },
    });
  }
}
