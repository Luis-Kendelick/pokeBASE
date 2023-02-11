<script setup lang="ts">
import { computed } from "vue";
import { usePokemonStore } from "@/stores/pokemon";

const physicalAttrs = usePokemonStore();

const computedPhysicalAttrs = computed(() => {
  return `Altura: ${physicalAttrs.pokemonHeight} | Peso: ${physicalAttrs.pokemonWeight}`;
});
</script>

<template>
  <div class="physical-attrs-container">
    <p>{{ computedPhysicalAttrs }}</p>
  </div>
</template>

<style scoped>
.physical-attrs-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

p {
  font-size: 1.2rem;
  font-weight: 600;
}
</style>
