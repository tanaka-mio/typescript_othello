<template>
  <div>
    <div class="menu">
      <input type="text" placeholder="あなたの名前" />
      <button>GAME START!!!</button>
      <button>STOP!!!</button>
    </div>
    <div class="messageArea">○○さん {{ message }}</div>
    <div class="calculator">
      <input v-model.number="numA" type="text" placeholder="数字" />
      <select v-model="numTool">
        <option disabled value="">選んでください</option>
        <option>+</option>
        <option>-</option>
        <option>×</option>
        <option>÷</option>
      </select>
      <input v-model.number="numB" type="text" placeholder="数字" />
      <button @click="onAnswerClick(numA, numB, numTool)">Answer</button>
      <br />
      A. {{ calculatorAnswer }}
    </div>
    <div class="memolist">
      <input v-model="memo" type="text" placeholder="メモしたいこと" />
      <button @click="onMemoClick(memo)">Answer</button>
      {{ memo }}
    </div>
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

  // オセロ用表示メッセージ
  message = 'あなたの番です'

  // メモ機能用メッセージ
  memo: String = ''

  // 計算機用メッセージ
  calculatorAnswer: number = 0

  public onClick(x: number, y: number) {
    alert(x + 'と' + y)
  }

  // メモ機能用クリックイベント
  public onMemoClick(memo: String) {
    this.memo = memo
  }

  // 計算機能用クリックイベント
  public onAnswerClick(numA: number, numB: number, numTool: String) {
    alert(numTool)
    switch (numTool) {
      case '+':
        this.calculatorAnswer = numA + numB
        break
      case '-':
        this.calculatorAnswer = numA - numB
        break
      case '×':
        this.calculatorAnswer = numA * numB
        break
      case '÷':
        this.calculatorAnswer = numA / numB
        break
    }
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

.memolist {
  margin: 0 auto;
  padding: 10px;
  width: 640px;
  background: lightgoldenrodyellow;
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
