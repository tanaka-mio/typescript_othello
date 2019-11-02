<template>
  <!-- オセロエリア -->
  <div class="board">
    <template v-for="y in $vxm.othello.board.length">
      <div
        v-for="x in $vxm.othello.board[y - 1].length"
        :key="`${x}-${y}`"
        class="cell"
        @click="onClick(x - 1, y - 1)"
      >
        <div
          v-if="$vxm.othello.board[y - 1][x - 1] !== 0"
          :class="[
            'ball',
            $vxm.othello.board[y - 1][x - 1] === 1 ? 'white' : 'black'
          ]"
        />
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Othello extends Vue {
  // オセロ石用クリックイベント
  onClick(x: number, y: number) {
    this.$vxm.othello.setOthello({ x, y })
  }
}
</script>

<style scoped>
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
