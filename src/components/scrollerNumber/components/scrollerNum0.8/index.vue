<template>
    <div>
      <div class="content">
        <div
          class="showDom"
          :class="{
            show: !showReverseDom
          }"
        >
          <ul ref="numberRef">
            <li v-for="(item, index) in List" :key="index">
              {{ index === 10 ? 0 : index }}
            </li>
          </ul>
        </div>
        <div
          class="showDom position-top"
          :class="{
            show: showReverseDom
          }"
        >
          <ul ref="reverseNumberRef">
            <li v-for="(item, index) in List" :key="index">
              {{ 10 - index === 10 ? 0 : 10 - index }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  <script setup lang="ts">
  import { ref, onMounted, watchEffect, VueElement, watch } from 'vue';
  const props = defineProps<{ max: number; count: number }>();
  const numberRef = ref<VueElement>();
  const reverseNumberRef = ref<VueElement>();
  const showReverseDom = ref(false);
  const singleScrollProcess = 100 / props.max; // 单次移动的空间百分比
  let defaultScrollProcess = singleScrollProcess * props.count;
  let numberList: any[] = [];
  for (let i = 0; i < props.max; i++) {
    numberList.push(i);
  }
  const List = ref(numberList);
  
  watch(
    () => props.count,
    (oldVal, newVal) => {
      console.log(oldVal, newVal);
      showReverseDom.value = oldVal > newVal;
    }
  );
  
  onMounted(async () => {
    if (numberRef.value) {
      numberRef.value.style.transform = `translate(0,-${defaultScrollProcess}%)`;
    }
    if (reverseNumberRef.value) {
      reverseNumberRef.value.style.transform = `translate(0,${
        100 - defaultScrollProcess
      }%)`;
    }
  });
  
  watchEffect(() => {
    defaultScrollProcess = singleScrollProcess * props.count;
    if (numberRef.value) {
      numberRef.value.style.transform = `translate(0,-${defaultScrollProcess}%)`;
    }
    if (reverseNumberRef.value) {
      reverseNumberRef.value.style.transform = `translate(0,${
        defaultScrollProcess - 100
      }%)`;
    }
  });
  </script>
  <style scoped lang="scss">
  .showDom {
    margin: 0 auto;
    width: 20px;
    height: 30px;
    text-align: center;
    border: 2px solid rgba(221, 221, 221, 1);
    border-radius: 4px;
    overflow: hidden;
    visibility: hidden;
    ul {
      list-style-type: none;
      overflow: hidden;
      transform: translate(0, 0);
      line-height: 30px;
      transition: transform 1s ease;
    }
  }
  
  .show{
    visibility:visible;
  }
  
  .position-top{
    position: relative;
    top: -30px;
  }
  </style>
  