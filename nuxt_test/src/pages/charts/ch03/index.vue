<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import {
  useAsyncState,
  useMouse,
  useWindowSize,
  useLastChanged,
} from "@vueuse/core";
const foo = ref("");
const lastChange = useLastChanged(foo);
const { x, y } = useMouse();
const { width, height } = useWindowSize();
const { state, isReady, isLoading, execute } = useAsyncState(
  axios.get("https://jsonplaceholder.typicode.com/todos/1").then((t) => t.data),
  {},
  {
    delay: 2000,
    resetOnExecute: false,
  }
);
</script>
<template>
  <div>
    <h1 class="text-3xl">vueusetest</h1>
    <div>ch03</div>
    <div>isReady:{{ isReady }}</div>
    <div>isLoading:{{ isLoading }}</div>
    <div>{{ state }}</div>
    <button @click="execute(2000)" class="bg-red-200 text-zinc-50 rounded">
      execute
    </button>
    <div class="text-rose-400 text-lg">鼠标</div>
    <div>{{ x }}</div>
    <div>{{ y }}</div>
    <div class="text-rose-400 text-lg">window</div>
    <div>{{ width }}</div>
    <div>{{ height }}</div>
    <div class="text-rose-400 text-lg">lastChange</div>
    <div>
      <input
        type="text"
        v-model="foo"
        class="border-2 border-solid border-rose-400 focus:outline-none focus:ring focus:ring-violet-300 rounded"
      />
    </div>
    <div>上次修改时间</div>
    <div>{{ lastChange }}</div>
  </div>
</template>
