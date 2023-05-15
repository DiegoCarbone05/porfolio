import { CardsFacade } from 'src/app/core/facade/cards.facade';
import { ConfigurationFacade } from 'src/app/core/facade/configuration.facade';
import { Component } from '@angular/core';
import { AuthService } from './views/auth/services/auth.service';
import { UtilsService } from './core/services/utils.service';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  firebaseConfig = {
    apiKey: 'AIzaSyAM8cU_z7cnU6H4HjY0_a3_V5Wbq0AmWUs',
    authDomain: 'porfolio-web-3d776.firebaseapp.com',
    projectId: 'porfolio-web-3d776',
    storageBucket: 'porfolio-web-3d776.appspot.com',
    messagingSenderId: '414933878961',
    appId: '1:414933878961:web:546286e4b03dff728d3a90',
    measurementId: 'G-TCC5HR798E',
  };

  title = 'diego-carbone-pf';
  spinnerStatus: boolean = true;
  constructor(
    private authSvc: AuthService,
    private utilsSvc: UtilsService,
    private configurationFacade: ConfigurationFacade,
    private CardsFacade: CardsFacade
  ) {
    console.log('Contecting');

    this.configurationFacade.getAll().subscribe((res) => {
      if (localStorage.getItem('theme') && res.length) {
        this.spinnerStatus = false;
        console.log(this.spinnerStatus);
      }
    });

    this.authSvc.verifyToken();
    this.utilsSvc.checkTheme();

    this.configurationFacade.refresh();
    this.CardsFacade.refresh();

    // Initialize Firebase
    const app = initializeApp(this.firebaseConfig);
    const analytics = getAnalytics(app);
  }
}
