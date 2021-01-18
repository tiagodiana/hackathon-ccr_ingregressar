<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/factory', function () use ($router) {
    /*\App\Models\Jovem::factory()->count(5)->create();*/
    /*\App\Models\Curriculo::factory()->count(5)->create();*/
    \App\Models\Empresa::factory()->count(4)->create();
    \App\Models\Vagas::factory()->count(4)->create();
    /*\App\Models\Endereco::factory()->count(5)->create();*/
});

/*INDEX*/
$router->get('/', function () use ($router) {
    return "Api Hackathon Jovem";
});

/*JOVEM*/
$router->group(['prefix'=>'/jovem'], function () use ($router) {
    $router->get('/', 'JovemController@getAll');
    $router->get('/{id}', 'JovemController@get');
    $router->post('/add', 'JovemController@add');
    $router->put('/update/{id}', 'JovemController@update');
    $router->delete('/delete/{id}', 'JovemController@delete');
});


/*CURRICULO*/
$router->group(['prefix'=>'/curriculo'], function () use ($router) {
    $router->get('/', 'CurriculoController@getAll');
    $router->get('/{id}', 'CurriculoController@get');
    $router->post('/add', 'CurriculoController@add');
    $router->put('/update/{id}', 'CurriculoController@update');
    $router->delete('/delete/{id}', 'CurriculoController@delete');
});

/*EMPRESA*/
$router->group(['prefix'=>'/empresa'], function () use ($router) {
    $router->get('/', 'EmpresaController@getAll');
    $router->get('/{id}', 'EmpresaController@get');
    $router->post('/add', 'EmpresaController@add');
    $router->put('/update/{id}', 'EmpresaController@update');
    $router->delete('/delete/{id}', 'EmpresaController@delete');
});


/*ENDEREÇO*/
$router->group(['prefix'=>'/endereco'], function () use ($router) {
    $router->get('/', 'EnderecoController@getAll');
    $router->get('/{id}', 'EnderecoController@get');
    $router->post('/add', 'EnderecoController@add');
    $router->put('/update/{id}', 'EnderecoController@update');
    $router->delete('/delete/{id}', 'EnderecoController@delete');
});

/*VAGAS*/
$router->group(['prefix'=>'/vagas'], function () use ($router) {
    $router->get('/', 'VagasController@getAll');
    $router->get('/{id}', 'VagasController@get');
    $router->post('/add', 'VagasController@add');
    $router->put('/update/{id}', 'VagasController@update');
    $router->delete('/delete/{id}', 'VagasController@delete');
});

$router->group(['prefix' => '/auth'], function () use ($router){
    $router->post('/login', 'AuthController@login');
});
