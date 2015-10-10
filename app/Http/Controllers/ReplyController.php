<?php

namespace legistify\Http\Controllers;

use Form;
use DB;
use Illuminate\Http\Request;
use legistify\Http\Requests;
use legistify\Http\Controllers\Controller;
use Mail;
class ReplyController extends Controller
{
    public function index($id)
    {
    	$users = DB::table('legistify')->where('id',$id)->get();
    	if(!count($users))
    	abort(404);
    	else
    	return view('reply', compact('users'));
    }
    public function mail(Request $request,$id)
    {
    	$input = $request->all();
    	$users = DB::table('legistify')->where('id',$id)->get();
    	foreach($users as $user)
    		$input['email'] = $user->email;
    	if($request->hasFile('attach'))
    	{
    	Mail::send('mail.response',['input'=>$input],function($message) use ($input)
    	{
    		 $message->to($input['email']);
   			 $message->subject('Response from Legistify');
    		 $message->from('help@legistify.com');
    		 $message->attach($input['attach']->getRealPath(), array(
        		'as' => 'attachment' . $input['attach']->getClientOriginalExtension(), 
        		'mime' => $input['attach']->getMimeType())
    			);
    	});
    	DB::table('legistify')->where('id',$id)->delete();
    	return redirect('q');
    	}
    	else
    	{
    		Mail::send('mail.response',['input'=>$input],function($message) use ($input)
    	{
    		 $message->to($input['email']);
   			 $message->subject('Response from Legistify');
    		 $message->from('help@legistify.com');
    	});
    	DB::table('legistify')->where('id',$id)->delete();
    	return redirect('q');
    	}
    }	
}
