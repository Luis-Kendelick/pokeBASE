<script setup lang="ts">
import type { PokemonType } from "pokenode-ts";
import { pokemonTypeColors } from "../utils/PokeTypeColors";

const props = defineProps<{
  pokeTypes: PokemonType | undefined;
}>();

const getTypeColor = (type: string) => {
  return pokemonTypeColors[type as keyof typeof pokemonTypeColors];
};
</script>

<template>
</template>

<style scoped>
</style>
