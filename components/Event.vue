<script setup lang="ts">
const props = defineProps({
  showText: {
    default: false,
  },
})
</script>

<template>
  <div>
    <img src="/images/niji_logo.jpg" class="logo h-15 shadow" />
    <div v-if="showText" class="date">
      <span>Monthly RUN</span>
      <br>
      <span>February 2022</span>
    </div>
  </div>
</template>

<style>
  .logo {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
    position: fixed;
    bottom: 10px;
    left: 15px;
  }
  .date {
    position: fixed;
    color: rgba(239, 229, 229, 0.6) !important;
    bottom: 20px;
    left: 80px;
    text-align: left;
  }

  span {
    color: #f0f0f0;
  }
</style>
