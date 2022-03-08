var store = document.getElementById('store');
var button = document.getElementById("storeButton");
var input = document.getElementById("input");

function storeOpen(){
store = document.getElementById('store');
button = document.getElementById("storeButton");
input = document.getElementById("input");
store.style.display = "block";
button.style.display = "none";
canvas.style.display = "none";
input.style.display = "none";
}

function storeClose(){
store = document.getElementById('store');
button = document.getElementById("storeButton");
input = document.getElementById("input");
store.style.display = "none";
button.style.display = "block";
canvas.style.display = "block";
input.style.display = "block";
}