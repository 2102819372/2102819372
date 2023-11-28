<script setup lang="ts">
import axios from "axios";
import { useAsyncState } from "@vueuse/core";
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
    <div>ch03</div>
    <div>isReady:{{ isReady }}</div>
    <div>isLoading:{{ isLoading }}</div>
    <div>{{ state }}</div>
    <button @click="execute(2000)" class="bg-red-200 text-zinc-50 rounded">
      execute
    </button>
  </div>
</template>
