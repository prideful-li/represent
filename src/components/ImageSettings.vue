<template>
  <div class="settings">
    <h1>Settings</h1>

    <div class="field">
      <label for="width">Width</label>
      <input
        type="number"
        id="width"
        v-model="width"/>
    </div>

    <div class="field">
      <label for="height">Height</label>
      <input
        type="number"
        id="height"
        v-model="height" />
    </div>

    <h2>
      Flags
      <button @click="addFlag">Add Flag</button>
    </h2>

    <div
      class="field"
      v-for="(flag, index) in flags"
      :key="index">
      <FlagSettings
        :index="index"
        @remove="removeFlag(index)" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import FlagSettings from './FlagSettings.vue'

const width = ref(window.screen.width)
const height = ref(window.screen.height)
const flags = ref([
  {
    numberOfBars: 1,
    bars: [
      '#000000'
    ]
  }
])

function addFlag() {
  flags.value.push({
    numberOfBars: 1,
    bars: [
      '#000000'
    ]
  })
}

function removeFlag(index) {
  flags.value = flags.value.filter((e, i) => i != index)
}
</script>

<style scoped>
</style>
