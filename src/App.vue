<template>
  <div class="app">
    <div class="sidebar">
      <ImageSettings />
    </div>
    <div class="body">
      <ImagePreview />
    </div>
  </div>
</template>

<script setup>
import ImageSettings from './components/ImageSettings.vue'
import ImagePreview from './components/ImagePreview.vue'
</script>

<style>
</style>
