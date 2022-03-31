<script setup>

  import {RouterView, RouterLink} from "vue-router";

</script>

<template>

  <div class="container">

    <nav>

      <RouterLink to="/">Home</RouterLink>

    </nav>

    <RouterView />

  </div>

</template>

<style scoped>

  nav {
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    padding: 10px 0;
    text-align: center;
    background-color: #000;
  }

  nav a {
    font-size: 30px;
    font-family: 'Courier New', Courier, monospace;
    color: aquamarine;
    text-decoration: none;
  }

  nav a:hover {
    text-transform: uppercase;
    font-weight: bold;
    color: #fff;
  }

</style>
