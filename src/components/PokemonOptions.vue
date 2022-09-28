<template>
  <div class="options-container">
    <ul>
      <li v-for="pokemon in pokemons"
          :key="pokemon.id"
          @click="$emit('selectedPokemon', pokemon.id)">
          {{ pokemon.name }}
      </li>
    </ul>
  </div>
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
ul {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 0;
}

li {
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 15rem;
  padding: 0.5rem 0;
  font-weight: 600;
  cursor: default;
  font-size: 1.2rem;
}

.options-container {
  display: flex;
  justify-content: center;
}

@media screen and (min-width: 768px) {
  li {
    width: 22rem;
    font-size: 1.6rem;
  }
  li:hover {
    background-color: #eeeaea;
  }
}
</style>
