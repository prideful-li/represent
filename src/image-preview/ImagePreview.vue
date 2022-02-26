<template>
  <div
    class="container"
    ref="container">
    <canvas
      :height="settings.height"
      :style="canvasStyle"
      :width="settings.width" />
  </div>
</template>

<script setup>
import { computed, defineProps, ref } from 'vue'
import { useElementSize } from '@vueuse/core'

const props = defineProps({
  settings: Object
})

const container = ref(null)
const { width: containerWidth, height: containerHeight } = useElementSize(container)

const canvasStyle = computed(() => {
  if (props.settings.height <= containerHeight.value && props.settings.width <= containerWidth.value) {
    return {
      background: '#000',
      height: `${props.settings.height}px`,
      width: `${props.settings.width}px`,
    }
  } else if (props.settings.height > props.settings.width) {
    

    return {
      background: '#000',
      height: `0px`,
      width: `0px`
    }
  }


    return {
      background: '#000',
      height: `0px`,
      width: `0px`
    }

})
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
