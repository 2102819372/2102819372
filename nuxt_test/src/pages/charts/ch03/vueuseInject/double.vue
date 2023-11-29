<script setup lang="ts">
import { useStore } from "./injectState";
const { double } = useStore()!;
</script>
<template>
  <div>counter:{{ double }}</div>
</template>
