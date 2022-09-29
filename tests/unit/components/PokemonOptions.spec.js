import PokemonOptions from "@/components/PokemonOptions";
import {shallowMount} from "@vue/test-utils";
import {PokemonsMock} from "../mocks/pokemons.mock";

describe('PokemonOptions', () => {
    const wrapper = shallowMount(PokemonOptions, {
        props: {
            pokemons: PokemonsMock
        }
    })
    const li = wrapper.findAll('li')
    it('should match with snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })
    it('should return 4 li with the correct pokemon names', () => {
        expect(li.length).toBe(4)
        expect(li[0].text()).toBe('Bulbasaur')
        expect(li[1].text()).toBe('Ivysaur')
        expect(li[2].text()).toBe('Venusaur')
        expect(li[3].text()).toBe('Charmander')
    })
    it('should emit "selectedPokemon" with the pokemon.id when click on li',() => {
        li[0].trigger('click')
        li[1].trigger('click')
        li[2].trigger('click')
        li[3].trigger('click')
        expect(wrapper.emitted('selectedPokemon').length).toBe(4)
        expect(wrapper.emitted('selectedPokemon')[0]).toEqual([1])
        expect(wrapper.emitted('selectedPokemon')[1]).toEqual([2])
        expect(wrapper.emitted('selectedPokemon')[2]).toEqual([3])
        expect(wrapper.emitted('selectedPokemon')[3]).toEqual([4])
    })
    it('',() => {

    })
})
