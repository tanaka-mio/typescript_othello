<template>
  <div>
    <div class="menu">
      <input type="text" value="あなたの名前" />
      <button>GAME START!!!</button>
      <button>STOP!!!</button>
    </div>
    <div class="messageArea">○○さん {{ message }}</div>
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
import { Vue } from 'nuxt-property-decorator'

export default class extends Vue {
  board: number[][] = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, -1, 0, 0, 0],
    [0, 0, 0, -1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ]

  message: string = 'あなたの番です'

  public onClick(x: number, y: number) {
    alert(x + 'と' + y)
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
