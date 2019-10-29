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

  @mutation changeMessage({ message }: { message: string }) {
    this.message = message
  }

  @action getMessage() {
    return $nuxt.$api.othello.tanaka.$get()
  }

  @action async doGetMessage() {
    const message = await this.getMessage()
    this.changeMessage({ message })
  }
}

export const store = new Vuex.Store({
  modules: {
    ...extractVuexModule(OthelloStore)
  }
})

export default createProxy(store, OthelloStore)
