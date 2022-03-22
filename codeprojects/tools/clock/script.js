setInterval(showtime, 1);
function showtime(){
var today = new Date();
var h = today.getHours();
var m = today.getMinutes();
var s = today.getSeconds();
if (s == 0){
	s = "00";
}
if (s == 1){
	s = "01";
}
if (s == 2){
	s = "02";
}if (s == 3){
	s = "03";
}if (s == 4){
	s = "04";
}if (s == 5){
	s = "05";
}if (s == 6){
	s = "06";
}if (s == 7){
	s = "07";
}if (s == 8){
	s = "08";
}if (s == 9){
	s = "09";
}
if (m == 0){
	m = "00";
}
if (m == 1){
	m = "01";
}
if (m == 2){
	m = "02";
}if (m == 3){
	m = "03";
}if (m == 4){
	m = "04";
}if (m == 5){
	m = "05";
}if (m == 6){
	m = "06";
}if (m == 7){
	m = "07";
}if (m == 8){
	m = "08";
}if (m == 9){
	m = "09";
}
var session = "AM";
if(h == 0){
        h = 12;
    }
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
var months = (today.getMonth() + 1);
var year = today.getFullYear();
var day = today.getDate();
var date = year+'-'+day+'-'+months;
var time = h + ":" + m + ":" + s + " " + session;
document.getElementById('clock').innerHTML = time;
document.getElementById('date').innerHTML = date;}