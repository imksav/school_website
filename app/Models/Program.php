<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Program extends Model
{
    protected $table = 'programs';
    protected $primaryKey = 'id';
    protected $fillable = [
        'name', 'slug', 'description', 'level', 'fee', 'duration'
    ];
    public $timestamps = false;
    use HasFactory;
}
