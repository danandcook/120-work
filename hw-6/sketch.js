var pos_x;
var pos_y;
var xoff = 0.0;
var xoff2 = 1.1;
var xoff3 = 2.2;
var xoff4 = 3.3;

//define pathfinder dot
var pf = {
  width: 100,
  max_move: 5,
};


function setup() {
    createCanvas( 1200, 900 );
    background(0);

    // starting positions
    pos_x = width * 0.5;
    pos_y = height * 0.6;
    pos_x2 = width * 0.6;
    pos_y2 = height * 0.4;
    pos_x3 = width * 0.4;
    pos_y3 = height * 0.4;
}

function draw() {

    // noise lines
    push();
      stroke(0);
      strokeWeight(3);
      xoff = xoff + .5;
      var a = noise(xoff) * width;
      line(a, 0, a, height);

      xoff2 = xoff2 + .5;
      var b = noise(xoff2) * width;
      line(b, 0, b, height);

      xoff3 = xoff3 + .5;
      var c = noise(xoff3) * width;
      line(c, 0, c, height);

      xoff4 = xoff4 + .5;
      var d = noise(xoff3) % width;
      line(d, 0, d, height);

    // mapped lines
      stroke( 255);
      strokeWeight(0.25);
      var m = map(mouseX, width / 3, width - 400, 0, width);
      line(m, 0, m % 20, height);
      line(m, 0, width, height);
      line(m, height, width / 2, 0);
      stroke(0);
      strokeWeight(2);
      line(m, height, width, 0);
      line(m, height, 0, 0);
      line(m, 0, width / 2 , height);

    pop();

    // draw colored circles
      fill(192, 57, 43);
      noStroke();
      ellipse(pos_x, pos_y, pf.width);
      fill(52, 152, 219);
      ellipse(pos_x2, pos_y2, pf.width);
      fill(241, 196, 15);
      ellipse(pos_x3, pos_y3, pf.width);


      // randomize circles
      pos_x += floor(random(-pf.max_move, pf.max_move + 1));
      pos_y += floor(random(-pf.max_move, pf.max_move + 1));

      pos_x2 += floor(random(-pf.max_move, pf.max_move + 1));
      pos_y2 += floor(random(-pf.max_move, pf.max_move + 1));

      pos_x3 += floor(random(-pf.max_move, pf.max_move + 1));
      pos_y3 += floor(random(-pf.max_move, pf.max_move + 1));



  }
