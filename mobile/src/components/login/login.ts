import { AuthProvider } from './../../providers/auth/auth';
import { Aluno } from './../../model/user';
import { Component, Output, EventEmitter, NgModule } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Facebook } from '@ionic-native/facebook';
import firebase from 'firebase';
import { AlertController} from 'ionic-angular';

@Component({
  selector: 'login',
  templateUrl: 'login.html',
  providers:[AuthProvider]
  
})
export class LoginComponent {

  text: string;
  type: string;
  aluno = {} as Aluno;
  @Output() retorno  = new EventEmitter<boolean> ();

  constructor(
    private afuth: AngularFireAuth, 
    private facebook: Facebook,
    private alertCtrl: AlertController,
    private auth: AuthProvider
    
  ) {
	  this.type = "login";
    
  }

  login(aluno: Aluno){
   
    
    this.auth.login(aluno).subscribe( (data)=>{  
      let dados =  JSON.parse(JSON.stringify(data));
     //console.log(dados.nome);
      this.retorno.emit(true)
    },err =>{
      this.retorno.emit(false)
      console.log(err);
    })
   /* try {
      const result = await this.afuth.auth.signInWithEmailAndPassword(aluno.email, aluno.senha);      
      if(result){
        this.retorno.emit(true);
		console.log("foi feito o login com sucesso");		
      }else{
        this.retorno.emit(false);
      }
    } catch (error) {
      this.retorno.emit(false);
      console.error(error);
    }*/
    
  }

 async  register(aluno: Aluno){
    /*try {
      const result = await this.afuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      this.retorno.emit(true);
    } catch (error) {
      this.retorno.emit(false);
      console.error(error);
    }*/
    
  }

  resetPassword(email:string){
    let alert = this.alertCtrl.create({
      title:"Recuperar Senha",
      subTitle:"Digite seu email para recuperar",
      inputs:[{
                name:"email",
                placeholder:"Digite o e-mail",
                type:"email"

        }
      ],
      buttons:[{
        text:"Recuperar",
        role:"recuperar",
        handler: data =>{
          console.log(data);
          this.afuth.auth.sendPasswordResetEmail(data.email)
          .then(resp =>{
            console.log(resp);
          })
          .catch(err =>{
            console.error(err);
          })
          console.log(data);
        }        
      },{
          text:"Cancelar",
          role:"cancel"
      }]
    })

    alert.present();
  }

}
