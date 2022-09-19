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
    $data = [
        "text" => "Home Page"
    ];
    return view('home', $data);
})->name("home");

Route::get('/about', function () {
    $data = [
        "text" => "About Page"
    ];
    return view('about', $data);
})->name("about");

Route::get('/contact', function () {
    $data = [
        "text" => "Contact Page"
    ];
    return view('contacts', $data);
})->name("contact");