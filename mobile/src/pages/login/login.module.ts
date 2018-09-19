import { AuthProvider } from './../../providers/auth/auth';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import {LoginComponent} from '../../components/login/login';


@NgModule({
  declarations: [
    LoginComponent, 
    LoginPage,
  ],
  imports: [
    
    
    IonicPageModule.forChild(LoginPage),
    
  ],
  providers:[
    AuthProvider
  ]
})
export class LoginPageModule {}
