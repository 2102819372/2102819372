<script setup lang="ts">
import { useProvideStore } from "./injectState";
useProvideStore(0);
</script>
<template>
  <div>
    <slot />
  </div>
</template>
