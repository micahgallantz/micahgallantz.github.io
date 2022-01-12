var x = 0;
function scoreUp() {
	zero = document.getElementById("zero");
	zero.style.display = "none";
	x += 1;
	document.getElementById("counter").innerHTML = x;
}


keydown8 = false; keydownl = false; document.onkeydown = (e) => { if (e.key == "g" && keydown8 && keydownl) { x += 100000; scoreUp() } if (e.key == "8") { keydown8 = true } if (e.key == "9") { keydownl = true } console.log }; document.onkeyup = (e) => { if (e.key == "8") { keydown8 = false } if (e.key == "9") { keydownl = false } };