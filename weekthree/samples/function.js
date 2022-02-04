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

const makeSandwich = function (ingredientArray) {
    for (let i = 0; i < ingredientArray.length; i++) {
        console.log('get ', ingredientArray[i]);
    }
}

makeSandwich(['bread', 'mayo', 'tunafish']);