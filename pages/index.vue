<template>
  <div>
    <!-- ユーザー情報エリア -->
    <User />
    <!-- 計算機エリア -->
    <Calculator />
    <!-- メモ機能エリア -->
    <Memo />
    <!-- オセロエリア -->
    <Othello />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Memo from '~/components/organisms/Memo.vue'
import Calculator from '~/components/organisms/Calculator.vue'
import Othello from '~/components/organisms/Othello.vue'
import User from '~/components/organisms/User.vue'

@Component({
  components: { User, Calculator, Memo, Othello }
})
export default class extends Vue {}
</script>
