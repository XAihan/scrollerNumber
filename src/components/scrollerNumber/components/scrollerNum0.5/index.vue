<script setup lang="ts">
import { log } from 'console';
import { ref, onMounted, watchEffect, VueElement } from 'vue';
const props = defineProps<{ max: number; count: number }>();
const numberRef = ref<VueElement>();
const singleScrollProcess = 100 / Number(props.max); // 单次移动的空间百分比
let defaultScrollProcess = singleScrollProcess * props.count;
let numberList = [];
for (let i = 0; i < props.max; i++) {
	numberList.push(i);
}
const List = ref(numberList);

if (numberRef.value) {
	numberRef.value.style.transform = `translate(0,-${defaultScrollProcess}%)`;
}

watchEffect(() => {
	defaultScrollProcess = singleScrollProcess * props.count;
	if (numberRef.value) {
		numberRef.value.style.transform = `translate(0,-${defaultScrollProcess}%)`;
	}
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
	// margin-top: 200px;
	ul {
		list-style-type: none;
		overflow: hidden;
		transform: translate(0, 0);
		line-height: 30px;
		transition: transform 1s ease;
	}
}
</style>
