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
@font-face {
  font-family: "Pokemon";
  src: local("Pokemon"),
  url(./assets/fonts/Pokemon.ttf) format("truetype");
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: linear-gradient(to right top, #ff641a, #ff441a, #d03816, #c22712, #b9210c, #af1b07, #a61103);
  min-height: 100vh;
}

</style>
