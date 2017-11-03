var stars = 100;
var x = [];
var y = [];
var speed = [];
var color1, color2, color3;
var alpha;

function setup() {

  createCanvas(windowWidth, windowHeight);

  // star parameters
  for (var i=0; i < stars; i++) {
    x[i] = random(width);
    y[i] = i;
    speed[i] = 0.1 + random(5);
  }


};

function draw() {

  background(0);

  for (var i = 0; i < x.length; i++) {

    // star movement loop
    y[i] += speed[i];
    if (y[i] > height) {
      y[i] = 0;
    }
    fill(255);
    noStroke();
    ellipse(x[i], y[i], 5);

  }

  color1 = random(240,255);
  color2 = random(50,200);
  color3 = random(0,200);
  alpha = random(90,250);

  var left = windowWidth/2 - 100;
  var right = windowWidth/2 + 100;

  // constrain values
  var xConA = constrain(mouseX, left, right);
  var xConB = constrain(mouseX, left + 10, right - 10);
  var xConC = constrain(mouseX, left + 20, right - 20);


  // spaceship parts
  noStroke();
  fill(100);
  ellipse(xConA, windowHeight - 250, 200);
  fill(125);
  ellipse(xConB, windowHeight - 260, 160);
  fill(150);
  ellipse(xConC, windowHeight - 270, 120);
  fill('#345BC4');
  rect(xConC - 20, windowHeight - 310, 40, 10);

  // thrusters
  fill(color1, color2, color3, alpha);
  ellipse(xConA-25, windowHeight - 140, 20, 40);
  ellipse(xConA+25, windowHeight - 140, 20, 40);
  ellipse(xConA-25, windowHeight - 150, 10, 20);
  ellipse(xConA+25, windowHeight - 150, 10, 20);



};
