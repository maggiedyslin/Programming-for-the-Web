const squareWidth = 50;
const squareHeight = 50;
let squareXPosition = 100;
let squareYPosition = 0;

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(0);
    fill("purple");
    // ellipse(100, 100, 100);
    rect(squareXPosition, squareYPosition, squareWidth, squareHeight);
    squareYPosition += 1;

    if (squareYPosition > height) {
        squareYPosition = 0; // restart y position
        // noLoop(); // turns off the movement of Y
    }
}

function mousePressed() {
    console.log("clickedy", mouseX, mouseY);
    // for a circle
    //    const distance = dist(mouseX, mouseY, 100, 100);
//     if (distance < 50) { // radius = 50; half of the circle
//         alert("you hit it");
//     }

    // for a rectangle
    if((mouseX >= squareXPosition && mouseX <= squareXPosition + squareWidth) && (mouseY >= squareYPosition && mouseY <= squareYPosition + squareHeight)) {
        console.log('you hit the x');
    }
}