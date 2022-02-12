function setup() {
    createCanvas(1000, 700);
}

let cards = [];

function draw() {
    background(0);
    noLoop();
    fill("#ccc");
    for (let j = 0; j < 4; j++) {
        for(let i = 0; i < 5; i++) {
            const newCard = {x: i * 150, y: j * 150, width: 100, height: 100}
            rect(newCard.x, newCard.y, newCard.width, newCard.height);
            cards.push(newCard);
        }
    }
    // console.log('cards', cards);
}

function mousePressed() {

}