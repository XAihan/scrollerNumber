<script setup lang="ts">
import { ref, onMounted, VueElement } from 'vue';
const props = defineProps<{ max: number; count: number }>();
const numberRef = ref<VueElement>();
const singleScrollProcess = 100 / props.max; // 单次移动的空间百分比
const defaultScrollProcess = singleScrollProcess * props.count;
let numberList = [];
for (let i = 0; i < props.max; i++) {
	numberList.push(i);
}
const List = ref<number[]>(numberList);
let start = ref<number>(props.count);
if (numberRef.value) {
	numberRef.value.style.transform = `translate(0,-${defaultScrollProcess}%)`;
}
setInterval(() => {
	start.value++;
	if (start.value > props.max - 1) {
		start.value = 0;
	}
	if (numberRef.value) {
		numberRef.value.style.transform = `translate(0,-${start.value * singleScrollProcess}%)`;
	}
}, 1000);
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
		transition: transform 1s ease;
	}
}
</style>
