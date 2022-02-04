function setup() {
    createCanvas(600, 600);
    noLoop();
}

function squareTile() {
    translate(0, 0);
    fill(232, 214, 255);
    noStroke();
    rect(0, 0, 200);

    // large circle
    stroke(134, 0, 255);
    strokeWeight(8);
    circle(100, 100, 192);

    fill(134, 0, 255);
    noStroke();
    // x1, y1, x2, y2, x3, y3
    triangle(50, 75, 150, 75, 100, 160);

    // top circle
    circle(100, 40, 45);

    // left circle
    circle(40, 125, 45);

    // right circle
    circle(160, 125, 45);
}

function draw() {
    squareTile();
}