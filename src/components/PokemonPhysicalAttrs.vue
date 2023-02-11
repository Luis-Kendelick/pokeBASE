<script setup lang="ts">
import { computed } from "vue";
import { usePokemonStore } from "@/stores/pokemon";

const physicalAttrs = usePokemonStore();

const computedPhysicalAttrs = computed(() => {
  return `Altura: ${physicalAttrs.pokemonHeight} | Peso: ${physicalAttrs.pokemonWeight}`;
});
</script>

<template>
</template>

<style scoped>
</style>
