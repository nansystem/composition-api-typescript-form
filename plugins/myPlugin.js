import { onGlobalSetup, provide } from '@nuxtjs/composition-api'
import global from '@/global'

export default () => {
  onGlobalSetup(() => {
    provide('global', global)
  })
}
