function setup() {
  // setup code here
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //colors Channels Red Green Blue
  background(255,255,255);
  stroke(255,0,0);
  strokeWeight(1);
  line(100,100, 200, 200); // needs two points to define a line


  //now make vertical line, with differente color

  //a horizontal line, with differente color

}

function keyPressed() {
  //code to be run at every keypress event
}

function windowResized() {
  //cavas size will be resized in case window size has changed
  resizeCanvas(windowWidth, windowHeight);
}
