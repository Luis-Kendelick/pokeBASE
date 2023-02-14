<script setup lang="ts">
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import { usePokemonStore } from "@/stores/pokemon";
import type { PokemonSprites } from "pokenode-ts";
const props = defineProps<{
  pokeSprites: PokemonSprites | undefined;
}>();
</script>
<template>
  <div v-if="pokeInfo.pokemonSprites?.front_default === undefined">
    Procure um pokemon.
  </div>
    <img
      :src="props.pokeSprites?.front_default"
      :alt="usePokemonStore().pokemonName"
    />
  </div>
  <LoadingSpinner v-else />
</template>

<style scoped>
.pokemon-photo {
  margin-top: -20px;
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
