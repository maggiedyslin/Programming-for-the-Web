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
        
                <!-- loops for each item in our array, the v-for="games in gameCollection" -->
                <!-- the first argument (games) can be named anything, as long as it matches what you are using (games -> {{games.names}}), even if it is wrapped in parenthesis (seen below); first thing is the 'item' in the array -->
                <!-- second argument (index) is what refers to the index number of array, this can also be named whatever you want it to be named -->
                <tr class="gameSelection" 
                   :class="{gameSelection: true, odd: index % 2 !== 0,
                                     rating: games.rating === '10/10'}">
                    <td class="gameImage"><img v-bind:src="games.image" v-bind:alt="games.name"></td>
                    <td class="gameName">{{games.name}}</td>
                    <td class="gameRelease">{{games.released}}</td>
                    <td>{{games.console}}</td>
                    <td>{{games.rating}}</td>
                    <td>{{games.players}}</td>
                    <td class="gameDescription">{{games.description}}</td>
                    <td><button type="button" v-on:click="$emit('deleteGame', games)">Delete</button></td>
                </tr>
        
            </tbody>
    
      </table>

    </div>

</template>

<style scoped>

.collection table {
    border-collapse: collapse;
    background-color: #A4E384;
}

.collection thead {
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    padding: 5px 8px;
    color: rgb(240, 240, 240);
    position: sticky;
    top: 0;
    background-color: #F57784;
    border: none;
}

.collection th, .collection tbody, .collection tr, .collection td {
    text-align: center;
    padding: 5px 8px;
    border: 1px solid black;
}

/* table */

.gameDescription {
  text-align: "left";
  width: "30%";
}

.gameImage {
  width: "25%";
  padding: "5px";
}

.gameName {
  width: "10%";
}

.gameRelease {
  width: "11%";
}

</style>