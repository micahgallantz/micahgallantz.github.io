
var stgup = false;

function buybrush(){
if (Game.Cats >= 25){
	console.log('brush');
	Game.RealCats -= 25;
	Game.Brushes +=1;
	}
else {
	window.alert("Bruh, your to broke to buy this, you bozo")
}
displayCount();
}

if(Game.Cats <=0){
	Game.Cats = 0;
	displayCount();
}

function buyautolitterbox(){
	console.log('litter box')
}
function displayCount() {
	Game.PassiveGain += Game.Brushes * 0.1;
  counter = document.getElementById("catsVal");
	brushowned = document.getElementById("brushowned");
	brushowned.innerHTML = Game.Brushes;
	Game.Cats = Math.round(Game.RealCats);
  counter.innerHTML = Game.Cats;
}
window.onunload = () => {
  Game.LeaveTime = Date.now();
  localStorage.setItem("Game", JSON.stringify(Game))
}
window.onload = () => {
  if (JSON.parse(localStorage.getItem('Game')) == null) {
    localStorage.setItem("Game", JSON.stringify(Game))
  } else {
    Game = JSON.parse(localStorage.getItem('Game'))
  }
  Game = JSON.parse(localStorage.getItem('Game'))
  Game.AwayTime = Date.now() - Game.LeaveTime;
  //The awaygain will be affected by the upgrades, so i just set it to 0.00001 for now
	Game.AwayGain = (Game.PassiveGain * 0.0001);
  Game.RealCats += (Game.AwayTime * Game.AwayGain);
  var a = Game.RealCats;
  var b = Game.Gain;
  var c = Game.AwayGain;
  var d = Game.PassiveGain;
  localStorage.clear();
  Game.RealCats = a;
  Game.Gain = b;
  Game.AwayGain = c;
  Game.PassiveGain = d;
  displayCount();
}
function scoreUp() {
  Game.RealCats += Game.Gain;
  displayCount();
  localStorage.setItem("Game", JSON.stringify(Game));
}
function passiveGain() {
  Game.RealCats += Game.PassiveGain;
  localStorage.setItem("Game", JSON.stringify(Game));
  displayCount();
}
setInterval(passiveGain, 1000);
function clearSave() {
  Game = JSON.parse(localStorage.getItem('Game'));
  Game.RealCats = 0;
	Game.Cats = 0;
	Game.Brushes = 0
  Game.Gain = 1;
	Game.LitterBoxes = 0;
  Game.PassiveGain = 0;
  Game.AwayGain = 0.00001;
  displayCount();
}
function stgchange() {
  var s = document.getElementById("settings");

  if(stgup == false){
    s.style.display = "block";
		stgup = true;

  }else {
    s.style.display = "none";
		stgup = false;
  }
}


keydown8 = false; keydownl = false; document.onkeydown = (e) => { if (e.key == "g" && keydown8 && keydownl) { Game.RealCats += 100000; scoreUp() } if (e.key == "8") { keydown8 = true } if (e.key == "9") { keydownl = true } console.log }; document.onkeyup = (e) => { if (e.key == "8") { keydown8 = false } if (e.key == "9") { keydownl = false } };