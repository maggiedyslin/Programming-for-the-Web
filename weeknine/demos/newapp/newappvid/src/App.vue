<script setup>

  import AnimalRow from '/src/components/AnimalRow.vue';

  const isWorking = true;
  const animals = [
    {
      name: "Cat",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Cat_poster_1.jpg/2880px-Cat_poster_1.jpg",
      caption: "C is for Cat",
      id: 0
    },
    {
      name: "Dog",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Huskiesatrest.jpg/2880px-Huskiesatrest.jpg",
      caption: "D is for Dog",
      id: 1
    },
    {
      name: "Hamster",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/de/Pearl_Winter_White_Russian_Dwarf_Hamster_-_Front.jpg",
      caption: "H is for Hamster",
      id: 2
    },
    {
      name: "Shark",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/24/TDpGUipa.jpg",
      caption: "S is for Shark",
      id: 3
    },
    {
      name: "Wolf",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Kolm%C3%A5rden_Wolf.jpg",
      caption: "W is for Wolf",
      id: 4
    }
  ]

</script>

<template>

<div class="container">

  <h1>Animal *sort of* Alphabet</h1>
    
  <AnimalRow v-for="animal in animals" :key="animal.id" :animal="animal" />

</div>

</template>

<style>

    body {
    background-color: darkgrey;
    }

    h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 40px;
    text-align: center;
    }

    .container {
    width: 600px;
    margin: 20px auto 0;
    font-size: 18px;
    }

</style>
