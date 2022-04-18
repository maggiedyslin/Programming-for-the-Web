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
    createCanvas(1000, 365);
    cnv.mousePressed(canvasPressed);

    image(sharkImg, 0, 0);
}

function draw() {
    line(width / 2, 0, width / 2, 365)
}

function canvasPressed() {
    if () {

    }
}