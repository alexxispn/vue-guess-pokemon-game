<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else class="body">
    <h1>¿Cuál es ese Pokémon?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
    <PokemonOptions v-if="!showAnswer" :pokemons="pokemonArray" @selectedPokemon="checkAnswer"/>
    <template v-else>
      <h2 class="fade-in">{{ message }}</h2>
      <button @click="newGame">
        Nuevo Juego
      </button>
    </template>
  </div>
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture";
import PokemonOptions from "@/components/PokemonOptions";
import getPokemonOptions from "@/helpers/getPokemonOptions";

export default {
  name: "PokemonPage",
  components: {PokemonOptions, PokemonPicture},
  data() {
    return {
      pokemonArray: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: ''
    }
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArray = await getPokemonOptions()
      const randomNumberFromOneToFour = () => Math.floor(Math.random() * 4)
      this.pokemon = this.pokemonArray[randomNumberFromOneToFour()]
    },
    checkAnswer(selectedId) {
      this.showPokemon = true
      this.showAnswer = true
      if (selectedId === this.pokemon.id) {
        this.message = `¡Correcto! Es ${this.pokemon.name}`
      } else {
        this.message = `¡Oops! Es ${this.pokemon.name}`
      }
    },
    newGame() {
      this.pokemonArray = []
      this.showPokemon = false
      this.showAnswer = false
      this.pokemon = null
      this.mixPokemonArray()
    }
  },
  mounted() {
    this.mixPokemonArray()
  }
}
</script>

<style scoped>
h1 {
  font-family: 'Pokemon', sans-serif;
  -webkit-text-stroke: 2px #385AA7;
  letter-spacing: 0.2rem;
  margin: 0;
  padding-top: 2rem;
  color: #FFCB05;
  border: blue;
  font-size: 2.2rem;
}

.body {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 95vh;
  gap: 2rem;
}

@media screen and (min-width: 768px) {
  h1 {
    font-size: 3rem;
    padding-top: 3rem;
  }
}

</style>
