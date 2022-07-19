<script setup lang="ts">
// 基础版,自动向上滚动，没有输入，所有内容全部写死。
import { log } from 'console';
import { ref, onMounted, VueElement } from 'vue';
const numberRef = ref<VueElement>();
let start = ref(0);
setInterval(() => {
	start.value++;
	if (start.value > 9) {
		start.value = 0;
	}
	if (numberRef.value) {
		numberRef.value.style.transform = `translate(0,-${start.value * 10}%)`;
	}
}, 1000);
</script>

<template>
	<div>
		<div class="content">
			<div class="showDom">
				<ul ref="numberRef">
					<li v-for="(item, index) in 10" :key="index">
						{{ index === 10 ? 0 : index }}
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.content {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
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
