<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Program;
use App\Http\Controllers\Register;

class ProgramsController extends Controller
{
    function createPrograms(Request $req){
        $programs = new Program;
        $programs->name = $req->input('name');
        $programs->slung = $req->input('slung');
        $programs->description = $req->input('description');
        $programs->level = $req->input('level');
        $programs->fee = $req->input('fee');
        $programs->duration = $req->input('duration');
        $programs->save();
        return response()->json("Program Added Successfully!");
    }


    function updatePrograms(Request $req){
        $programs = Program::findorfail($req->id);
        $programs->name = $req->input('name');
        $programs->slung = $req->input('slung');
        $programs->description = $req->input('description');
        $programs->level = $req->input('level');
        // $programs->image = $req->input('image');
        $programs->fee = $req->input('fee');
        $programs->duration = $req->input('duration');
        $programs->update();
        return response()->json("Program Updated Successfully!");
    }


    function deletePrograms(Request $req){
        $programs=Program::findorfail($req->id)->delete();
        return response()->json("Program Deleted Successfully!");
    }


    function displayPrograms(Request $req){
        $programs = Program::all();
        return response()->json($programs);
    }
}
