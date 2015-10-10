<?php

namespace legistify\Http\Controllers;

use DB;
use Illuminate\Http\Request;
use legistify\Http\Requests;
use legistify\Http\Controllers\Controller;

class QueryController extends Controller
{
    public function index()
    {
    	$queries = DB::table('legistify')->orderBy('created_at','asc')->paginate(25);
    	return view('query',compact('queries'));
    }
}
