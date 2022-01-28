// objects

// create
const maggiesCar = {
    color: 'white & black',
    model: 'compass',
    make: 'jeep',
    year: 2020
};

console.log(maggiesCar);

// mutate: add data (properties)
maggiesCar.heatedSeats = true;
console.log(maggiesCar);

maggiesCar['4-wheel-drive'] = true;
console.log(maggiesCar);

// display single item with dot
console.log(maggiesCar.color);
console.log('maggies car is a', maggiesCar.make);

// display single item with array notation
console.log('is it a 4 wheel drive?', maggiesCar['4-wheel-drive']);

// using toString (works with arrays too)
console.log(maggiesCar.toString()); // when something shows up as [object object] it means that we have tried to cast an object to a string & it doesn't work; useless the way it is
// ARRAY
const myCars = ['rav', 'pilot', 'juke'];
console.log(myCars.toString());

// mutate: remove property
delete maggiesCar.make;
console.log('without make', maggiesCar);

// merge two objects
const basicJeep = {
    wheels: 4,
    color: 'red',
    doors: 4,
    make: 'jeep',
    model: 'cherokee'
};
const newJeep = Object.assign({}, basicJeep, maggiesCar);
console.log('new jeep', newJeep);

// objects in arrays
const cars = [
    {make: 'jeep', model: 'compass', color: 'white'}, 
    {make: 'jeep', model: 'cherokee', color: 'black'},
    {make: 'porsche', model: 'cayenne', color: 'white'},
    {make: 'dodge', model: 'viper', color: 'white'},
    {make: 'vw', model: 'beetle', color: 'pink'},
    {make: 'chevy', model: 'blazer', color: 'orange'}
];
console.log('cars make', cars[0].make);

const randomIdx = Math.round(Math.random() * cars.length - 1);
console.log('My car is a ' + cars[randomIdx].make + ' ' + cars[randomIdx].model + ', and it is the color ' + cars[randomIdx].color);