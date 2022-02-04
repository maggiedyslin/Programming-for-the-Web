function setup() {
    createCanvas(600, 600);
    noLoop();
}

function squareTile(originX, originY, cPurple, strokeColor, colorOne, colorTwo, colorThree, colorFour) {
    translate(originX, originY); // tells us where x & y origin are
    fill(cPurple);
    noStroke();
    rect(0, 0, 200);

    // large circle
    stroke(strokeColor);
    strokeWeight(8);
    circle(100, 100, 192);

    fill(colorOne);
    noStroke();
    // x1, y1, x2, y2, x3, y3
    triangle(50, 75, 150, 75, 100, 160);

    // top circle
    fill(colorTwo);
    circle(100, 40, 45);

    // left circle
    fill(colorThree);
    circle(40, 125, 45);

    // right circle
    fill(colorFour);
    circle(160, 125, 45);
}

function draw() {
    squareTile(0, 0, color(207, 177, 255), color(255), color(109, 0, 255), 'blue', 'green', 'pink');

    squareTile(0, 200, color(136, 153, 255), color(255), color(109, 0, 255), color(47, 148, 219), color(0, 180, 154), color(232, 130, 168));

    squareTile(0, 200, color(141, 128, 230), color(255), color(109, 0, 255), color(72, 196, 239), color(91, 195, 130), color(207, 117, 119));

    squareTile(200, -400, color(143, 97, 255), color(255), color(109, 0, 255), color(103, 215, 230), color(135, 225, 119), color(224, 34, 119));

    squareTile(0, 200, color(136, 117, 255), color(255), color(109, 0, 255), color(146, 255, 225), color(51, 146, 145), color(177, 1090, 200));

    squareTile(0, 200, color(175, 98, 230), color(255), color(109, 0, 255), color(190, 240, 239), color(7, 162, 145), color(215, 136, 142));

    squareTile(200, -400, color(105, 99, 230), color(255), color(109, 0, 255), color(105, 220, 239), color(62, 187, 113), color(184, 112, 142));

    squareTile(0, 200, color(79, 67, 238), color(255), color(109, 0, 255), color(24, 184, 239), color(100, 166, 113), color(255, 146, 163));

    squareTile(0, 200, color(146, 67, 238), color(255), color(109, 0, 255), color(51, 146, 239), color(148, 196, 140), color(255, 171, 163));
}