import pokemonApi from "@/api/pokemonApi";

export const getPokemons = () => {
    const pokemonsArray = Array.from(Array(649))
    return pokemonsArray.map((_, index) => index + 1)
}

export const getPokemonsNames = async ([a, b, c, d] = []) => {
    const promiseArray = [
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`)
    ]

    const [p1, p2, p3, p4] = await Promise.all(promiseArray)
    return [
        {name: p1.data.name.charAt(0).toUpperCase() + p1.data.name.slice(1), id: p1.data.id},
        {name: p2.data.name.charAt(0).toUpperCase() + p2.data.name.slice(1), id: p2.data.id},
        {name: p3.data.name.charAt(0).toUpperCase() + p3.data.name.slice(1), id: p3.data.id},
        {name: p4.data.name.charAt(0).toUpperCase() + p4.data.name.slice(1), id: p4.data.id}
    ]
}

const getPokemonsOptions = async () => {
    const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5)
    const pokemons = await getPokemonsNames(mixedPokemons.splice(0, 4))
    return pokemons
}

export default getPokemonsOptions
