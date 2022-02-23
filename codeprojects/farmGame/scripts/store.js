const store = document.getElementById('store');
const button = document.getElementById("storeButton");
const input = document.getElementById("input");
function storeOpen(){
store.style.display = "block";
button.style.display = "none";
canvas.style.display = "none";
input.style.display = "none";
}

function storeClose(){
store.style.display = "none";
button.style.display = "block";
canvas.style.display = "block";
input.style.display = "block";
}