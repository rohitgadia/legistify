@extends('layouts.master')
@section('title','Message from User')
@section('headlinks')
	<link type="text/css" rel="stylesheet" href="http://laravel.dev/css/app.css">
@endsection
@section('content')
	@foreach($users as $user)
		<?php
		if (isset($user))
			$time = $user->created_at;
			$date = new DateTime($time);
			$day = $date->format('F j,  Y');
			$time = $date->format('H:i A');
		?>
		<h3>Message from {{$user->email}}</h3>
		<hr>
		<h5>Received on {{$day}} at {{$time}}</h5>
		<hr>
		<i>{{$user->message}}</i>
		<hr>
		{!!Form::open(['url'=>'http://laravel.dev/q/'.$user->id.'/mail','files'=>true])!!}
			{!!Form::textarea('reply',null,['placeholder'=>"Reply here!",'class'=>'form-control','required'])!!}
			<br>
			{!!Form::file('attach',['accept'=>'.docx'])!!}
			<br>
			<center>{!!Form::submit('Mail',['class'=>'btn btn-primary no-radius'])!!}</center>
		{!!Form::close()!!}
	@endforeach
@endsection