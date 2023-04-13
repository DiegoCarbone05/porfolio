import { FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';

export interface AboutMeDTO {
  title:string,
  descript:string
}

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {
  currentAboutMeData!:AboutMeDTO

  aboutMeContent = new FormGroup({
    title: new FormControl(),
    descript: new FormControl(),
  });

  saveDataAbout(){
    let tempData = this.currentAboutMeData

    this.currentAboutMeData.title = this.aboutMeContent.value.title;
    this.currentAboutMeData.descript = this.aboutMeContent.value.descript;

    if(this.currentAboutMeData !== tempData){
      //send data
    }
  }

}
