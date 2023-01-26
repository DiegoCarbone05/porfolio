import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  checkTheme() {
    if (localStorage.getItem('theme')) {
      const ls = localStorage.getItem('theme');
      switch (ls) {
        case 'light':
          document.body.classList.remove('dark');
          document.body.classList.add('light');
          break;

        case 'dark':
          document.body.classList.remove('light');
          document.body.classList.add('dark');
          break;
      }
    } else {
      document.body.classList.add('light');
    }
  }

  setTheme(theme: 'light' | 'dark') {
    localStorage.setItem('theme', theme);
    this.checkTheme();
  }
}
