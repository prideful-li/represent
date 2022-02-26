<template>
  <div class="field">
    <label :for="field">{{ label }}</label>
    <div class="input">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  field: String,
  label: String,
})
</script>

<style scoped>
.field {
  margin: 0 0 16px;
}

.field label {
  margin-bottom: 8px;
  font-weight: 600;
}
</style>
