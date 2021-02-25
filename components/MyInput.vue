<template>
  <input :value="value" type="text" @input="handleInput" />
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
      // https://stackoverflow.com/questions/63631069/what-are-types-for-input-events-in-vue
      //   21:4  error  Parsing error: Unexpected token. Did you mean `{'}'}` or `&rbrace;`?
      const target = e.target as HTMLInputElement
      ctx.emit('input', target.value)
    }

    return {
      handleInput,
    }
  },
})
</script>
