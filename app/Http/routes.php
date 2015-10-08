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
Route::get('q',function(){
	return view('query');
});
Route::get('q/{query}',function($query){
	return view('reply');
})->where('query','[0-9]+');
Route::get('404',function(){
	abort(404);
});