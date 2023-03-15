import { Component } from '@angular/core';

interface IAboutContent {
  paragraph:string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  aboutContent:IAboutContent[] = [
    { paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dicta commodi quod, et modi perspiciatis. Veritatis possimus maiores rerum,fugit sapiente hic quaerat. Nobis repudiandae cumque, corporis ipsumdolor est!" },
    { paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dicta commodi quod, et modi perspiciatis. Veritatis possimus maiores rerum,fugit sapiente hic quaerat. Nobis repudiandae cumque, corporis ipsumdolor est!" },
  ]
}
