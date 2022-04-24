let ellipseX;
const ellipseHeight = 30;
let ellipseY = 100;
const ellipseWidth = 5;
let speed;

function setup() {
    createCanvas(1000, 800);
    ellipseX = random(height - ellipseHeight);
    speed = random(1, 5);
}

function draw() {
    background(0);
    drawShape();
    ellipseY += speed;
    if (ellipseY > height) {
        noLoop();
    }
}

function drawShape() {
    // for (let i = 0; i <= 10; i++) {
        fill(255);
        ellipse(ellipseX, ellipseY, 5, 30);
    // }
}