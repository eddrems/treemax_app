<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'AutenticacionController@index')->name("login");
Route::post('autenticacion/login', 'AutenticacionController@login');
Route::get('autenticacion/logout', 'AutenticacionController@logout');




Route::group(['middleware' => ['web', 'auth']], function () {

    Route::get('dashboard', 'AutenticacionController@dashboard');

});


