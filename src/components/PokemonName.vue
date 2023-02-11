<script setup lang="ts">
import { usePokemonStore } from "@/stores/pokemon";
</script>

<template>
  <h1>{{ usePokemonStore().pokemonName }}</h1>
</template>

<style scoped>
h1 {
  font-size: 2rem;
  text-transform: capitalize;
}
</style>
