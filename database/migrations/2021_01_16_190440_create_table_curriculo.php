<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableCurriculo extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('curriculo', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_jovem');
            $table->string('linkedin')->nullable();
            $table->string('github')->nullable();
            $table->string('telefone');
            $table->date('data_nascimento');
            $table->string('escolaridade');
            $table->longText('formacao')->nullable();
            $table->date('ano_formacao')->nullable();
            $table->longText('cursos')->nullable();
            $table->longText('cursos_realizados')->nullable();
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
        Schema::dropIfExists('curriculo');
    }
}
