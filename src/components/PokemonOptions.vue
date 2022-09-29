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
  gap: 0.8rem;
  width: 80%;
}

@media screen and (min-width: 1024px) {
  .options {
    gap: 1.5rem;
  }
}
</style>
