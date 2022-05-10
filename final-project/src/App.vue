<script setup>
  
  import { RouterView, RouterLink } from "vue-router";

</script>

<template>

    <div class="container">

        <nav>

            <img src="/assets/deep-blue-logo.svg" alt="Deep Blue Logo">

            <ul>
                <li><RouterLink to="/">Home</RouterLink></li>
                <li><RouterLink to="">About</RouterLink>
                    <ul class="dropdown">
                        <li><RouterLink to="/blue">Blue</RouterLink></li>
                        <li><RouterLink to="/shirts">Shirts</RouterLink></li>
                    </ul>
                </li>
                <li><RouterLink to="/species">Species</RouterLink></li>
                <li><RouterLink to="/information">Info</RouterLink></li>
            </ul>

        </nav>

        <RouterView />

        <footer>

            &copy;Maggie Dyslin * Spring 2022 * Programming for the Web - MCAD

        </footer>

    </div>

</template>

<style>

    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300&display=swap');

    /* general */

    body {
        background-color: #7A98B0;
        padding: 0;
        margin: 0;
        font-family: 'Lato', sans-serif;
        color: white;
        font-weight: 400;
        font-size: 14px;
    }

    .container {
        background-color: #325C7E;
        max-width: 1100px;
        width: 100%;
        margin: 0 auto;
    }

    p {
        padding: 0 8px;
    }

    /* navigation */

    nav {
        background-color: #7A98B0;
        font-family: 'Bebas Neue';
        font-size: 40px;
        display: block;
        padding: 10px 0 0;
        margin: 0;
    }

    nav img {
        display: block;
        max-width: 20%;
        margin: 0 auto;
        padding: 15px 0;
    }

    nav ul {
        background-color: #B4E5E0;
        list-style-type: none;
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 0;
        margin: 0;
    }

    nav ul a {
        color: #325C7E;
        text-align: center;
        text-decoration: none;
        padding: 5px 90px 0;
        letter-spacing: 1px;
        display: block;

    }

    nav ul ul li a {
        padding: 2px 87px;
    }

    nav ul li a:hover {
        color: white;
        background-color: #325C7E;
        letter-spacing: 1px;
    }

    nav ul ul {
        position: absolute;
        display: none;
        padding: 0;
    }

    nav ul li:hover > ul {
        display: block;
        padding: 0;
    }

    /* regular lists */

    ul {
        list-style-type: square;
    }

    /* footer */

    footer {
        background-color: #325C7E;
        border-top: 2px solid #B27C7B;
        color: white;
        font-weight: 300;
        text-align: center;
        width: 100%;
        max-width: 1100px;
        margin: 0 auto;
        padding: 8px;
    }

    /* heading */

    h1 {
        color: #E88F7A;
        font-family: 'Bebas Neue', sans-serif;
        font-size: 40px;
        text-transform: uppercase;
        border-bottom: 1px solid;
        padding: 0 8px;
    }

    h2 {
        color: #B27C7B;
        font-size: 20px;
        text-transform: uppercase;
        padding: 0 8px;
    }

    h3 {
        color: #B4E5E0;
        font-size: 15px;
        text-transform: uppercase;
        padding: 0 8px;
    }

    /* imgs */

    img {
        max-width: 100%;
    }

    /* Links */

    a {
        text-decoration: none;
        color: #B4E5E0;
        font-weight: 300;
    }

    a:hover {
        letter-spacing: 2px;
        color: #325C7E;
        background-color: #B4E5E0;
        font-weight: 400;
    }

</style>