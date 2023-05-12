import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PagesComponent } from './pages.component';
import { HabilityComponent } from './hability/hability.component';
import { SkillDialogComponent } from './hability/skill-dialog/skill-dialog.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    PagesComponent,
    HabilityComponent,
    SkillDialogComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
  ]
})
export class PagesModule { }
