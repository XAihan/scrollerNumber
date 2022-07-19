<script setup lang="ts">
import { ref, onMounted } from 'vue';
import BaseScrollerNum01 from './components/scrollerNum0.1/index.vue';
import BaseScrollerNum02 from './components/scrollerNum0.2/index.vue';
import BaseScrollerNum03 from './components/scrollerNum0.3/index.vue';
import BaseScrollerNum04 from './components/scrollerNum0.4/index.vue';
import BaseScrollerNum05 from './components/scrollerNum0.5/index.vue';
import BaseScrollerNum06 from './components/scrollerNum0.6/index.vue';
let start = ref(0);
setInterval(() => {
	start.value++;
	if (start.value > 9 - 1) {
		start.value = 0;
	}
}, 1000);
</script>

<template>
	<div>
		<ul>
			<li><router-link to="/scrollerNumber">滚动的数字</router-link></li>
			<li><router-link to="/slidingClock">滚动的时钟</router-link></li>
		</ul>
		<div>数字的滚动</div>
		<div class="content">
			<div class="head">组件一: 数字的滚动（基础版）</div>
			<div class="demo-box">
				<BaseScrollerNum01 />
			</div>
			<div class="head">组件一: 数字的滚动（添加参数max，可以控制到几为止。）</div>
			<div class="demo-box"><BaseScrollerNum02 :max="2" /> 到(2)</div>
			<div class="head">组件一: 数字的滚动（添加参数count,可以控制从几开始）</div>
			<div class="demo-box">
				<BaseScrollerNum03 :max="10" :count="5" />
			</div>
			<div class="head">组件一: 数字的滚动（数字不再自己滚动，等count变动了才滚动。）</div>
			<div class="demo-box">
				<BaseScrollerNum04 :max="10" :count="start" />
			</div>
			<div class="head">组件一: 数字的滚动（不在隐藏，sliding-clock使用。）</div>
			<div class="demo-box">
				<BaseScrollerNum05 :max="10" :count="start" />
			</div>
			<div class="head">组件一: 数字的滚动（两个数字的滚动）</div>
			<div class="demo-box">
				<BaseScrollerNum06 :count="start" />
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
