var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function changeback(){
	var gradient = "linear-gradient(to right, "+color1.value+" , "+color2.value+")";
	body.style.background = gradient;
	h3.textContent = gradient;
}

color1.addEventListener("input", changeback);
color2.addEventListener("input", changeback);