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
        $programs->slug = $req->input('slug');
        $programs->description = $req->input('description');
        $programs->level = $req->input('level');
        $programs->fee = $req->input('fee');
        $programs->duration = $req->input('duration');
        $programs->save();
        return response()->json("Program Added Successfully!");
    }


    function updatePrograms(Request $req){
        echo $req->input("name");
        $programs = Program::findorfail($req->id);
        $programs->name = $req->input('name');
        $programs->slug = $req->input('slug');
        $programs->description = $req->input('description');
        $programs->level = $req->input('level');
        $programs->fee = $req->input('fee');
        $programs->duration = $req->input('duration');
        $programs->update();
        return response()->json("Program Updated Successfully!");
    }

    function deletePrograms(Request $req){
        $programs = Program::findorfail($req->id)->delete();
        return response()->json("Program Deleted Successfully!");
    }

    function displayPrograms($req = null){
        $programs = $req?Program::find($req):Program::all();
        return response()->json($programs);
    }

       function displayProgramsById(Request $req){
        $blogs = Program::find($req->$id);
        return response()->json('Program of {$id} displayed successfully!');
    }

}
