<script setup>

    const props = defineProps(['games', 'index']);
    // console.log('the game', props.games);

</script>


<template>
    
    <div class="collection">

        <table>
    
            <thead>
        
                <th>Image</th>
                <th>Name</th>
                <th>Release Date</th>
                <th>Console(s)</th>
                <th>Rating</th>
                <th>Players</th>
                <th>Description</th>
        
            </thead>
        
            <tbody>
        
                <tr class="gameSelection" 
                   :class="{gameSelection: true, odd: index % 2 !== 0,
                                     rating: games.rating === '10/10'}">
                    <td class="gameImage"><img v-bind:src="games.image" v-bind:alt="games.name"></td>
                    <td class="gameName">{{games.name}}</td>
                    <td class="gameRelease">{{games.released}}</td>
                    <td class="gameConsole">{{games.console}}</td>
                    <td class="gameRating">{{games.rating}}</td>
                    <td class="gamePlayers">{{games.players}}</td>
                    <td class="gameDescription">{{games.description}}</td>
                    <td><button type="button" v-on:click="$emit('deleteGame', games)">Delete</button></td>
                </tr>
        
            </tbody>
    
      </table>

    </div>

</template>