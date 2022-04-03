<script setup>

    import GamesCollection from "../data/game.json";
    import ItemRow from "../components/ItemRow.vue";
    console.log(GamesCollection);

</script>

<template>

    <div>
        
        <h1>Collection List</h1>

        <ItemRow v-for="(games, index) in GamesCollection" :key="index" :game="games" />
        
    </div>


    
</template>