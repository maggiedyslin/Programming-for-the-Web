<script setup>
import {RouterLink} from "vue-router";

</script>

<template>

    <nav>

        <RouterLink to="/">Home</RouterLink> | <RouterLink to="/collection">Collection</RouterLink>

    </nav>

</template>

<style scoped>

    nav {
        width: 100%;
        background-color: #70B1F8;
        margin: 0 auto;
        padding: 20px 0;
        text-align: center;
        font-size: 40px;
        border: 1px solid black;
        border-radius: 5px;
    }

    nav a {
        text-decoration: none;
        font-family: 'Courier New', Courier, monospace;
    }

    nav a:hover {
        text-transform: uppercase;

    }

</style>