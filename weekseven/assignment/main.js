let vm = new Vue({
    el: "#myCollection",
    data: {
        descriptionStyle: {
            textAlign: "left",
            width: "30%",
        },
        imageStyle: {
            width: "25%",
            padding: "0"
        },
        nameStyle: {
            width: "10%"
        },
        releaseDate: {
            width: "11%"
        },
        gameCollection: [
            {
                image: './assets/Zelda-Ocarina.jpeg',
                name: "The Legend of Zelda: Ocarina of Time",
                released: "November 21, 1998",
                console: "Nintendo 64, Nintendo GameCube, and Nintendo 3DS",
                rating: "10/10",
                players: "1",
                description: "The Legend of Zelda: Ocarina of Time is a fantasy action-adventure game set in an expansive environment. The player controls series protagonist Link from a third-person perspective in a three-dimensional world. Link primarily fights with a sword and shield, but can also use other weapons such as projectiles, bombs, and magic spells."
            },
            {
                image: './assets/Kirby-Dream-Course.jpeg',
                name: "Kirby's Dream Course",
                released: "September 21, 1994",
                console: "Super Nintendo Entertainment System",
                rating: "8/10",
                players: "Up to 2",
                description: "Kirby's Dream Course is a mini golf video game set at an isometric perspective, similar to games such as Marble Madness (1984). Its plot involves Kirby's nemesis King Dedede stealing all of the stars in the night sky. Kirby sets out to stop Dedede and return the stars to the sky." 
            },
            {
                image: './assets/Paper-Mario.png',
                name: "Paper Mario: The Thousand-Year Door",
                released: "July 22, 2004",
                console: "Nintendo GameCube",
                rating: "10/10",
                players: "1",
                description: "The Thousand-Year Door is a role-playing video game (RPG) with other nontraditional RPG elements. The player controls a two-dimensional version of Mario and explores a variety of worlds designed to look like paper. In these locales, he is tasked with retrieving seven Crystal Stars which involves Mario completing puzzles and defeating enemies to proceed."
            },
            {
                image: './assets/Horizon-Zero.png',
                name: "Horizon Zero Dawn",
                released: "February 28, 2017",
                console: "PlayStation 4",
                rating: "10/10",
                players: "1",
                description: "Players take control of Aloy, a hunter who ventures through a post-apocalyptic land ruled by robotic creatures. Aloy can kill enemies in a variety of ways. Machine components, including electricity and the metal they are composed of, are vital to Aloy's survival; she can loot their remains for crafting resources."
            },
            {
                image: './assets/Super-Mario-Party.jpeg',
                name: "Super Mario Party",
                released: "October 5, 2018",
                console: "Nintendo Switch",
                rating: "7.5/10",
                players: "Up to 4",
                description: "Super Mario Party returns to the traditional turn-based Mario Party-style of gameplay for the first time in over a decade, a format that had remained absent from home console entries ever since Mario Party 9. The game is played with one Joy-Con controller per player, with other players needing additional controllers for multiplayer."
            },
            {
                image: './assets/Yoshi-New-Island.jpeg',
                name: "Yoshi's New Island",
                released: "March 14, 2014",
                console: "Nintendo 3DS",
                rating: "6/10",
                players: "1",
                description: "The gameplay is similar to other Yoshi's Island games, involving Yoshi needing to reach the goal at the end of each stage while protecting Baby Mario from enemies by throwing eggs as a weapon, and sometimes transforming into a vehicle." 
            },
            {
                image: './assets/Resident-Evil.jpeg',
                name: "Resident Evil 7",
                released: "January 24, 2017",
                console: "PlayStation 4, Xbox One, and PC",
                rating: "9/10",
                players: "1",
                description: "The player controls Ethan Winters from a first-person perspective as he searches a derelict estate for his missing wife. Although Ethan is a civilian with few combat skills, he is able to arm himself with a variety of weapons including handguns, shotguns, flamethrowers, explosives and chainsaws against the estate's residents, the Baker family, as well as humanoid fungal creatures known as the 'molded' and mutated insects."
            },
            {
                image: './assets/Evil-Within.jpeg',
                name: "The Evil Within 2",
                released: "October 13, 2017",
                console: "PlayStation 3, PlayStation 4, Xbox 360, Xbox One, and PC",
                rating: "8/10",
                players: "1",
                description: "Similar to its predecessor, the game is a survival horror game. Played from a third-person perspective, the player assumes control of detective Sebastian Castellanos, who must descend into the world of Union to rescue his daughter, Lily. "
            },
            {
                image: './assets/Pokemon-Gold.webp',
                name: "Pokemon Gold",
                released: "November 21, 1999",
                console: "Gameboy Color",
                rating: "10/10",
                players: "1",
                description: "Pokémon Gold Version (and Pokémon Silver Version) are 1999 role-playing video games developed by Game Freak and published by Nintendo for the Game Boy Color. They are the first installments in the second generation of the Pokémon video game series."
            },
            {
                image: './assets/Jurassic-World-Evolution.webp',
                name: "Jurassic World Evolution",
                released: "June 12, 2018",
                console: "PlayStation 4, Xbox One",
                rating: "7/10",
                players: "1",
                description: "Jurassic World Evolution is a business simulation game that allows the player to construct a Jurassic World dinosaur theme park with attractions and research facilities. Players must build an Expedition Center, which sends paleontologists to fossil dig sites to obtain dinosaurs' DNA material. DNA sequencing, which can be done in the Fossil Center unlocks new dinosaurs and updates their statistics, such as lifespan and resilience. With enough DNA content, players can use the Hammond Creation Lab to breed and incubate dinosaurs."
            },
            {
                image: './assets/Mario-Party.jpeg',
                name: "Mario Party 4",
                released: "October 21, 2002",
                console: "Nintendo GameCube",
                rating: "10/10",
                players: "Up to 4",
                description: "Mario Party 4 is based on an interactive board game played by 4 characters from the Mario series, which are controlled either by the player or the game's Artificial Intelligence (AI). The game features 8 playable characters, although they do not have any different gameplay attributes from each other (save for favouring certain items when controlled by the AI)."
            },
            {
                image: './assets/Diddy-Kong-Racing.jpeg',
                name: "Diddy Kong Racing",
                released: "October 31, 1997",
                console: "Nintendo 64, Nintendo DS",
                rating: "4/10",
                players: "Up to 4",
                description: "In Diddy Kong Racing, players can choose one of ten characters, who have access to three different vehicles: car, hovercraft and aeroplane. Each racetrack has a set of boosters known as 'zippers' that temporarily boost the player's speed, as well as featuring regenerating balloons of various colours that provide power-ups. Players must race against each other on a course."
            },
            {
                image: './assets/Alien-Isolation.jpeg',
                name: "Alien: Isolation",
                released: "October 6, 2014",
                console: "PlayStation 4",
                rating: "9/10",
                players: "1",
                description: "Alien: Isolation is a single-player action-adventure game with an emphasis on stealth and survival horror. The player controls Amanda Ripley from a first-person perspective, and must explore a space station and complete objectives while avoiding, outsmarting and defeating enemies. Objectives range from activating computers to collecting certain items or reaching a specific area."
            },
            {
                image: './assets/Bioshock.jpeg',
                name: "Bioshock",
                released: "August 21, 2007",
                console: "PlayStation 3, PlayStation 4, Xbox 360, Xbox One, Nintendo Switch, PC, and MAC",
                rating: "10/10",
                players: "1",
                description: "BioShock takes place in Rapture, a large underwater city planned and constructed in the 1940s by individualist business magnate Andrew Ryan, who wanted to create a utopia for society's elite to flourish outside of government control and 'petty morality'. The discovery of 'ADAM' soon led to the creation of 'Plasmids', mutagenic serums that grant users super-human powers like telekinesis and pyrokinesis. To protect and isolate Rapture, Ryan outlawed any contact with the surface world."
            },
            {
                image: './assets/Snowboard-Kids.jpeg',
                name: "Snowboard Kids",
                released: "December 12, 1997",
                console: "Nintendo 64",
                rating: "8/10",
                players: "Up to 4",
                description: "In addition to the usual gameplay of a snowboarding game, Snowboard Kids adds 'Shots' (special weapons used to attack players) and items which can help the player, hinder other players, or both. The game has nine main courses. Although many of the courses are snowy mountains, some are courses that would be unorthodox for snowboarding in the real world. Such courses include an amusement park, a desert, a vast valley, a dark highway, and a Japanese village during the cherry blossom festival. Each track has a unique shape, containing various obstacles, hazards, and short-cuts."
            },
            {
                image: './assets/Star-Wars.png',
                name: "Star Wars Episode One: Racer",
                released: "April 30, 1999",
                console: "Nintendo 64, Nintendo GameBoy Color, Nintendo Switch, Dreamcast, PlayStation 4, Xbox One, PC, and MAC",
                rating: "3/10",
                players: "Up to 4",
                description: "Star Wars Episode I: Racer features a variety of tracks spanning several different planets. It includes all of the racers featured in the movie as well as additional competitors exclusive to the game."
            },
            {
                image: './assets/SimCity.jpeg',
                name: "Sim City",
                released: "February 2, 1989",
                console: "Super Nintendo Entertainment System",
                rating: "7/10",
                players: "1",
                description: "In SimCity, the player (acting as mayor) is given a blank map to begin and must expand the city with the budget provided. As the city matures, the player may be able to add government and other special buildings (such as a mayor's house or courthouse), depending on how large the city is. Proper management of the city requires citizens to be provided with basic utilities (electricity, water and sometimes waste management) along with public services such as health, education, safety, parks and leisure facilities."
            },
            {
                image: './assets/Final-Fantasy-X.jpeg',
                name: "Final Fantasy X",
                released: "July 19, 2001",
                console: "PlayStation 2, PlayStation 3, PlayStation 4, and PlayStation Vita",
                rating: "10/10",
                players: "1",
                description: "Final Fantasy X tells the story of a star blitzball player, Tidus, who journeys with a young and beautiful summoner named Yuna on her quest to save the world of Spira from an endless cycle of destruction wrought by the colossal menace Sin."
            },
            {
                image: './assets/Puyo-Puyo-Tetris.jpeg',
                name: "Puyo Puyo Tetris",
                released: "February 6, 2014",
                console: "Nintendo 3DS, Nintendo WiiU, Nintendo Switch, PlayStation 3, PlayStation 4, Xbox One, and PC",
                rating: "10/10",
                players: "",
                description: "Puyo Puyo Tetris centers around the combination of two main gameplay styles, Puyo and Tetris. In the Puyo Puyo style, colored blobs known as Puyos will fall from the top of the screen and can be rotated before being placed down. The Tetris style, on the other hand, has players placing shaped blocks known as Tetriminoes down on the playing field."
            }
        ]
    }
})