import { Plugin } from '@nuxt/types'
import UsersProxy from '~/store/users'
import OthelloProxy from '~/store/othello'
import CalculatorProxy from '~/store/calculator'
import MemoProxy from '~/store/memo'

const vxm = {
  users: UsersProxy,
  othello: OthelloProxy,
  calculator: CalculatorProxy,
  memo: MemoProxy
}

declare module 'vue/types/vue' {
  interface Vue {
    $vxm: typeof vxm
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $vxm: typeof vxm
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $vxm: typeof vxm
  }
}

const plugin: Plugin = (_, inject) => inject('vxm', vxm)

export default plugin
