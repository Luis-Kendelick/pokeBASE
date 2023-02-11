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
.type-tag {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  height: 30px;
  width: 100px;
  border: 2px solid #ccc;
}
p {
  font-size: 1rem;
  font-weight: bolder;
  text-transform: capitalize;
}
</style>
