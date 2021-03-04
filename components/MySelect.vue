<template>
  <select @change="handleChange">
    <option
      v-for="(option, index) in options"
      :key="index"
      :value="option.value"
      :selected="value === option.value"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'

interface LavelValue {
  lavel: string | number
  value: string | number
}

export default defineComponent({
  model: {
    event: 'change',
  },
  props: {
    value: { type: String, required: true },
    options: { type: Array as PropType<LavelValue[]>, required: true },
  },
  emits: ['change'],
  setup(_, ctx) {
    const handleChange = (e: Event) => {
      const target = e.target as HTMLSelectElement
      ctx.emit('change', target.selectedOptions[0].value)
    }

    return {
      handleChange,
    }
  },
})
</script>
