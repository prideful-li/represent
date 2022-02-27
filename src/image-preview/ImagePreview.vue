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
import { computed, defineEmits, defineProps, onMounted, reactive, ref, watch } from 'vue'
import useRendering from './composables/useRendering'

const props = defineProps({
  settings: Object,
})

const emit = defineEmits(['ready'])

const container = ref(null)
const height = ref(0)
const width = ref(0)
const resizeObserver = reactive(new ResizeObserver(() => {
  if (!container.value) return
  height.value = container.value.clientHeight
  width.value = container.value.clientWidth
}))

// Handles sizing of the canvas
const canvasStyle = computed(() => {
  if (props.settings.height <= height.value && props.settings.width <= width.value) {
    return {
      height: `${props.settings.height}px`,
      width: `${props.settings.width}px`,
    }
  }

  const heightRatio = height.value / props.settings.height
  const widthRatio = width.value / props.settings.width
  const bestRatio = Math.min(widthRatio, heightRatio)

  return {
    height: `${props.settings.height * bestRatio}px`,
    width: `${props.settings.width * bestRatio}px`,
  }
})

const canvas = ref(null)
let context = ref(null)

// Main rendering routine.
const renderPreview = useRendering(context)

// Render on canvas resize.
const canvasResizeObserver = reactive(new ResizeObserver(() => {
  if (!canvas.value) return
  renderPreview(props.settings)
}))

// Render on setting changed.
watch(props.settings, (newSettings) => {
  renderPreview(newSettings)
})

onMounted(() => {
  resizeObserver.observe(container.value)
  
  // Register observer, Get the context, and emit canvas to parent.
  canvasResizeObserver.observe(canvas.value)
  context.value = canvas.value.getContext('2d')
  emit('ready', canvas.value)
})
</script>

<style scoped>
.container {
  align-items: center;
  background: #191919;
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  overflow: hidden;
}

.container canvas {
  background: #000;
  box-shadow: 8px 8px 16px 0 rgba(0,0,0,0.5);
}
</style>
