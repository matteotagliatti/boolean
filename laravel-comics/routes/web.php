<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    $data = ["comics" => config('comics')];
    return view('comics', $data);
})->name('comics');

Route::get('/comic/{id}', function ($id) {
    $data = ["comic" => config('comics')[$id]];
    return view('detail', $data);
})->name('detail');

Route::get('/other', function () {
    return view('other');
})->name('other');