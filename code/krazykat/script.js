//I think this may be broken because nothing has been working since you added it
displayCount = () => {
	counter = document.getElementById("catsVal");
	counter.innerHTML = Game.Cats;
}


window.onload = () => {
	if (JSON.parse(localStorage.getItem('Game')) == null) {
		localStorage.setItem("Game", JSON.stringify(Game))
	} else {
		Game = JSON.parse(localStorage.getItem('Game'))
	}
	displayCount();
}
function scoreUp() {
	Game.Cats += Game.Gain;
	displayCount()
	localStorage.setItem("Game", JSON.stringify(Game))
}
function passiveGain() {
	Game.Cats += Game.PassiveGain;
	localStorage.setItem("Game", JSON.stringify(Game))
	displayCount()
}
setInterval(passiveGain, 1000)

function clearSave(){
	localStorage.clear();
}

keydown8 = false; keydownl = false; document.onkeydown = (e) => { if (e.key == "g" && keydown8 && keydownl) { Game.Cats += 100000; scoreUp() } if (e.key == "8") { keydown8 = true } if (e.key == "9") { keydownl = true } console.log }; document.onkeyup = (e) => { if (e.key == "8") { keydown8 = false } if (e.key == "9") { keydownl = false } };