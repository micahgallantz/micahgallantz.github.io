setInterval(update, 100);
var running = false;
var clock = document.getElementById('clock');
var x = 0.1;
var y = 0;
clock.innerHTML = 0;

function start() {
	console.log('start');
	running = true;
}
function stop() {
	console.log('stop');
	running = false;
}
function reset() {
	console.log('reset');
	running = false;
	clock.innerHTML = 0;
	y = 0;
}
function update() {
if (running == true){
y = Math.round((x + y) * 100) / 100
clock.innerHTML = y;
}}