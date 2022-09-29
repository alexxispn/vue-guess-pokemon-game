<template>
    <ul class="options">
      <li v-for="pokemon in pokemons"
          :key="pokemon.id"
          @click="$emit('selectedPokemon', pokemon.id)">
        {{ pokemon.name }}
      </li>
    </ul>
</template>

<script>
export default {
  name: "PokemonOptions",
  props: {
    pokemons: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.options {
  display: flex;
  flex-direction: column;
  place-items: center;
  list-style: none;
  gap: clamp(0.8rem, 2vw, 1.6rem);
  width: 80%;
}
</style>
