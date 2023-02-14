import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { PokemonClient, type Pokemon, type PokemonColor } from "pokenode-ts";
import type { AxiosError } from "axios";

interface PokemonStore {
  pokemon: Pokemon | undefined;
  loading: boolean;
  error: AxiosError | undefined;
}

export const usePokemonStore = defineStore("pokemon", () => {
  const api = new PokemonClient();

  // state
  const pokemonState = ref<PokemonStore>({
    pokemon: undefined,
    loading: false,
    error: undefined,
  });
  const pokemonNameToSearch = ref<string>();

  // getter
  const pokemonName = computed(() => {
    return pokemonState.value.pokemon?.name;
  });

  const pokemonHeight = computed(() => {
    return (
      (pokemonState.value.pokemon?.height &&
        (pokemonState.value.pokemon?.height * 10).toFixed(1) + " cm") ||
      "... cm"
    );
  });

  const pokemonWeight = computed(() => {
    return (
      (pokemonState.value.pokemon?.weight &&
        (pokemonState.value.pokemon?.weight / 10).toFixed(1) + " kg") ||
      "... kg"
    );
  });

  const pokemonTypes = computed(() => {
    return pokemonState.value.pokemon?.types;
  });

  const pokemonAbilities = computed(() => {
    return pokemonState.value.pokemon?.abilities;
  });

  const pokemonStats = computed(() => {
    return pokemonState.value.pokemon?.stats;
  });

  const pokemonSprites = computed(() => {
    return pokemonState.value.pokemon?.sprites;
  });

  const pokemonGameIndex = computed(() => {
    return pokemonState.value.pokemon?.game_indices;
  });

  const pokemonNationalId = computed(() => {
    return pokemonState.value.pokemon?.id;
  });

  const pokemonIsLoading = computed(() => {
    return pokemonState.value.loading;
  });

  const pokemonHasError = computed(() => {
    return pokemonState.value.error;
  });

  // actions
  const getPokemon = async () => {
    pokemonNameToSearch.value &&
      (await api
        .getPokemonByName(pokemonNameToSearch.value)
        .then((res) => {
          pokemonState.value.loading = true;
          return res;
        })
        .then((res: Pokemon) => {
          pokemonState.value.pokemon = res;
          pokemonState.value.loading = false;
        })
        .catch((err) => {
          console.log(err);
          pokemonState.value.loading = false;
          pokemonState.value.error = err;
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
    pokemonIsLoading,
    pokemonHasError,
  };
});

  };
});
