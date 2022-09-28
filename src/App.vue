<template>
  <PokemonPage/>
</template>

<script>

import PokemonPage from "@/pages/PokemonPage";

export default {
  name: 'App',
  components: {
    PokemonPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: linear-gradient(to right top, #ff641a, #ff5d19, #ff5719, #ff4f1a, #ff471a, #ff4119, #ff3a17, #ff3216, #ff2b12, #ff230e, #ff180a, #ff0705);
  height: 100vh;
}
</style>
