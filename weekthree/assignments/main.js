let rotateBy = 5;
let oneLine = 1; // line rotation

function setup() {
    createCanvas(800, 800);
    background(0);
    angleMode(DEGREES);
}

function makeArm(rotateBy, oneLine) {
    let alt = Math.round(rotateBy / 360);
    noFill();
    stroke(255);
    strokeWeight(1);
    ellipse(150, 150 + alt, 150 / alt);

    let theLine = Math.round(oneLine / 360); // rotating line (4) * 2
    strokeWeight(1);
    stroke(random(255), random(255), random(255));
    line(400, 400 * theLine, 200, 200); // x1, y1, x2, y2
}

function draw() {
    translate(400, 400);
    rotate(rotateBy);
    makeArm(rotateBy);
    rotateBy += 5;

    rotate(oneLine);
    makeArm(oneLine);
    oneLine += 1;
}

function mousePressed() {
    noLoop();
}