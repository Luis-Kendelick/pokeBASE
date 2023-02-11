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

  const pokemonHeight = computed(() => {
    return (
      (pokemon.value?.height &&
        (pokemon.value?.height * 10).toFixed(1) + " cm") ||
      "... cm"
    );
  });

  const pokemonWeight = computed(() => {
    return (
      (pokemon.value?.weight &&
        (pokemon.value?.weight / 10).toFixed(1) + " kg") ||
      "... kg"
    );
  });

  const pokemonTypes = computed(() => {
    return pokemon.value?.types;
  });

  const pokemonAbilities = computed(() => {
    return pokemon.value?.abilities;
  });

  const pokemonStats = computed(() => {
    return pokemon.value?.stats;
  });

  const pokemonSprites = computed(() => {
    return pokemon.value?.sprites;
  });

  const pokemonGameIndex = computed(() => {
    return pokemon.value?.game_indices;
  });

  const pokemonNationalId = computed(() => {
    return pokemon.value?.id;
  });

  // actions
  const getPokemon = async () => {
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
    pokemonHeight,
    pokemonWeight,
    pokemonTypes,
    pokemonAbilities,
    pokemonStats,
    pokemonSprites,
    pokemonGameIndex,
    pokemonNationalId,
    pokemonNameToSearch,
  };
});
