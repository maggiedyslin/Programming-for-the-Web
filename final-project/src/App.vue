<script setup>
  
  import { RouterView, RouterLink } from "vue-router";


</script>

<template>

    <div class="container">

            <nav>

                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/blue">Blue</RouterLink>
                <RouterLink to="/shirts">Shirts</RouterLink>
                <RouterLink to="/species">Species</RouterLink>
                <RouterLink to="/information">Information</RouterLink>

            </nav>

        <main>

            <RouterView />

        </main>

    </div>

</template>

<style>

    .container {
        width: 100%;
    }

    nav {
        padding: 20px;
        /* margin-top: 20px; */
        top: 100px;
        background-color: #B4E5E0;
    }

    body {
        background-color: #7A98B0;
    }

    main {
        background-color: #325C7E;
        width: 1000px;
        margin: 0 auto;
    }

</style>