
var sparks = [];
var diameter = 0;
var maxDiameter = 150;
var diameter2 = 0;
var maxDiameter2 = 100;
var diameter3 = 0;
var maxDiameter3 = 100;
var diameterA = 0;
var maxDiameterA = 75;
var diameterB = 0;
var maxDiameterB = 50;
var diameterC = 0;
var maxDiameterC = 50;

function setup() {
  createCanvas(900,900);
  //spark-class objects setup
  for (var i=0; i<10; i++) {
    sparks[i] = new spark(random(width*0.35,width*0.65), random(height), random(2,8), 255, random(80,250), 0, random(200,250));
  }

};

function draw() {
  background(0);
  for (var i=0; i<sparks.length; i++) {
    sparks[i].move();
    sparks[i].display();
  }
  //add in fire functions
  fire();
  fireMove();
};

// spark class
class spark{
  constructor(x, y, moveSpeed, color1, color2, color3, transparency) {
  this.colorA = color1;
  this.colorB = color2;
  this.colorC = color3;
  this.alpha = transparency;
  this.xpos = x;
  this.ypos = y;
  this.speed = moveSpeed;
}

//spark object parameters
display() {
  noStroke();
  fill(this.colorA, this.colorB, this.colorC, this.alpha);
  ellipse(this.xpos,this.ypos,10,40);
}

//spark movement loop
move() {
  this.ypos = this.ypos - this.speed;
  if (this.ypos < 0 - 20) {
    this.ypos = height + 20;
  }
}
};

//fire ellipses
function fire() {
  fill(255, 100, 0);
  ellipse(width*0.5,height,diameter, diameter*3);
  ellipse(width*0.42,height,diameter2+20, diameter2*3);
  ellipse(width*0.58,height,diameter3-10, diameter3*3);
  ellipse(width*0.5,height,75,100);
  ellipse(width*0.45,height,45,60);
  ellipse(width*0.55,height,45,60);
  fill(255, 200, 0);
  ellipse(width*0.5,height,diameterA, diameterA*2);
  ellipse(width*0.47,height,diameterB+20, diameterB*2);
  ellipse(width*0.53,height,diameterC-10, diameterC*2);
};

//fire ellipse size animation
function fireMove() {
    diameter = maxDiameter * sin(frameCount/24);
    diameter2 = maxDiameter2 * sin(frameCount/28);
    diameter3 = maxDiameter3 * cos(frameCount/28);
    diameterA = maxDiameterA * sin(frameCount/34);
    diameterB = maxDiameterB * sin(frameCount/38);
    diameterC = maxDiameterC * cos(frameCount/38);
};
