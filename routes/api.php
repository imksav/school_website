<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BlogsController;
use App\Http\Controllers\SystemUsersController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('create-blogs', [BlogsController::class, 'createBlogs']);
Route::put('update-blogs', [BlogsController::class, 'updateBlogs']);
Route::delete('delete-blogs', [BlogsController::class, 'deleteBlogs']);
Route::get('display-blogs', [BlogsController::class, 'displayBlogs']);


Route::post('register', [SystemUsersController::class, 'register']);
Route::post('login', [SystemUsersController::class, 'login']);

Route::get('testing', function(){
    return 'This is testing';
});


