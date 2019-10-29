import Vuex from 'vuex'
import {
  createModule,
  mutation,
  action,
  extractVuexModule,
  createProxy
} from 'vuex-class-component'

const VuexModule = createModule({
  namespaced: true,
  target: 'nuxt'
})

export class OthelloStore extends VuexModule {
  message = 'JavaScript'

  @mutation setMessage(message: string) {
    this.message = message
  }

  @action async getMessage() {
    const message = await $nuxt.$api.othello.tanaka.$get()
    this.setMessage(message)
  }
}

export const store = new Vuex.Store({
  modules: {
    ...extractVuexModule(OthelloStore)
  }
})

export default createProxy(store, OthelloStore)
