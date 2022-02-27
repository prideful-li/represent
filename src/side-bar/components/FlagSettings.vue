<template>
  <div class="flag">
    <h3>
      <span>
        Flag #{{ index + 1 }}
      </span>
      <icon-button
        type="secondary"
        @click="$emit('remove')">
        <remove-icon
          color="#FFF"
          height="16px"
          width="16px" />
      </icon-button>
    </h3>

    <div class="body">
      <form-field
        :field="`flag-type-${index}`"
        label="Flag Type">
        <select
          :id="`flag-type-${index}`"
          v-model="selectedFlagTypeId"
          @change="flagSelected">
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
      </form-field>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, defineProps, ref } from 'vue'
import FormField from '../../components/FormField.vue'
import IconButton from '../../components/IconButton.vue'
import RemoveIcon from '../../components/RemoveIcon.vue'

const props = defineProps({
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
    id: 'boyflux',
    label: 'Boyflux',
    bars: [
      '#D7E9F8',
      '#6FACF5',
      '#023670',
      '#9EEDAC',
      '#023670',
      '#6FACF5',
      '#D7E9F8',
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
    id: 'demiflux',
    label: 'Demiflux',
    bars: [
      '#7F7F7F',
      '#DADADA',
      '#FFB6B8',
      '#F4F691',
      '#9AD9EB',
      '#DADADA',
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
    id: 'demigirlflux',
    label: 'Demigirlflux',
    bars: [
      '#7F7F7F',
      '#C4C4C4',
      '#A24AA3',
      '#FEAFC9',
      '#FFF',
      '#FEAFC9',
      '#A24AA3',
      '#C4C4C4',
      '#7F7F7F',
    ],
  },
  {
    id: 'demisexual',
    label: 'Demisexual',
    bars: [
      '#000',
      '#FFF',
      '#6f0071',
      '#d3d3d3',
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
    id: 'girlflux',
    label: 'Girlflux',
    bars: [
      '#F8E6D8',
      '#F1526D',
      '#BF0310',
      '#E8C586',
      '#BF0310',
      '#F1526D',
      '#F8E6D8',
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
    id: 'intersex',
    label: 'Intersex',
    bars: [
      '#FFD900',
      '#7A00AC',
      '#FFD900',
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
])

const emit = defineEmits(['change', 'remove'])
function flagSelected(event) {
  emit('change', {
    index: props.index,
    value: flagTypes.value.find((flagType) => flagType.id === event.target.value)
  })
}
</script>

<style scoped>
h3 {
  align-items: center;
  border: 1px solid #FFF;
  border-radius: 3px 3px 0 0;
  display: flex;
  margin-bottom: 0;
  padding: 8px;
}

h3 span {
  flex: 1 1 auto;
}

.body {
  border-color: #FFF;
  border-style: none solid solid solid;
  border-width: 0 1px 1px 1px;
  border-radius: 0 0 3px 3px;

  padding: 8px;
}

select {
  box-sizing: border-box;
  width: 100%;
}
</style>
