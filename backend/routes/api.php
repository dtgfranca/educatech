<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

/*Route::post('login', 'AlunoController@login');
Route::post('register', 'AlunoController@register');
Route::group(['middleware' => 'auth:api'], function(){
Route::post('details', 'API\UserController@details');
});*/

/*Route::group(['middleware' => 'aluno'], function () {
    Route::post('login', 'AlunoController@login');
   
    
});*/

Route::group([
    'prefix' => 'auth'
], function () {
    Route::post('login', 'AlunoController@login');
    Route::post('register', 'AlunoController@register');
  
    Route::group([
      'middleware' => 'auth:api'
    ], function() {
        Route::get('logout', 'AuthController@logout');
        Route::get('user', 'AuthController@user');
    });
});