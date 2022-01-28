// let gamesArr = ['Horizon Zero Dawn', 'Bioshock', 'Final Fantasy X', 'Animal Crossing: New Horizons', 'Paper Mario & the Thousand Year Door', 'Mario Party 1 & 4'];

const gamesArr = [
    {name: 'Horizon Zero Dawn', console: 'Playstation 4', numberOfPlayers: 1, rating: 5},
    {name: 'Bioshock', console: 'multi-console', numberOfPlayers: 'multiple', rating: 5},
    {name: 'Final Fantasy X', console: 'Playstation 2, Playstation 3, & Playstation 4', numberOfPlayers: 1, rating: 5},
    {name: 'Animal Crossing: New Horizons', console: 'Nintendo Switch', numberOfPlayers: 'various', rating: 4},
    {name: 'Paper Mario & the Thousand Year Door', console: 'Gamecube', numberOfPlayers: 1, rating: 5},
    {name: 'Mario Party 1 & 4', console: 'Nintendo 64 & Gamecube', numberOfPlayers: 'multiple', rating: 5}
]
// console.log(gamesArr);
const userNumber = window.prompt('I have 5 games in my collection. Pick a number between 1 and 5 and I will tell you some things about it.');

// const randomIdx = Math.round(Math.random() * gamesArr.length - 1);

console.log('Beautiful game! It is called ' + gamesArr[userNumber - 1].name + ', and it is played on the ' + gamesArr[userNumber - 1].console + '. You have ' + gamesArr[userNumber - 1].numberOfPlayers + ' player(s), and I give this game a rating of ' + gamesArr[userNumber - 1].rating + ' out of 5 stars.');