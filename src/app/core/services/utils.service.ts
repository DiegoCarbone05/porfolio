import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {

  public $darkMode = new BehaviorSubject<boolean>(false)

  constructor() {
    this.checkTheme()
  }

  checkTheme() {
    if (localStorage.getItem('theme')) {
      const ls = localStorage.getItem('theme');
      switch (ls) {
        case 'light':
          document.body.classList.remove('dark');
          document.body.classList.add('light');
          this.$darkMode.next(false)
          break;

        case 'dark':
          document.body.classList.remove('light');
          document.body.classList.add('dark');
          this.$darkMode.next(true)
          break;
      }
    } else {
      document.body.classList.add('light');
      this.$darkMode.next(false)

    localStorage.setItem('theme', 'light');
  }
  }

  setTheme(theme: 'light' | 'dark') {
    localStorage.setItem('theme', theme);
    this.checkTheme();
  }
}
