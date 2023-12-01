<script setup lang="ts">
import { ref } from "vue";
import { useMutationObserver } from "@vueuse/core";
const el = ref(null);
const messages = ref([]);

useMutationObserver(
  el,
  (mutations) => {
    if (mutations[0]) return;
    messages.value.push(mutations[0].attributeName!);
  },
  {
    attributes: true,
  }
);
</script>
<template>
  <div ref="el" class="abc">1</div>
</template>
