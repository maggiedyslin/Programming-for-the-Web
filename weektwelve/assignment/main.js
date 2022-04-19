let sharkImg;
let pianoE;
let pianoF;

function preload() {
    sharkImg = loadImage('assets/great-white-shark.jpeg');

    soundFormats('mp3', 'ogg');
    pianoE = loadSound('assets/piano-mp3_E1.mp3');
    pianoF = loadSound('assets/piano-mp3_F1.mp3');
}

function setup() {
    // createCanvas(1000, 365);
    let cnv = createCanvas(1000, 400);
    cnv.mousePressed(canvasPressed);

    background('#016bc1');
    image(sharkImg, 0, 0);
}

function draw() {
    strokeWeight(3);
    stroke(255);
    line(width / 2, 365, width / 2, 400);

    noStroke();
    fill(255);
    textSize(15)
    text('Tap this side of the image to play the first note of the Jaws movie!', 25, 390);
    text('Tap this side of the image to play the second note of the Jaws movie!', 525, 390)
}

function canvasPressed() {
    if ((mouseX <= 500) && (mouseY <= 365)) {
        pianoE.play();
    } else if ((mouseX >= 500) && (mouseY <= 365)) {
        pianoF.play();
    }
}

function mouseReleased() {
    pianoE.stop();
    pianoF.stop();
}