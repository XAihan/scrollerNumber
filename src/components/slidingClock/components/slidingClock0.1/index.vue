<script setup lang="ts">
import { ref, onMounted, watchEffect, reactive } from 'vue';
import BaseScrollerNum04 from '@/components/scrollerNumber/components/scrollerNum0.4/index.vue';
import dateUtils from '@/utils/utils';
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

dateUtils.mySetInterval(() => {
	console.log('zheli ');
	getTimeOptions();
});
function getTimeOptions() {
	let time = dateUtils.formatDate(new Date(), 'hms');
	for (let i = 0; i < time.length; i++) {
		timeOptions[i].count = Number(time[i]);
	}
}

// setInterval(() => {
// 	getTimeOptions();
// }, 1000);
</script>

<template>
	<div>
		<div class="content">
			<div class="demo-box">
				<div v-for="(item, index) in timeOptions" :key="index">
					<BaseScrollerNum04 :max="item.max" :count="item.count" />
				</div>
			</div>
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
