<template>
  <div class="app">
    <SideBar
      @change="onSettingChanged"
      @save="onSave" />
    <ImagePreview
      :settings="settings"
      @ready="onReady" />
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

import SideBar from './side-bar/SideBar.vue'
import ImagePreview from './image-preview/ImagePreview.vue'

const settings = reactive({
  width: 0,
  height: 0,
  flags: [],
})

function onSettingChanged(value) {
  settings.width = value.width
  settings.height = value.height
  settings.flags = value.flags
}

const canvas = ref(null)
function onReady(c) {
  canvas.value = c
}

function onSave() {
  const anchor = document.createElement('a')
  anchor.download = `pride-${Date.now()}.png`
  anchor.href = canvas.value.toDataURL('image/png')
  anchor.click()
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
