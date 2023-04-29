import { CardsFacade } from 'src/app/core/facade/cards.facade';
import { ConfigurationFacade } from 'src/app/core/facade/configuration.facade';
import { Component } from '@angular/core';
import { AuthService } from './views/auth/services/auth.service';
import { UtilsService } from './core/services/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'diego-carbone-pf';
  spinnerStatus: boolean = true;
  constructor(
    private authSvc: AuthService,
    private utilsSvc: UtilsService,
    private configurationFacade: ConfigurationFacade,
    private CardsFacade:CardsFacade
  ) {

    if (localStorage.getItem('theme')) {
      setTimeout(() => {
        this.spinnerStatus = false;
      }, 500);
    }

    this.authSvc.verifyToken();
    this.utilsSvc.checkTheme();

    this.configurationFacade.refresh();
    this.CardsFacade.refresh()
  }
}
