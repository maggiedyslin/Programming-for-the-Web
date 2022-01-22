const head = window.prompt('Enter a number for the snowman head.');
const body = window.prompt('Enter a number for the snowman body.');
const left = window.prompt('Enter how big you want the left eye.');
const right = window.prompt('Enter how big you want the right eye.');

const feet = window.prompt('Do you want to add feet?');
const hat = window.prompt('Do you want to add a hat?')

function setup() {
    createCanvas(1000, 800);
    background(205, 139, 131);
}

function draw() {

    // house - bottom
    fill(255);
    strokeWeight(5);
    rect(800, 310, 150, 100);

    // house - roof
    fill(194, 126, 107);
    triangle(875, 200, 950, 310, 800, 310);

    // house - window (1)
    fill(255, 255, 0);
    strokeWeight(0);
    rect(815, 325, 25);

    // house - window (2)
    rect(845, 325, 25);

    // house - door
    fill(181, 118, 30);
    rect(900, 325, 30, 75);

    // sun
    fill(255, 157, 82);
    ellipse(150, 400, 200, 200);

    // cloud (left)
    fill(255);
    ellipse(100, 100, 125, 50);
    ellipse(150, 75, 125, 75);
    ellipse(200, 100, 125, 50);

    // cloud (right)
    ellipse(800, 75, 125, 50);
    ellipse(850, 50, 125, 75);
    ellipse(900, 75, 125, 50);

    // bottom half color
    fill(0, 198, 255);
    rect(0, 400, 1000, 400);

    //snowman legs
    fill(159, 219, 208);
    strokeWeight(5);
    stroke(0);

    // snow body
    ellipse(500, 450, body);

    // snow head
    ellipse(500, 200, head);

    if (feet === 'yes') {
        // snow left leg
        ellipse(350, 650, 150);
        // snow right leg
        ellipse(650, 650, 150);
    } else {
        strokeWeight(0);
        noFill();
    }

    if (hat === 'yes') {
    // snow hat brim
    fill(245, 164, 150);
    strokeWeight(20);
    stroke(245, 164, 150);
    line(420, 85, 645, 135);
    // snow hat body
    quad(435, 20, 645, 55, 580, 120, 470, 95);
    } else {
        strokeWeight(0);
        noFill();
    }

    // snow eyes
    stroke(0);
    strokeWeight(left);
    point(450, 175); // left
    strokeWeight(right);
    point(550, 175); // right

    // mouth
    noFill();
    strokeWeight(10);
    arc(525, 225, 80, 80, 0, HALF_PI);

    // arms
    strokeWeight(30);
    line(340, 350, 200, 200); // left arm
    line(660, 350, 800, 200); // right arm

    // buttons
    // stroke(0);
    // strokeWeight(50);
    // point(500, 375);
    // strokeWeight(40);
    // point(500, 450);
    // strokeWeight(30);
    // point(500, 520);
}
