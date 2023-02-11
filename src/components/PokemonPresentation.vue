<script setup lang="ts">
import { usePokemonStore } from "@/stores/pokemon";
import {
  PokemonImage,
  PokemonName,
  PokemonPhysicalAttrs,
  PokemonRegionalIndex,
  PokemonTypes,
} from "./index";
</script>

<template>
  <div class="container" style="">
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 800px;
  height: 100%;
  border-radius: 10px;
  padding: 10px;
}

</style>
