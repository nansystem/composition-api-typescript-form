<template>
  <div>
    {{ global.state.count }}
    <button @click="global.increment">Increment</button>
  </div>
</template>
<script>
export default {
  inject: ['global'],
}
</script>
