<script setup>

    const props = defineProps(['shark', 'index']);

    // console.log('the item, ', props.shark);

</script>

<template>
    
    <tr :class="{mySharkApp: true, odd: index % 2 !== 0,
                second: shark.endangerment === 'red',
                third: shark.endangerment === 'orange',
                fourth: shark.endangerment === 'yellow',
                fifth: shark.endangerment === 'green'}">

        <td class="image">
            <RouterLink :to="'/species/'+shark.id"><img :src="shark.image" :alt="shark.species"></RouterLink>
        </td>
        <td class="species">{{shark.species}}</td>
        <td class="endangerment">{{shark.endangerment}}</td>

    </tr>

</template>

<style scoped>

    .description {
        text-align: left;
    }

    .image:hover {
        background-color: none;
    }

</style>