<script setup lang="ts">
import SlidingClock02 from './components/slidingClock0.2/index.vue';
</script>

<template>
	<div>
		<ul>
			<li><router-link to="/">滚动的数字</router-link></li>
		</ul>
		<div>滑动的时钟</div>
		<div class="content">
			<div class="head">组件二: 滑动的时钟</div>
			<SlidingClock02 />
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
