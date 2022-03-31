<script setup>

    import {useRoute} from 'vue-router';
    import MusicList from "../data/music-list.json";

    const route = useRoute();
    console.log(route.params);
    const song = MusicList.find(song => {
        return song.slug === route.params.slug;
    })

</script>


<template>
    
    <div class="song-detail" :class="{
         rising: song.rank > song.position.positionLastWeek,
         falling: song.rank < song.position.positionLastWeek,
         same: song.rank === song.position.positionLastWeek}">

        <h1>Billboard Rank: #{{song.rank}}</h1>
        <h2>Song name: {{song.title}}</h2>
        <img :src="song.cover" :alt="song.title">
        <p>Artist: {{song.artist}}</p>

    </div>

</template>

<style scoped>

    .song-detail {
        max-width: 1000px;
        width: 100%;
        margin: 0 auto;
    }

    .song-detail.rising {
        border: 1px solid green;
    }

    .song-detail.falling {
        border: 1px solid red;
    }

    .song-detail.same {
        border: 1px solid orange;
    }

    h1 {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

    h2 {
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    p {
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

</style>