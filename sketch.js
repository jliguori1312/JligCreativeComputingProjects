var xpos = 0;
var ypos = 1000;
var rectSize;
var size = 50;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0);
	
	
	
	fill(255);
	rect(xpos, ypos, 80, 80);
	
	xpos+=10;
	

	
}

function mouseClicked() {
	console.log(mouseX + " " + mouseY);
	
	rectSizeX = xpos + 80;
	rectSizeY = ypos + 80;
	if(mouseX > xpos && mouseX < rectSizeX) {
		if(mouseY > ypos && mouseY < rectSizeY){
			xpos = 40;
		}
	}
}

function updateY(){
	ypos = Math.floor(Math.random()* windowHeight);
}

setInterval(updateY, 880);