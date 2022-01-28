const questionArr = [
    {question: "What year was the movie Jaws released?", answer: 1975},
    {question: "What year was the movie Jurassic Park released?", answer: 1993},
    {question: "What year was the movie Alien released?", answer: 1979}
];

const qLength = questionArr.length;
// establishing questionArr length = 3 questions

const qIndex = Math.floor(Math.random() * qLength); 
// randomizing question when prompted

const userAnswer = window.prompt(questionArr[qIndex].question); // displaying question in prompt window * randomizing the question

// const question = window.prompt('You have answered ' + userAnswer + '. The correct answer is ' + questionArr[qIndex].answer + '.'); 
// displaying the users answer & the correct answer to the question

window.prompt("You have answered ".concat(userAnswer + '. The correct answer is ' + questionArr[qIndex].answer + '.'));