<template>
  <div class="flag">
    <h3>
      Flag #{{ index + 1 }}
      <button @click="$emit('remove')">Remove Flag</button>
    </h3>

    <label>Flag Type</label>
    <select v-model="selectedFlagTypeId">
      <option
        disabled
        value="">
        Select a flag type
      </option>
      <option
        v-for="flagType in flagTypes"
        :key="flagType.id"
        :value="flagType.id">
        {{ flagType.label }}  
      </option>
    </select>

    <div class="bars" v-if="selectedFlagTypeId === 'custom'">
      <h4>
        Bars
        <button @click="addBar">Add Bar</button>
      </h4>

    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'

defineProps({
  index: Number
})

const selectedFlagTypeId = ref('')
const flagTypes = ref([
  {
    id: 'aceflux',
    label: 'Aceflux',
    bars: [
      '#C82067',
      '#BCC5C6',
      '#EC6D87',
      '#91479B',
      '#800080',
    ],
  },
  {
    id: 'agender',
    label: 'Agender',
    bars: [
      '#000',
      '#BCC5C6',
      '#FFF',
      '#B5F582',
      '#FFF',
      '#BCC5C6',
      '#000',
    ],
  },
  {
    id: 'androgyne',
    label: 'Androgyne',
    bars: [
      '#FE007F',
      '#9832FF',
      '#00B8E7',
    ],
  },
  {
    id: 'aromantic',
    label: 'Aromantic',
    bars: [
      '#3AA740',
      '#A8D47A',
      '#FFF',
      '#ABABAB',
      '#000',
    ],
  },
  {
    id: 'asexual',
    label: 'Asexual',
    bars: [
      '#000',
      '#A6A7A6',
      '#FFF',
      '#820082',
    ],
  },
  {
    id: 'bigender',
    label: 'Bigender',
    bars: [
      '#ED78AB',
      '#FEF54D',
      '#FFF',
      '#AE6DBE',
      '#719EE3',
    ],
  },
  {
    id: 'bisexual',
    label: 'Bisexual',
    bars: [
      '#D80071',
      '#744E96',
      '#0035A9',
    ],
  },
  {
    id: 'ceterosexual',
    label: 'Ceterosexual',
    bars: [
      '#FCF980',
      '#169C47',
      '#FFF',
      '#000',
    ],
  },
  {
    id: 'demiboy',
    label: 'Demiboy',
    bars: [
      '#7F7F7F',
      '#C4C4C4',
      '#9AD9EB',
      '#FFF',
      '#9AD9EB',
      '#C4C4C4',
      '#7F7F7F',
    ],
  },
  {
    id: 'demigender',
    label: 'Demigender',
    bars: [
      '#7F7F7F',
      '#C4C4C4',
      '#FAFF72',
      '#FFF',
      '#FAFF72',
      '#C4C4C4',
      '#7F7F7F',
    ],
  },
  {
    id: 'demigirl',
    label: 'Demigirl',
    bars: [
      '#7F7F7F',
      '#C4C4C4',
      '#FFAEC9',
      '#FFF',
      '#FFAEC9',
      '#C4C4C4',
      '#7F7F7F',
    ],
  },
  {
    id: 'fraysexual',
    label: 'Fraysexual',
    bars: [
      '#226CB5',
      '#93E7DD',
      '#FFF',
      '#636363',
    ],
  },
  {
    id: 'mlm',
    label: 'MLM',
    bars: [
      '#008F72',
      '#1BD0AD',
      '#9BEAC4',
      '#FFF',
      '#7DB1E5',
      '#4E45CD',
      '#390B7A',
    ],
  },
  {
    id: 'genderfluid',
    label: 'Genderfluid',
    bars: [
      '#FF77A5',
      '#F5F5F5',
      '#C009D8',
      '#232323',
      '#2C39BF',
    ],
  },
  {
    id: 'genderqueer',
    label: 'Genderqueer',
    bars: [
      '#B880DE',
      '#FFF',
      '#478318',
    ],
  },
  {
    id: 'greysexual',
    label: 'Greysexual',
    bars: [
      '#740195',
      '#AEB2AA',
      '#FFF',
      '#AEB2AA',
      '#740195',
    ],
  },
  {
    id: 'lesbian',
    label: 'Lesbian',
    bars: [
      '#D52800',
      '#FD9954',
      '#FFF',
      '#D261A4',
      '#A40061',
    ],
  },
  {
    id: 'nonbinary',
    label: 'NonBinary',
    bars: [
      '#FEF32A',
      '#FEFEFE',
      '#9D57D2',
      '#000',
    ],
  },
  {
    id: 'omnisexual',
    label: 'Omnisexual',
    bars: [
      '#FF9DCF',
      '#FF51C0',
      '#1A0042',
      '#675FFF',
      '#8EA9FF',
    ],
  },
  {
    id: 'pangender',
    label: 'Pangender',
    bars: [
      '#FFF798',
      '#FFDDCD',
      '#FFEBFB',
      '#FFF',
      '#FFEBFB',
      '#FFDDCD',
      '#FFF798',
    ],
  },
  {
    id: 'pansexual',
    label: 'Pansexual',
    bars: [
      '#FF148E',
      '#FFDA00',
      '#14B5FF',
    ],
  },
  {
    id: 'polysexual',
    label: 'Polysexual',
    bars: [
      '#F614BA',
      '#00D769',
      '#1593F5',
    ],
  },
  {
    id: 'philadelphia-pride',
    label: 'Philadelphia Pride',
    bars: [
      '#000',
      '#794E10',
      '#E60000',
      '#FF8E00',
      '#FFEF00',
      '#00821B',
      '#004BFF',
      '#770089',
    ],
  },
  {
    id: 'pride',
    label: 'Pride',
    bars: [
      '#E60000',
      '#FF8E00',
      '#FFEF00',
      '#00821B',
      '#004BFF',
      '#770089',
    ],
  },
  {
    id: 'transgender',
    label: 'Transgender',
    bars: [
      '#5CCFFA',
      '#F4ABB8',
      '#FFF',
      '#F4ABB8',
      '#5CCFFA',
    ],
  },
  {
    id: 'trigender',
    label: 'Trigender',
    bars: [
      '#FF95C4',
      '#9580FF',
      '#6AD969',
      '#9580FF',
      '#FF95C4',
    ],
  },
  {
    id: 'custom',
    label: 'Custom',
    bars: [],
  },
])

function addBar() {

}
</script>

<style scoped>
</style>
