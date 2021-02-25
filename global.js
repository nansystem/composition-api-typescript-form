import { reactive, readonly } from '@nuxtjs/composition-api'

const state = reactive({
  count: 0,
})

const increment = function () {
  state.count++
}

export default { state: readonly(state), increment }
