<script setup>
const props = defineProps(["animal"]);
console.log(props.animal);
</script>


<template>
<div>
    <h3>{{props.animal.commonName}}</h3>
    <p>Binomial Name: {{props.animal.binomialName}}</p>
    <p>Family: {{props.animal.family}}</p>
    <p>Genus: {{props.animal.genus}}</p>
    <p>Species: {{props.animal.species}}</p>
     <img :src="props.animal.image" :alt="props.animal.commonName" />
</div>

</template>

<style scoped> 

div {
    width: 500px;
    border: 2px dashed black;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
}

img {
    max-width: 400px;
    display: block;
}

</style>