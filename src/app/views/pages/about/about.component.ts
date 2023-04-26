import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { ApiService } from 'src/app/core/api/api.service';
import { ConfigurationFacade } from 'src/app/core/facade/configuration.facade';
import { Configuration } from 'src/app/core/models/configuration';

interface IAboutContent {
  title: string;
  paragraph: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  aboutContent: IAboutContent = {
    title: 'empty',
    paragraph: 'empty',
  };

  @HostListener('document:keydown.meta.k')
  doSomething() {
    alert('K')

  }

  constructor(private configFacade: ConfigurationFacade, private renderer: Renderer2) {

    this.configFacade.getAll().subscribe((res) => {
      res.forEach((result: Configuration) => {
        switch (result.name) {
          case 'about_title':
            this.aboutContent.title = result.value

            break;

          case 'about_descript':
            this.aboutContent.paragraph = result.value
            break;
        }
      });
    });

  }

  ngOnInit(): void {
    this.renderer.listen(document, 'keydown.meta.k', (res)=>{
      console.log(res);

    })
  }

}
