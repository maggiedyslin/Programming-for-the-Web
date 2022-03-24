<script setup>

  const isWorking = true;

</script>

<template>

<div class="container">

  <h1>My second compiled Vue App</h1>
    
    <div v-if="isWorking">

      <p>it is working</p>

    </div>

</div>

</template>

<style>

.container {
  width: 600px;
  margin: 20px auto 0;
  text-align: center;
  font-size: 18px;
}

h1 {
  font-size: 40px;
}

</style>
