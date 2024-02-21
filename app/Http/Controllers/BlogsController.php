<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Blog;
use App\Http\Controllers\Register;

class BlogsController extends Controller
{
    function addBlogs(Request $req){
        $blogs = new Blog;
        $blogs->title = $req->input('title');
        $blogs->description = $req->input('description');
        $blogs->image = $req->file('image')->store('blogs');
        $blogs->author = $req->input('author');
        $blogs->author_details = $req->input('author_details');
        $blogs->save();
        return $blogs;
    }
}
