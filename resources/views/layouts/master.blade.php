   <!DOCTYPE html>
   <html>
   <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="rohitgadia">
   	<title>Legistify - Legal Documents Online | @yield('title')</title>
   	<link rel="shortcut icon" type="favicon/png" href="http://laravel.dev/img/LOGOnew.png">
   	<link href="http://laravel.dev/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="http://laravel.dev/css/agency.css" rel="stylesheet">
    <link href="http://laravel.dev/css/app.css" rel="stylesheet">
    <!-- Custom Fonts -->
    <!--<link href="font-awesome-4.1.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">-->
	<!--<link href="css/font-awesome.min.css" rel="stylesheet" type="text/css">-->
	<link href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="http://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
    <link href='http://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" type="text/css" href="http://laravel.dev/jquery-ui/jquery-ui.css">
    @yield('headlinks')
   </head>
   <body>
   	 <!-- Navigation -->
    <nav class="navbar navbar-default navbar-fixed-top overlay" style="padding: 3px 0;">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="smoothScroll navbar-brand" href="#page-top"><img src="http://laravel.dev/img/LOGOnew.png" style="height:50px;width:75px"></img></a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                	<li>
                   		<a href="#documents"><b>Documents</b></a>
                    </li>
                    <li>
                    	<a href="#sign-in">Sign In</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>
    <!-- body -->
    <header>
    <div class="head container">
    @yield('content')
    </div>
    <!-- endbody -->
    <!-- jQuery -->
    </header>
    <script src="http://laravel.dev/js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="http://laravel.dev/js/bootstrap.min.js"></script>
	
   </body>
   </html>