<script setup lang="ts">
import { ref, type Ref } from "vue";
import axios from "axios";
import {
  useAsyncState,
  useMouse,
  useWindowSize,
  useLastChanged,
  useDebouncedRefHistory,
  useCounter,
} from "@vueuse/core";
import RootComp from "./vueuseInject/RootComp.vue";
import counter from "./vueuseInject/couter.vue";
import doubelVue from "./vueuseInject/double.vue";
import Button from "./vueuseInject/button.vue";
const foo = ref("");
const delay: Ref<number> = ref(1000);
const { history, undo, redo, canUndo, canRedo } = useDebouncedRefHistory(foo, {
  debounce: delay,
});
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
    <h1 class="text-2xl">ch03</h1>
    <h2 class="text-xl">VueUseTest</h2>
    <hr />
    <br />
    useasync
    <hr />
    <div>isReady:{{ isReady }}</div>
    <div>isLoading:{{ isLoading }}</div>
    <div>{{ state }}</div>
    <button @click="execute(2000)" class="bg-red-200 text-zinc-50 rounded">
      execute
    </button>
    <div></div>
    <br />
    <div class="text-rose-400 text-lg">鼠标 useMouse</div>
    <hr />
    <div>{{ x }}</div>
    <div>{{ y }}</div>
    <br />
    <div class="text-rose-400 text-lg">Usewindow</div>
    <hr />
    <div>{{ width }}</div>
    <div>{{ height }}</div>
    <br />
    <div class="text-rose-400 text-lg">lastChange</div>
    <hr />
    <div>
      <input
        type="text"
        v-model="foo"
        class="border-2 border-solid border-rose-400 focus:outline-none focus:ring focus:ring-violet-300 rounded"
      />
    </div>
    <button
      :disabled="!canUndo"
      @click="undo()"
      class="border-2 border-solid border-rose-400 active:bg-rose-200 active:text-white"
    >
      undo
    </button>
    <button
      :disabled="!canUndo"
      @click="redo()"
      class="border-2 border-solid border-rose-400 active:bg-rose-200 active:text-white"
    >
      redo
    </button>
    <div>history</div>
    <div v-for="item in history" :key="item.timestamp">{{ item.snapshot }}</div>
    <div>上次修改时间</div>
    <div>{{ lastChange }}</div>
    <br />
    vueuseInject
    <hr />
    <RootComp>
      <counter />
      <doubelVue />
      <Button />
    </RootComp>
    <br />
    vueusesharedComposable
    <hr />
    <br />
    useManualRefHistory
    <hr />
  </div>
</template>
