<script setup lang="ts">
import { usePokemonStore } from "@/stores/pokemon";
import type { VersionGameIndex } from "pokenode-ts";
import { ref, computed } from "vue";

const props = defineProps<{
  pokemonName: VersionGameIndex[] | undefined;
}>();

</script>

<template>
  <div class="container">
  </div>
</template>

<style scoped>
</style>
