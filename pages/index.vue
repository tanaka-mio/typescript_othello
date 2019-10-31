<template>
  <div>
    <!-- ユーザー情報エリア -->
    <div class="menu">
      <input type="text" placeholder="あなたの名前" />
      <button>GAME START!!!</button>
      <button>STOP!!!</button>
    </div>
    <div class="messageArea">○○さん {{ $vxm.othello.message }}</div>
    <!-- 計算機エリア -->
    <div class="calculator">
      <input v-model.number="numA" type="text" placeholder="数字" />
      <select v-model="operatorId">
        <option
          v-for="operator in $vxm.calculator.operators"
          :key="operator.id"
          :value="operator.id"
          >{{ operator.label }}</option
        >
      </select>
      <input v-model.number="numB" type="text" placeholder="数字" />
      <button @click="onAnswerClick(numA, numB)">
        Answer
      </button>
      <br />
      A. {{ $vxm.calculator.calculatorAnswer }}
    </div>
    <!-- メモ機能エリア -->
    <div class="memoArea">
      <input v-model="memo" type="text" placeholder="メモしたいこと" />
      <button @click="onMemoClick(memo)">Register!!</button>
      <div v-for="memo in $vxm.memo.memoList" :key="memo.id">
        <input
          v-model="memo.done"
          type="checkbox"
          @click="onDoneClick(memo.id - 1)"
        />
        <label :class="[memo.done ? 'done' : '']">
          {{ memo.value }}
        </label>
      </div>
    </div>
    <!-- オセロエリア -->
    <div class="board">
      <template v-for="y in board.length">
        <div
          v-for="x in board[y - 1].length"
          :key="`${x}-${y}`"
          class="cell"
          @click="onClick(x, y)"
        >
          <div
            v-if="board[y - 1][x - 1] !== 0"
            :class="['ball', board[y - 1][x - 1] === 1 ? 'white' : 'black']"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
// 計算機能・メモ機能・オセロ配列を移管する

@Component
export default class extends Vue {
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

  // オセロ用
  message = 'あなたの番です'

  // メモ機能用
  memo = ''

  // 計算機用
  numA = 0
  numB = 0
  operatorId = 0

  // オセロ石用クリックイベント
  async onClick(x: number, y: number) {
    console.log(`${x}+${y}`)
    await this.$vxm.othello.getMessage()
  }

  // メモ機能用クリックイベント
  public onMemoClick(memo: string) {
    this.$vxm.memo.setCount()
    this.$vxm.memo.setMemo({ memo, memoDone: false })
  }
  public onDoneClick(id: number) {
    this.$vxm.memo.updateMemo(id)
  }

  // 計算機能用クリックイベント
  public onAnswerClick(numA: number, numB: number) {
    this.$vxm.calculator.setAnswer({ numA, numB, operatorId: this.operatorId })
  }
}
</script>

<style scoped>
.menu {
  margin: 5%;
}

.messageArea {
  margin: 0 5%;
}

.calculator {
  margin: 0 auto;
  padding: 10px;
  width: 640px;
  background: lightblue;
}

.memoArea {
  margin: 0 auto;
  padding: 10px;
  width: 640px;
  background: lightgoldenrodyellow;
}

.done {
  text-decoration: line-through;
}

.board {
  margin: 0 auto;
  width: 640px;
  height: 640px;
  background: #060;
}

.cell {
  width: 12.5%;
  height: 12.5%;
  border: black solid 1px;
  float: left;
  list-style: none;
}

.ball {
  width: 80%;
  height: 80%;
  border-radius: 50%;
  margin: 10%;
}

.black {
  background: black;
}

.white {
  background: white;
}
</style>
