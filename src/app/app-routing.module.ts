import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [

  {
    path:"",
    loadChildren:() => import('./auth/auth.module').then(m =>m.AuthModule)
  },
  {
    path:"auth",
    loadChildren:() => import('./auth/auth.module').then(m =>m.AuthModule)
  },
  {
    path:"pages",
    loadChildren:() => import('./pages/pages.module').then(m =>m.PagesModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
