<script setup>

    import GamesCollection from "../data/game.json";
    import ItemRow from "../components/ItemRow.vue";
    console.log(GamesCollection);

</script>

<template>

    <div id="top">

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
        
            <tbody class="my-collection">

                <ItemRow v-for="(games, index) in GamesCollection" :key="index" :game="games" />
        
            </tbody>
    
      </table>

      <a href="#top" class="top">Back to Top</a>
        
    </div>
    
</template>

<style scoped>

    table {
        border-collapse: collapse;
        background-color: #A4E384;
    }

    thead {
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

    th, tbody {
        text-align: center;
        padding: 5px 8px;
        border: 1px solid black;
    }

    .odd {
        background-color: #70B1F8;
    }

    .rating {
        /* background-color: #E6A270; */
        font-weight: bold;
    }

    /* links */

    a.top {
        text-transform: uppercase;
        text-decoration: none;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: #115503;
    }

    a:hover.top {
        text-transform: lowercase;
        text-decoration: none;
        background-color: #115503;
        color: white;
    }

</style>