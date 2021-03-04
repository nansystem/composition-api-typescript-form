<template>
  <label>
    <input
      :value="label"
      :checked="label === value"
      type="radio"
      @change="handleChange"
    />
    <slot></slot>
  </label>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  model: {
    event: 'change',
  },
  props: {
    value: {
      type: [Boolean, String, Number],
      default: '',
    },
    label: {
      type: [Boolean, String, Number],
      default: '',
    },
  },
  emits: ['change'],
  setup(_, ctx) {
    const handleChange = (e: Event) => {
      const target = e.target as HTMLInputElement
      ctx.emit('change', target.value)
    }

    return {
      handleChange,
    }
  },
})
</script>
