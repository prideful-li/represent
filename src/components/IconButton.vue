<template>
  <button 
    :aria-label="label"
    :class="type"
    :title="label">
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  label: String,
  type: String,
})
</script>

<style scoped>
button {
  align-items: center;
  border-radius: 3px;
  background: transparent;
  display: flex;
  height: 28px;
  justify-content: center;
  width: 28px;
}

button:focus, button:active, button:hover {
  outline: none;
}

button:hover {
  cursor: pointer;
}

button.primary {
  background: #EC407A;
  border: 2px solid #EC407A;
  color: #FFF;
}

button.primary:focus, button.primary:active, button.primary:hover {
  background: #F389AD;
  border-color: #F389AD;
}

button.secondary {
  border: 2px solid #FFF;
  color: #FFF;
}

button.secondary:focus, button.secondary:active, button.secondary:hover {
  border-color: #EC407A;
}
</style>
