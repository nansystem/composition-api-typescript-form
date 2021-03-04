<template>
  <div>
    <div>
      {{ form }}
    </div>
    <MyInput v-model="form.text" />
    <MyTextarea v-model="form.longText" />
    <MyCheckbox v-model="form.checked">check</MyCheckbox>
    <MyRadio v-model="form.picked" label="one">One</MyRadio>
    <MyRadio v-model="form.picked" label="two">Two</MyRadio>
    <MySelect v-model="form.selected" :options="options" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'

interface State {
  text: string
  longText: string
  checked: boolean
  picked: string
  selected: string
}

export default defineComponent({
  setup() {
    const form = reactive<State>({
      text: 'init text',
      longText: 'init long text',
      checked: false,
      picked: 'two',
      selected: 'b',
    })

    const options = [
      { label: 'A' },
      { label: 'B', value: 'b' },
      { label: 'C', value: 'c' },
    ]

    return {
      form,
      options,
    }
  },
})
</script>
