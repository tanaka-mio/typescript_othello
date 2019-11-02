<template>
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
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Memo extends Vue {
  // メモ機能用
  memo = ''

  // メモ機能用クリックイベント
  public onMemoClick(memo: string) {
    this.$vxm.memo.setCount()
    this.$vxm.memo.setMemo({ memo, memoDone: false })
  }
  public onDoneClick(id: number) {
    this.$vxm.memo.updateMemo(id)
  }
}
</script>

<style scoped>
.memoArea {
  margin: 0 auto;
  padding: 10px;
  width: 640px;
  background: lightgoldenrodyellow;
}

.done {
  text-decoration: line-through;
}
</style>
