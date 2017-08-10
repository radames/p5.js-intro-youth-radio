function setup() {
  // setup code here
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //colors Channels Red Green Blue
  background(255,255,255);

  stroke(0,255,0);
  fill(255,0,0);
  textSize(32); // font size
  text("Hello!", 100, 100); // position


  push(); //trick to rotate
  translate(mouseX,mouseY); //the position is here now
  rotate(radians(45)); //rotate 45 degrees
  text("Hello Rotated", 0, 0); // position 0,0 in the new coordinates
  pop();

  //make a composition with texts

}

function keyPressed() {
  //code to be run at every keypress event
}

function windowResized() {
  //cavas size will be resized in case window size has changed
  resizeCanvas(windowWidth, windowHeight);
}
