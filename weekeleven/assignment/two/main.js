function setup() {
    createCanvas(800, 800);
    background(0);
}

function draw() {
    for (let k = 0; k <= 1500; k+=150) {
        for (let l = 0; l <= 1500; l+=150) {
            noFill();
            strokeWeight(.5);

            stroke(126, 212, 255);
            ellipse(k * .5, 0, l * 2);

            stroke(239, 199, 228);
            ellipse(k * .5, 10, l * 2);

            stroke(168, 139, 255);
            ellipse(k * .5, 20, l * 2);

            stroke(168, 255, 206);
            ellipse(k * .5, 30, l * 2);

            stroke(235, 255, 206);
            ellipse(k * .5, 40, l * 2);

            stroke(235, 86, 82);
            ellipse(k * .5, 50, l * 2);
        }
    }
}


    // for (let i = 0; i < 10; i++)
    // let i = 0; assigning variable
    // condition - as long as it is "less than" 10 it will continue to run
    // increment - i++ what happens to the loop as it runs