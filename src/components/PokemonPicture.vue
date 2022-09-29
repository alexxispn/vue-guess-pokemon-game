<template>
  <div class="pokemon-container">
    <img src="../assets/img/blue.svg" class="blue" alt="background blue">
    <img :src="imageUrl" class="hidden-pokemon pokemon" alt="pokemon">
    <img v-if="showPokemon" :src="imageUrl" class="fade-in pokemon" alt="pokemon">
  </div>
</template>

<script>
export default {
  name: "PokemonPicture",
  props: {
    pokemonId: {
      type: Number,
      required: true
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  computed: {
    imageUrl() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
    }
  }
}
</script>

<style scoped>

.pokemon-container {
  height: 40vh;
  display: grid;
  grid-auto-flow: column;
  grid-template-areas: "picture";
  justify-content: center;
  place-items: center;
}

.pokemon {
  grid-area: picture;
  height: 20vh;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  z-index: 2;
}

.blue {
  grid-area: picture;
  height: 40vh;
  filter: brightness(85%);
}

.hidden-pokemon {
  filter: brightness(0);
  z-index: 1;
}

@media screen and (min-width: 1024px) {
  .pokemon-container,
  .blue {
    height: 60vh;
  }

  .pokemon {
    height: 30vh;
  }
}

</style>
