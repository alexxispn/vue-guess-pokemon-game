import PokemonPicture from "@/components/PokemonPicture";
import {shallowMount} from "@vue/test-utils";

describe('PokemonPicture', () => {
    describe('when showPokemon:false', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 100,
                showPokemon: false
            }
        })
        it('should match with snapshot', () => {
            expect(wrapper.html()).toMatchSnapshot()
        })
        it('should return only 2 images, img2 with class hidden', () => {
            const [img1, img2, img3] = wrapper.findAll('img')
            expect(img1.exists()).toBeTruthy()
            expect(img2.exists()).toBeTruthy()
            expect(img3).toBe(undefined)
            expect(img2.classes('hidden-pokemon')).toBeTruthy()
        })
        it('should return imageUrl ended in 100.svg', () => {
            const [, img2] = wrapper.findAll('img')
            expect(img2.attributes('src')).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg')
        })
    })
    describe('when showPokemon:true', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 100,
                showPokemon: true
            }
        })
        it('should return the second image without class hidden', () => {
            const [, img2] = wrapper.findAll('img')
            expect(img2.classes('hidden-pokemon')).toBeFalsy()
        })
    })
})
