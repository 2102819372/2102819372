<template>
  <div>
    <div
      class="w-0 h-0 border-b-rose-500 border-solid border-l-transparent border-r-transparent trigger"
    ></div>
    <div class="h-80 w-screen bg-neutral-500">
      <svg width="100%" height="300px" version="1.1">
        <path d="M 150 0 L 300 240 L0 240 Z"></path>
      </svg>
    </div>
    <canvas id="testCanvas" ref="testCanvas"> </canvas>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
const testCanvas = ref();
onMounted(() => {
  const ctx = testCanvas.value.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(150, 0);
  ctx.lineTo(300, 240);
  ctx.lineTo(0, 240);
  ctx.closePath();
  ctx.fillStyle = "cyan";
  ctx.fill();
});
</script>
<style lang="less" scoped>
.trigger {
  border-right-width: 50px;
  border-left-width: 50px;
  border-bottom-width: 80px;
}
</style>
