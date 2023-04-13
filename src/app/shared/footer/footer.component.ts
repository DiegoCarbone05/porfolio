import { Component, Input } from '@angular/core';

export interface IFooterData {
  secctionTitle:string;
  items:IFooterItem[]
}
export interface IFooterItem {
  title:string;
  content:string;
  path?:string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() footerData!:IFooterData[]
}
