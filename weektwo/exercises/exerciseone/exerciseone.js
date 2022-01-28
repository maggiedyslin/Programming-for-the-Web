let faveMovies = ['Lord of the Rings', 'Jurassic Park', 'Jaws', 'Alien & Aliens', 'A Goofy Movie'];
// console.log(faveMovies);

const userChoice = window.prompt('What is your favorite movie?');
// console.log('So your favorite movie is ' + movie)

faveMovies.push(userChoice);
// console.log('Favorite movies include ' + faveMovies + ', ' + userChoice);

console.log('Our favorite movies include: ', faveMovies.toString());