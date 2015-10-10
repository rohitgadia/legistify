var car_type;
var areas = ['Chennai Central','Potheri','Kattankulathur','Chennai Egmore','Chennai Airport','Phoenix Marketcity','Adambakkam', 'Adyar', 'Alandur', 'Alwarpet', 'Alwarthirunagar', 'Ambattur', 'Aminjikarai', 'Anakaputhur', 'Anna Nagar', 'Annanur', 'Arumbakkam', 'Ashok Nagar', 'Avadi', 'Ayanavaram', 'Besant Nagar', 'Basin Bridge', 'Chepauk', 'Chetput', 'Chintadripet', 'Chitlapakkam', 'Choolai', 'Choolaimedu', 'Chrompet', 'Egmore', 'Ekkaduthangal', 'Ennore', 'Foreshore Estate', 'Fort St. George', 'George Town', 'Gopalapuram', 'Government Estate', 'Guindy', 'Guduvancherry', 'IIT Madras', 'Injambakkam', 'ICF', 'Iyyappanthangal', 'Jafferkhanpet', 'Karapakkam', 'Kattivakkam', 'Kazhipattur', 'K.K. Nagar', 'Keelkattalai', 'Kelambakkam', 'Kilpauk', 'Kodambakkam', 'Kodungaiyur', 'Kolathur', 'Korattur', 'Korukkupet', 'Kottivakkam', 'Kotturpuram', 'Kottur', 'Kovalam', 'Kovilambakkam', 'Koyambedu', 'Kundrathur', 'Madhavaram', 'Madhavaram Milk Colony', 'Madipakkam', 'Madambakkam', 'Maduravoyal', 'Manali', 'Manali New Town', 'Manapakkam', 'Mandaveli', 'Mangadu', 'Mannadi', 'Mathur', 'Medavakkam', 'Meenambakkam', 'Minjur', 'Mogappair', 'MKB Nagar', 'Mount Road', 'Moolakadai', 'Moulivakkam', 'Mugalivakkam', 'Mylapore', 'Nandanam', 'Nanganallur', 'Navalur', 'Neelankarai', 'Nemilichery', 'Nesapakkam', 'Nolambur', 'Noombal', 'Nungambakkam', 'Padi', 'Pakkam', 'Palavakkam', 'Pallavaram', 'Pallikaranai', 'Pammal', 'Park Town', "Parry's Corner", 'Pattabiram', 'Pattaravakkam', 'Pazhavanthangal', 'Peerkankaranai', 'Perambur', 'Peravallur', 'Perumbakkam', 'Perungalathur', 'Perungudi', 'Pozhichalur', 'Poonamallee', 'Porur', 'Pudupet', 'Purasaiwalkam', 'Puthagaram', 'Puzhal', 'Puzhuthivakkam', 'Raj Bhavan', 'Ramavaram', 'Red Hills', 'Royapettah', 'Royapuram', 'Saidapet', 'Saligramam', 'Santhome', 'Selaiyur', 'Shenoy Nagar', 'Sholavaram', 'Sholinganallur', 'Sithalapakkam', 'Sowcarpet', 'St.Thomas Mount', 'Tambaram', 'Teynampet', 'Tharamani', 'T. Nagar', 'Thirumangalam', 'Thirumullaivoyal', 'Thiruneermalai', 'Thiruninravur', 'Thiruvanmiyur', 'Tiruverkadu', 'Thiruvotriyur', 'Tirusulam', 'Tiruvallikeni', 'Tondiarpet', 'United India Colony', 'Urapakkam', 'Vandalur', 'Vadapalani', 'Valasaravakkam', 'Vallalar Nagar', 'Vanagaram', 'Velachery', 'Veppampattu', 'Villivakkam', 'Virugambakkam', 'Vyasarpadi', 'Washermanpet', 'West Mambalam'];
function datepicker()
{
  alert("Change the date.");
  $('#datepicker1').datepicker({dateFormat:'yy-mm-dd',minDate:0,maxDate:15,autoclose:true});
}
function timepicker()
{
  showUser1($('#datepicker1').val());
  calculateDistances();
  setTimeout(function(){
    $('#outputDiv').html('');
  },5000);
}
$('.to').on('change',function(){
  alert("Changed");
  calculateDistances();
});
function showUser1(str)
{
  //Work this out. 
  //alert("Entered");
  var todayDate = moment(str);
  //alert(todayDate);
  var date = new Date(todayDate);
  var getSelectedTime = date.getTime();
  getSelectedTime = Math.floor(getSelectedTime/1000);
  //alert("SelectedTime: "+getSelectedTime);
  var todayYear = moment().get('year');
  var todayMonth = moment().get('month')+1;
  var todayDate = moment().get('date');
  var todayDate = todayYear+"-"+todayMonth+"-"+todayDate;
  var date = new Date(todayDate);
  var getTodayTime = date.getTime();
  getTodayTime = Math.floor(getTodayTime/1000);
  //alert("TodayTime: "+getTodayTime);
  //alert(todayDate);
  var date = new Date();
  var nowTime = date.getTime();
  nowTime = Math.floor(nowTime/1000);  
  //alert("TimeNow: "+nowTime);
  if(getSelectedTime-getTodayTime>=86400)
  {
  //alert("Entered");
  $('#timepicker1').timepicker('hide');
  $('#timepicker1').timepicker({'timeFormat': 'h:i A','minTime' : '00:00 AM',
  'maxTime' : '11:30 PM'
});
}
else if(getSelectedTime<nowTime)
{
  //alert("Not Entered");
  var difference = nowTime+2700-getSelectedTime;
  var ceil = Math.ceil(difference/3600);
  var round = Math.round(difference/3600);
  if(ceil-round==1)
  {
    difference = round;
    if(difference>=12)
  {
    difference= difference-12;
    var timeperiod = "PM";
  }
  else
    var timeperiod = "AM";
  if(difference<10)
    difference = "0"+difference;
  var mini = difference+":30 "+timeperiod;
  //alert(mini);
  $('#timepicker1').timepicker('hide');
  $('#timepicker1').timepicker({'timeFormat': 'h:i A','minTime' : mini,
  'maxTime' : '11:30 PM'
});
  }
  else
  {
    difference = ceil;
    if(difference>=12)
  {
    difference= difference-12;
    var timeperiod = "PM";
  }
  else
    var timeperiod = "AM";
  if(difference<10)
    difference = "0"+difference;
  var mini = difference+":00 "+timeperiod;
  //alert(mini);
  $('#timepicker1').timepicker('hide');
  $('#timepicker1').timepicker({'timeFormat': 'h:i A','minTime' : mini,
  'maxTime' : '11:30 PM'
});
  }
  //alert(difference);
}
}
function hatchback(value)
{
  $('#confirm_private').removeAttr('disabled');
  $('.suv_pop').popover('hide');
  $('.sedan_pop').popover('hide');
  $('.hatchback_pop').popover('show');
  setTimeout(function(){
    $('.hatchback_pop').popover('hide');
  },3000);
  car_type="hatchback";
  $('.suv').css('background-color','#ffffff'); 
  $('.sedan').css('background-color','#ffffff');
  $('.hatchback').css('background-color','#a0a0a0');
  var estimate_min = 99;
  var estimate_max = 99;
  value = value-5;
  var value_max = value+5;
  estimate_min = Math.round(estimate_min+9*value);
  estimate_max = Math.round(estimate_max+9*value_max);
  document.getElementById('fare-estimate').innerHTML = 'FARE EST.<a id="alert" href="javascript:void(0);" onclick="fare_est();" data-container="body" data-toggle="popover" data-placement="right" data-content="This is a rough fare estimate and not subject to actual fare."><sup>[?]</sup></a><br><p style="font-weight:300;font-family:Roboto">&#x20B9; '+estimate_min+' - '+estimate_max+'</p>';
}
function sedan(value)
{
  $('#confirm_private').removeAttr('disabled');
  $('.hatchback_pop').popover('hide');
  $('.suv_pop').popover('hide');
  $('.sedan_pop').popover('show');
  setTimeout(function(){
    $('.sedan_pop').popover('hide');
  },3000);
  car_type="sedan";
  $('.hatchback').css('background-color','#ffffff');
  $('.suv').css('background-color','#ffffff');
  $('.sedan').css('background-color','#a0a0a0');
  var estimate_min = 99;
  var estimate_max = 99;
  value = value-5;
  var value_max = value+5;
  estimate_min = Math.round(estimate_min+11*value);
  estimate_max = Math.round(estimate_max+11*value_max);
  document.getElementById('fare-estimate').innerHTML = 'FARE EST.<a id="alert" href="javascript:void(0);" onclick="fare_est();" data-container="body" data-toggle="popover" data-placement="right" data-content="This is a rough fare estimate and not subject to actual fare."><sup>[?]</sup></a><br><p style="font-weight:300;font-family:Roboto">&#x20B9; '+estimate_min+' - '+estimate_max+'</p>';
}
function suv(value)
{
  $('#confirm_private').removeAttr('disabled');
  $('.hatchback_pop').popover('hide');
  $('.sedan_pop').popover('hide');
  $('.suv_pop').popover('show');
  setTimeout(function(){
    $('.suv_pop').popover('hide');
  },3000);
  $('.hatchback').css('background-color','#ffffff');
  $('.sedan').css('background-color','#ffffff');
  $('.suv').css('background-color','#a0a0a0');
  car_type="suv";
  var estimate_min = 150;
  var estimate_max = 150;
  value = value-5;
  var value_max = value+5;
  estimate_min = Math.round(estimate_min+18*value);
  estimate_max = Math.round(estimate_max+18*value_max);
  document.getElementById('fare-estimate').innerHTML = 'FARE EST.<a id="alert" href="javascript:void(0);" onclick="fare_est();" data-container="body" data-toggle="popover" data-placement="right" data-content="This is a rough fare estimate and not subject to actual fare."><sup>[?]</sup></a><br><p style="font-weight:300;font-family:Roboto">&#x20B9; '+estimate_min+' - '+estimate_max+'</p>';
}
function fare_est()
{
  $('#alert').popover('show');
  setTimeout(function(){
    $('#alert').popover('hide');
  },5000);
}
function two_person(value)
{
  $('.three-person').popover('hide');
  $('.two-person').popover('show');
  setTimeout(function(){
    $('.two-person').popover('hide');
  },5000);
  var two_person_pricing=80;
  value = value-5;
  two_person_pricing += 5*value;
  $('#rideshare_estimate').html('');
  document.getElementById('rideshare_estimate').innerHTML = 'If two passengers share this ride then each has to pay <b>&#x20B9;'+two_person_pricing+'</b>';
  setTimeout(function(){
    $('#rideshare_estimate').html('If you do not find any ride-sharers for this ride then it wil be automatically converted to a Private ride.');
  },15000);
}
function three_person(value)
{
  $('.two-person').popover('hide');
  $('.three-person').popover('show');
  setTimeout(function(){
    $('.three-person').popover('hide');
  },5000);
  var three_person_pricing=60;
  value = value-5;
  three_person_pricing += 3*value;
  $('#rideshare_estimate').html('');
  document.getElementById('rideshare_estimate').innerHTML = 'If three passengers share this ride then each has to pay <b>&#x20B9;'+three_person_pricing+'</b>';
  setTimeout(function(){
    $('#rideshare_estimate').html('If you do not find any ride-sharers for this ride then it wil be automatically converted to a Private ride.');
  },15000);
}