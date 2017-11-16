var bubbles = 50; // bubble amount
var x = [];
var y = [];
var speed = [];
var diameter = 50; // bubble diameter
var Y_AXIS = 1;
var c1, c2;

function setup() {

  createCanvas(windowWidth, windowHeight);

// set gradient colors
  c1 = color( 80, 165, 205);
  c2 = color( 0, 90, 145);

// bubble parameters
  bubbleParameters();

};

function draw() {

// draw gradient function
  setGradient( 0, 0, width, height, c1, c2, Y_AXIS);

// bubble movement function
  bubbleMovement();

};

////////// custom functions //////////

// initial bubble placement and movement speed
function bubbleParameters() {

  for (var i=0; i < bubbles; i++) {
    x[i] = random(width);
    y[i] = height;
    speed[i] = 1 + random(4);
  }

};

function bubbleMovement() {

  for (var i = 0; i < x.length; i++) {

    // bubble movement loop
    y[i] -= speed[i];
    if (y[i] < -diameter/2) {
      y[i] = height;
    }

    // bubble ellipse
    fill(255,255,255,20);
    stroke(220,240,255);
    strokeWeight(2);
    ellipse(x[i], y[i], diameter);

  }

};

function setGradient(x, y, w, h, c1, c2, axis) {

  noFill();

  // vertical gradient
  if (axis == Y_AXIS) {
      for (var i = y; i <= y+h; i++) {
        var inter = map(i, y, y+h, 0, 1);
        var c = lerpColor(c1, c2, inter);
        stroke(c);
        line(x, i, x+w, i);
      }
    }
  };
