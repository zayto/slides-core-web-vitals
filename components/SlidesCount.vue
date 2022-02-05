<template>
  <div class="slides-count">
    <SlideCurrentNo /> / <SlidesTotal />
  </div>
</template>

<style>
  .slides-count {
    position: absolute;
    bottom: 10px;
    right: 15px;
    span {
      color: olive !important;
    }
  }
  .dark .slides-count {
    span {
      color: white !important;
    }
  }
</style>
