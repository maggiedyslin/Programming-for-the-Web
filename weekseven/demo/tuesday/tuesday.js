Vue.createApp({
    data() {
        return {
            myAwesomeUrl: "https://nintendo.com",
            linkTitle: "Nintendo",
            preferredMode: "light",
            paragraphStyle: {
                fontSize: "36px", // will not work without quotes!
                color: "blue"
            },
            thingsILike: { // object
                food: "Spaghetti",
                color: "Purple",
                music: "Rock & Alternative",
                movies: "80's syfy"
            },
            cards: [ // array
                {
                    name: "Bayleef",
                    type: "Grass",
                    text: "Bayleef is the best Pokemon EVER!"
                },
                {
                    name: "Tuckapup",
                    type: "Doggo",
                    text: "The best doggo ever"
                },
                {
                    name: "Mojojojo",
                    type: "Cat",
                    text: "The best kittycat ever"
                },
                {
                    name: "Blahbetyblah",
                    type: "Creature",
                    text: "blah"
                }
            ]
        }
    }
}).mount("#myApp")