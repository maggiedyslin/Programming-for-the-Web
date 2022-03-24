<script setup>

    const props = defineProps(["animal"]);
    // console.log(props.animal);

    const triggerConsole = (animal) => {
        console.log("you clicked on", animal.name);
    }

</script>

<template>

    <div class="animal-row">

        <h5>{{props.animal.name}}</h5>
        <img :src="props.animal.image" :alt="props.animal.caption" />
        <p>{{props.animal.caption}}</p>
        <button type="button" v-on:click="$emit('deleteRow', props.animal)">Delete</button>

    </div>

</template>

<style scoped>

    h5 {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 25px;
    margin: 0 0 15px;
    padding: 15px 0 5px;
    border-bottom: 1px solid black;
    }

    .animal-row {
    background-color: cadetblue;
    font-family:'Courier New', Courier, monospace;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    }

    .animal-row img {
    max-width: 450px;
    display: block;
    margin: 0 auto;
    }

</style>