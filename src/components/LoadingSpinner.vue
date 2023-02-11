<script setup lang="ts">
import { ref, onMounted } from "vue";
import PokeLoad from "./icons/PokeLoad.vue";

const degree = ref(0);

onMounted(() => {
  const interval = setInterval(() => {
    degree.value += 10;
  }, 50);

  return () => clearInterval(interval);
});
</script>

<template>
  <div class="loading">
    <div class="loading-spinner" :style="{ transform: `rotate(${degree}deg)` }">
      <PokeLoad class="pokeball-svg" />
    </div>
    <p>Loading...</p>
  </div>
</template>

<style>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  margin-bottom: 5px;
  animation: spin 1.5s linear infinite;
}

.pokeball-svg {
  width: 50px;
  height: 50px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
