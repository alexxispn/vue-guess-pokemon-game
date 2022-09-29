import getPokemonsOptions, {getPokemons, getPokemonsNames} from "@/helpers/getPokemonOptions";
import {PokemonsMock} from "../mocks/pokemons.mock";

describe(getPokemonsOptions, () => {
    describe('getPokemons', () => {
        const pokemons = getPokemons()
        it('should return an array with 649 pokemons', () => {
            expect(pokemons.length).toBe(649)
        })
        it('should be 1 the first position of the array', () => {
            expect(pokemons[0]).toBe(1)
        })
        it('should be 649 the last position of the array', () => {
            expect(pokemons[648]).toBe(649)
        })
    })
    describe('getPokemonsNames', () => {
        it(' should return an array with 4 elements', async () => {
            const pokemons = await getPokemonsNames([1, 2, 3, 4])
            expect(pokemons.length).toBe(4)
        })
        it(' should return 4 elements with name and id', async () => {
            const pokemons = await getPokemonsNames([1, 2, 3, 4])
            expect(pokemons).toStrictEqual(PokemonsMock)
        })
    })
    describe('getPokemonsOptions', () => {
        it(' should return an array with 4 elements', async () => {
            const pokemons = await getPokemonsOptions()
            expect(pokemons.length).toBe(4)
        })
        it(' should return 4 elements with name and id', async () => {
            const pokemons = await getPokemonsOptions()
            expect(pokemons).toStrictEqual([
                {
                    name: expect.any(String),
                    id: expect.any(Number)
                },
                {
                    name: expect.any(String),
                    id: expect.any(Number)
                },
                {
                    name: expect.any(String),
                    id: expect.any(Number)
                },
                {
                    name: expect.any(String),
                    id: expect.any(Number)
                }
            ])
        })
    })
})
