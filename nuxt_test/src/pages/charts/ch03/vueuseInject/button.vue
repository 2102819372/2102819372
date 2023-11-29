<script setup lang="ts">
import { useStore } from "./injectState";
const { increment } = useStore()!;
</script>
<template>
  <div>
    <button @click="increment">++</button>
  </div>
</template>
