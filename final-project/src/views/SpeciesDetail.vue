<script setup>

    import SpeciesList from "../data/shark-species.json";
    import {useRoute} from "vue-router";

    const route = useRoute();
    const paramId = route.params.id * 1;
    console.log('the id is', paramId);

    const shark = SpeciesList.find(shark => {
        return shark.id === paramId;
    })

</script>

<template>

    <div class="container">

        <img :src="shark.image" :alt="shark.species" />

        <h1>The {{shark.species}}</h1>

            <p class="species">
                <strong>Scientific Name:</strong> {{shark.scientific}}
            </p>

            <p>
                <strong>Other Names:</strong> {{shark.otherName}}
            </p>

        <h3>Sizes</h3>
            <p class="size">
                <strong>Females</strong> {{shark.female}}<br>
                <strong>Males</strong> {{shark.male}}<br>
                <strong>Weight</strong> {{shark.weight}}
            </p>

            <p class="endangerment">
                <strong>Endangerment Level:</strong> {{shark.endangerment}}
            </p>
                
        <h3>Shark Description</h3>
            <p class="description">
                {{shark.description}}
            </p>

    </div>

</template>

<style scoped>

    img {
        display: block;
        margin: 0 auto;
    }

</style>