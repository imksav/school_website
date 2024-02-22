<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Blog;
use App\Http\Controllers\Register;

class BlogsController extends Controller
{
    // create function worked well through api
    function createBlogs(Request $req){
        $blogs = new Blog;
        $blogs->title = $req->input('title');
        $blogs->description = $req->input('description');
        $blogs->image = $req->file('image')->store('blogs');
        $blogs->author = $req->input('author');
        $blogs->author_details = $req->input('author_details');
        $blogs->save();
        return response()->json("Blog Added Successfully!");
    }

    // update function
    function updateBlogs(Request $req){
        $blogs = Blog::findorfail($req->id);

        $blogs->title = $req->input('title');
        $blogs->description = $req->input('description');
        if ($req->file('image') == null) {
            $blogs = "";
        }else{
            $blogs = $req->file('image')->store('blogs');
        }
        // $blogs->image = $req->file('image')->store('blogs');
        $blogs->author = $req->input('author');
        $blogs->author_details = $req->input('author_details');
        $blogs->update();
        return response()->json("Blog Updated Successfully!");
    }
    // delete function worked well through api
    function deleteBlogs(Request $req){
        $blogs=Blog::findorfail($req->id)->delete();
        return response()->json("Blog Deleted Successfully!");
    }
    // read function worked well through api
    function displayBlogs(Request $req){
        $blogs = Blog::all();
        return response()->json($blogs);
    }
}