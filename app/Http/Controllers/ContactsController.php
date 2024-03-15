<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ContactsController extends Controller
{
   function createContacts(Request $req){
        $contacts = new Contact;
        $contacts->fullname = $req->input('fullname');
        $contacts->email = $req->input('email');
        $contacts->phone = $req->input('phone');
        $contacts->subject = $req->input('subject');
        $contacts->message = $req->input('message');
        $contacts->save();
        return response()->json("Contact Added Successfully!");
    }

    function displayContacts($req = null){
        $contacts = $req?Contact::find($req):Contact::all();
        return response()->json($contacts);
    }
}
