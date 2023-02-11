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
    <h1>#{{ gameIndex ? gameIndex : usePokemonStore().pokemonNationalId }}</h1>
    <select
      v-if="props.pokemonName && props.pokemonName?.length > 1"
      v-model="selectedVersion"
      id="versions-select"
      placeholder="Selecione um jogo"
    >
      <option value="" disabled selected hidden>Game #:</option>
      <option
        v-for="versionName in props.pokemonName"
        :key="versionName.version.name"
        :value="versionName.version.name"
      >
        {{ versionName.version.name.toUpperCase() }}
      </option>
    </select>
  </div>
</template>

<style scoped>
.container {
  max-height: 50px;
  max-width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
h1 {
  font-size: 1.5rem;
  text-transform: capitalize;
}
select {
  width: 100%;
  height: 1.4rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
}
</style>
