function storeOpen(){
store = document.getElementById('store');
button = document.getElementById("storeButton");
store.style.display = "block";
button.style.display = "none";
canvas.style.display = "none";
}

function storeClose(){
store = document.getElementById('store');
button = document.getElementById("storeButton");
store.style.display = "none";
button.style.display = "block";
canvas.style.display = "block";
}