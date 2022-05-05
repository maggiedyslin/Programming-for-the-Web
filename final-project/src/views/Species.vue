<script>

    import SpeciesList from "../data/shark-species.json";
    import ItemRow from "../components/ItemRow.vue";
    console.log("species list", SpeciesList);

</script>


<template>

    <div class="container">

        <h1>Species</h1>

        <p>* This list varies. There are a number of sharks that are threatened by shark finning; these are just a few.</p>

        <table>

            <thead>

                <tr>
                    <th>Image</th>
                    <th>Species</th>
                    <th>Scientific Name</th>
                    <th>Size</th>
                    <th>Endangerment Level</th>
                    <th>Description</th>
                </tr>

            </thead>

            <tbody class="species-list">

                <ItemRow v-for="(sharks, index) in SpeciesList" :key="index" :shark="sharks"
                    :index="index" />

            </tbody>

        </table>

    </div>

</template>