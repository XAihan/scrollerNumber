<script setup lang="ts">
import { log } from "console";
import { ref, onMounted } from "vue";
const props = defineProps<{ max: number }>();
const numberRef = ref(null);
const scrollProcess = 100 / props.max; // 单次移动的空间百分比
let numberList = [];
for (let i = 0; i < props.max; i++) {
  numberList.push(i);
}
const List = ref(numberList);
let start = ref(0);
onMounted(async () => {
  console.log("testRef", numberRef);
  setInterval(() => {
    start.value++;
    if (start.value > props.max - 1) {
      start.value = 0;
    }
    if (numberRef.value) {
      numberRef.value.style.transform = `translate(0,-${
        start.value * scrollProcess
      }%)`;
    }
  }, 1000);
});
</script>

<template>
  <div>
    <div class="content">
      <div class="showDom">
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
  margin: 0 auto;
  width: 20px;
  height: 30px;
  text-align: center;
  border: 2px solid rgba(221, 221, 221, 1);
  border-radius: 4px;
    overflow: hidden;
  ul {
    list-style-type: none;
    overflow: hidden;
    transform: translate(0, 0);
    line-height: 30px;
    transition: transform 500ms ease-in-out;
  }
}
</style>
