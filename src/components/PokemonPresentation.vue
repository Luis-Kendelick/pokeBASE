<script setup lang="ts">
import { usePokemonStore } from "@/stores/pokemon";
import {
  PokemonImage,
  PokemonName,
  PokemonPhysicalAttrs,
  PokemonRegionalIndex,
  PokemonTypes,
} from "./index";
import { watch, ref } from "vue";

const pokemonToSearch = ref<string>("");
const handleSearch = () => {
  usePokemonStore().setPokemonNameToSearch(
    pokemonToSearch.value.toLocaleLowerCase()
  );
};

watch(
  () => usePokemonStore().pokemonNameToSearch,
  () => {
    usePokemonStore().getPokemon();
  }
);
const pokemonPresentationInfo = usePokemonStore();
</script>

<template>
  <div class="container" style="">
    <div class="search-container">
      <label for="pokemon-name">Pokemon Name</label>
      <input type="text" v-model="pokemonToSearch" placeholder="Pokemon Name" />
      <button @click="handleSearch">Search</button>
    </div>
    <PokemonName
      class="pokemon-name header"
      :pokeName="pokemonPresentationInfo.pokemonName"
    />
    <div class="principal-content main">
      <PokemonRegionalIndex
        class="regional-index"
        :pokemonName="pokemonPresentationInfo.pokemonGameIndex"
      />
      <PokemonImage
        class="pokemon-image"
        :pokeSprites="pokemonPresentationInfo.pokemonSprites"
      />
      <div class="types-container">
        <PokemonTypes
          v-for="type in pokemonPresentationInfo.pokemonTypes"
          class="types"
          :pokeTypes="type"
          :key="type.type.url"
        />
      </div>
    </div>
    <PokemonPhysicalAttrs
      class="physical-attrs"
      :pokeHeight="pokemonPresentationInfo.pokemonHeight"
      :pokeWeight="pokemonPresentationInfo.pokemonWeight"
    />
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

.search-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding: 10px;
  position: fixed;
  bottom: 0;
}

.principal-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding: 10px;
}
.header {
  font-size: 1.5rem;
  width: auto;
  height: 30px;
}
.pokemon-image {
  width: 150px;
  height: 150px;
}
.regional-index {
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.types-container {
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  height: auto;
}
</style>
