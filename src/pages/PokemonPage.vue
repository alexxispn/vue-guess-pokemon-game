<template>
  <div class="container">
    <h1 class="title">¿Cuál es ese Pokémon?</h1>
    <template v-if="pokemon">
      <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
      <PokemonOptions v-if="!showAnswer" :pokemons="pokemonArray" @selectedPokemon="checkAnswer"/>
      <div v-else class="message fade-in">
        <h2 class="message__title">{{ message }}</h2>
        <button @click="newGame">
          Volver a jugar
        </button>
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

.title {
  width: 90%;
  align-self: end;
}

.container {
  display: grid;
  grid-template-rows: clamp(9rem, 10%, 14rem) 1fr 16rem;
  place-items: center;
  gap: 0.5rem;
  min-height: 100vh;
}

.message {
  width:80%;
  display: flex;
  flex-direction: column;
  place-items: center;
  gap: 1rem;
}

.message__title {
  width: 100%;
}

pokemon-picture{
  width: fit-content;
}

@media screen and (min-width: 1024px) {
  .container {
    grid-template-rows: 1fr 7fr;
    grid-template-columns: 1.7fr 1fr;
    grid-template-areas:
      "title title"
      "picture options";
  }
  .title {
    grid-area: title;
    width: 100%;
  }
  pokemon-picture {
    grid-area: picture;
  }
  pokemon-options {
    grid-area: options;
  }
  .message {
    grid-area: options;
  }
}

</style>
