function setup() {
    createCanvas(1000, 800);
    background('#f1f1f1');
}

function draw() {
    //snowman legs
    fill(159, 219, 208);
    strokeWeight(5);
    stroke(0);

    // snow left leg
    ellipse(350, 650, 200)
    // snow right leg
    ellipse(650, 650, 200);

    // snow body
    ellipse(500, 450, 350, 400);

    // snow head
    ellipse(500, 200, 200);

    // snow hat brim
    fill(245, 164, 150);
    strokeWeight(20);
    stroke(245, 164, 150)
    line(420, 85, 645, 135);

    // snow hat body
    quad(435, 20, 645, 55, 580, 120, 470, 95);

    // snow eyes
    stroke(0);
    strokeWeight(50);
    point(450, 175); // left
    point(550, 175); // right

    // mouth
    noFill();
    strokeWeight(10);
    arc(525, 225, 80, 80, 0, HALF_PI);

    // arms
    strokeWeight(35);
    line(340, 350, 200, 200); // left arm
    line(660, 350, 800, 200); // right arm

    // buttons
    stroke(0);
    strokeWeight(50);
    point(500, 375);
    strokeWeight(40);
    point(500, 450);
    strokeWeight(30);
    point(500, 520);
}
