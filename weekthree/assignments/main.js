let submitAnswerButton;
let questionInput;
let currentQuestion;

let response;
let responseColor = 'green';

let heading;
let smallerHeading;
let description;

let statements = [
    {question: "What is the name of the island Jurassic Park is on?",  
    answer: "Isla Nublar"},
    {question: "What DNA is used to fill in missing dinosaur genomes?",
    hint: "Hint (Pick one): Lizard, Bird, Frog, or Elephant",
    answer: "Frog"},
    {question: "What theory does mathematician Ian Malcom use to predict the collapse of the park?",
    hint: "Hint (Pick one): Quirk Theory, Kinetic Theory, Chaos Theory, or Discord Theory",
    answer: "Chaos Theory"},
    {question: "During the tour, what sick animal does the group encounter?", 
    answer: "Triceratops"},
    {question: "Which character is climbing an electric fence when Ellie turns the power back on?", 
    hint: "Grant, Lex, Tim",
    answer: "Tim"},
    {question: "At the end of the movie, who saves Grant, Ellie, Lex, and Tim from the Velociraptors?", 
    answer: "Tyrannosaurous Rex"}
];



function next() { // selecting a random item/question from the array
    if (statements.length < 1) {
        alert('Jurassic Park Winner. Do you think you would survive?');
        return;
    }
    const randomIndex = Math.ceil(Math.random() * statements.length - 1);
    return statements[randomIndex];
}

function checkQuestion() {
    if (currentQuestion.answer === questionInput.value()) {
        // checking whatever is put into the input against the currentQuestion.answer
        // removing correct answer from array
        statements = statements.filter(statementObj => {
            // if they ARE the same, run the filter
            return currentQuestion.answer !== statementObj.answer;
            // filter loops through all statements & returns everything that matches a certain condition; remove correct answer from array
            // return all other items except for the one we successfully answered
        });
        // this is the correct condition
        response = 'correctamundo';
        responseColor = 'green';
    } else { // if the answer does not match, THEN this happens; this is the wrong answer
        response = 'sorry, please try again';
        responseColor = 'red';
    }
    currentQuestion = next(); // calling the 'next' question
    questionInput.value('');
    if (currentQuestion) {
        message = currentQuestion.question;
        messageHint = currentQuestion.hint;
    }
}

currentQuestion = next(); // returns a random question
let message = currentQuestion.question;
let messageHint = currentQuestion.hint;

function setup() {
    createCanvas(600, 400);

    heading = createElement('h1', ['Welcome to Jurassic Park']);
    heading.position(110, 0);

    smallerHeading = createElement('h2', ['Jurassic Park Trivia']);
    smallerHeading.position(180, 35);

    description = createElement('text',
    ['The Jurassic Park book was written by Michael Crichton in 1990. The movie was released in 1993 and directed by Steven Spielberg. It went on to release two more movies after its success, and in 2015, the world was introduced to Jurassic World. The next movie in the series, Juriassic World: Dominion, is set to be released on June 10, 2022.']);
    description.position(20, 100);
    description.size(570, 24);

    questionInput = createInput('');
    questionInput.size(230, 16);
    questionInput.position(205, 350);

    submitAnswerButton = createButton('check your answer');
    submitAnswerButton.size(200, 24);
    submitAnswerButton.mousePressed(checkQuestion);
    submitAnswerButton.position(225, 375);
}

function draw() {
    background('lightblue');

    // question
    fill('black');
    textSize(16);
    textAlign(CENTER);
    text(message, 50, 200, 500);

    // hint
    textSize(15);
    textStyle(BOLD);
    text(messageHint, 50, 250, 500);

    // right or wrong
    fill(responseColor);
    textStyle(NORMAL);
    text(response, 235, 330); // empty until we triggered a correct or wrong answer

    // current question # out of 5
    fill('blue');
    text(statements.indexOf(currentQuestion) + ' of 5', 525, 370);
}