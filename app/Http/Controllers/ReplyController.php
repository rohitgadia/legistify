<?php

namespace legistify\Http\Controllers;

use Input;
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
    	$file = $request->get('attach');
    	$users = DB::table('legistify')->where('id',$id)->get();
    	foreach($users as $user)
    		$input['email'] = $user->email;

    	//If there is an attachment to mail.

    	if($request->hasFile('attach'))
    	{
    	//Uploading the file to the storage
    	Input::file('attach')->move('uploads','attach.docx');
    	//Mailing to the recipient.
    	Mail::send('mail.response',['input'=>$input],function($message) use ($input)
    	{
    		 $message->to('rohitgadia.95@gmail.com');
   			 $message->subject('Response from Legistify');
    		 $message->from('help@legistify.com','Legistify');
    		 $message->attach('uploads/attach.docx');
    	});
    	//After mailing the response successfully, delete the query from the table.
    	DB::table('legistify')->where('id',$id)->delete();
    	//Redirecting
    	return redirect('q');
    	}

    	//If there is no attachment to mail.

    	else
    	{
    		Mail::send('mail.response',['input'=>$input],function($message) use ($input)
    	{
    		 $message->to($input['email']);
   			 $message->subject('Response from Legistify');
    		 $message->from('help@legistify.com','Legistify');
    	});
    	DB::table('legistify')->where('id',$id)->delete();
    	return redirect('q');
    	}
    }	
}
