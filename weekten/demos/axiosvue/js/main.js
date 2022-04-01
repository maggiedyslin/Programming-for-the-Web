var baseURL = "https://ghibliapi.herokuapp.com";

var vm = new Vue({
    el: "#app",
    data: {
        films: []
    },
    methods: {
        getFilms: function() {
            axios.get(baseURL + "/films").then(function(response){
                console.log(response);
                vm.films = response.data;
            })
            // returns object that has a then property
            // then property fires when the data comes back from whatever that request is successfully
        }
    },
    created: function() {
        this.getFilms();
    }
});