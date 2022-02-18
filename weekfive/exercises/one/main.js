let blockX = 0;
let blockY = 0;
let blockColor = 255;
let drawTimer;
const speed = 15;
const distance = 2;

function setup() {
    createCanvas(500, 500);
    background(0);
}

function drawBlock(x, y, color) {
    // fill(240, 126, 121);
    fill(color || 255); // || = or operator
    rect(x, y, 50, 50);
}

function keyTyped() {
    let keyToNumber = Number(key);
    if(isNaN(keyToNumber)) {
        return;
    }
    keyToNumber = map(keyToNumber, 1, 9, 1, 255);
    console.log("Converted number ", keyToNumber)
    blockColor = keyToNumber;
    console.log("key 2 number", keyToNumber);

}
// setTimeout only occurs once
window.setTimeout(() => {
    drawTimer = window.setInterval(() => {
        if(blockY - 50 <= height) {
            drawBlock(blockX, blockY, blockColor);
            blockY += distance; // add blockY + the distance
        } else {
            blockY = 0;
            blockX += 50;
        }
        if(blockY - 50 > height && blockX - 50 > width) {
            // cancels timer
            window.clearInterval(drawTimer);
            alert("dunzo");
        }
    }, speed); 
    // () = empty operator
    // => es6 style of declaring an anonymous function
    // first argument is a function (the () =>), second argument is the interval
    // set interval means that it will execute within the time given and will continue to execute until we clear it
}, 1500);