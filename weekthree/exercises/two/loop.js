let coord = [
    {originX: 0, originY: 0}, 
    {originX: 0, originY: 200}, 
    {originX: 0, originY: 200}, 
    {originX: 200, originY: -400}, 
    {originX: 0, originY: 200}, 
    {originX: 0, originY: 200}, 
    {originX: 200, originY: -400}, 
    {originX: 0, originY: 200}, 
    {originX: 0, originY: 200}, 
]

function setup() {
    createCanvas(600, 600);
    noLoop();
}

function squareTile(originX, originY) {
    translate(originX, originY); // tells us where x & y origin are
    fill(207, 177, 255);
    noStroke();
    rect(0, 0, 200);

    // large circle
    stroke(255);
    strokeWeight(8);
    circle(100, 100, 192);

    noStroke();
    fill(109, 0, 255);
    // x1, y1, x2, y2, x3, y3
    triangle(50, 75, 150, 75, 100, 160);

    // top circle
    circle(100, 40, 45);

    // left circle
    circle(40, 125, 45);

    // right circle
    circle(160, 125, 45);
}

function draw() {

    for (let tiles = 0; tiles < coord.length; tiles++) { // tiles = i in this instance; can be any name
        squareTile(coord[tiles].originX, coord[tiles].originY); // bringing in squareTile from above
    }

}