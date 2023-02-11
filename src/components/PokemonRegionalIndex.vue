<script setup lang="ts">
import { usePokemonStore } from "@/stores/pokemon";
import type { VersionGameIndex } from "pokenode-ts";
import { ref, computed } from "vue";

const props = defineProps<{
  pokemonName: VersionGameIndex[] | undefined;
}>();

const selectedVersion = ref("");

const gameIndex = computed(() => {
  const selected = props.pokemonName?.find(
    (version) => version.version.name === selectedVersion.value
  );
  return selected ? selected.game_index : "";
});
</script>

<template>
  <div class="container">
  </div>
</template>

<style scoped>
</style>
