const myArr = ["bob", "betty", "sue"];
const myOtherArray = new Array();

myOtherArray.push("star wars"); // pushes content into myOtherArray; most common way to 'mutate' an array
myOtherArray.push("temple of doom"); // pushes content into myOtherArray

// myArr.pop(); // removes the last item in the array
// myArr.shift(); // removes the first item in the array
myArr.unshift("james"); // adds an item to the beginning of the array

console.log(myArr); 
console.log(myOtherArray);

console.log(myOtherArray[0]); // reads a single item
console.log(myArr[1]);

console.log(myArr.indexOf("betty"));

// const bettyIdx = myArr.indexOf("jetty"); // will display -1 because "jetty" is not defined
const bettyIdx = myArr.indexOf("betty");
console.log(bettyIdx);

if (bettyIdx > -1) {
    console.log(myArr[bettyIdx]);
}

myArr.splice(bettyIdx, 0, "robert"); 
console.log(myArr);
console.log(myArr.length);
console.log(myOtherArray.length);

// const randomNumber = Math.random(); // creates a random number between 0 and 1
// const randomNumber = Math.random() * (myArr.length - 1); // myArr length (5) - 1, is 4; so a number between 0 and 4
const randomNumber = Math.round(Math.random() * (myArr.length - 1)); 
// rounds the number to the nearest whole number (1, 2, 3, or 4); not a decimal
console.log(myArr[randomNumber]); 
// show a random name within the myArr array using randomNumber - which will display a random name within the myArr array

// Math.random() for random 0 and 1
// Math.round(n) rounds to the nearest whole number
// my.Arr.length - 1 to get the last index number of ran array