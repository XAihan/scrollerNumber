<script setup lang="ts">
import { log } from 'console';
import { ref, watch } from 'vue';
const props = defineProps<{ count: number }>();
let playing = ref<Boolean>(false);
let hiding = ref<boolean>(false);
let numberList = ref<Number[]>([0, 1]);
watch(
	() => props.count,
	(newCount, oldCount) => {
		if (oldCount !== newCount) {
			playing.value = false;
			hiding.value = false;
			numberList.value = [Number(oldCount), Number(newCount)];
			if (newCount === 0) {
				hiding.value = true;
			}
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
					<div v-for="(item, index) in numberList" class="slider-text" :class="{ 'slider-ani': playing, 'slider-ani-hide': hiding }" :key="index">
						{{ item }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.showDom {
	width: 100%;
	height: 100%;
	.slider {
		display: flex;
		flex-direction: column;
		height: 30px;
		overflow: hidden;
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

	.slider-ani-hide {
		transition: transform 1s ease;
		opacity: 0;
	}

	.slider-hide {
		opacity: 0;
	}
}
</style>
