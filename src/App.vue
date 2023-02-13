<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink to="/" />
    <RouterLink to="/about" />
    <RouterLink to="/poke" />
  </nav>

  <RouterView />
</template>

<style scoped>
nav {
  display: none;
}

@media (min-width: 1024px) {
}
</style>
