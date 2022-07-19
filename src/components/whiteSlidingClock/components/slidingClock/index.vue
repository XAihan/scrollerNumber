<script setup lang="ts">
import { ref, onMounted, watchEffect, reactive } from 'vue';
import BaseScrollerNum05 from '../scrollerNum/index.vue';
import dateUtils from '@/utils';
let initOptions = [
  {
    max: 2,
    count: 0,
  },
  {
    max: 10,
    count: 0,
  },
  {
    max: 6,
    count: 0,
  },
  {
    max: 10,
    count: 0,
  },
  {
    max: 6,
    count: 0,
  },
  {
    max: 10,
    count: 0,
  },
];
let timeOptions = reactive(initOptions);

function getTimeOptions() {
  let time = dateUtils.formatDate(new Date(), 'hms');
  for (let i = 0; i < time.length; i++) {
    timeOptions[i].count = Number(time[i]);
  }
}

setInterval(() => {
  getTimeOptions();
}, 1000);
</script>

<template>
  <div class="content">
    <div class="demo-box">
      <div v-for="(item, index) in timeOptions" :key="index">
        <BaseScrollerNum05 :max="item.max" :count="item.count" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .demo-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
}
</style>
