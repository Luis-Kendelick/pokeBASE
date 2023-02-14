<script setup lang="ts">
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import { usePokemonStore } from "@/stores/pokemon";

const pokeInfo = usePokemonStore();
</script>
<template>
  <div
    v-if="
      pokeInfo.pokemonSprites?.other?.dream_world?.front_default === undefined
    "
  >
    Procure um pokemon.
  </div>
  <div
    v-if="pokeInfo.pokemonSprites?.other?.dream_world?.front_default"
    class="pokemon-photo"
  >
    <img
      :src="pokeInfo.pokemonSprites.other.dream_world?.front_default"
      :alt="usePokemonStore().pokemonName + ' image'"
    />
  </div>
  <LoadingSpinner v-if="pokeInfo.pokemonIsLoading" />
</template>

<style scoped>
.pokemon-photo {
  /* margin-top: -20px; */
  width: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
