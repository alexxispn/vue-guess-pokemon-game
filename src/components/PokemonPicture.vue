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
  width: clamp(80%, 100%, max(50vh, 50vw));
  max-width: content-box;
}

.blue {
  grid-area: picture;
  filter: brightness(80%);
  width: clamp(80%, 100%, max(45vh, 45rem));
}

.pokemon {
  grid-area: picture;
  width: 40%;
  z-index: 1;
}

.hidden-pokemon {
  filter: brightness(0);
}


</style>
