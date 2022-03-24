<script setup>
import CamelidRow from "../src/components/CamelidRow.vue";

const camelids = [
  {
    commonName: "Llama",
    binomialName: "Llama glama",
    order: "Artiodactyla",
    family: "Camelidae",
    genus: "Llama",
    species: "L. glama",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Llamas%2C_Vernagt-Stausee%2C_Italy.jpg"
  },
  {
    commonName: "Alpaca",
    binomialName: "Vicugna pacos",
    order: "Artiodactyla",
    family: "Camelidae",
    genus: "Vicugna",
    species: "V. pacos",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Alpaca_headshot.jpg"
  },
]

</script>

<template>
  <div>

    <h1>My Camelids Page</h1>

    <div class="container">
    
      <CamelidRow v-for="critter in camelids" :key="critter.commonName" v-bind:animal="critter"/>

    </div>



  </div>
</template>

<style>
body {
  background-color: beige;
}

.container {
  display: flex;
  flex-direction: row;
}

h1 {
  font-weight: bolder;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 50px;
}

h1 img {
  max-width: 45px;
  display: inline-block;
}

h3 {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 25px;
  text-transform: uppercase;
  border-bottom: 1px solid black;
  margin: 0;
}

p {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

</style>
