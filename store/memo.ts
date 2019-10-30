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

  /*
  こうすると、TypeError: this.setCount is not a functionで実行エラーになる
  @mutation setCount() {
    this.count = this.count + 1
  }
  */
  @mutation setMemo(payload: { memo: string; memoDone: boolean }) {
    // this.setCount()
    const registMemo = {
      id: this.count,
      value: payload.memo,
      done: payload.memoDone
    }
    this.memoList.push(registMemo)
    this.count += 1
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
