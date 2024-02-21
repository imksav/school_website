<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SystemUser;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Register;
use App\Http\Controllers\Auth;



class SystemUsersController extends Controller
{
    //
    function register(Request $req){
        $users = new SystemUser;
        $users->name = $req->input('name');
        $users->email = $req->input('email');
        $users->password = Hash::make($req->input('password'));
        $users->role = $req->input('role');
        $users->save();
        return $users;
    }

    function login(Request $req){
        $users = SystemUser::where('email', $req->email)->first();
        if(!$users || !Hash::check($req->password, $req->password)){
            return ["error"=>"Email or Password is not matched!"];
             $request->validate([
        'username' => 'required|string',
        'password' => 'required|string',
    ]);

    
        return $users;
    }

    }
}