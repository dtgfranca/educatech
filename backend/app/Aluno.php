<?php

namespace App;

//use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;


class Aluno extends Authenticatable
{
    //
    use HasApiTokens, Notifiable;
    use Notifiable;
    protected $table = 'alunos';
    protected $primaryKey = 'al_cpf';

    protected $fillable =['al_email','al_senha','al_nome','al_cpf','al_endereco','al_estado','municipio','al_telefone'];

    protected $hidden =['remember_token', 'al_senha'];
}
