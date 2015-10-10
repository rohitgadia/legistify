<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('q','QueryController@index');
Route::get('q/{id}', 'ReplyController@index'
)->where('id','[0-9]+');
Route::get('404',function(){
	abort(404);
});
Route::get('layouts',function(){
	return view('layouts.master');
});
Route::post('q/{id}/mail','ReplyController@mail');