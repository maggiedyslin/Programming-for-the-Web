var slider;
var pos;

function setup() {
    createCanvas(800, 800);
    angleMode(DEGREES);

    slider = createSlider(0, 10, 5, .1);

    pos = 0.0;
    inc = 3.0;

    posTwo = 0.0;
    incTwo = 7.0
}

function draw() {
    clear();
    translate(width / 2, height / 2);

    var mySinVal = sin(pos);
    var mySinValTwo = sin(posTwo);

    amplified = mySinVal * 50;
    amplifiedTwo = mySinValTwo * 50;

    for (i = 0; i <= 360; i = i + 5) {
        fill(random(255), random(255), random(255));
        noStroke();
        ellipse(mySinVal, amplifiedTwo / 2, 5);

        // stroke(random(255), random(255), random(255));
        // line(amplifiedTwo * 4, 100, 100, amplified);

        rect(mySinVal * 100, amplifiedTwo * 2, 25);

        noFill();
        stroke(random(255), random(255), random(255));
        triangle(mySinVal * 4, 20, mySinValTwo * 4, 80, amplified, 100);

        curve(mySinValTwo / 2, 100, 100, 200, mySinVal * 4, 200, 400, amplified * 50);

        rotate(i);
    }

    pos = pos + slider.value();
    posTwo = posTwo + inc;
}