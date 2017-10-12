// helicopter setup

var angle = 0;
var posA = 1500
var posB = 1200
var posC = 500
var posD = 1000
var posE = 750
var posF = 250
var posG = 1200
var posX = 0
var posY = 0
var posZ = 0


function setup() {
    createCanvas( 1500, 1000 );
    angleMode(DEGREES);

}

function draw() {
    background( '#51A5D9' );
    noCursor();

    // clouds
    push();

    noStroke();
    fill('#fff');
    ellipse(posX, posY, 60, 80);
    posY = posY + 3
    ellipse(posA, posY, 60, 80);
    posY = posY + 3
    ellipse(posB, posY, 60, 80);
    posY = posY + 3
    ellipse(posC, posY, 60, 80);
    posY = posY + 3

    // cloud group 1 repeats
    if (posY > height+500) {
    posY = 0;
    }


    pop();

    push();


    noStroke();
    fill('#fff');
    ellipse(posD, posZ-500, 60, 80);
    posZ = posZ + 3
    ellipse(posE, posZ-500, 60, 80);
    posZ = posZ + 3
    ellipse(posF, posZ-500, 60, 80);
    posZ = posZ + 3
    ellipse(posG, posZ-500, 60, 80);
    posZ = posZ + 3

    // cloud group 2 repeats
    if (posZ > height+500) {
    posZ = 0;
    }

    pop();

    //*****************
    // helicopter sandbox
    //*****************

    push();

    //helicopter follows mouse
    translate( mouseX, mouseY );





    // ** Body **
    // helicopter

    push();
    noStroke();
    fill('#C52B2B');
    ellipse( 0, 0, 80, 120 );

    // tail
    stroke('#C52B2B');
    strokeWeight(20);
    strokeCap(SQUARE);
    line( 0, 0, 0, 150);
    line( -20, 150, 20, 150);


    pop();

    // ** HEAD **

    push();
    // blades
    rotate(angle);
    stroke( '#000' );
    strokeWeight( 10 );
    line( -100, -100, 100, 100 );
    line( 100, -100, -100, 100 );
    line( -140, 0, 140, 0 );
    line( 0, -140, 0, 140 );

    // blades rotate
    angle =  angle + 12;

    pop();

    pop();





    // ** END HEAD **



    //*****************
    // End helicopter Sandbox
    //*****************

  }
