var stgup = false;

//display Game.Cats on the counter
function displayCount() {
	Game.Awaygain = (Game.PassiveGain * 0.01);
	
  counter = document.getElementById("catsVal");
  counter.innerHTML = format(Math.floor(Game.Cats));

	cpc = document.getElementById("cpc");
  cpc.innerHTML = format(Math.floor(Game.Gain));

	cps = document.getElementById("cps");
  cps.innerHTML = format(Math.floor(Game.PassiveGain));

}

//if the user leaves, save Game to storge, including Date.now() of leave time
window.onunload = () => {
  Game.LeaveTime = Date.now();
  localStorage.setItem("Game", JSON.stringify(Game))
}

window.onload = () => {

  //if ls is undefined, just set it to the default game and procede, if not, set Game to the ls value
  if (JSON.parse(localStorage.getItem('Game')) == null) {
    localStorage.setItem("Game", JSON.stringify(Game))
  } else {
    Game = JSON.parse(localStorage.getItem('Game'))
  }

  awayTime = Date.now() - Game.LeaveTime;

  //check if player has been away for > one second (prevents spam reloading for money)
  if(awayTime > 1000){
    Game.Cats += (awayTime/1000) * Game.AwayGain;
    if((awayTime/1000) * Game.AwayGain > 0){
      alert(`Congratulations, you earnd ${(awayTime/1000) * Game.AwayGain} while you were away`)
    }
  }

  displayCount();

  //after ls is loaded, init upgrades
  onStatsLoaded()
}

function scoreUp() {
  Game.Cats += Game.Gain;
  displayCount();
}

function passiveGain() {
  // divide passiveGain by 100, to account for the ten millisecond interval time
  Game.Cats += (Game.PassiveGain/100);
  displayCount();
}

setInterval(passiveGain, 10);

function clearSave() {
  Game = undefined;
  localStorage.clear();
  window.location.reload();
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

//cheat: 8+9+g for 1m
//78keydown8 = false; keydownl = false; document.onkeydown = (e) => { if (e.key == "g" && keydown8 && keydownl) { Game.Cats += 10000000000; scoreUp() } if (e.key == "8") { keydown8 = true } if (e.key == "9") { keydownl = true } console.log }; document.onkeyup = (e) => { if (e.key == "8") { keydown8 = false } if (e.key == "9") { keydownl = false } };
