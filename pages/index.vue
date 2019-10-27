<template>
  <div>
    <!-- ユーザー情報エリア -->
    <div class="menu">
      <input type="text" placeholder="あなたの名前" />
      <button>GAME START!!!</button>
      <button>STOP!!!</button>
    </div>
    <div class="messageArea">○○さん {{ message }}</div>
    <!-- 計算機エリア -->
    <div class="calculator">
      <input v-model.number="numA" type="text" placeholder="数字" />
      <select v-model="selectedOperatorId">
        <option
          v-for="operator in operators"
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
      A. {{ calculatorAnswer }}
    </div>
    <!-- メモ機能エリア -->
    <div class="memoArea">
      <input v-model="memo" type="text" placeholder="メモしたいこと" />
      <button @click="onMemoClick(memo)">Regist!!</button>
      <div v-for="memo in memoList" :key="memo.id">
        <input
          v-model="memo.done"
          type="checkbox"
          @click="onDoneClick(memo.id)"
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

interface Memo {
  id: Number
  value: String
  done: Boolean
}

interface Operator {
  id: number
  label: string
  culc: (numA: number, numB: number) => number
}

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
  count = 0
  memoList: Memo[] = []
  memo = ''

  // 計算機用
  calculatorAnswer = 0
  numA = 0
  numB = 0
  selectedOperatorId = 0
  operators: Operator[] = [
    { id: 1, label: '+', culc: (numA, numB) => numA + numB },
    { id: 2, label: '-', culc: (numA, numB) => numA - numB },
    { id: 3, label: 'x', culc: (numA, numB) => numA * numB },
    { id: 4, label: '÷', culc: (numA, numB) => numA / numB }
  ]

  // オセロ石用クリックイベント
  public onClick(x: number, y: number) {
    alert(x + 'と' + y)
  }

  // メモ機能用クリックイベント
  public onMemoClick(memo: String, memoDone: Boolean) {
    const registMemo = {
      id: this.count++,
      value: memo,
      done: memoDone
    }
    this.memoList.push(registMemo)
  }
  public onDoneClick(id: number) {
    this.memoList[id].done = true
  }

  // 計算機能用クリックイベント
  public onAnswerClick(numA: number, numB: number) {
    this.calculatorAnswer = this.operators
      .filter((operator) => operator.id === this.selectedOperatorId)[0]
      .culc(numA, numB)
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
