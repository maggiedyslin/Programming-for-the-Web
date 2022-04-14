let marioTitle;
let mySound = [];
let marioImg;
// let mySound;

function preload() {
    marioImg = loadImage('assets/super-mario-world.webp');

    soundFormats('mp3', 'ogg');
    marioTitle = loadSound('assets/smw-title.mp3');
    // mySound = loadSound('assets/mario-died.mp3')
    mySound = [
        loadSound('assets/mario-died.mp3'),
        loadSound('assets/mario-money-sound.mp3'),
        loadSound('assets/mario-oneup.mp3'),
        // loadSound('assets/mario-star-theme.mp3'),
        loadSound('assets/yoshi-tongue.mp3'),
        loadSound('assets/yoshi.mp3')
    ]
}

function setup() {
    let cnv = createCanvas(525, 500);
    marioTitle.play();
    cnv.mousePressed(canvasPressed);
    background(45);
    fill(255);
    textSize(15)
    text('Tap the canvas to listen to more sounds!', 125, 484);

    image(marioImg, 0, 0);
}

function canvasPressed() {
    random(mySound).play();
}