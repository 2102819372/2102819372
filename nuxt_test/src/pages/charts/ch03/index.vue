<script setup lang="ts">
import axios from "axios";
import { useAsyncState } from "@vueuse/core";
axios
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then((t) => console.log(t));
</script>
<template>
  <div>ch03</div>
</template>
