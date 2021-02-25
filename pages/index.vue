<template>
  <div>
    <div>
      {{ form }}
    </div>
    <MyInput v-model="form.text" />
    <!-- <MyTextarea v-model="longText" />
    <MyCheckbox v-model="checked" />
    <MyRadio v-model="picked" />
    <MySelect :options="options" v-model="selected" /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'

interface State {
  text: string
  longText: string
  checked: boolean
  picked: boolean
  selected: boolean
}

export default defineComponent({
  setup() {
    const form = reactive<State>({
      text: '',
      longText: '',
      checked: false,
      picked: false,
      selected: false,
    })

    return {
      form,
    }
  },
})
</script>
