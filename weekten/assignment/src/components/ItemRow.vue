<script setup>

    import {RouterLink} from "vue-router";
    const props = defineProps(["game", "index"]);

</script>


<template>

    <RouterLink :to="'/collection/'+game.id">
    
        <div>

            <tr class="my-collection"
                :class="{odd: index % 2 !== 0 + 1,
                rating: game.rating === '10/10'}">
                <td class="gameImage"><img v-bind:src="game.image" v-bind:alt="game.name"></td>
                <td class="gameName">{{game.name}}</td>
                <td class="gameRelease">{{game.released}}</td>
                <td class="gameConsole">{{game.console}}</td>
                <td class="gameRating">{{game.rating}}</td>
                <td class="gamePlayers">{{game.players}}</td>
                <td class="gameDescription">{{game.description}}</td>
            </tr>

        </div>

    </RouterLink>

</template>

<style scoped>

    /* tr {
        width: 100%;
        display: flex;
        flex-direction: row;
    } */

    img {
        /* width: 800px; */
        max-width: 100%;
    }

    a {
        text-transform: none;
        text-decoration: none;
    }

    a:hover {
        text-transform: none;
        text-decoration: none;
    }

    .odd {
        background-color: #70B1F8;
    }

    .rating {
        /* background-color: #E6A270; */
        font-weight: bold;
    }

</style>