import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { PokemonClient, type Pokemon, type PokemonColor } from "pokenode-ts";

export const usePokemonStore = defineStore("pokemon", () => {
  const api = new PokemonClient();

  // state
  const pokemon = ref<Pokemon>();
  const pokemonNameToSearch = ref<string>();

  // getter
  const pokemonName = computed(() => {
    return pokemon.value?.name;
  });
  // actions
  const getPokemon = async () => {
    console.log()
    pokemonNameToSearch.value &&
      (await api
        .getPokemonByName(pokemonNameToSearch.value)
        .then((res: Pokemon) => {
          pokemon.value = res;
        })
        .catch((err) => {
          console.log(err);
        }));
  };

  const setPokemonNameToSearch = (name: string) => {
    pokemonNameToSearch.value = name;
  };

  return {
    getPokemon,
    setPokemonNameToSearch,
    pokemonName,
  };
});
