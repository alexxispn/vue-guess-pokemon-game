import pokemonApi from "@/api/pokemonApi";
describe("pokemonApi", () => {
    it("should have a baseURL", () => {
        expect(pokemonApi.defaults.baseURL).toBe("https://pokeapi.co/api/v2/pokemon");
    });
});
