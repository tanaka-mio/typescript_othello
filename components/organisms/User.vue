<template>
  <!-- ユーザー情報エリア -->
  <div>
    <div class="user">
      <input type="text" placeholder="あなたの名前" />
      <button @click="onStartClick">GAME START!!!</button>
      <button>STOP!!!</button>
    </div>
    <div class="messageArea">○○さん {{ $vxm.othello.message }}</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class User extends Vue {
  // オセロ石用クリックイベント
  async onStartClick() {
    await this.$vxm.othello.getMessage()
  }
}
</script>

<style scoped>
.user {
  margin: 5%;
}

.messageArea {
  margin: 0 5%;
}
</style>
