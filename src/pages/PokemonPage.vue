<template>
  <h1>¿Quién es este Pokémon?</h1>
  <PokemonPicture :pokemonId="151" :showPokemon="false"/>
  <PokemonOptions/>
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture";
import PokemonOptions from "@/components/PokemonOptions";
import GetPokemonOptions from "@/helpers/getPokemonOptions";

console.log(GetPokemonOptions)

export default {
  name: "PokemonPage",
  components: {PokemonOptions, PokemonPicture}
}
</script>

<style scoped>
h1{
  margin: 0;
}

</style>
