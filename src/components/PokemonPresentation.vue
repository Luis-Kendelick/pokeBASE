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
    <input type="text" v-model="pokemonToSearch" placeholder="Pokemon Name" />
    <button @click="handleSearch">Search</button>
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

</style>
