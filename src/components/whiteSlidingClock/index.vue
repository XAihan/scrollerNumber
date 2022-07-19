<script setup lang="ts">
import { ref, onMounted } from "vue";
import  SlidingClock from "./components/slidingClock/index.vue";
</script>

<template>
  <div class="sliding-clock-container">
    <SlidingClock  />
  </div>
</template>

<style scoped lang="scss">
.sliding-clock-container {
  background: linear-gradient(325deg, #c8d6ec, #e4e5f3);
  height: 100%;
}
</style>
