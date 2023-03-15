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
  spinnerStatus: boolean = true;
  constructor(private router: Router, private utilsSvc: UtilsService) {
    if(localStorage.getItem('theme')){
      setTimeout(()=>{
        this.spinnerStatus = false
      }, 500)
    }
  }

}
