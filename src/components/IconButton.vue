<template>
  <button :aria-label="label" :class="type" :title="label">
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

  button:focus,
  button:active,
  button:hover {
    outline: none;
  }

  button:hover {
    cursor: pointer;
  }

  button.primary {
    background: #ec407a;
    border: 2px solid #ec407a;
    color: #fff;
  }

  button.primary:focus,
  button.primary:active,
  button.primary:hover {
    background: #f389ad;
    border-color: #f389ad;
  }

  button.secondary {
    border: 2px solid #fff;
    color: #fff;
  }

  button.secondary:focus,
  button.secondary:active,
  button.secondary:hover {
    border-color: #ec407a;
  }
</style>
