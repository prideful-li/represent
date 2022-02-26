<template>
  <div class="app">
    <SideBar @change="onSettingChanged" />
    <ImagePreview :settings="settings" />
  </div>
</template>

<script setup>
import { reactive } from 'vue'

import SideBar from './side-bar/SideBar.vue'
import ImagePreview from './image-preview/ImagePreview.vue'

const settings = reactive({
  width: 0,
  height: 0,
  flags: []
})

function onSettingChanged(value) {
  settings.width = value.width
  settings.height = value.height
  settings.flags = value.flags
}
</script>

<style scoped>
.app {
  align-items: stretch;
  display: flex;
  height: 100vh;
  width: 100vw;
}
</style>
