function setup() {
    // create a canvas to draw my portrait on
    createCanvas( 800, 800 );
}

function draw() {
    // set the background color
    background( '#222' );

    // *****************************************************
    // create a sandbox for the entire character
    push();

    // move the entire grid for this character to the center of the canvas
    translate( 300, 450 );

    //stars
    stroke('#fff');
    strokeWeight(5);
    point(100, 100);
    point(400, 200);
    point(-300, 200);
    point(-100, -200);
    point(-200, -400);
    point(-280, -300);
    point(-250, 0);
    point(200, -250);
    point(50, -350);
    point(380, -320);
    point(200, 300);
    point(-250, -320);
    point(-200, -220);
    point(-80, -280);
    point( 0, -410);
    point( 250, 220);
    point(450, -80);
    point(150, 0);
    point(280, 40);
    //**end of stars**


    // ** BODY **********************************
    push();
    // body code goes here

    //back arm
    stroke('#aaa');
    strokeWeight(80);
    noFill();
    arc(160, -10, 440, 440, TWO_PI, TWO_PI+HALF_PI);

    //back shoulder
    noStroke();
    fill('#777');
    ellipse( 140, 210, 150, 150 );

    //torso
    noStroke();
    fill('#ccc');
    rect(-160, 120, 320, 500, 20);

    stroke('#777');
    strokeWeight(5);
    fill('#ccc');
    rect( -20, 270, 150, 200, 10);


    pop();
    // **END BODY*


    // ** ARMS **********************************
    push();
    // arms code goes here

    //front arm
    stroke('#aaa');
    strokeWeight(80);
    noFill();
    arc(-200, 430, 440, 440, PI, PI+HALF_PI);

    //hand
    noStroke();
    fill('#777');
    ellipse( 380, -30, 60, 60 );

    stroke('#555');
    strokeWeight(30);
    noFill();
    arc(380, -80, 70, 70, TWO_PI-QUARTER_PI, PI+QUARTER_PI);



    pop();
    // **END ARMS**


    // ** HEAD **********************************
    push();

    //helmet
    stroke('rgba( 182, 227, 255, 0.6)');
    strokeWeight(15);
    fill('rgba( 89, 148, 195, 0.2)');
    ellipse( 0, 0, 400, 400 );


    //my head
    noStroke();
    fill('#FFC18F');
    rect(-110, -100, 220, 240, 100);

    //ear
    noStroke();
    fill('#FFC18F');
    ellipse(-120, 40, 60, 60);

    stroke('#D99F70');
    strokeWeight(6);
    noFill();
    arc( -125, 40, 25, 25, PI+HALF_PI, HALF_PI);

    //hair
    stroke('#6F4A14');
    strokeWeight(40);
    noFill();
    arc( -30, -20, 155, 150, PI, PI+HALF_PI);
    line( -20, -95, 80, -95);

    //blaster
    stroke('#AF2115');
    strokeWeight(40);
    line(320, -100, 400, -75)

    noStroke();
    fill('#D3372A');
    ellipse( 300, -130, 120, 160);

    stroke('#AF2115');
    strokeWeight(15);
    line(270, -110, 310, -90)
    stroke('#AF2115');
    strokeWeight(15);
    line(270, -150, 310, -130)

    stroke('#ddd');
    strokeWeight(15);
    line(300, -210, 300, -250)

    noStroke();
    fill('#2BE928');
    ellipse( 300, -250, 30, 30);
    stroke('#2BE928');
    strokeWeight(5);
    noFill();
    arc(300, -250, 70, 70, PI-QUARTER_PI, TWO_PI+QUARTER_PI);

    noStroke();
    fill('#2BE928');
    triangle(290, -600, 300, -250, 310, -600);

    // head code goes here
    // make skull first

//translate( 10, 10 );

    // **MOUTH**
    push();
    // mouth code goes here


    //suit neck
    noStroke();
    fill('#aaa');
    rect(-180, 120, 360, 100, 20);

    stroke('#777');
    strokeWeight(5);
    line(-170, 170, 170, 170);

    //front shoulder
    noStroke();
    fill('#777');
    ellipse( -180, 210, 150, 150 );

    //mouth
    noStroke();
    fill('#D7715B');
    ellipse( 20, 65, 40, 40);

    //front hand
    stroke('#555');
    strokeWeight(30);
    noFill();
    arc(380, -80, 70, 70, HALF_PI, PI+QUARTER_PI);


    pop();
    // **END MOUTH**

    // **EYES**
    push();
    // eye code goes here

    //eyes
    push();
    translate( -40, 20 );

      stroke('#fff');
      strokeWeight(5);
      fill('#000');
      ellipse( 0, 0, 50, 50 );

      noStroke();
      strokeWeight(5);
      fill('#fff');
      ellipse( -8, -6, 18, 18 );

      noStroke();
      strokeWeight(5);
      fill('#fff');
      ellipse( 12, -2, 15, 15 );

      noStroke();
      strokeWeight(5);
      fill('#fff');
      ellipse( 0, 10, 10, 10 );

    pop();

    push();
    translate( 70, 20 );

      stroke('#fff');
      strokeWeight(5);
      fill('#000');
      ellipse( 0, 0, 50, 50 );

      noStroke();
      strokeWeight(5);
      fill('#fff');
      ellipse( -8, -6, 18, 18 );

      noStroke();
      strokeWeight(5);
      fill('#fff');
      ellipse( 12, -2, 15, 15 );

      noStroke();
      strokeWeight(5);
      fill('#fff');
      ellipse( 0, 10, 10, 10 );

    pop();

    //helm shine
    stroke('rgba( 255, 255, 255, 0.9)');
    strokeWeight(40);
    noFill();
    arc( -10, -10, 280, 290, PI+QUARTER_PI, PI+HALF_PI);

    //nose
    noStroke();
    fill('#EAA36B');
    rect( 0, 10, 40, 30, 20);


    pop();
    // **END EYES**

    pop();
    // **END HEAD**


    // ** END CHARACTER SANDBOX *******************
    pop();

}
