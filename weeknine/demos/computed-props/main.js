const myVue = Vue.createApp({
    data() {
        return {
            firstName: "",
            lastName: ""
        }
    },
    computed: {
        fullName() {
            console.log("firing full name");
            return this.firstName + " " + this.lastName
        },
        now() {
            console.log("firing now");
            return Date.now();
        }
    }
}).mount("#app");