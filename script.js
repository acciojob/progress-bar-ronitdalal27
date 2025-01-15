//your JS code here. If required.
const circles = document.querySelectorAll(".circle"); //returns nodeList -> which has a lenght property
const lines = document.querySelectorAll(".line");
const nextbutton = document.querySelector("#next");
const prevbutton = document.querySelector("#prev");

let currentActive = 1;

nextbutton.addEventListener('click',() => {
	currentActive++;
	if(currentActive > circles.length){ 
		currentActive = circles.length
	}
	updateUI();
});

prevbutton.addEventListener('click',() => {
	currentActive--;
	if(currentActive < 1){ 
		currentActive = 1;
	}
	updateUI();
});


function updateUI() {
	circles.forEach((circle,idx) => {
		idx < currentActive ? circle.classList.add("active") : circle.classList.remove("active");
	});

	lines.forEach((line,idx) => {
		idx < currentActive-1 ? line.classList.add("active") : line.classList.remove("active");
	});

	prevbutton.disabled = currentActive===1;
	nextbutton.disabled = currentActive===circles.length
}

















