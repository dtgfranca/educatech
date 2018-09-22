import { Aluno } from './../../model/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, LoadingController, Loading} from 'ionic-angular';
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
  registroFormLogin : FormGroup;
  loading : Loading;
  mensagem: string ='';
  aluno = {} as Aluno;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
	private auth: AuthProvider,
	private formBuilder: FormBuilder,
    private events: Events,
    private  loadingCtrl: LoadingController
    
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
    
    this.mensagem ='';
    this.mostraLoading();
    this.auth.login(this.registroFormLogin.value).subscribe( (data)=>{  
	  let dados =  JSON.parse(JSON.stringify(data));  

	  this.sessao(JSON.stringify(data)); 
	  
	  this.events.publish('usuario:criado', this.recuperaSessao().nome);
	  this.fechaLoading();
      this.navCtrl.setRoot('PrincipalPage');
    },err =>{
        if(err == 401){
            this.fechaLoading();
            this.mensagem ="Usuário/senha não encontrado";
        }else{
            this.fechaLoading();
            this.mensagem = "Houve um probelma, consulte o suporte";
        }	
      
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
  mostraLoading(){
      this.loading = this.loadingCtrl.create({
          content:'Aguarde ...'
      });
      this.loading.present();
  }

  fechaLoading(){
    this.loading.dismiss();
  }
}
