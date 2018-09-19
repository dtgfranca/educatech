import { Dados } from './../../model/dados';
import { Aluno } from './../../model/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscriber, Observable } from 'rxjs';
import { HttpModule } from '@angular/http'
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public http: HttpClient) {
    
  }
  

  login(aluno:Aluno): Observable <Aluno[]> {
    console.log(aluno)
    let dados = "al_email="+aluno.email+"&al_senha="+aluno.senha;
    let header = new Headers();   
    header.append('Content-Type', 'aapplication/json');
    
    return this.http.post(Dados.API_URL+"login",dados,{headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
    .map(user => user)
    .catch(err => Observable.throw(err.status))
    
      
  }

  register(): Observable<Aluno[]>{
      return this.http.post(Dados.API_URL, "body")
      .map(user => user)
      .catch(err => Observable.throw(err.message))
  }

  resetSenha(): Observable<Aluno[]>{
      return this.http.post(Dados.API_URL,"")
      .map(user=>user)
      .catch(err => Observable.throw(err.message))
  }

  
}
