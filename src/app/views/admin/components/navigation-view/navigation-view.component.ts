import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-view',
  templateUrl: './navigation-view.component.html',
  styleUrls: ['./navigation-view.component.scss']
})
export class NavigationViewComponent implements OnInit {

  asideStatus:boolean

  constructor(private router:Router) {
    this.asideStatus = false
    }

  ngOnInit() {
  }

  routerButton(path:string){
    this.asideStatus = false
    this.router.navigateByUrl(path)
  }

}
