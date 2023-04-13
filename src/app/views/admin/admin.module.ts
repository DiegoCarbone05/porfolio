import { SharedModule } from './../../shared/shared.module';
import { NavigationViewComponent } from './components/navigation-view/navigation-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { StartPageComponent } from './start-page/start-page.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { SkillsPageComponent } from './skills-page/skills-page.component';
import { SkillGroupItemComponent } from './skills-page/skill-group-item/skill-group-item.component';
import { SkillItemComponent } from './skills-page/skill-item/skill-item.component';
import { SkillGroupVisualizerComponent } from './skills-page/pages/skill-group-visualizer/skill-group-visualizer.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AdminComponent,
    NavigationViewComponent,
    StartPageComponent,
    ConfirmDialogComponent,
    AboutPageComponent,
    SkillsPageComponent,
    SkillGroupItemComponent,
    SkillItemComponent,
    SkillGroupVisualizerComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
