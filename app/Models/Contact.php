<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
     protected $table = 'contacts';
    protected $primaryKey = 'id';
    protected $fillable = [
        'fullname', 'email', 'phone', 'subject', 'message', 'time'
    ];
    // public $timestamps = false;
    use HasFactory;
}
