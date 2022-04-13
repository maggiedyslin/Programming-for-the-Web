function setup() {
    createCanvas(800, 800);
    background(0);
}

function draw() {
    for (let i = 50; i <= 800; i+=50) {
        for (let j = 50; j <= 800; j+=50) {
            noFill();
            strokeWeight(1);
            stroke(56, 155, 186);
            line(0, 0, i, j);

            line (800, 0, i, j);
        }

        noFill();
        strokeWeight(2);
        stroke(165, 155, 235);
        ellipse(20, 20, i);

        ellipse(780, 780, i);
    }
} 

    // for (let i = 0; i < 10; i++)
    // let i = 0; assigning variable
    // condition - as long as it is "less than" 10 it will continue to run
    // increment - i++ what happens to the loop as it runs