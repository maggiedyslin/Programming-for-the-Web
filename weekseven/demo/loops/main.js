var vm = new Vue({
    el: "#app",
    data: {
        myNumbers: [1, 4, 17, 84],
        animals: [
            {
                name: "panda",
                color: "black and white"
            },
            {
                name: "squirrel",
                color: "grey"
            },
            {
                name: "fox",
                color: "red"
            }
        ],
        myDog: {
            name: "Tuckapup",
            breed: "Boxer and Beagle",
            color: "Brown, Black, and White; speckles on face. He's a cutie patootie.",
            size: "Medium"
        }
    }
})