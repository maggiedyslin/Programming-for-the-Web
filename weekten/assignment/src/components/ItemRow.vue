<script setup>

    const props = defineProps(["game", "index"])

</script>


<template>
    
    <div>

        <tr>
            <td class="gameImage"><img v-bind:src="game.image" v-bind:alt="game.name"></td>
            <td class="gameName">{{game.name}}</td>
            <td class="gameRelease">{{game.released}}</td>
            <td class="gameConsole">{{game.console}}</td>
            <td class="gameRating">{{game.rating}}</td>
            <td class="gamePlayers">{{game.players}}</td>
            <td class="gameDescription">{{game.description}}</td>
        </tr>

    </div>

</template>

<style scoped>

    img {
        /* width: 800px; */
        max-width: 100%;
    }

</style>