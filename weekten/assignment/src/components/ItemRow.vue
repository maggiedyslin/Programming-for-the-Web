<script setup>


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
        
                <tr class="gameSelection">
                    <td class="gameImage"><img v-bind:src="games.image" v-bind:alt="games.name"></td>
                    <td class="gameName">{{games.name}}</td>
                    <td class="gameRelease">{{games.released}}</td>
                    <td class="gameConsole">{{games.console}}</td>
                    <td class="gameRating">{{games.rating}}</td>
                    <td class="gamePlayers">{{games.players}}</td>
                    <td class="gameDescription">{{games.description}}</td>
                </tr>
        
            </tbody>
    
      </table>

    </div>

</template>