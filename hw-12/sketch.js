

var quarks = [];
// set number of objects
var objNum = 25;
var max_distance;

function setup() {

// setup canvas
    createCanvas(windowWidth, windowHeight);
    background( 200, 200, 200);

// set initial object locations
    var init_x = 25;
    var init_y = windowHeight/2;
    for (var i = 0; i < objNum; i++) {
        quarks.push(new quark(init_x, init_y));
            init_y += random(-100, 100);
            init_x += windowWidth/25;
          }
          noStroke();
          max_distance = dist(0, 0, width, height);
  }

function draw() {

// set background to slowly cover object motion trails
    background( 5, 5, 5, 25);

// implement quark class
    for (var i = 0; i < quarks.length; i++) {
        quarks[i].display();
        quarks[i].move();
        quarks[i].objBounce(quarks, i);
        quarks[i].wallBounce();
      }

// interactive mouse gradient
      fill(255,255,255,10);
      for(var i = 0; i <= width; i += 20) {
        for(var z = 0; z <= height; z += 20) {
          var size = dist(mouseX, mouseY, i, z);
          size = size/max_distance * 10;
          ellipse(i, z, size, size);
          //rect(i, z, size, size);
  }
}
}


class quark {
    constructor(x, y, size) {
        this.posX = x;
        this.posY = y;
        this.size = random(20, 40);
        this.radius = this.size / 2;
        this.color = color( 255, 255, 255);
        this.changeX = random(-5, 10);
        this.changeY = random(-5, 10);
    }

    display() {
        push();
        translate(this.posX, this.posY);
        noStroke();
        fill(this.color);
        ellipse(0, 0, this.size);
        pop();
    }

    move() {
        this.posX += this.changeX;
        this.posY += this.changeY;
    }

// object interaction with the edge of the canvas
    wallBounce() {
        if (this.posX + this.radius >= width || this.posX - this.radius <= 0) {
            this.changeX *= -1;
        }
        if (this.posY + this.radius >= height || this.posY - this.radius <= 0) {
            this.changeY *= -1;
        }
    }

// object interaction with eachother
    objBounce(quarkObj, subject) {
      for (var n = 0; n < quarkObj.length; n++) {
        if (n != subject) {
          var d = dist(this.posX, this.posY, quarkObj[n].posX, quarkObj[n].posY);
          var combinedR = this.radius + quarkObj[n].radius;
          if (d <= combinedR) {
            this.changeX *= -1;
            this.changeY *= -1;

            }
          }
        }
      }
    }
