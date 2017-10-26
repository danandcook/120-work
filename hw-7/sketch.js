

var ball = {};
ball.width = 40;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;

var on = false;

var color1, color2, color3, color4, color5;

function setup() {
    createCanvas(windowWidth/2, windowHeight/2);
    background( 200, 200, 200);
}



function draw() {

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;


    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }

    color1 = random(0,250);
    color2 = random(0,250);
    color3 = random(0,250);
    color4 = random(0,250);
    color5 = random(0,250);

    noStroke();
    fill(color1, color2, color3, color4, color5);
    ellipse(ball.x, ball.y, ball.width, ball.width);

    if ( mouseIsPressed ) {
        background( 0, 0, 0, 10);
    } else {
        background( 255, 255, 255, 10);
    }
}

function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
}
