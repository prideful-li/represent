<template>
  <button :class="type">
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  type: String
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
  background: #F06595;
  border-color: #F06595;
}

button.secondary {
  border: 2px solid #FFF;
  color: #FFF;
}

button.secondary:focus, button.secondary:active, button.secondary:hover {
  border-color: #EC407A;
}
</style>