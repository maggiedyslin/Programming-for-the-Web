<script>

    import {RouterLink} from "vue-router";
    // const props = defineProps(["shark", "index"]);

</script>

<template>
    
    <tr class="species-list">
        <!-- <td class="sharkImage">
            <RouterLink :to="'/collection/'+shark.id"><img v-bind:src="shark.image" v-bind:alt="shark.name"></RouterLink>
        </td> -->
        <td class="sharkName">{{shark.name}}</td>
        <td class="sharkSpecies">{{shark.species}}</td>
        <td class="sharkScientific">{{shark.Scientific}}</td>
        <td class="sharkSize">{{shark.Size}}</td>
        <td class="sharkEndangerment">{{shark.Endangerment}}</td>
        <td class="sharkDescription">{{shark.description}}</td>
    </tr>

</template>

<style scoped>



</style>