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

  // オセロ配列
  board = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, -1, 0, 0, 0],
    [0, 0, 0, -1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ]

  @mutation setMessage(message: string) {
    this.message = message
  }

  @action async getMessage() {
    const message = await $nuxt.$api.othello.tanaka.$get()
    this.setMessage(message)
  }

  @mutation setOthello(payload: { x: number; y: number }) {
    // this.board = JSON.parse(JSON.stringify(this.board))
    // this.board[payload.y][payload.x] = -1

    // 不変性を意識してみた
    const tempBoard = this.board.slice()
    tempBoard[payload.y][payload.x] = -1
    this.board = tempBoard
  }
}

export const store = new Vuex.Store({
  modules: {
    ...extractVuexModule(OthelloStore)
  }
})

export default createProxy(store, OthelloStore)
