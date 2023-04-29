import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ConfigurationFacade } from 'src/app/core/facade/configuration.facade';
import { Configuration } from 'src/app/core/models/configuration';
import { combineLatest } from 'rxjs';

export interface AboutMeDTO {
  title: string;
  descript: string;
}

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
})
export class AboutPageComponent implements OnInit {
  constructor(private configFacade: ConfigurationFacade) {}

  currentAboutMeData!: AboutMeDTO;

  aboutMeContent = new FormGroup({
    title: new FormControl(),
    descript: new FormControl(),
  });

  ngOnInit(): void {
    this.configFacade.getAll().subscribe((res) => {
      res.forEach((result: Configuration) => {
        switch (result.name) {
          case 'about_title':

            this.aboutMeContent.patchValue({
              title: result.value,
            });

            break;

          case 'about_descript':
            this.aboutMeContent.patchValue({
              descript: result.value,
            });


            break;
        }
      });
    });
  }

  saveDataAbout() {
    combineLatest([
      this.configFacade.setConfig(
        new Configuration('about_title', this.aboutMeContent.value.title || 'empty')
      ),
      this.configFacade.setConfig(
        new Configuration('about_descript', this.aboutMeContent.value.descript || 'empty')
      ),
    ]).subscribe((res) => {
      this.configFacade.refresh();
    });
  }
}
