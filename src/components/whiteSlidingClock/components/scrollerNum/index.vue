<script setup lang="ts">
import { ref, watchEffect, VueElement } from 'vue';
import TwoNumberScroller from '../scrollerNum-towNumber/index.vue';
const props = defineProps<{ max: number; count: number }>();
const numberRef = ref<VueElement>();
const singleScrollProcess = 30; // 单次移动的空间百分比
let defaultScrollProcess = singleScrollProcess * props.count;
let numberList = [];
for (let i = 0; i < props.max; i++) {
	numberList.push(i);
}
const List = ref<Array<number>>(numberList);

if (numberRef.value) {
	numberRef.value.style.transform = `translate(0,-${defaultScrollProcess}px)`;
}

watchEffect(() => {
	defaultScrollProcess = singleScrollProcess * props.count;
	if (numberRef.value) {
		numberRef.value.style.transform = `translate(0,-${defaultScrollProcess}px)`;
	}
});
</script>
<template>
	<div>
		<div class="content">
			<div class="showDom">
				<div class="trueNum show">
					<TwoNumberScroller :count="props.count" />
				</div>
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
			animation: scrollerTopShow 1s both ease;
		}
		&.hide {
			animation: scrollerTopHide 1s both ease;
		}
	}
	ul {
		position: relative;
		list-style-type: none;
		overflow: hidden;
		transform: translate(0, 0);
		line-height: 30px;
		transition: transform 1s ease;
		color: white;
		// background: #e1e6f3;
		border-radius: 8px;
	}
}

</style>
