<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAlunosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('alunos', function (Blueprint $table) {
            
            $table->string('al_cpf')->unique();
            $table->string('al_nome');
            $table->string('al_email')->unique();
            //$table->timestamp('email_verified_at')->nullable();
            $table->string('al_endereco');
            $table->string('al_estado');
            $table->string('municipio');
            $table->string('al_telefone');            
            $table->string('al_senha');            
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('alunos');
    }
}
