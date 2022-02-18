const DOWN = 'down';
const UP = 'up';
let startingX = 40; // needed to use to pass through our loop
let startingY = 110;
let cards = [];

const gameState = {
    totalPairs: 10, // 10 pairs, 20 matches
    flippedCards: [],
    numMatched: 0, // starting matched at 0
    attempts: 0, // starting attempts at 0
    waiting: false
};

let cardBack;
let cardfaceArray = [];

function preload() {
    cardBack = loadImage('assets/card-back.png');

    cardfaceArray = [
        loadImage('assets/card-one.png'),
        loadImage('assets/card-two.png'),
        loadImage('assets/card-three.png'),
        loadImage('assets/card-four.png'),
        loadImage('assets/card-five.png'),
        loadImage('assets/card-six.png'),
        loadImage('assets/card-seven.png'),
        loadImage('assets/card-eight.png'),
        loadImage('assets/card-nine.png'),
        loadImage('assets/card-ten.png')
    ]
}

function setup() {
    createCanvas(1000, 800);
    let selectedFaces = [];

    for(let z = 0; z < 10; z++) {
        const randomIdx = floor(random(cardfaceArray.length));
        const face = cardfaceArray[randomIdx]; // randomizes cardfaceArray
        selectedFaces.push(face); // adding 'face' to the selectedFaces array
        selectedFaces.push(face);
        // remove the used cardface so it doesn't get randomly selected again
        cardfaceArray.splice(randomIdx, 1); // splice takes out, and only takes out 1
    }

    selectedFaces = shuffleArray(selectedFaces); // assigning as new shuffle array

    for(let j = 0; j < 4; j++) {
        for(let i = 0;  i < 5; i++) {
            const faceImage = selectedFaces.pop(); // removing the last item in the selectedFaces array
            cards.push(new Card(startingX, startingY, faceImage)); // could also use myCard = new Card();
            startingX += 150;
        }
        startingY += 150;
        startingX = 40; // resetting x axis
    }
}

function draw() {
    background(0);

    if(gameState.numMatched === gameState.totalPairs) {
        // if the number of matched = the total number of pairs, then do this
        fill('yellow');
        textSize(66);
        text("winner", 800, 400);
        noLoop();
    }

    for (let k = 0; k < cards.length; k++) {
        if(!cards[k].isMatch) {// ! = if the card is NOT a match, put the card back down
            cards[k].face = DOWN;
        }
        cards[k].show(); // redrawing card again
    }

    noLoop();
    gameState.flippedCards.length = 0;
    gameState.waiting = false;
    fill(255);
    textSize(36);
    text("attempts " + gameState.attempts, 800, 660);
    text("matches " + gameState.numMatched, 800, 620);
}

function mousePressed() {
    if(gameState.waiting) {
        return;
    }

    for(let k = 0; k < cards.length; k++) {
        if(gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)) {
            // first check flipped cards length is less than 2 & if it is, then we can trigger the flip
            // console.log('flipped', cards[k]);
            gameState.flippedCards.push(cards[k]);
        }
    }

    if (gameState.flippedCards.length === 2) { // when two cards are up, that's when we check if they match
        gameState.attempts++; // adding to the attempts
        if (gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg) {
            // cards match! time to score
            // mark cards as matched so they don't flip back
            gameState.flippedCards[0].isMatch = true;
            gameState.flippedCards[1].isMatch = true;
            // empty the flipped cards array
            gameState.flippedCards.length = 0;
            // increment the score
            gameState.numMatched++;
            loop();
        } else {
            gameState.waiting = true;
            const loopTimeout = window.setTimeout(() => {
                loop();
                window.clearTimeout(loopTimeout); // clearing the loopTimeout
            }, 1800);
        }
    }
}

class Card {
    constructor(x, y, cardFaceImg) {
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 100;
        this.face = DOWN;
        this.cardFaceImg = cardFaceImg;
        this.isMatch = false;
        this.show();
    }

    show() { // card decides if it is face up or face down
        if(this.face === UP || this.isMatch) {
            fill(200);
            rect(this.x, this.y, this.width, this.height, 4);
            image(this.cardFaceImg, this.x, this.y);
        } else { // down
            fill(60, 130, 189);
            rect(this.x, this.y, this.width, this.height, 4); // border radius of 4
            image(cardBack, this.x, this.y);
        }
    }

    didHit(mouseX, mouseY) {
        if(mouseX >= this.x && mouseX <= this.x + this.width && 
            mouseY >= this.y && mouseY <= this.y + this.height) {
                this.flip(); // will trigger the toggling of face up/face down
                return true;
            } else {
                return false;
            }
    }

    flip() { // checks to see what the state of the face of the card is
        if(this.face === DOWN) {
            this.face = UP;
        } else {
            this.face = DOWN;
        }
        this.show(); // show the card
    }
}

function shuffleArray (array) {
    // goes through & chooses a random item in the array and swaps it with the last item in the array, then it loops again & chooses the second to last item, etc.
    let counter = array.length;
    while (counter > 0) {
        // picking a random index
        const idx = Math.floor(Math.random() * counter);
        // decreasing counter by 1
        counter--;
        // swapping the last element with it
        const temp = array[counter];
        array[counter] = array[idx];
        array[idx] = temp;
    }
    return array;
}