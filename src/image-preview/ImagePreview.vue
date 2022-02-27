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
import { computed, defineEmits, defineProps, reactive, ref, watch } from 'vue'

const props = defineProps({
  settings: Object
})

const emit = defineEmits(['ready'])

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

  const heightRatio = height.value / props.settings.height
  const widthRatio = width.value / props.settings.width
  const bestRatio = Math.min(widthRatio, heightRatio)

  return {
    background: '#000',
    height: `${props.settings.height * bestRatio}px`,
    width: `${props.settings.width * bestRatio}px`
  }
})

const canvas = ref(null)
let context = ref(null)

function renderPreview(settings) {
  if (!context.value) return

  const size = Math.sqrt(Math.pow(settings.width, 2) + Math.pow(settings.height, 2))
  const flagHeight = size / settings.flags.filter((flag) => flag.id !== '').length
  
  const tempCanvas = document.createElement('canvas')
  tempCanvas.height = size
  tempCanvas.width = size

  const tempContext = tempCanvas.getContext('2d')

  settings.flags.forEach((flag, flagIndex) => {
    const barHeight = flagHeight / flag.bars.length
    flag.bars.forEach((bar, barIndex) => {
      tempContext.fillStyle = bar
      tempContext.fillRect(0, (flagHeight * flagIndex) + (barHeight * barIndex), size, barHeight)
    })
  })

  context.value.clearRect(0, 0, settings.width, settings.height)

  context.value.save()
  context.value.translate(settings.width / 2, settings.height / 2)
  context.value.rotate(-Math.PI / 4)
  context.value.translate(-size / 2, -size / 2)
  context.value.drawImage(tempCanvas, 0, 0)
  context.value.restore()
}

watch(canvas, (newCanvas) => {
  context.value = newCanvas.getContext('2d')
  renderPreview(props.settings)
  emit('ready', newCanvas)
})

watch(props.settings, (newSettings) => {
  renderPreview(newSettings)
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
  box-shadow: 8px 8px 16px 0 rgba(0,0,0,0.5);
}
</style>
