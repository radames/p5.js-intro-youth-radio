function setup() {
  // setup code here
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //colors Channels Red Green Blue
  background(255, 255, 255);

  stroke(255, 0, 0);
  fill(0, 255, 0);
  strokeWeight(1);
  rect(100, 100, 200, 200); // position x, y and width and height

  //make a composition with different rectangles
  //with different collors, size and position

}

function keyPressed() {
  //code to be run at every keypress event
}

function windowResized() {
  //cavas size will be resized in case window size has changed
  resizeCanvas(windowWidth, windowHeight);
}
