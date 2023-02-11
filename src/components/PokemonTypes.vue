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
  <div
    class="type-tag"
    :style="{
      color: getTypeColor(props.pokeTypes ? props.pokeTypes.type.name : '')
        .color,
      backgroundColor: getTypeColor(
        props.pokeTypes ? props.pokeTypes.type.name : ''
      ).backgroundColor,
    }"
  >
    <p>{{ props.pokeTypes ? props.pokeTypes.type.name : "Loading..." }}</p>
  </div>
</template>

<style scoped>
</style>
