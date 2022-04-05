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

    <div>
  
        <h1>{{game.name}}</h1>

        <img :src="game.image" :alt="game.name" />

        {{game.released}}

        {{game.console}}

        {{game.rating}}

        {{game.players}}

        {{game.description}}

    </div>

</template>

<style scoped>

    a.my-collection {
        text-transform: none;
        text-decoration: none;
        
    }

    a:hover.my-collection {
        text-transform: none;
        text-decoration: none;
    }

    img {
        width: 100%;
    }

</style>