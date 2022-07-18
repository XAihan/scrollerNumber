<script setup lang="ts">
import { ref, onMounted } from "vue";
import SlidingClock01 from "./components/slidingClock0.1/index.vue";
import SlidingClock02 from "./components/slidingClock0.2/index.vue";
</script>

<template>
  <div>
    <ul>
      <li><router-link to="/scrollerNumber">滚动的数字</router-link></li>
      <li><router-link to="/slidingClock">滚动的时钟</router-link></li>
    </ul>
    <div>滑动的时钟</div>
    <div class="content">
      <!-- <div class="head">组件二: 滑动的时钟（基础版）</div>
      <SlidingClock01 /> -->
      <div class="head">组件二: 滑动的时钟（取消隐藏）</div>
      <SlidingClock02 />
    </div>
  </div>
</template>

<style scoped lang="scss">
.demo-box {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  align-items: center;
}
</style>
