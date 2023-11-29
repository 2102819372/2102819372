<script setup lang="ts">
import { useStore } from "./injectState";
const { count } = useStore()!;
</script>
<template>
  <div>counter:{{ count }}</div>
</template>
