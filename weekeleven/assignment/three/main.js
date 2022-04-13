function setup() {
    createCanvas(800, 800);
    background(0);
}

function draw() {
    for (let i = 40; i < 700; i+=50) {
        for (let j = 80; i < 825; i+=20) {
            noFill();
            strokeWeight(1);
            stroke(97, 199, 228);
            arc(j + 320, j + 325, i, i, PI, QUARTER_PI);

            stroke(235, 86, 82);
            arc(j + 320, j + 325, i, i, QUARTER_PI, PI);
        }
    }
} 

    // for (let i = 0; i < 10; i++)
    // let i = 0; assigning variable
    // condition - as long as it is "less than" 10 it will continue to run
    // increment - i++ what happens to the loop as it runs