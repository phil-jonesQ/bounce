//Ball Coordinates
var x;
var y;
//Speed
var speed;
//Define the edge hit flags
var bottomEdge;
var topEdge;
var rightEdge;
var leftEdge;
var offset;
var microOffset;
var toggle;
// Define key press override flags
var upPressed;
var downPressed;
var leftPressed;
var rightPressed;

function setup() {
  //Initialise
  //Draw canvas
  createCanvas(500, 500);
  
  //Define home position
  //Always random
  
  offset = random(width);
  microOffset = random(5);
  x = offset;

  y = 0;
  //Define Speed
  speed = 6;
  //Define which direction to send ball
  topEdge = false;
  rightEdge = false;
  bottomEdge = false;
  leftEdge = false;
  toggle = false;
  
  //Define single shot keys
  upPressed = false;
  downPressed = false;
  leftPressed = false;
  rightPressed = false;
  
}

function draw() {

  // Draw Background
  background(127);
  // Draw Ball
  fill(255, 0, 0);
  noStroke();
  ellipse(x, y, 30, 30);

  //Move Ball depending on which edge it hit and how we're called

  if (this.topEdge == true) {
    y = y + speed;
  }

  if (this.bottomEdge == true) {
    y = y - speed;
  }

  if (this.leftEdge == true) {
    x = x + speed;
  }

  if (this.rightEdge == true) {
    x = x - speed;
  }

  // Detect Edge and move in different direction

  if (y > height) {

    this.bottomEdge = true;
    this.topEdge = false;

  }

  if (y < 0) {

    this.bottomEdge = false;
    this.topEdge = true;

  }
  if (x > width) {

    this.rightEdge = true;
    this.leftEdge = false;
    x = x + this.microOffset;

  }

  if (x < 0) {

    this.rightEdge = false;
    this.leftEdge = true;
    x = x - this.microOffset;
  }


// Control Direction


// Send ball down
  if (keyIsDown(DOWN_ARROW) && downPressed == false) {
    topEdge = true;
    rightEdge = false;
    bottomEdge = false;
    leftEdge = false;
    upPressed = false;
    downPressed = true;
    leftPressed = false;
    rightPressed = false;
  }


  if (keyIsDown(LEFT_ARROW) && leftPressed == false) {
    topEdge = false;
    rightEdge = true;
    bottomEdge = true;
    leftEdge = false;
    upPressed = false;
    downPressed = false;
    leftPressed = true;
    rightPressed = false;
  }

  if (keyIsDown(RIGHT_ARROW) && rightPressed == false) {
    topEdge = false;
    rightEdge = false;
    bottomEdge = true;
    leftEdge = true;
    upPressed = false;
    downPressed = false;
    leftPressed = false;
    rightPressed = true;
  }

  if (keyIsDown(UP_ARROW) && upPressed == false) {
    topEdge = true;
    rightEdge = false;
    bottomEdge = true;
    leftEdge = true;
    upPressed = true;
    downPressed = false;
    leftPressed = false;
    rightPressed = false;
  }
  
  // Pause
  if (keyIsDown(32)) {
    topEdge = false;
    rightEdge = false;
    bottomEdge = false;
    leftEdge = false;
    upPressed = false;
    downPressed = false;
    leftPressed = false;
    rightPressed = false;
  }

}