<!--
 * @Author: 冷 晓飞 2102819372@qq.com
 * @Date: 2023-12-04 00:59:47
 * @LastEditors: 冷 晓飞 2102819372@qq.com
 * @LastEditTime: 2023-12-04 02:13:37
 * @FilePath: /2102819372/nuxt_test/src/pages/charts/ch04.vue
 * @Description: ch04
-->
<script setup lang="ts">
import { ref, watch } from "vue";
import {
  useMutationObserver,
  useParentElement,
  useWindowScroll,
} from "@vueuse/core";
//useMutationObserver
const el = ref(null);
const messages = ref<string[]>([]);
const className = ref({});
const style = ref({});
useMutationObserver(
  el, //绑定的元素
  (mutations) => {
    //mutation当前改变的属性记录
    console.log(mutations);
    const mutation = mutations[0];
    if (!mutation) return;
    messages.value.push(mutation.attributeName!);
  },
  {
    attributes: true,
  }
);
setTimeout(() => {
  className.value = {
    test: true,
    test2: true,
  };
}, 1000);
setTimeout(() => {
  style.value = {
    color: "red",
  };
}, 1550);
//useParentElement
const el2 = ref(null);
const parentEl = useParentElement(el2);
console.log("useParentElement", parentEl.value);
//useWindowScroll
const { x, y } = useWindowScroll();
</script>
<template>
  <div>
    <h2 class="text-2xl text-rose-200">useMutationobserver</h2>
    <hr />
    <div ref="el" :class="className" :style="style">
      <div v-for="(text, index) of messages" :key="index">
        Mutation Attribute:{{ text }}
      </div>
    </div>
    <br />
    <h2 class="text-2xl text-rose-200">useParentElement</h2>
    <hr />
    <div ref="el2">
      {{ parentEl }}
    </div>
    <br />
    <h2 class="text-2xl text-rose-200">useWindowScroll</h2>
    <hr />
    <div>{{ x }},{{ y }}</div>
    <br />
    <h2 class="test-2xl text-rose-200"></h2>
  </div>
</template>
