<template>
  <label>
    <input :value="value" type="checkbox" @change="handleChange" />
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
      type: Boolean,
      default: false,
    },
  },
  emits: ['change'],
  setup(_, ctx) {
    const handleChange = (e: Event) => {
      const target = e.target as HTMLInputElement
      ctx.emit('change', target.checked)
    }

    return {
      handleChange,
    }
  },
})
</script>
