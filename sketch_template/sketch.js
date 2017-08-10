function setup() {
  // setup code here
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //colors Channels Red Green Blue
  background(255,255,255);

  //now made it Red and with 1 pixels size
  stroke(255,0,0);
  strokeWeight(1);
  point(100,100); //position x = 100, y = 100

  //now made it Green and with 5 pixels size
  stroke(0,255,0);
  strokeWeight(5);
  point(200,200); //position x = 200, y = 200

  //now make vertical line, with differente color

  //a horizontal line, with differente color

  //a diagonal line, with differente color
}

function keyPressed() {
  //code to be run at every keypress event
}

function windowResized() {
  //cavas size will be resized in case window size has changed
  resizeCanvas(windowWidth, windowHeight);
}
