var stgup = false;
displayCount = () => {
	counter = document.getElementById("catsVal");
	counter.innerHTML = Game.Cats;
	Game.Cats = Math.round(Game.Cats);
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
	Game.Cats += (Game.AwayTime * Game.AwayGain);
	var a = Game.Cats;
	var b = Game.Gain;
	var c = Game.AwayGain;
	var d = Game.PassiveGain;
	localStorage.clear();
	Game.Cats = a;
	Game.Cats = Math.round(Game.Cats);
	Game.Gain = b;
	Game.AwayGain = c;
	Game.PassiveGain = d;
	displayCount();
}
function scoreUp() {
	Game.Cats += Game.Gain;
	displayCount()
	localStorage.setItem("Game", JSON.stringify(Game))
}
function passiveGain() {
	Game.Cats += Game.PassiveGain;
	localStorage.setItem("Game", JSON.stringify(Game));
	displayCount();
}
setInterval(passiveGain, 1000);
function clearSave() {
	Game = JSON.parse(localStorage.getItem('Game'));
	Game.Cats = 0;
	Game.Gain = 1;
	Game.PassiveGain = 0;
	Game.AwayGain = 0.00001;
	displayCount();
}
  function stgchange() {
	if (stgup) {
	document.getElementById('settings').style.display = "none";
	stgup = false;
	console.log("true");

	}
	else {
	document.getElementById('settings').style.display = "block";
		console.log("false");
	stgup = true;
  }
	}


keydown8 = false; keydownl = false; document.onkeydown = (e) => { if (e.key == "g" && keydown8 && keydownl) { Game.Cats += 100000; scoreUp() } if (e.key == "8") { keydown8 = true } if (e.key == "9") { keydownl = true } console.log }; document.onkeyup = (e) => { if (e.key == "8") { keydown8 = false } if (e.key == "9") { keydownl = false } };