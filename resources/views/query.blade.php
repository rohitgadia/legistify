@extends('layouts.master')
@section('title','User Queries')
@section('headlinks')
	<link type="text/css" rel="stylesheet" href="css/app.css">
@endsection
@section('content')
	{!! $queries->render() !!}
	<div class="row query-list">
	<div class="col-md-4"><h4>From</h4></div>
		<div class="col-md-4"><h4>Date</h4></div>
		<div class="col-md-4"><h4>Time</h4></div>
	</div>
	@foreach($queries as $query)
	<?php
		if (isset($query))
			// $time = strtotime($query->created_at);
			// echo $time;
			$time = $query->created_at;
			$date = new DateTime($time);
			$day = $date->format('F j,  Y');
			$time = $date->format('H:i A');
	?>
		<a href="q/{{$query->id}}"><div class="row query-list">
		<div class="col-md-4"><p>{{strtolower($query->email)}}</p></div>
		<div class="col-md-4"><p>{{$day}}</p></div>
		<div class="col-md-4"><p>{{$time}}</p></div>
		</div></a>
	@endforeach
	{!!$queries->render() !!}
@endsection 