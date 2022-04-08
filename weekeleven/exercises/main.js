let ellipseColor;
const canvasHeight = 600;

function setup() {
    createCanvas(1000, canvasHeight);
    background(0);
}

function draw() {
    ellipseColor = color(112, 117, 248);
    noFill();
    strokeWeight(1);
    stroke(ellipseColor);

    for (let i = 0; i < 20; i++) {
        translate(mouseX, mouseY);
        ellipse(10, 10, 50);
    }

    if (mouseIsPressed) {
        // ellipseColor = color(112, 177, 248);
        ellipseColor = color(random(255));
        console.log('click');
    }
}

function mousePressed() {

}