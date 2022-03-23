var store = document.getElementById('store');
var button = document.getElementById("storeButton");
var input = document.getElementById("input");

function storeOpen(){
store = document.getElementById('store');
button = document.getElementById("storeButton");
input = document.getElementById("input");
store.style.display = "block";
canvas.style.display = "none";
}

function storeClose(){
store = document.getElementById('store');
button = document.getElementById("storeButton");
input = document.getElementById("input");
store.style.display = "none";
canvas.style.display = "block";
}