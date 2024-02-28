<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BlogsController;
use App\Http\Controllers\ProgramsController;
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


// For Validation
Route::post('register', [SystemUsersController::class, 'register']);
Route::post('login', [SystemUsersController::class, 'login']);

// For Blogs
Route::post('create-blogs', [BlogsController::class, 'createBlogs']);
Route::put('update-blogs/{id}', [BlogsController::class, 'updateBlogs']);
Route::delete('delete-blogs/{id}', [BlogsController::class, 'deleteBlogs']);
Route::get('display-blogs', [BlogsController::class, 'displayBlogs']);

// For Programs
Route::post('create-programs', [ProgramsController::class, 'createPrograms']);
Route::put('update-programs/{id}', [ProgramsController::class, 'updatePrograms']);
Route::delete('delete-programs/{id}', [ProgramsController::class, 'deletePrograms']);
Route::get('display-programs', [ProgramsController::class, 'displayPrograms']);
Route::get('display-programs/{id}', [ProgramsController::class, 'displayProgramsById']);



// For Testing
Route::get('testing', function(){
    return 'This is testing';
});


