<script setup lang="ts">
import { log } from 'console';
import { ref, onMounted, watchEffect } from 'vue';
const props = defineProps<{ max: number; count: number }>();
const numberRef = ref(null);
const singleScrollProcess = 100 / props.max; // 单次移动的空间百分比
let defaultScrollProcess = singleScrollProcess * props.count;
let numberList = [];
for (let i = 0; i < props.max; i++) {
  numberList.push(i);
}
const List = ref(numberList);

onMounted(async () => {
  if (numberRef.value) {
    numberRef.value.style.transform = `translate(0,-${defaultScrollProcess}%)`;
  }
});

watchEffect(() => {
  defaultScrollProcess = singleScrollProcess * props.count;
  if (numberRef.value) {
    numberRef.value.style.transform = `translate(0,-${defaultScrollProcess}%)`;
  }
}, props.count);
</script>
<template>
  <div>
    <div class="content">
      <div class="showDom">
        <div class="trueNum show">{{ props.count }}</div>
        <ul ref="numberRef">
          <li v-for="(item, index) in List" :key="index">
            {{ index === 10 ? 0 : index }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.showDom {
  position: relative;
  z-index: 1;
  margin: 0 auto;
  width: 30px;
  height: 30px;
  text-align: center;
  border: 2px solid rgba(221, 221, 221, 1);
  border-radius: 4px;
  margin-top: 200px;
  background: #e1e6f3;
  // background: red;
  border-radius: 100%;
  margin: 0 2px;
  .trueNum {
    position: absolute;
    z-index: 9;
    left: 0;
    right: 0;
    margin: auto;
    color: #366ec9;
    line-height: 30px;
    font-weight: 600;
    &.show {
      animation: scrollerTopShow 1s both ease-in-out;
    }
    &.hide {
      animation: scrollerTopHide 1s both ease-in-out;
    }
  }
  ul {
    position: relative;
    list-style-type: none;
    overflow: hidden;
    transform: translate(0, 0);
    line-height: 30px;
    transition: transform 1s ease-in-out;
    color: white;
    // background: #e1e6f3;
    border-radius: 8px;
  }
}

@keyframes scrollerTopShow {
  from {
    font-size: 100;
    transform: scale(1) translateY(30px);
  }
  to {
    font-size: 600;
    transform: scale(1.2);
  }
}
@keyframes scrollerTopHide {
  from {
    font-size: 600;
    transform: scale(1.2);
  }
  to {
    font-size: 100;
    transform: scale(1) translateY(-30px);
  }
}
</style>
