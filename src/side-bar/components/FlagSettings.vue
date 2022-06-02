<template>
  <div class="flag">
    <h3>
      <span> Flag #{{ index + 1 }} </span>
      <icon-button
        label="Remove Flag"
        type="secondary"
        @click="$emit('remove')">
        <remove-icon
          color="#FFF"
          height="16px"
          label="Remove Flag"
          width="16px" />
      </icon-button>
    </h3>

    <div class="body">
      <form-field :field="`flag-type-${index}`" label="Flag Type">
        <select :id="`flag-type-${index}`" @change="flagSelected">
          <option disabled value="" :selected="selectedFlagTypeId === ''">
            Select a flag type
          </option>
          <option
            v-for="flagType in flagTypes"
            :key="flagType.id"
            :value="flagType.id"
            :selected="selectedFlagTypeId === flagType.id">
            {{ flagType.label }}
          </option>
        </select>
      </form-field>
    </div>
  </div>
</template>

<script setup>
  import FormField from '../../components/FormField.vue'
  import IconButton from '../../components/IconButton.vue'
  import RemoveIcon from '../../components/RemoveIcon.vue'
  import useFlagTypes from '../composables/useFlagTypes'

  const props = defineProps({
    index: Number,
    selectedFlagTypeId: String,
  })

  const emit = defineEmits(['change', 'remove'])

  const flagTypes = useFlagTypes()

  function flagSelected(event) {
    emit('change', {
      index: props.index,
      value: flagTypes.value.find(
        (flagType) => flagType.id === event.target.value
      ),
    })
  }
</script>

<style scoped>
  h3 {
    align-items: center;
    border: 1px solid #fff;
    border-radius: 3px 3px 0 0;
    display: flex;
    margin-bottom: 0;
    padding: 8px;
  }

  h3 span {
    flex: 1 1 auto;
  }

  .body {
    border-color: #fff;
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
