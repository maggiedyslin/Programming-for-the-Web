<script setup>
import {RouterView} from "vue-router";
import NavigationBar from "./components/NavigationBar.vue";


</script>

<template>

<div class="container">

  <NavigationBar /> 

  <RouterView />

</div>



</template>

<style>

    .container {
        margin: 0 auto;
        display: block;
        max-width: 80%;
    }

    body {
      font-size: 13px;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      background-color: rgb(187, 187, 187);
  }

  a {
    color: black;
  }

  a:hover {
    color: white;;
  }

</style>
