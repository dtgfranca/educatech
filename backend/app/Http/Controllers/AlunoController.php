<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
Use Validator;
Use App\Aluno;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AlunoController extends Controller
{
  
    private $successStatus =200;    

    public function login(){         
        $usuario = request('al_email');
        $senha = request('al_senha');

        //busca o usuário para ver se o mesmo existe
        $model    = Aluno::where('al_email',$usuario)->first();
    
        if( Auth::check() || $model && Hash::check($senha, $model->al_senha) ){            
            $aluno =  Auth::loginUsingId($model->al_cpf);            
            $success['token'] =  $aluno->createToken('MyApp')-> accessToken; 

            return response()->json(['success' => $success, 'nome'=>$model->al_nome, 'email'=>$model->al_email], $this-> successStatus); 
        } 
        else{ 
            return response()->json(['error'=>'Unauthorised'], 401); 
        } 
    }
    public function register(Request $request) 
    { 
        
        $validator = Validator::make($request->all(), [ 
            'al_nome' => 'required', 
            'al_email' => 'required|email', 
            'al_senha' => 'required', 
            'c_al_senha' => 'required|same:al_senha', 
            'al_cpf' => 'required',
            'al_endereco' => 'required', 
            'al_estado' => 'required', 
            'municipio' => 'required', 
            'al_telefone' => 'required', 
        ]);
        
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }
        $input = $request->all(); 
        $input['al_senha'] = bcrypt($input['al_senha']); 
        $aluno = Aluno::create($input); 
        $success['token'] =  $aluno->createToken('MyApp')-> accessToken; 
        $success['al_nome'] =  $aluno->al_nome;
        return response()->json(['success'=>$success], $this-> successStatus); 
        
    }
}
