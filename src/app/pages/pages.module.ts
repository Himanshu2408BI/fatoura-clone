import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MydocumentsComponent } from './mydocuments/mydocuments.component';
import { MyrepotsComponent } from './myrepots/myrepots.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path:'dashboard',
    component: DashboardComponent
  }
]

@NgModule({
  declarations: [
    DashboardComponent,
    MydocumentsComponent,
    MyrepotsComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
