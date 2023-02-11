<script setup lang="ts">
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import { usePokemonStore } from "@/stores/pokemon";
import type { PokemonSprites } from "pokenode-ts";
const props = defineProps<{
  pokeSprites: PokemonSprites | undefined;
}>();
</script>
<template>
  <div v-if="props.pokeSprites?.front_default" class="pokemon-photo">
    <img
      :src="props.pokeSprites?.front_default"
      :alt="usePokemonStore().pokemonName"
    />
  </div>
  <LoadingSpinner v-else />
</template>

<style scoped>
</style>
