<template>
  <div>
    <svg width="0" height="0">
      <defs>
        <linearGradient y2="0" x2="1" y1="1" x1="1" id="my-gradient">
          <stop stop-color="#ff0000" offset="0" />
          <stop stop-color="#ffff00" offset="1" />
        </linearGradient>
      </defs>
    </svg>

    <svg class="svg-gradient" width="100" height="100" viewBox="0 0 24 24">
      <path
        d="M12 2a9 9 0 0 0-9 9v11l3-3l3 3l3-3l3 3l3-3l3 3V11a9 9 0 0 0-9-9M9 8a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m6 0a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2Z"
      />
    </svg>
  </div>
</template>
<style>
.svg-gradient {
  fill: url(#my-gradient);
}
</style>
