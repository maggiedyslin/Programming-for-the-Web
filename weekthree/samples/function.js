function logOutGreeting(greeting) { // logOutGreeting is the name you choose; can be ANYTHING
    console.log(greeting);
}

logOutGreeting("hi"); // executing the function by using the same name you chose

// function to get the makings of a pb sammich

function getStuff (ingredient) {
    console.log('get ' + ingredient);
}

getStuff('bread');
getStuff('peanut butter');
getStuff('honey');

// const makeSandwich = function (ingredientArray) {
//     for (let i = 0; i < ingredientArray.length; i++) {
//         console.log('throw away', ingredientArray[i]);
//     }
// }

let makeSandwich = (ingredientArray) => {
    for (let i = 0; i < ingredientArray.length; i++) {
        console.log('get', ingredientArray[i]);
    }
};

makeSandwich = (ingredientArray) => {
    console.log(ingredientArray.toString(', '))
};

makeSandwich(['mayo', 'tunafish', 'mustard']);
makeSandwich(['this', 'that', 'the other']);

function makeRand (maxNumber) {
    const output = Math.ceil(Math.random() * maxNumber);
    return output; // same as putting return Math.cell(Math.random() * maxNumber);
}
const randomOutput = makeRand(100);
console.log(randomOutput);

// const myObject = {
//     x: 200,
//     y: 400,
//     getPosition: function() {
//         console.log('we are ' + this.x + ' from the left and ' + this.y + ' from the top');
//     } // 'this.something' is a reference to a property that is contained within the same scope
// }

const myObject = {
    x: 200,
    y: 400,
    getPosition: () => {
        this.x = 35;
        this.y = 45;
        console.log('we are ' + this.x + 'from the left and ' + this.y + ' from the top');
    }
}

myObject.getPosition();
console.log(myObject.x, myObject.y);

// => es6 style is more isolating to the scope; less chance of having things 'collide' the easier it will be for other developers to understand what is going on; less 'mutation'