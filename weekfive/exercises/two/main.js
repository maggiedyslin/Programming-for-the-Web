let colors = ["rgb(240, 126, 121)", "rgb(65, 126, 155)"];

const notice = window.alert("Press a box, any box!");

class Square {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.color = colors;
    }

    show() {
        strokeWeight(2);
        fill(this.color[0]);
        rect(this.x, this.y, this.width, this.height);
    }

    move() {
        this.x = this.x + random(-2, 2);
        this.y = this.y + random(-2, 2);
    }

    changeColor() {
        fill(this.color[1]);
        rect(this.x, this.y, this.width, this.height);
    }
}

let xOffset = 25; // this is where x starts at
let yOffset = 25; // this is where y starts at
const squareArray = [];

for(let j = 0; j < 4; j++) {
    for(let i = 0; i < 6; i++) { // i < # of squares on canvas
        const aSquare = new Square(xOffset, yOffset);
        squareArray.push(aSquare); // pushing square to be seen on canvas
        xOffset += 100;
    }
    xOffset = 25;
    yOffset += 100;
}

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    // showing the square array on the canvas
    for (let k = 0; k < squareArray.length; k++) {
        squareArray[k].show();
        squareArray[k].move();
        if(mouseIsPressed && (mouseX >= squareArray[k].x &&
            mouseX <= (squareArray[k].x + squareArray[k].width) &&
            mouseY >= squareArray[k].y &&
            mouseY <= (squareArray[k].height + squareArray[k].y))) {
            squareArray[k].changeColor();
            // console.log(mouseIsPressed);
        }
    }
}

// function mousePressed() {
//     for(let l = 0; l < squareArray.length; l++) {
//         if(
//             mouseX >= squareArray[l].x &&
//             mouseX <= (squareArray[l].x + squareArray[l].width) &&
//             mouseY >= squareArray[l].y &&
//             mouseY <= (squareArray[l].height + squareArray[l].y)
//         ) {
//             squareArray[l].changeColor();
//             console.log("hit", squareArray[l].x, squareArray[l].y);
//         }
//     }
// }