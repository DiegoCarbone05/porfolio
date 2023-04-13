import { AboutPageComponent } from './about-page/about-page.component';

import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StartPageComponent } from './start-page/start-page.component';
import { SkillsPageComponent } from './skills-page/skills-page.component';
import { SkillGroupVisualizerComponent } from './skills-page/pages/skill-group-visualizer/skill-group-visualizer.component';

const routes: Routes = [
  {
    path:'',
    component:AdminComponent,
    children:[
      {path:'dashboard', component:DashboardComponent},
      {path:'main-page', component:StartPageComponent},
      {path:'about-page', component:AboutPageComponent},
      {path:'skills-page', component:SkillsPageComponent},
      {path:'skills-group/:groupId', component:SkillGroupVisualizerComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
