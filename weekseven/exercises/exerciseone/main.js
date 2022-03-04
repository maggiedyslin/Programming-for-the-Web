Vue.createApp({
    data() {
        return {
            theLlamaLink: "https://en.wikipedia.org/wiki/Llama",
            theAlpacaLink: "https://en.wikipedia.org/wiki/Alpaca",
            llamaMode: "llamaVsAlpaca",
            llamaComparison: {
                size: "47 inches tall at the shoulder, and 250 pounds.",
                hair: "Coarser hair; wool is considered inferior.",
                ears: "Banana-shaped.",
                face: "Long face.",
                type: "Independent minded. Can be used as guard animals for small livestock."
            },
            llamaHeading: {
                color: "lightGrey",
                fontSize: "40px",
                background: "black"
            },
            alpacaComparison: {
                size: "35 inches tall at the shoulder, and between 121 and 143 pounds.",
                hair: "Shaggier hair that is used for fleece production. Color can vary from whites and light yellows, to browns and blacks.",
                ears: "Short, spear-shaped.",
                face: "Short, blunt; 'smooshed-in' look.",
                type: "Herd animals. A bit more skittish."
            },
            alpacaHeading: {
                color: "black",
                fontSize: "40px",
                background: "lightGrey"
            },
        }
    }
}).mount("#llamaPalooza")