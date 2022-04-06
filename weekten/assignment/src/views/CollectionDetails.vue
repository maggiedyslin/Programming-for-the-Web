<script setup>

    import GamesCollection from "../data/game.json";
    import {useRoute} from "vue-router";

    const route = useRoute();
    const paramId = route.params.id * 1;
    console.log('the id is', paramId);

    const game = GamesCollection.find(game => {
        return game.id === paramId;
    })

</script>

<template>

    <div class="main">

        <img :src="game.image" :alt="game.name" />

        <h1>{{game.name}}</h1>

        <p class="released">
            <strong>Game Released On:</strong> {{game.released}}
        </p>

        <p class="console">
            <strong>Game Console(s):</strong> {{game.console}}
        </p>

        <p class="rating">
            <strong>My rating:</strong> {{game.rating}}
        </p>
        
        <p class="players">
            <strong>Number of players:</strong> {{game.players}}
        </p>

        <h2>Game Description</h2>
        <p class="description">
            {{game.description}}
        </p>

    </div>

</template>

<style scoped>

    /* main */

    .main {
        padding: 15px;
        display: block;
        margin: 15px auto;
        text-align: left;
        max-width: 80%;
        background-color: rgb(226, 226, 226);
    }

    .main img {
        width: 50%;
        display: block;
    }

    h1 {
        font-size: 50px;
        font-family: 'Courier New', Courier, monospace;
        padding: 0;
        margin: 10px 0;
    }

    h2 {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 25px;
        padding: 0;
        margin: 5px 0;
    }

    /* classes for information */

    .released {

    }

    /* links */

    a.my-collection {
        text-transform: none;
        text-decoration: none;
        
    }

    a:hover.my-collection {
        text-transform: none;
        text-decoration: none;
    }

</style>