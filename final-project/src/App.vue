<script setup>
  
  import { RouterView, RouterLink } from "vue-router";


</script>

<template>

    <div class="container">

            <nav>

                <img src="/src/assets/deep-blue-logo.svg" alt="Deep Blue Logo">

                <ul>
                    <li><RouterLink to="/">Home</RouterLink></li>
                    <li><RouterLink to="">About</RouterLink></li>
                    <li><RouterLink to="/blue">Blue</RouterLink></li>
                    <li><RouterLink to="/shirts">Shirts</RouterLink></li>
                    <li><RouterLink to="/species">Species</RouterLink></li>
                    <li><RouterLink to="/information">Information</RouterLink></li>
                </ul>

            </nav>

        <main>

            <RouterView />

        </main>

    </div>

</template>

<style>

    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

    body {
        padding: 0;
        margin: 0;
    }

    .container {
        max-width: 100%;
        margin: 0 auto;
    }

    nav {
        font-family: 'Bebas Neue';
        font-size: 50px;
        padding: 10px 0 0;
        top: 100px;
    }

    nav img {
        display: block;
        max-width: 20%;
        margin: 0 auto;
        padding: 15px 0;
    }

    nav ul, nav ul li {
        background-color: #B4E5E0;
        list-style-type: none;
        display: flex;
        flex-direction: row;
        margin: 0;
        padding: 0;
        justify-content: space-between;
    }

    nav ul li a {
        text-decoration: none;
        color: #325C7E;
        padding: 5px 25px 0;
    }

    nav ul li a:hover {
        color: #325C7E;
        background-color: white;
    }

    body {
        background-color: #7A98B0;
    }

    main {
        background-color: #325C7E;
        top: 0;
        width: 100%;
        max-width: 1100px;
        margin: 0 auto;
        padding: 0;
        border: 2px solid black;
    }

</style>