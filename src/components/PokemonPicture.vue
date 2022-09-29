<template>
  <div class="pokemon-img">
    <img src="../assets/img/blue.svg" class="blue fade-in" alt="background blue" width="300"/>
    <img v-if="!showPokemon" :src="imageUrl" class="pokemon hidden-pokemon" alt="pokemon">
    <img v-else :src="imageUrl" class="pokemon fade-in" alt="pokemon">
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

.pokemon-img{
  display: grid;
  grid-template-areas: "picture";
  place-items: center;
}

.blue {
  grid-area: picture;
  width: clamp(min(30vh, 30vw), 90%, max(50vh, 40vw));
  filter: brightness(80%);
}

.pokemon {
  grid-area: picture;
  width: clamp(min(20vh, 20vw), 50%, max(30vh, 25vw));
  z-index: 1;
}

.hidden-pokemon {
  filter: brightness(0);
}


</style>
