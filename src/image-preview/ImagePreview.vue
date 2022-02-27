<template>
  <div
    class="container"
    ref="container">
    <canvas
      :height="settings.height"
      ref="canvas"
      :style="canvasStyle"
      :width="settings.width" />
  </div>
</template>

<script setup>
import { computed, defineProps, reactive, ref, watch } from 'vue'

const props = defineProps({
  settings: Object
})

const container = ref(null)
const height = ref(0)
const width = ref(0)
const resizeObserver = reactive(new ResizeObserver(() => {
  height.value = container.value.clientHeight
  width.value = container.value.clientWidth
}))
watch(container, (newContainer) => {
  resizeObserver.observe(newContainer)
})

const canvasStyle = computed(() => {
  if (props.settings.height <= height.value && props.settings.width <= width.value) {
    return {
      background: '#000',
      height: `${props.settings.height}px`,
      width: `${props.settings.width}px`,
    }
  }

  const widthRatio = width.value / props.settings.width
  const heightRatio = height.value / props.settings.height
  const bestRatio = Math.min(widthRatio, heightRatio)

  return {
    background: '#000',
    height: `${props.settings.height * bestRatio}px`,
    width: `${props.settings.width * bestRatio}px`
  }
})

const canvas = ref(null)
//canvas.value.getContext('2d')
</script>

<style scoped>
.container {
  align-items: center;
  background: #191919;
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
}

.container canvas {
  box-shadow: 8px 8px 16px 0 rgba(0,0,0,0.5);
}
</style>
