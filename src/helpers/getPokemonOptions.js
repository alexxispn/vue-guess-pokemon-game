const getPokemons = () => {
    const pokemonsArray = Array.from(Array(649))
    return pokemonsArray.map((_, index) => index + 1)
}

const getPokemonsOptions = () => {
    const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5)
    getPokemonsNames(mixedPokemons.splice(0, 4))
}

const getPokemonsNames = ([a, b, c, d] = []) => {
    console.log( a, b, c, d)
}

export default getPokemonsOptions()
