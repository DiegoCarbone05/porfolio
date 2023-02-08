import { AuthModule } from './views/auth/auth.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {pathMatch:'full', path:'', redirectTo:'home'} ,
  {
    path:'',
    loadChildren: () => import('./views/pages/pages.module').then( m => m.PagesModule )
  },
  {
    path:'auth',
    loadChildren: () => import('./views/auth/auth.module').then( m => m.AuthModule )
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
