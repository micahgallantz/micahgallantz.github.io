var stgup = false;

function buyBrush(){
if (Game.Cats >= 50){
	console.log('brush');
	Game.RealCats -= 50;
	Game.Brush +=1;
	Game.Gain += 1;
	}
else {
	window.alert("Bruh, you're to broke to buy this, you bozo")
}
displayCount();
}


function buymilk(){
if (Game.Cats >= 500){
	console.log('brush');
	Game.RealCats -= 500;
	Game.Milk +=1;
	Game.Gain += 5;
	}
else {
	window.alert("Bruh, your to broke to buy this, you bozo")
}
displayCount();
}


function buychocolatemilk(){
if (Game.Cats >= 10000){
	console.log('brush');
	Game.RealCats -= 10000;
	Game.ChocolateMilk +=1;
	Game.Gain += 50;
	}
else {
	window.alert("Bruh, your to broke to buy this, you bozo")
}
displayCount();
}


function buytreat(){
if (Game.Cats >= 100000){
	console.log('brush');
	Game.RealCats -= 100000;
	Game.CatTreat +=1;
	Game.Gain += 500;
	}
else {
	window.alert("Bruh, your to broke to buy this, you bozo")
}
displayCount();
}


function buytoy(){
if (Game.Cats >= 1000000){
	console.log('brush');
	Game.RealCats -= 1000000;
	Game.CatToy +=1;
	Game.Gain += 5000;
	}
else {
	window.alert("Bruh, your to broke to buy this, you bozo")
}
displayCount();
}





if(Game.RealCats <=0){
	Game.RealCats = 0;
	displayCount();
}




function buyCatnip(){
if (Game.Cats >= 500){
	console.log('Cat Nip');
	Game.RealCats -= 500;
	Game.Catnip += 1;
	Game.PassiveGain += 1;
	}
else {
	window.alert("Bruh, your to broke to buy this, you bozo")
}
displayCount();
}


function buyYarn(){
if (Game.Cats >= 10000){
	console.log('Yarn');
	Game.RealCats -= 10000;
	Game.Yarn += 1;
	Game.PassiveGain += 50;

	}
else {
	window.alert("Bruh, your to broke to buy this, you bozo")
}
displayCount();
}


function buyScratchingPost(){
if (Game.Cats >= 50000){
	console.log('Scratching Post');
	Game.RealCats -= 50000;
	Game.ScratchingPost += 1;
	Game.PassiveGain += 500;
	}
else {
	window.alert("Bruh, your to broke to buy this, you bozo")
}
displayCount();
}


function buyLitterBox(){
if (Game.Cats >= 1000000){
	console.log('litter box');
	Game.RealCats -= 1000000;
	Game.LitterBoxes +=1;
	Game.PassiveGain += 1000;
	}
else {
	window.alert("Bruh, your to broke to buy this, you bozo")
}
displayCount();
}


function buyAutoLitterBox(){
if (Game.Cats >= 100000000){
	console.log('Auto Litter Box');
	Game.RealCats -= 100000000;
	Game.AutoLitterBoxes +=1;
	Game.PassiveGain += 10000;
	}
else {
	window.alert("Bruh, your to broke to buy this, you bozo")
}
displayCount();
}




function displayCount() {
	Game.Awaygain = (Game.PassiveGain * 0.01);
  counter = document.getElementById("catsVal");

	brushOwned = document.getElementById("brushOwned");
	brushOwned.innerHTML = Game.Brush;

	milkOwned = document.getElementById("milkOwned");
	milkOwned.innerHTML = Game.Milk;

	chocolateMilkowned = document.getElementById("chocolateMilkOwned");
	chocolateMilkowned.innerHTML = Game.ChocolateMilk;

	treatOwned = document.getElementById("treatOwned");
	treatOwned.innerHTML = Game.CatTreat;

	toyOwned = document.getElementById("toyOwned");
	toyOwned.innerHTML = Game.CatToy;




	catnipOwned = document.getElementById("catnipOwned");
	catnipOwned.innerHTML = Game.Catnip;

	yarnOwned = document.getElementById("yarnOwned");
	yarnOwned.innerHTML = Game.Yarn;

	postOwned = document.getElementById("scratchingPostOwned");
	postOwned.innerHTML = Game.ScratchingPost;

	litterOwned = document.getElementById("litterOwned");
	litterOwned.innerHTML = Game.LitterBoxes;

	autoLitterOwned = document.getElementById("autoLitterOwned");
	autoLitterOwned.innerHTML = Game.AutoLitterBoxes;

	Game.Cats = Math.round(Game.RealCats);
  counter.innerHTML = fromIntToStringFormatted(Game.Cats);
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
	Game.AwayGain = (Game.PassiveGain * 0.00001);
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
  Game.Gain = 1;
  Game.PassiveGain = 0;
  Game.AwayGain = 0.00001;


	Game.Brush = 0;
	Game.Milk = 0;
	Game.ChocolateMilk = 0;
	Game.CatTreat = 0;
	Game.CatToy = 0;

	Game.Catnip = 0;
	Game.Yarn = 0;
	Game.ScratchingPost = 0;
	Game.LitterBoxes = 0;
	Game.AutoLitterBoxes = 0;
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
