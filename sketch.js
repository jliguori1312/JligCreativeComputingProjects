var serial; // variable to hold an instance of the serialport library
var portName = '/dev/cu.usbmodem1411'; // fill in your serial port name here
var indata;

var xpos = 0;
var ypos = 1000;
var rectSize;
var size = 50;

function setup() {


  serial = new p5.SerialPort(); // make a new instance of the serialport library
  serial.on('list', printList); // set a callback function for the serialport list event
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen); // callback for the port opening
  serial.on('data', serialEvent); // callback for when new data arrives
  serial.on('error', serialError); // callback for errors
  serial.on('close', portClose); // callback for the port closing

  //serial.list(); // list the serial ports
  serial.open(portName); // open a serial port


  createCanvas(windowWidth, windowHeight);
}

function draw() {

  background(0);

  fill(255);
  rect(xpos, ypos, 80, 80);

  xpos+=8;

}


function mouseClicked() {
	console.log(mouseX + " " + mouseY);

  serial.write(255);

	rectSizeX = xpos + 200;
	rectSizeY = ypos + 200;
	if(mouseX > xpos && mouseX < rectSizeX) {
		if(mouseY > ypos && mouseY < rectSizeY){
			xpos = 40;
      for (var i = 50; i > 0; i--) {
        serial.write(i);
      }
		}
	}
}

function updateY(){
	ypos = Math.floor(Math.random()* windowHeight);
}

setInterval(updateY, 1000);




//Serial:

function serialEvent() {
 	indata = serial.read();
  console.log(indata);

}

function serialError(err) {
  console.log('Something went wrong with the serial port. ' + err);
}

function portClose() {
  console.log('The serial port closed.');
}

function printList(portList) {
  for (var i = 0; i < portList.length; i++) {
    console.log(i + " " + portList[i]);
  }
}


function serverConnected() {
  console.log('connected to server.');
}

function portOpen() {
  console.log('the serial port opened.')
}
