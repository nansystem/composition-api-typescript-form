<template>
  <label>
    <input :value="value" type="checkbox" @change="handleChange" />
    <slot></slot>
  </label>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['input'],
  setup(_, ctx) {
    const handleChange = (e: Event) => {
      const target = e.target as HTMLInputElement
      ctx.emit('input', target.checked)
    }

    return {
      handleChange,
    }
  },
})
</script>
