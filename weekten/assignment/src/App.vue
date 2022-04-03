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

</style>
