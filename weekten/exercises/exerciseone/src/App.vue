<script setup>

  import {RouterLink, RouterView} from 'vue-router';

</script>

<template>

  <div class="container">

  <nav>
    <RouterLink to="/">Home</RouterLink> | 
    <RouterLink to="/alpaca">Alpaca</RouterLink> |
    <RouterLink to="/llama">Llama</RouterLink>
    <!-- should match what is in your index.js file - the path name matches the to="" name -->
  </nav>

    <RouterView></RouterView>
    
  </div>
 
</template>

<style>

body {
  background-color: azure;
}

.container {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
}

.container img {
  display: block;
  max-width: 80%;
}

nav {
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
  font-size: 20px;
}

nav a {
  text-decoration: none;
  font-weight: bold;
  color: coral;
}

nav a:hover {
  font-weight: normal;
  color: cornflowerblue;
  text-decoration: underline;
}

h1 {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 25px;
  border-bottom: 3px solid cornflowerblue;
}

h3 {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 15px;
}

a {
  font-weight: normal;
  text-decoration: none;
  color: cadetblue;
}

a:hover {
  color: black;
  text-decoration: none;
}

</style>
