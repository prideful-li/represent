<template>
  <div>
    <form-field
      field="width"
      label="Width">
      <input
        type="number"
        id="width"
        v-model="width"
        @change="onFieldChanged('width', $event.target.value)" />
    </form-field>

    <form-field
      field="height"
      label="Height">
      <input
        type="number"
        id="height"
        v-model="height"
        @change="onFieldChanged('height', $event.target.value)" />
    </form-field>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import FormField from '../../components/FormField.vue'

const emit = defineEmits(['change'])
function onFieldChanged(field, value) {
  emit('change', {
    field,
    value: typeof value === 'number' ? value : parseInt(value)
  })
}

const width = ref(window.screen.width)
onFieldChanged('width', width.value)

const height = ref(window.screen.height)
onFieldChanged('height', height.value)
</script>

<style scoped>
input {
  box-sizing: border-box;
  width: 100%;
}
</style>
