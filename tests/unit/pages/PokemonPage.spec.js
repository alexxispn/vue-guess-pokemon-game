import PokemonPage from "@/pages/PokemonPage";
import {shallowMount} from "@vue/test-utils";
import {PokemonsMock} from "../mocks/pokemons.mock";

describe("PokemonPage", () => {
    describe("before mount", () => {
        it("should call mixPokemonArray when mounted", () => {
            const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray')
            shallowMount(PokemonPage)
            expect(mixPokemonArraySpy).toHaveBeenCalled()
        })
    })
    describe(" after mount", () => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArray: PokemonsMock,
                    pokemon: PokemonsMock[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })
        const PokemonPicture = wrapper.find('pokemon-picture-stub')
        const PokemonOptions = wrapper.find("pokemon-options-stub")
        it('should match with snapshot after pokemons are loaded', () => {
            expect(wrapper.html()).toMatchSnapshot()
        })
        it("should render PokemonPicture & PokemonOptions components", () => {
            expect(PokemonPicture.exists).toBeTruthy()
            expect(PokemonOptions.exists).toBeTruthy()
        })
        it('should be pokemonId 1 in PokemonPicture', () => {
            expect(PokemonPicture.attributes('pokemonid')).toBe('1')
        })
        describe('checkAnswer', () => {
            it('should return correct message if the answer is correct', async () => {
                await wrapper.vm.checkAnswer(1)
                const h2 = wrapper.find('h2')
                expect(h2.exists).toBeTruthy()
                expect(wrapper.vm.showPokemon).toBeTruthy()
                expect(h2.text()).toBe(`¡Correcto! Es ${PokemonsMock[0].name}`)
            })
            it('should return error message if the answer is not correct', async () => {
                await wrapper.vm.checkAnswer(2)
                const h2 = wrapper.find('h2')
                expect(h2.exists).toBeTruthy()
                expect(h2.text()).toBe(`¡Oops! Es ${PokemonsMock[0].name}`)
            })
        })
    })
})
