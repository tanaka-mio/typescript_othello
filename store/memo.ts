import Vuex from 'vuex'
import {
  createModule,
  mutation,
  extractVuexModule,
  createProxy
} from 'vuex-class-component'

const VuexModule = createModule({
  namespaced: true,
  target: 'nuxt'
})

interface Memo {
  id: number
  value: string
  done: boolean
}

export class MemoStore extends VuexModule {
  count = 0
  memoList: Memo[] = []

  @mutation setCount() {
    this.count += 1
  }
  @mutation setMemo(payload: { memo: string; memoDone: boolean }) {
    const registerMemo = {
      id: this.count,
      value: payload.memo,
      done: payload.memoDone
    }
    this.memoList.push(registerMemo)
  }
  @mutation updateMemo(id: number) {
    this.memoList[id].done = true
  }
}

export const store = new Vuex.Store({
  modules: {
    ...extractVuexModule(MemoStore)
  }
})

export default createProxy(store, MemoStore)
