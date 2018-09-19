import { Aluno } from './../../model/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events} from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',

})
export class LoginPage {

  text: string;
  type: string;
  registroFormLogin : FormGroup
  aluno = {} as Aluno;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
	private auth: AuthProvider,
	private formBuilder: FormBuilder,
	private events: Events
    
  ) {
	  this.registroFormLogin = formBuilder.group({
		  'email':['', [Validators.required, Validators.email]],
		  'senha':['', Validators.required]
	  })
  }

  ionViewDidLoad() { 
    this.type = "login";  
  }

  login(){  
    
    this.auth.login(this.registroFormLogin.value).subscribe( (data)=>{  
	  let dados =  JSON.parse(JSON.stringify(data));  

	  this.sessao(JSON.stringify(data)); 
	  
	  this.events.publish('usuario:criado', this.recuperaSessao().nome);
	  
      this.navCtrl.setRoot('PrincipalPage');
    },err =>{		
      console.log(err);
    }) 
    
  }

  sessao(data){
	  if(data){
		localStorage.setItem('dados',data);
		
	  }	  
  }
  recuperaSessao(){
	  if(localStorage.getItem('dados')){
		  return JSON.parse(localStorage.getItem("dados"));
	  }
  }
}
