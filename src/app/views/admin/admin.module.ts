import { SharedModule } from './../../shared/shared.module';
import { NavigationViewComponent } from './components/navigation-view/navigation-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { StartPageComponent } from './start-page/start-page.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AdminComponent,
    NavigationViewComponent,
    StartPageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
