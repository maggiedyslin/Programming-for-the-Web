class Rectangle {
    constructor(x, y) { // x & y are arguments
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 200; // want to have a mini program in itself; wants to know about itself
    }

    show () {
        rect(this.x, this.y, this.width, this.height);
    }
}

let xOffset = 50; // space from left
let yOffset = 100; // space from top
const myRectangleArray = [];

for(let j = 0; j < 2; j++) {
    for(let i = 0; i < 5; i++) {
        const tempRect = new Rectangle(xOffset, yOffset);
        myRectangleArray.push(tempRect);
        xOffset += 150;
    }
    xOffset = 50;
    yOffset += 250;
}

function setup() {
    createCanvas(1000, 1000);
}

function draw() {
    background(0);
    for(let rectArrayIndex = 0; rectArrayIndex < myRectangleArray.length; rectArrayIndex++)
    // usually use things like i or a single letter but sometimes better to use a variable that will make sense later
        myRectangleArray[rectArrayIndex].show(); // loops twice due to having two rectangles in the array
}

function mousePressed() {
    for(let k = 0; k < myRectangleArray.length; k++) {
        if(
            mouseX >= myRectangleArray[k].x &&
            mouseX <= (myRectangleArray[k].x + myRectangleArray[k].width) &&
            mouseY >= myRectangleArray[k].y &&
            mouseY <= (myRectangleArray[k].height + myRectangleArray[k].y)
        ) {
            console.log("hit", myRectangleArray[k].x, myRectangleArray[k].y);
        }
    }
}