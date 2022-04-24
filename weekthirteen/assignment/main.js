// refresher on classes & arrays The Coding Train
// https://www.youtube.com/watch?v=fBqaA7zRO58

let bubbles = [];

function setup() {
    createCanvas(1000, 800);
}

function mouseDragged() {
    let r = random(2, 20);
    let b = new Bubble(mouseX, mouseY, r);
    bubbles.push(b);
}

function draw() {
    background(252, 167, 128);
    drawShape();
    
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
}

function drawShape() {
    // horizon line
    stroke(0);
    strokeWeight(4);
    line(0, 500, 1000, 500);

    // grass
    noStroke();
    fill(48, 153, 112);
    rect(0, 500, 1000, 300);

    // clouds
    fill(255);
    ellipse(150, 200, 200, 50);
    ellipse(800, 200, 200, 50);
    ellipse(500, 75, 100, 25);
    ellipse(500, 90, 75, 25);

    // sun
    fill(252, 229, 161);
    ellipse(200, 300, 50);

    // tree
    fill(180, 118, 16);
    rect(850, 300, 75, 200);
    
    fill(23, 118, 16);
    ellipse(835, 250, 150);
    ellipse(935, 250, 150);
    ellipse(880, 150, 150);

    // home - home
    fill(124, 59, 0);
    rect(500, 250, 250);

    // home - roof
    fill(0);
    triangle(500, 250, 625, 100, 750, 250);

    // home - door
    fill(255, 0, 0);
    rect(600, 400, 50, 100);

    // home - window left
    fill(0);
    rect(525, 300, 50);

    // home - window bottom left
    rect(525, 425, 50);

    // home - window right
    rect(675, 300, 50);

    // home - window bottom right
    rect(675, 425, 50);

    noStroke();
    fill(255);
    textSize(15)
    text('Drag your mouse to blow bubbles!', 400, 600);
}

class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    move() {
        this.x = this.x + random(0, 5);
        this.y = this.y + random(0, 2);
    }

    show() {
        stroke(0, 165, 196);
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, this.r * 2);
    }
}