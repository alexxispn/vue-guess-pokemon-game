<template>
  <div class="container">
    <h1 v-if="!pokemon">Espere por favor...</h1>
    <template v-else>
      <h1>¿Cuál es ese Pokémon?</h1>
      <div class="body">
        <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
        <PokemonOptions v-if="!showAnswer" :pokemons="pokemonArray" @selectedPokemon="checkAnswer"/>
        <div v-else class="pokemon-answer">
          <h2 class="fade-in">{{ message }}</h2>
          <button @click="newGame">
            Volver a jugar
          </button>
        </div>
      </div>
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
  color: #FFCB05;
  font-size: 2rem;
  margin: 0;
  text-align: center;
}

h2 {
  font-family: 'Pokemon', sans-serif;
  -webkit-text-stroke: 2px #385AA7;
  letter-spacing: 0.2rem;
  color: #FFCB05;
  font-size: 1.5rem;
}

.container {
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 4fr;
  place-items: center;
}

.body {
  display: grid;
  height: 100%;
}

button {
  width: 15rem;
  padding: 0.5rem 0;
  font-weight: 600;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 1.2rem;
}

@media screen and (min-width: 768px) {
  h1 {
    font-size: 3rem;
    padding-top: 3rem;
  }

  h2 {
    font-size: 2.5rem;
  }

  button {
    width: 22rem;
    font-size: 1.6rem;
  }

  button:hover {
    background-color: #eeeaea;
  }
}

@media screen and (min-width: 1024px) {
  .body {
    grid-auto-flow: column;
    grid-template-columns: 1.5fr 1fr;
    width: 100%;
    align-items: center;
  }
  .pokemon-answer{
    display: flex;
    flex-direction: column;
    justify-content: left;
    width: 30rem;
    text-align: left;
  }
}

</style>
