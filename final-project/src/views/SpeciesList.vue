<script setup>

    import SpeciesList from "../data/shark-species.json";
    import ItemRow from "../components/ItemRow.vue";
    console.log(SpeciesList);

</script>


<template>

    <div class="container">

        <h1>Species</h1>

        <p>* This list varies. There are a number of sharks that are threatened by shark finning; these are just a few. Click on an image to get more information.</p>

        <table>

            <thead>

                <tr>
                    <th class="image">Image</th>
                    <th class="species">Species</th>
                    <th class="endangerment">Endangerment Level</th>
                </tr>

            </thead>

            <tbody class="mySharkApp">

                <ItemRow v-for="(sharks, index) in SpeciesList" 
                    :key="index"
                    :shark="sharks"
                    :index="index"
                />

            </tbody>

        </table>

    </div>

</template>

<style scoped>

    th, tbody, tr, td {
        text-align: center;
        padding: 5px 8px;
    }
        

    thead {
        background-color: #E88F7A;
        font-size: 25px;
        font-weight: bold;
        text-transform: uppercase;
        position: sticky;
        top: 0;
    }

    img {
        width: 50%;
    }

    .species {
        text-align: center;
        width: 25%;
    }

    .endangerment {
        width: 25%;
    }

</style>