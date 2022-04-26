var scene = 0;
var menu = document.getElementById('menu');
var credits = document.getElementById('credits');
var bg = document.getElementById('bg');
var game = document.getElementById('game');
var options = document.getElementById('options');

function loadScene(){
    switch(scene){
case 0: 
menu.style.display = "block";
game.style.display = "none";
bg.style.display = "block";
options.style.display = "none";
break;
case 1: 
credits.style.display = "none";
menu.style.display = "none";
game.style.display = "block";
options.style.display = "none";
bg.style.display = "none";
	console.log("scene loaded")
break;
case 2: 
menu.style.display = "none";
game.style.display = "none";
options.style.display = "block";
bg.style.display = "none";
break;
    }
}
loadScene();