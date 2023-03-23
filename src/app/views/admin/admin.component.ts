import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  background: ThemePalette = undefined;
  sidenavStatus: boolean = true;
  drawerMode: any = 'side';
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
      {
        text: 'Pagina de estadisticas',
        icon: 'monitoring',
        path: 'skills-page',
        parentRouter: 'admin/',
      },
    ],
    end: [
      {
        text: 'Regresar al inicio',
        icon: 'keyboard_return',
        path: '/#/',
        parentRouter: '',
      },
      {
        text: 'Configuracion',
        icon: 'settings',
        path: 'settings',
        parentRouter: 'admin/',
      },
    ],
  };

  constructor(private router: Router, public dialog: MatDialog) {
    if (!localStorage.getItem('auth')) {
      this.router.navigateByUrl('');
    }
  }

  ngOnInit(): void {
    if (window.innerWidth <= 1300) {
      this.drawerMode = 'over';
      this.sidenavStatus = false;
    }
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
