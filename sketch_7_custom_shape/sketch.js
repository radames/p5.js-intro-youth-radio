function setup() {
  // setup code here
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  //colors Channels Red Green Blue
  background(255, 255, 255);

  myShape(100, 100, 0); //it needs position x,y, and angle
  myShape(100, 300, 45);

  myShape(100, 500, 15);

  //make a composition with your own shape
}


function myShape(px, py, angle) {
  push(); //create a new coordinate
    translate(px, py);
    rotate(radians(angle));
    fill(255, 0, 0);
    ellipse(0, 0, 100, 100);
    fill(100, 100, 0);
    rect(0, 0, 200, 10);
  pop();

}

function keyPressed() {
  //code to be run at every keypress event
}

function windowResized() {
  //cavas size will be resized in case window size has changed
  resizeCanvas(windowWidth, windowHeight);
}
