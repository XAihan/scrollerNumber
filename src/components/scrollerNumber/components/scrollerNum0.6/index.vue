<script setup lang="ts">
import { log } from 'console';
import { ref, onMounted, watchEffect, VueElement, watch } from 'vue';
const props = defineProps<{ count: number | String }>();
const numberRef = ref<VueElement>();
let playing = ref<Boolean>(false);
let prev = ref<Number>(0);
let numberList = ref<Number[]>([0, 1]);
watch(
	() => props.count,
	(newCount, oldCount) => {
		if (oldCount !== newCount) {
			playing.value = false;
			numberList.value = [Number(oldCount), Number(newCount)];
			setTimeout(() => {
				playing.value = true;
			}, 17);
		}
	},
);
</script>
<template>
	<div>
		<div class="content">
			<div class="showDom">
				<div class="slider">
					<div v-for="(item, index) in numberList" class="slider-text" :class="{ 'slider-ani': playing }" :key="index">
						{{ item }}
					</div>
				</div>
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
	margin-top: 200px;
	.slider {
		display: flex;
		flex-direction: column;
		height: 30px;
		// overflow: hidden;
		text-align: left;
		text-align: center;
		line-height: 30px;
	}

	.slider-text {
		display: block;
		height: 100%;
		transform: translateY(0%);
	}

	.slider-ani {
		transform: translateY(-100%);
		transition: transform 1s ease;
	}
	.slider-hide {
		opacity: 0;
	}
}
</style>
