
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StartPageComponent } from './start-page/start-page.component';

const routes: Routes = [
  {
    path:'',
    component:AdminComponent,
    children:[
      {path:'dashboard', component:DashboardComponent},
      {path:'startPage', component:StartPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
