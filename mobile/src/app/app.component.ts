import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  nomeAluno:string;

  rootPage:any = LoginPage;

  pages: Array<{title:string, component: any, ico:string}>

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private events: Events) {

    this.pages =[
      {title:"Início", component:'', ico:'home'},
      {title:"Inf. Cadastrais", component:'', ico:'information-circle'},
      {title:"Agend. de Provas", component:'', ico:'calendar'},
      {title:"Meus Agendamentos", component:'', ico:'bookmarks'},
      {title:"Boletim", component:'', ico:'school'},
      {title:"Configurações", component:'', ico:'settings'},
     
    ]
    this.events.subscribe('usuario:criado',nome=>{
       this.nomeAluno = nome;
    })
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

  }

  sair(){
    localStorage.clear();
    this.nav.setRoot('LoginPage');
  }
}

