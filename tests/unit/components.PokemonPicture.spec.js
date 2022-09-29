import PokemonPicture from "@/components/PokemonPicture";
import {shallowMount} from "@vue/test-utils";

describe('PokemonPicture', () => {
    let wrapper = shallowMount(PokemonPicture, {
        props: {
            pokemonId: 100,
            showPokemon: false
        }
    })
    it('should match with snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })
    it('should show only 2 images, the second with class hidden, when showPokemon:false', () => {
        const [img1, img2, img3] = wrapper.findAll('img')
        expect(img1.exists()).toBeTruthy()
        expect(img2.exists()).toBeTruthy()
        expect(img3).toBe(undefined)
        expect(img2.classes('hidden-pokemon')).toBeTruthy()
    })
    it('should show the pokemon image if showPokemon;true', () => {
        wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 100,
                showPokemon: true
            }
        })
        const [, img2] = wrapper.findAll('img')
        expect(img2.classes('hidden-pokemon')).toBeFalsy()
    })
})
