// selecting empty div & assigning a variable
const myEmptyDiv = document.querySelector("#myEmptyDiv");

// putting an h1 inside of div
// create a new element
const headingOne = document.createElement('h1');
const headingTwo = document.createElement('h2');
const headingThree = document.createElement('h3');
const headingFour = document.createElement('h4');
const headingFive = document.createElement('h5');

headingOne.innerHTML = "Here's a llama";
headingOne.style.cursor = "pointer";

headingOne.addEventListener('click', handleHeadingClick);

// make the content appear with .appendChild
myEmptyDiv.appendChild(headingOne);
myEmptyDiv.appendChild(headingTwo);
myEmptyDiv.appendChild(headingThree);
myEmptyDiv.appendChild(headingFour);
myEmptyDiv.appendChild(headingFive);

function handleHeadingClick() {
    console.log('Heading has been clicked');
    document.body.style.backgroundColor = "lightblue";
    document.body.style.color = "white";
    headingTwo.innerHTML = "There's a llama"
    headingThree.innerHTML = "& another little llama,"
    headingFour.innerHTML = "fuzzy llama"
    headingFive.innerHTML = "funny llama llama llama duck."
}