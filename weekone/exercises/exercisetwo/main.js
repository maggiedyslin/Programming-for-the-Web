const name = window.prompt('What is your name?');

function setup () {
    createCanvas(1000, 600);
    background(198, 164, 194);
    text('Hi there, ' + name + '.', 500, 300);
    fill(255);
}

function draw() {
    if (mouseIsPressed) {
        rect(mouseX, mouseY, 25, 25);
        fill(79, 175, 207);
        noStroke();
    } else {
        rect(mouseX, mouseY, 25, 25);
        rectMode(CENTER);
        fill(106, 123, 223); 
        noStroke();
    }
    // ellipse(mouseX, mouseY, 80, 80);
}

