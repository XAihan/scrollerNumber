<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <div class="fn-components-container">
    <h1 class="head">这里是凤楠的组件库</h1>
    <ul>
      <li><router-link to="/scrollerNumber">滚动的数字</router-link></li>
      <li><router-link to="/slidingClock">滚动的时钟123</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<style scoped lang="scss">
.fn-components-container {
  .head {
    width: 100%;
    font-size: 24px;
    text-align: center;
    background: linear-gradient(90deg, #f23de7 0%, #5784ff 100%);
    color: white;
    padding: 1rem 0;
    letter-spacing: 2px;
  }
}
</style>
