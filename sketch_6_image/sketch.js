var myImg;
function preload() {
  myImg = loadImage("https://i.imgur.com/MjeqeUP.gif");
}
function setup() {
  // setup code here
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //colors Channels Red Green Blue
  background(255,255,255);
  noTint(); //no fill color for image
  image(myImg, 100, 100);

  tint(255,0,0,150); //fill color with red and transparent
  image(myImg, 300, 100);

  //make a composition with an image you pick from the web

}

function keyPressed() {
  //code to be run at every keypress event
}

function windowResized() {
  //cavas size will be resized in case window size has changed
  resizeCanvas(windowWidth, windowHeight);
}
