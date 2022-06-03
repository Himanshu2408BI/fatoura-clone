import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'signup',
    component: SignupComponent
  },
  {
    path:'forgetpassword',
    component:ForgetpasswordComponent
  }
]

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgetpasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
