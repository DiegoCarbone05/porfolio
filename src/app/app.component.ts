import { UtilsService } from './core/services/utils.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'diego-carbone-pf';
  constructor(private router: Router, private utilsSvc:UtilsService) {
    // this.router.navigateByUrl('home')

    this.utilsSvc.checkTheme()
  }
}
