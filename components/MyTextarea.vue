<template>
  <textarea :value="value" @input="handleInput"></textarea>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
  },
  emits: ['input'],
  setup(_, ctx) {
    const handleInput = (e: Event) => {
      const target = e.target as HTMLInputElement
      ctx.emit('input', target.value)
    }

    return {
      handleInput,
    }
  },
})
</script>
