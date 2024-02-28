<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Blog;
use App\Http\Controllers\Register;

class BlogsController extends Controller
{
    function createBlogs(Request $req){
        $blogs = new Blog;
        $blogs->title = $req->input('title');
        $blogs->description = $req->input('description');
        $blogs->author = $req->input('author');
        $blogs->author_details = $req->input('author_details');
        $blogs->image = $req->file('image')->store('blogs');
        $blogs->save();
        return response()->json("Blog Added Successfully!");
    }


    function updateBlogs(Request $req){
        $blogs = Blog::findorfail($req->id);
        $blogs->title = $req->input('title');
        $blogs->description = $req->input('description');
        $blogs->author = $req->input('author');
        $blogs->author_details = $req->input('author_details');
        // $blogs->image = $req->input('image');
        $blogs->image = $req->file('image')->store('blogs');
        $blogs->update();
        return response()->json("Blog Updated Successfully!");
    }


    function deleteBlogs(Request $req){
        $blogs=Blog::findorfail($req->id)->delete();
        return response()->json("Blog Deleted Successfully!");
    }
    function displayBlogsById(Request $req){
        $blogs = Blog::find($req->$id);
        return response()->json('Blog of {$id} displayed successfully!');
    }


    function displayBlogs(Request $req){
        $blogs = Blog::all();
        return response()->json($blogs);
    }
}