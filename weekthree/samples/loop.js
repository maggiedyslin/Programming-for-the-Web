// for loop with number

// let i = 0; - assigning variable
// i < any #; - what we're checking to see if the loop should keep going or not
// i++ - increment

for (let i = 0; i < 10; i++) {
    console.log('this is i', i);
}

// for loop with an array

const myMovies =['jurassic park', 'jaws', 'alien', 'indiana jones', 'prometheus'];

for ( let j = 0; j < myMovies.length; j++) {
    console.log('me likey', myMovies[j]);
} // using this for loop would be the same as console.log'ing everything out on its own; saves time by reusing code

// while loop -- a little scary but not bad

let myVar = false;
while (myVar === false) {
    console.log('this will happen once');
    myVar = true;
}

// while loop removing items in an array

// helpful for quiz option for assignment

const myNums = [1, 2, 3, 4, 5, 6];
while (myNums.length > 0) {
    console.log('removing ' + myNums[myNums.length - 1]);
    myNums.pop(); // .pop removes things from the back of the array
    // use splice to remove question for quiz
}

console.log(myNums);

// forEach

// map